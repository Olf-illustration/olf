import { useRef, useState } from 'react';

export interface Serie {
  id: string;
  title: string;
  image: string;
}

interface CurvedCarouselProps {
  series: Serie[];
  onSerieClick: (serie: Serie) => void;
}

export default function CurvedCarousel({ series, onSerieClick }: CurvedCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Gestion du début du clic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    // On enregistre la position de départ de la souris et du scroll actuel
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Gestion de la fin du clic
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Gestion du mouvement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Le multiplicateur '2' ajuste la vitesse de défilement
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#faf9f9] py-20">
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`flex gap-12 px-[10vw] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none ${
          isDragging ? 'scroll-smooth-none' : 'scroll-smooth'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {series.map((serie) => (
          <div 
            key={serie.id}
            onClick={() => !isDragging && onSerieClick(serie)} // On empêche le clic si on est en train de draguer
            className="flex-none w-[400px] group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl bg-white">
              {/* Effets de blend selon le projet (comme discuté avant) */}
              <img 
                src={serie.image} 
                alt={serie.title}
                className={`w-full h-full object-cover pointer-events-none ${
                  serie.id === 'mp3' ? 'mix-blend-multiply' : 
                  serie.id === 'perception' ? 'mix-blend-screen opacity-90' : ''
                }`}
              />
            </div>
            <div className="mt-6 text-center">
              <span className="bg-[#eee] px-6 py-2 rounded-full text-[12px] font-black tracking-widest uppercase text-[#212121]">
                {serie.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

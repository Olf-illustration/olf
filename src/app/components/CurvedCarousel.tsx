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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1536px] pt-[166px] px-[32px] relative shrink-0 w-full">
      
      {/* 1. RESTAURATION DU TITRE */}
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="flex flex-col font-epilogue font-black h-[60px] justify-center leading-none relative shrink-0 text-[#212121] text-[60px] text-center tracking-[-3px] uppercase">
          <p>Dernières séries</p>
        </div>
      </div>

      {/* 2. LE CARROUSEL (avec padding-bottom pour ne pas rogner les boutons) */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`flex gap-12 w-full overflow-x-auto scrollbar-hide pb-20 cursor-grab active:cursor-grabbing select-none ${
          isDragging ? 'scroll-smooth-none' : 'scroll-smooth'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {series.map((serie) => (
          <div 
            key={serie.id}
            onClick={() => !isDragging && onSerieClick(serie)}
            className="flex-none w-[400px] group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl bg-white">
              <img 
                src={serie.image} 
                alt={serie.title}
                className={`w-full h-full object-cover pointer-events-none ${
                  serie.id === 'mp3' ? 'mix-blend-multiply' : 
                  serie.id === 'perception' ? 'mix-blend-screen opacity-90' : ''
                }`}
              />
            </div>
            
            {/* BOUTON SOUS L'IMAGE */}
            <div className="mt-8 flex justify-center">
              <span className="bg-[#e2e2e2] px-8 py-3 rounded-xl font-epilogue font-bold text-[14px] tracking-widest uppercase text-[#212121] group-hover:bg-[#d2d2d2] transition-colors">
                {serie.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useRef, useState, useEffect } from 'react';

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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- LA PHYSIQUE DE LA COURBE ---
  const updateCurve = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.offsetWidth / 2;

    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const cardCenter = (cardRect.left - containerRect.left) + cardRect.width / 2;
      const distanceFromCenter = cardCenter - containerCenter;

      let normalizedDistance = distanceFromCenter / containerCenter;
      normalizedDistance = Math.max(-1.5, Math.min(1.5, normalizedDistance));

      const translateY = Math.pow(normalizedDistance, 2) * 80; 
      const rotate = normalizedDistance * 15; 

      card.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
    });
  };

  useEffect(() => {
    updateCurve();
    window.addEventListener('resize', updateCurve);
    return () => window.removeEventListener('resize', updateCurve);
  }, []);

  const handleScroll = () => updateCurve();

  // --- LOGIQUE DU CLIQUER-DÉPOSER ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1536px] pt-[166px] relative w-full overflow-hidden mx-auto">
      
      {/* TITRE */}
      <div className="flex flex-col items-center relative w-full px-[32px]">
        <div className="flex flex-col font-epilogue font-black h-[60px] justify-center leading-none text-[#212121] text-[60px] text-center tracking-[-3px] uppercase">
          <p>Dernières séries</p>
        </div>
      </div>

      {/* LE CARROUSEL DRAG & CURVE */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        // MODIFICATION ICI : pt-12 est devenu pt-24 pour laisser respirer le haut des cartes
        className={`flex gap-12 w-full overflow-x-auto scrollbar-hide pt-24 pb-40 px-[20vw] cursor-grab active:cursor-grabbing select-none ${
          isDragging ? 'scroll-smooth-none' : 'scroll-smooth'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {series.map((serie, index) => (
          <div 
            key={serie.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex-none w-[400px] transition-transform duration-75 ease-out origin-bottom"
          >
            {/* L'enveloppe de la carte */}
            <div className="group transition-transform duration-500 hover:scale-[1.05]">
              
              {/* Zone Image */}
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl bg-white border-[8px] border-white">
                <img 
                  src={serie.image} 
                  alt={serie.title}
                  className={`w-full h-full object-cover pointer-events-none ${
                    serie.id === 'mp3' ? 'mix-blend-multiply' : 
                    serie.id === 'perception' ? 'mix-blend-screen opacity-90' : ''
                  }`}
                />
              </div>
              
              {/* Zone Bouton */}
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => !isDragging && onSerieClick(serie)}
                  className="cursor-pointer bg-[#e2e2e2] px-8 py-3 rounded-xl font-epilogue font-bold text-[14px] tracking-widest uppercase text-[#212121] group-hover:bg-[#d2d2d2] transition-colors border-none"
                >
                  {serie.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

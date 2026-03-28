import { useState, useRef } from 'react';

export default function HeroSection() {
  // On crée des références et des états pour suivre la souris
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Fonction qui calcule la position de la souris de -1 (gauche/haut) à 1 (droite/bas)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // On remet la souris au centre quand on quitte la zone pour que les cartes se rangent bien
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="h-auto min-h-[800px] w-full max-w-[1536px] relative shrink-0 mx-auto" data-name="Hero Section">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[15px] items-center w-full px-[32px] pt-[60px] relative">
          
          {/* Lille, FR */}
          <div className="flex flex-col justify-center items-center w-full text-[#444748] text-[14px] tracking-[4.2px] uppercase font-sans">
            <p>Lille, FR</p>
          </div>
          
          {/* Titre OLF */}
          <div className="flex flex-col items-center w-full" data-name="Heading 1">
            <h1 className="font-black text-[#212121] text-[128px] text-center tracking-[-6.4px] uppercase leading-none">
              OLF
            </h1>
          </div>
          
          {/* Sous-titre */}
          <div className="flex flex-col items-center w-full" data-name="Container">
            <p className="font-bold text-[#363636] text-[24px] text-center tracking-[-0.6px] uppercase max-w-[647px] leading-tight">
              Illustration, design & lorazépam
            </p>
          </div>
          
          {/* Pile d'illustrations INTÉRACTIVE */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-[500px] max-w-[1000px] relative w-full mt-16 cursor-pointer" 
            data-name="Hero Illustration Stack"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Card 1 (Gauche) */}
              {/* On utilise inline-style pour injecter la position exacte calculée */}
              <div 
                className="absolute z-[1] transition-all duration-300 ease-out"
                style={{
                  transform: isHovered 
                    ? `translate(calc(-280px + ${mousePos.x * 40}px), calc(-48px + ${mousePos.y * 40}px)) rotate(calc(-6deg + ${mousePos.x * 5}deg))`
                    : `translate(-32px, 16px) rotate(-12deg)`
                }}
              >
                <div className={`bg-white overflow-hidden rounded-[20px] size-[320px] border-[8px] border-white transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}>
                   <img alt="Illustration 1" className="w-full h-full object-cover mix-blend-multiply opacity-80 pointer-events-none" src="https://i.postimg.cc/QtWh1kBs/A4_11.png" />
                </div>
              </div>
              
              {/* Card 3 (Droite) */}
              <div 
                className="absolute z-[2] transition-all duration-300 ease-out"
                style={{
                  transform: isHovered 
                    ? `translate(calc(280px + ${mousePos.x * 60}px), calc(-32px + ${mousePos.y * 60}px)) rotate(calc(8deg + ${mousePos.x * 5}deg))`
                    : `translate(32px, 32px) rotate(12deg)`
                }}
              >
                <div className={`bg-white overflow-hidden rounded-[20px] size-[320px] border-[8px] border-white transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}>
                  <img alt="Illustration 3" className="w-full h-full object-cover mix-blend-multiply pointer-events-none" src="https://i.postimg.cc/xC18NFHk/leclubdes27.jpg" />
                </div>
              </div>

              {/* Card 2 (Centre - Au dessus) */}
              <div 
                className="absolute z-[10] transition-all duration-300 ease-out"
                style={{
                  transform: isHovered 
                    ? `translate(calc(0px + ${mousePos.x * 20}px), calc(-80px + ${mousePos.y * 20}px)) rotate(calc(-2deg + ${mousePos.x * 2}deg)) scale(1.05)`
                    : `translate(0px, -8px) rotate(3deg) scale(1)`
                }}
              >
                <div className={`bg-black overflow-hidden rounded-[20px] size-[320px] border-[8px] border-black transition-shadow duration-300 ${isHovered ? 'shadow-2xl' : 'shadow-xl'}`}>
                  <img alt="Illustration 2" className="w-full h-full object-cover mix-blend-screen opacity-90 pointer-events-none" src="https://i.postimg.cc/sg5vkWsG/A4_21.jpg" />
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

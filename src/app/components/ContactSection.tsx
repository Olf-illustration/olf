import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // La zone de calcul de l'animation
      const start = windowHeight; 
      const end = windowHeight / 1.3; 
      
      let progress = (start - rect.top) / (start - end);
      
      // Verrouille la progression entre 0 et 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Application des mathématiques pour l'étirement et l'arrondi
  const width = 85 + (15 * scrollProgress);
  const borderRadius = 64 * (1 - scrollProgress);

  return (
    // Ce wrapper invisible nous sert de repère pour le scroll
    <section ref={containerRef} className="w-full flex items-end justify-center pt-32 bg-transparent">
      
      {/* TON CODE ORIGINAL ANIMÉ (bg-white, pb-[160px], pt-[224px], etc.) */}
      <div 
        className="bg-white content-stretch flex flex-col items-start pb-[160px] pt-[224px] relative shrink-0 overflow-hidden transition-all duration-75 ease-out" 
        data-name="Section - Contact Footer"
        style={{ 
          width: `${width}%`, 
          borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
        }}
      >
        {/* Ajout de mx-auto pour que ton contenu reste bien centré pendant l'étirement */}
        <div className="max-w-[1536px] mx-auto relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[inherit] px-[32px] relative w-full">
            <div className="h-[326px] relative w-full" data-name="Container">
              <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
                <div className="absolute opacity-10" data-name="Heading 2">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[0.59px] relative">
                    <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[202px] justify-center leading-[0] relative shrink-0 text-[288px] text-center text-white tracking-[-14.4px] uppercase">
                      <p className="leading-[201.6px]">CONTACT</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full z-10" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
                    <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[72px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[72px] text-center tracking-[-3.6px] uppercase max-w-full break-all">
                      <p className="leading-[72px]">olf.illustration@gmail.com</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Margin">
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center tracking-[3.2px] uppercase w-[120.17px] cursor-pointer hover:opacity-70 transition-opacity">
                          <p className="leading-[24px]">INSTAGRAM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e2e2e2] border-solid border-t inset-0 pointer-events-none" />
      </div>

    </section>
  );
}

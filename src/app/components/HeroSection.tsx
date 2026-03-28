export default function HeroSection() {
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
          
          {/* Pile d'illustrations animée façon SPENCER GABOR */}
          {/* mt-16 pour espacer un peu plus du texte vu que l'animation saute vers le haut */}
          <div className="h-[500px] max-w-[1000px] relative w-full mt-16 cursor-pointer" data-name="Hero Illustration Stack">
            <div className="absolute inset-0 flex items-center justify-center group">
              
              {/* Card 1 (Gauche) */}
              <div className="absolute z-[1] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                              -rotate-12 -translate-x-8 translate-y-4 
                              group-hover:-rotate-6 group-hover:-translate-x-[280px] group-hover:-translate-y-12">
                <div className="bg-white overflow-hidden rounded-[20px] shadow-lg group-hover:shadow-2xl size-[320px] border-[8px] border-white">
                   <img alt="Illustration 1" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://i.postimg.cc/QtWh1kBs/A4_11.png" />
                </div>
              </div>
              
              {/* Card 3 (Droite) */}
              <div className="absolute z-[2] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                              rotate-12 translate-x-8 translate-y-8 
                              group-hover:rotate-8 group-hover:translate-x-[280px] group-hover:-translate-y-8">
                <div className="bg-white overflow-hidden rounded-[20px] shadow-lg group-hover:shadow-2xl size-[320px] border-[8px] border-white">
                  <img alt="Illustration 3" className="w-full h-full object-cover mix-blend-multiply" src="https://i.postimg.cc/xC18NFHk/leclubdes27.jpg" />
                </div>
              </div>

              {/* Card 2 (Centre - Au dessus) */}
              <div className="absolute z-[10] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                              rotate-3 translate-x-0 -translate-y-2 
                              group-hover:-rotate-2 group-hover:-translate-y-20 group-hover:scale-105">
                <div className="bg-black overflow-hidden rounded-[20px] shadow-xl group-hover:shadow-2xl size-[320px] border-[8px] border-black">
                  {/* J'ai remis l'image de la Méduse pour le centre, change-la si besoin ! */}
                  <img alt="Illustration 2" className="w-full h-full object-cover mix-blend-screen opacity-90" src="https://i.postimg.cc/Qt8yG2J3/meduse-mondrian-2.jpg" />
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

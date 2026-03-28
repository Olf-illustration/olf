export default function HeroSection() {
  return (
    <div className="h-auto min-h-[800px] w-full max-w-[1536px] relative shrink-0 mx-auto" data-name="Hero Section">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[15px] items-center w-full px-[32px] pt-[60px] relative">
          
          {/* Lille, FR - Maintenant centré sans largeur fixe */}
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
              Illustration, design & une bonne dose de lorazépam
            </p>
          </div>
          
          {/* Pile d'illustrations (Cartes) */}
          <div className="h-[581px] max-w-[896px] relative w-full mt-8" data-name="Hero Illustration Stack">
            <div className="absolute inset-0 flex items-center justify-center group">
              {/* Card 1 */}
              <div className="absolute -rotate-12 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-6 group-hover:-translate-x-[220px] z-[1]">
                <div className="bg-white overflow-hidden rounded-[16px] shadow-2xl size-[384px]">
                   <img alt="" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://i.postimg.cc/QtWh1kBs/A4_11.png" />
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="absolute rotate-3 transition-all duration-700 group-hover:scale-105 group-hover:rotate-0 z-[2]">
                <div className="bg-black overflow-hidden rounded-[16px] shadow-2xl size-[384px]">
                  <img alt="" className="w-full h-full object-cover mix-blend-screen opacity-90" src="https://i.postimg.cc/qvCwfNCT/meduse_mondrian_2.jpg" />
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="absolute rotate-12 transition-all duration-700 group-hover:scale-105 group-hover:rotate-6 group-hover:translate-x-[220px] z-[3]">
                <div className="bg-white overflow-hidden rounded-[16px] shadow-2xl size-[384px]">
                  <img alt="" className="w-full h-full object-cover mix-blend-multiply" src="https://i.postimg.cc/xC18NFHk/leclubdes27.jpg" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

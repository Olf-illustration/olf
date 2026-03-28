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
          
          {/* Pile d'illustrations animée façon Spencer Gabor */}
          {/* Ajout de cursor-pointer pour inciter au survol */}
          <div className="h-[581px] max-w-[896px] relative w-full mt-8 cursor-pointer" data-name="Hero Illustration Stack">
            <div className="absolute inset-0 flex items-center justify-center group">
              
              {/* Card 1 (Gauche) */}
              <div className="absolute z-[1] transition-all duration-500 ease-out -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-[240px] group-hover:scale-105">
                {/* Ajout d'une bordure blanche épaisse pour l'effet carte */}
                <div className="bg-white overflow-hidden rounded-[16px] shadow-xl size-[384px] border-[8px] border-white">
                   <img alt="Illustration 1" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://i.postimg.cc/QtWh1kBs/A4_11.png" />
                </div>
              </div>
              
              {/* Card 3 (Droite) */}
              <div className="absolute z-[2] transition-all duration-500 ease-out rotate-6 group-hover:rotate-12 group-hover:translate-x-[240px] group-hover:scale-105">
                <div className="bg-white overflow-hidden rounded-[16px] shadow-xl size-[384px] border-[8px] border-white">
                  <img alt="Illustration 3" className="w-full h-full object-cover mix-blend-multiply" src="https://i.postimg.cc/m2qYdkFB/portes.jpg" />
                </div>
              </div>

              {/* Card 2 (Centre - Au dessus) */}
              {/* z-[10] assure qu'elle reste toujours au premier plan */}
              <div className="absolute z-[10] transition-all duration-500 ease-out rotate-0 group-hover:scale-110">
                <div className="bg-black overflow-hidden rounded-[16px] shadow-2xl size-[384px] border-[8px] border-black">
                  {/* CORRECTION DU LIEN DE L'IMAGE ICI */}
                  <img alt="Illustration 2" className="w-full h-full object-cover mix-blend-screen opacity-90" src="https://i.postimg.cc/xC18NFHk/leclubdes27.jpg" />
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

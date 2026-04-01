import { useEffect } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#faf9f9] content-stretch flex flex-col gap-[160px] items-start overflow-y-auto" data-name="OLF menu">
      
      {/* --- LE CONTENU DU MENU --- */}
      <div className="content-stretch flex flex-col items-start overflow-clip pt-[128px] relative shrink-0 w-full" data-name="Main">
        <div className="min-h-[1697px] max-w-[1536px] relative shrink-0 w-full mx-auto" data-name="Hero Section">
          <div className="flex flex-col items-center max-w-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[15px] items-center max-w-[inherit] px-[32px] relative size-full">
              <div className="h-[20px] shrink-0 w-full" data-name="Container" />
              <div className="content-stretch flex flex-col h-[157px] items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 1">
                <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[109px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[128px] text-center tracking-[-6.4px] uppercase w-[444px]">
                  <p className="leading-[108.8px]">Menu</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[88px] items-center pt-[9px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#363636] text-[24px] text-center tracking-[-0.6px] uppercase max-w-[812px]">
                  <p className="leading-[32px] whitespace-pre-wrap">
                    {`Ce n'est pas ce genre de site. `}
                    <br aria-hidden="true" />
                    {`Ici c'est le bordel. C'est pas carré, c'est pas cohérent. `}
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Epilogue:Bold',sans-serif] font-bold items-center leading-[0] pt-[9px] relative shrink-0 text-[#363636] text-[24px] text-center tracking-[-0.6px] uppercase w-full" data-name="Container">
                <div className="flex flex-col justify-center relative shrink-0 max-w-[812px] whitespace-pre-wrap">
                  <p className="leading-[32px] mb-0">{`Mais je peux utiliser cet espace pour vous expliquer `}</p>
                  <p className="leading-[32px] mb-0">{`ma démarche. `}</p>
                  <p className="leading-[32px]">&nbsp;</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 max-w-[812px]">
                  <p>
                    <span className="leading-[32px]">{`Elle est plutot simple en `}</span>
                    <span className="[text-decoration-skip-ink:none] decoration-solid leading-[32px] line-through">{`réalité. `}</span>
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Epilogue:Bold',sans-serif] font-bold items-center leading-[0] pt-[9px] relative shrink-0 text-[#363636] text-center tracking-[-0.6px] uppercase w-full whitespace-pre-wrap" data-name="Container">
                <div className="flex flex-col justify-center relative shrink-0 text-[74px] max-w-[812px]">
                  <p className="leading-[112px] mb-0">Je me force.</p>
                  <p className="leading-[112px] mb-0">J'ai même pas envie que cela soit réellement vu.</p>
                  <p className="leading-[112px] mb-0">&nbsp;</p>
                  <p className="leading-[112px]">&nbsp;</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[24px] max-w-[812px]">
                  <p className="leading-[32px] mb-0">{`Mais ça fera plaisir à mon psy. `}</p>
                  <p className="leading-[32px] mb-0">{`Ensuite j'imagine que ça me permet de me soigner. `}</p>
                  <p className="leading-[32px] mb-0">&nbsp;</p>
                  <p className="leading-[32px] mb-0">{`on verra. `}</p>
                  <p className="leading-[32px] mb-0">&nbsp;</p>
                  <p className="leading-[32px]">Bisous.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- LA NAVIGATION DU MENU (CORRIGÉE) --- */}
      <div 
        className="absolute backdrop-blur-[12px] bg-[rgba(250,249,249,0.8)] left-0 right-0 top-0 z-50 flex justify-center w-full" 
        data-name="TopNavBar"
      >
        <div className="max-w-[1536px] w-full flex items-center justify-between px-[32px] py-[24px] mx-auto">
          
          {/* LOGO */}
          <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[32px] justify-center leading-[0] text-[#212121] text-[24px] tracking-[-1.2px] uppercase">
            <p className="leading-[32px]">OLF</p>
          </div>
          
          {/* BOUTON FERMER (Croix) */}
          <button
            onClick={onClose}
            className="flex items-center justify-center cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity p-2 -mr-2"
            aria-label="Fermer le menu"
          >
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24" stroke="#212121" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

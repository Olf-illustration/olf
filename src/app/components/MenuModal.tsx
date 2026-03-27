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
      <div className="content-stretch flex flex-col items-start overflow-clip pt-[128px] relative shrink-0 w-full" data-name="Main">
        <div className="min-h-[1697px] max-w-[1536px] relative shrink-0 w-full" data-name="Hero Section">
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
                <div className="flex flex-col justify-center relative

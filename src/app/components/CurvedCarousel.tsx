import imgMeduseMondrian2Jpg from "https://i.postimg.cc/ZR5nvD3W/joker.jpg";
import img27WhiteTriJpg from "https://i.postimg.cc/ZR5nvD3W/joker.jpg";
import imgAb6AXuBpeI3E from "https://i.postimg.cc/ZR5nvD3W/joker.jpg";
import imgAb6AXuBaBIwD from "https://i.postimg.cc/ZR5nvD3W/joker.jpg";

export interface Serie {
  id: string;
  title: string;
  image: string;
  offset?: string;
}

interface CurvedCarouselProps {
  series: Serie[];
  onSerieClick: (serie: Serie) => void;
}

export default function CurvedCarousel({ series, onSerieClick }: CurvedCarouselProps) {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[857px] items-start max-w-[1536px] pt-[166px] px-[32px] relative shrink-0 w-full" data-name="Section - Featured Work: Horizontal Curve Carousel">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
        <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[60px] text-center tracking-[-3px] uppercase">
          <p className="leading-[60px]">Dernières séries</p>
        </div>
      </div>
      <div className="h-[548px] overflow-x-auto overflow-y-clip relative shrink-0 w-full scrollbar-hide" data-name="Container" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {series.map((serie, index) => {
          const isEven = index % 2 === 0;
          const leftPosition = index * 432;
          
          return (
            <div
              key={serie.id}
              className={`${isEven ? 'absolute bottom-[60px] top-[20px]' : '-translate-y-1/2 absolute top-[calc(50%+20px)]'} content-stretch flex flex-col items-start justify-center left-[${leftPosition}px] pr-[32px] w-[432px]`}
              style={{ left: `${leftPosition}px` }}
              data-name={`Item ${index + 1}:margin`}
            >
              <div className={`content-stretch flex ${isEven ? 'flex-[1_0_0] min-h-px min-w-px' : 'h-[468px]'} flex-col gap-[24px] items-start relative shrink-0 w-[400px]`} data-name={`Item ${index + 1}`}>
                <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer hover:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] transition-shadow" data-name="Background+Shadow">
                  <div className="h-[400px] relative shrink-0 w-full">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                      <img alt={serie.title} className="absolute h-[141.34%] left-0 max-w-none top-[-20.67%] w-full" src={serie.image} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
                  <button
                    onClick={() => onSerieClick(serie)}
                    className="bg-[#e2e2e2] content-stretch flex flex-col items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#d2d2d2] transition-colors border-0"
                  >
                    <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px] text-center tracking-[1.4px] uppercase">
                      <p className="leading-[20px]">{serie.title}</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

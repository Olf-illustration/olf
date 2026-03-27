import imgA411Png from "https://i.postimg.cc/QtWh1kBs/A4_11.png";
import imgMeduseMondrian2Jpg from "https://i.postimg.cc/qvCwfNCT/meduse_mondrian_2.jpg";
import img27WhiteTriJpg from "https://i.postimg.cc/xC18NFHk/leclubdes27.jpg";

export default function HeroSection() {
  return (
    <div className="h-auto min-h-[800px] max-w-[1536px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-center max-w-[inherit] px-[32px] relative size-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-center tracking-[4.2px] uppercase w-[98.97px]">
              <p className="leading-[20px]">Lille, FR</p>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 1">
            <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[109px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[128px] text-center tracking-[-6.4px] uppercase w-[226.89px]">
              <p className="leading-[108.8px]">OLF</p>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-center pt-[9px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#363636] text-[24px] text-center tracking-[-0.6px] uppercase max-w-[647px]">
              <p className="leading-[32px]">Illustration, design & une bonne dose de lorazépam</p>
            </div>
          </div>
          
          <div className="h-[581px] max-w-[896px] relative shrink-0 w-full mt-8" data-name="Hero Illustration Stack">
            <div className="absolute inset-0 flex items-center justify-center group">
              {/* Card 1 - Left rotated */}
              <div className="absolute -rotate-12 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-rotate-6 group-hover:-translate-x-[220px] group-hover:z-10" style={{ zIndex: 1 }}>
                <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-700 size-[384px]" data-name="Background+Shadow">
                  <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-multiply opacity-80 relative rounded-[16px] w-full" data-name="A4-11.png">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
                      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                        <img alt="" className="absolute h-[141.42%] left-0 max-w-none top-[-20.71%] w-full" src={imgA411Png} />
                      </div>
                      <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Center slight rotation */}
              <div className="absolute rotate-3 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0 group-hover:z-10" style={{ zIndex: 2 }}>
                <div className="bg-black content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-700 size-[384px]" data-name="Background+Shadow">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full mix-blend-screen opacity-90">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute h-[146.95%] left-[-3.91%] max-w-none top-[-43.94%] w-[103.97%]" src={imgMeduseMondrian2Jpg} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Right rotated */}
              <div className="absolute rotate-12 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-6 group-hover:translate-x-[220px] group-hover:z-10" style={{ zIndex: 3 }}>
                <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-700 size-[384px]" data-name="Background+Shadow">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full mix-blend-multiply">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute h-[141.34%] left-0 max-w-none top-[-20.67%] w-full" src={img27WhiteTriJpg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

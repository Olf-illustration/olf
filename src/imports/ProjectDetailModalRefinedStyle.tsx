import svgPaths from "./svg-ie2a3i820k";
import imgBrooklynStreetsIllustrationMain from "figma:asset/0a281c31f8174008112eedbf55d4fb8286d3e7b4.png";
import imgDetailView from "figma:asset/714e894c5bf375f314862dd18e6fb00e668fc6d0.png";
import imgColorStudy from "figma:asset/277927ffd5b8604dff472698a82b3444473a8b55.png";
import imgFullHeightArtwork from "figma:asset/eea86cb8c544a2dbe78eec06d74d45639d50fcd7.png";
import imgFullHeightArtwork1 from "figma:asset/b7c6e7a6638682e966f5c3a945997fb64854baab.png";

function Background({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#eee] relative rounded-[12px] self-stretch shrink-0">
      <div className="content-stretch flex flex-col h-full items-start px-[20px] py-[8px] relative">{children}</div>
    </div>
  );
}

export default function ProjectDetailModalRefinedStyle() {
  return (
    <div className="bg-[#faf9f9] relative size-full" data-name="Project Detail Modal - Refined Style">
      <div className="absolute blur-[6px] inset-0 opacity-40 overflow-clip" data-name="Blurred Background Content (Homepage Mock)">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
        <div className="absolute content-stretch flex items-center justify-between left-0 max-w-[1536px] px-[24px] py-[32px] right-0 top-0" data-name="Header">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[32px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[24px] tracking-[-0.96px] uppercase w-[189.77px]">
              <p className="leading-[32px]">Spencer Gabor</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] h-[24px] items-start relative shrink-0" data-name="Nav">
            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
              <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[24px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-[43.75px]">
                <p className="[text-decoration-skip-ink:none] decoration-[#0062a1] decoration-solid leading-[24px] underline">Work</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#a09f9e] text-[16px] w-[45.13px]">
                <p className="leading-[24px]">About</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#a09f9e] text-[16px] w-[48.23px]">
                <p className="leading-[24px]">Studio</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#a09f9e] text-[16px] w-[59.41px]">
                <p className="leading-[24px]">Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__500px_400px] left-[24px] right-[24px] top-[176px]" data-name="Main">
          <div className="bg-[#eee] col-[1/span_8] h-[500px] justify-self-stretch row-1 shrink-0" data-name="Background" />
          <div className="bg-[#eee] col-[9/span_4] h-[500px] justify-self-stretch row-1 shrink-0" data-name="Background" />
          <div className="bg-[#eee] col-[1/span_6] h-[400px] justify-self-stretch row-2 shrink-0" data-name="Background" />
          <div className="bg-[#eee] col-[7/span_6] h-[400px] justify-self-stretch row-2 shrink-0" data-name="Background" />
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[rgba(33,33,33,0.3)] content-stretch flex inset-0 items-center justify-center p-[40px]" data-name="Modal Overlay">
        <div className="bg-white flex-[1_0_0] h-full max-w-[1200px] min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Article - Project Detail Modal">
          <div className="absolute content-stretch flex flex-col gap-[64px] inset-[0_0_-1480.5px_0] items-center px-[96px] py-[64px]" data-name="Modal Scrollable Content">
            <div className="content-stretch flex flex-col gap-[14.875px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Header: Centered Title & Description">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
                <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[72px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[72px] text-center tracking-[-3.6px] uppercase w-[667.09px]">
                  <p className="leading-[72px]">MP3</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center pb-[0.625px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[50px] justify-center leading-[0] not-italic relative shrink-0 text-[#a09f9e] text-[18px] text-center w-[569.44px]">
                  <p className="leading-[24.75px] mb-0">A love letter to the organized chaos of Kings County, exploring the</p>
                  <p className="leading-[24.75px]">intersection of historic architecture and rhythmic urban energy.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative shrink-0 w-full" data-name="Visuals Grid (Inspired by Nike layout)">
              <div className="bg-[#f4f3f3] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Large Featured Image Area">
                <div className="h-[630px] relative shrink-0 w-full" data-name="Brooklyn Streets Illustration Main">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[27.91%] max-w-none top-0 w-[44.18%]" src={imgBrooklynStreetsIllustrationMain} />
                  </div>
                </div>
              </div>
              <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_500px] h-[651px] relative shrink-0 w-full" data-name="Secondary Grid">
                <div className="bg-[#f4f3f3] col-1 content-stretch flex flex-col h-[651px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[32px] row-1 shrink-0" data-name="Background">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Detail view">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-0.81%] max-w-none top-0 w-[101.63%]" src={imgDetailView} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#f4f3f3] col-2 content-stretch flex flex-col h-[651px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[32px] row-1 shrink-0" data-name="Background">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Color study">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-0.81%] max-w-none top-0 w-[101.63%]" src={imgColorStudy} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f4f3f3] content-stretch flex flex-col h-[1279px] items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Vertical Detail">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Full height artwork">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[111.06%] left-0 max-w-none top-[-0.04%] w-full" src={imgFullHeightArtwork} />
                  </div>
                </div>
              </div>
              <div className="bg-[#f4f3f3] content-stretch flex flex-col h-[1234px] items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Vertical Detail">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Full height artwork">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[111.06%] left-0 max-w-none top-[-0.04%] w-full" src={imgFullHeightArtwork1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between pt-[41px] relative shrink-0 w-full" data-name="Footer: Navigation/Tags">
              <div aria-hidden="true" className="absolute border-[rgba(196,199,199,0.2)] border-solid border-t inset-0 pointer-events-none" />
              <div className="h-[33px] relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-start relative">
                  <Background>
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[11px] tracking-[1.1px] uppercase w-[69.53px]">
                      <p className="leading-[16.5px]">Brooklyn</p>
                    </div>
                  </Background>
                  <Background>
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[11px] tracking-[1.1px] uppercase w-[92.45px]">
                      <p className="leading-[16.5px]">Illustration</p>
                    </div>
                  </Background>
                  <Background>
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[11px] tracking-[1.1px] uppercase w-[67.38px]">
                      <p className="leading-[16.5px]">Editorial</p>
                    </div>
                  </Background>
                </div>
              </div>
              <div className="bg-[#212121] relative rounded-[12px] shrink-0" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative">
                  <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] uppercase w-[134.41px]">
                    <p className="leading-[20px]">instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute content-stretch cursor-pointer flex items-center justify-center right-[32px] size-[40px] top-[32px]" data-name="Close Button (Absolute positioned like reference)">
            <div className="relative shrink-0 size-[17.5px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                <g id="Container">
                  <path d={svgPaths.p1f082d00} fill="var(--fill-0, #212121)" fillOpacity="0.8" id="Icon" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
import imgAb6AXuCrxpqv from "figma:asset/cd47019c87dacf733648cc48a737057b74df4223.png";
import imgAb6AXuDiTrfW from "figma:asset/e2ead00d0f7a7baa56f6a01ffbdfeaad455bf001.png";
import imgAb6AXuBpeI3E from "figma:asset/eb1d2e4e00c03bc9bd3aba22c7e32f1fb31120eb.png";
import imgAb6AXuBaBIwD from "figma:asset/66046a59a5f7144ed56e3507981ac736611a84c9.png";
import imgAb6AXuBz8DsX from "figma:asset/e997fa195abb1dde98830d28b68890d305d289d7.png";
import imgAb6AXuD5ZChhA from "figma:asset/753af7f07a1cec4378e95526f5604b89cfc5d8dc.png";
import imgAb6AXuD5ZChhB from "figma:asset/67d53986ce8d201e367a9bd3f63768c87991a4f1.png";
import imgAb6AXuD5ZChhC from "figma:asset/7347dc3729207a66747f4e51bdebeb36b1ac7806.png";
import imgAb6AXuD5ZChhD from "figma:asset/92f87db5c55aaac0c23e19738ede0512f585020b.png";
import imgAb6AXuD5ZChhE from "figma:asset/ca2358e8f879b208480d1e3db10a8c5f47801ed5.png";
import imgAb6AXuD5ZChhF from "figma:asset/4e4b77f152f26b4c37215e925ac191296ccbd1cc.png";
import imgAb6AXuD5ZChhG from "figma:asset/4e871560c3aed22534a41736cdeba5beb9a1b890.png";
import imgAb6AXuD5ZChhH from "figma:asset/2ed4ed82eddc536e39bf22ac7835fc35d2069ecd.png";
import imgAb6AXuD5ZChhI from "figma:asset/6c92763b609c3d3f6dac9ca37671c3124ca017e8.png";
import imgAb6AXuD5ZChhJ from "figma:asset/7daf17d7f657acfdace0487a9eb9f82f87d02a46.png";
import svgPaths from "../../imports/svg-aeygk8ig3n";
import { useState } from "react";

const images = [
  imgAb6AXuCrxpqv,
  imgAb6AXuDiTrfW,
  imgAb6AXuBpeI3E,
  imgAb6AXuBaBIwD,
  imgAb6AXuBz8DsX,
  imgAb6AXuD5ZChhA,
  imgAb6AXuD5ZChhB,
  imgAb6AXuD5ZChhC,
  imgAb6AXuD5ZChhD,
  imgAb6AXuD5ZChhE,
  imgAb6AXuD5ZChhF,
  imgAb6AXuD5ZChhG,
  imgAb6AXuD5ZChhH,
  imgAb6AXuD5ZChhI,
  imgAb6AXuD5ZChhJ
];

export default function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-[#f4f3f3] content-stretch flex flex-col items-start pb-[32px] pt-[192px] relative shrink-0 w-full" data-name="Section - More Work Grid">
        <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[32px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[60px] tracking-[-3px] uppercase">
                  <p className="leading-[60px]">Bordel</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[27px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                  <g id="Container">
                    <path d={svgPaths.p2e492a00} fill="var(--fill-0, #212121)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] relative rounded-[20px] shrink-0 w-full" data-name="Container">
              {images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="bg-[rgba(157,202,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 hover:scale-[1.02] transition-transform cursor-pointer" 
                  data-name={`Item ${index + 1}`}
                >
                  <div className="h-[384px] mix-blend-multiply relative shrink-0 w-full">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        alt={`Artwork ${index + 1}`} 
                        className="absolute h-full left-0 max-w-none top-0 w-full object-cover" 
                        src={image} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 z-[101] text-white hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M24 8L8 24M8 8L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Full size artwork" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
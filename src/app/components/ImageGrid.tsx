import imgAb6AXuCrxpqv from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuDiTrfW from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuBpeI3E from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuBaBIwD from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuBz8DsX from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhA from "fhttps://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhB from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhC from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhD from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhE from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhF from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhG from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhH from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhI from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
import imgAb6AXuD5ZChhJ from "https://i.postimg.cc/m2qYdkFB/portes.jpg";
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

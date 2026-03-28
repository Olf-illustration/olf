import { useState } from "react";

// NETTOYAGE : Les images sont maintenant directement dans le tableau ci-dessous 
// pour éviter les erreurs de build liées aux imports de modules externes.

const images = [
  "https://i.postimg.cc/ZR5nvD3W/joker.jpg",
  "https://i.postimg.cc/DzF8nzw6/dali.jpg",
  "https://i.postimg.cc/3x2dsGY4/A4_20.jpg",
  "https://i.postimg.cc/GmvHWDdG/Auto_Save_2023_02_08_12_17_37.jpg",
  "https://i.postimg.cc/5t16bttW/doodle.jpg",
  "https://i.postimg.cc/435ndTKs/eyes_5.png", 
  "https://i.postimg.cc/RFZhJbfs/meduse.png",
  "https://i.postimg.cc/kXFLwqzR/zbobok.png",
  "https://i.postimg.cc/xTSWKcxv/tronches.png",
  "https://i.postimg.cc/J4W9bG6b/Slide_16_9_2.png",
  "https://i.postimg.cc/TYXZrp7n/bouffon.jpg",
  "https://i.postimg.cc/J0QK340k/rim.jpg",
  "https://i.postimg.cc/GtjzPhts/Rebelle_Artwork.jpg",
  "https://i.postimg.cc/mkCn3yMn/trope.jpg",
  "https://i.postimg.cc/DzF8nzz2/effroi_Black.jpg", // Ajout virgule
  "https://i.postimg.cc/J0J0SGZw/visages_multiples.jpg", // Ajout virgule
  "https://i.postimg.cc/QtvV6p9d/littleredhood.jpg", // Ajout virgule
  "https://i.postimg.cc/ZRX0frBT/Rebelle_Artworkpeinture_2020.jpg"
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
                    <path d="M13.5 0L16.5 10.5L27 13.5L16.5 16.5L13.5 27L10.5 16.5L0 13.5L10.5 10.5L13.5 0Z" fill="#212121" id="Icon" />
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

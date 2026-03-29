import { useState, useEffect, useRef } from "react";

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
  "https://i.postimg.cc/DzF8nzz2/effroi_Black.jpg", 
  "https://i.postimg.cc/J0J0SGZw/visages_multiples.jpg", 
  "https://i.postimg.cc/QtvV6p9d/littleredhood.jpg", 
  "https://i.postimg.cc/ZRX0frBT/Rebelle_Artworkpeinture_2020.jpg"
];

// --- NOUVEAU COMPOSANT : Gère l'animation individuelle de chaque image ---
const AnimatedGridItem = ({ image, index, onClick }: { image: string, index: number, onClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // L'observateur vérifie si l'élément entre dans l'écran
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // threshold: 0.1 signifie "déclenche quand 10% de l'image est visible"
        if (entry.isIntersecting) {
          setIsVisible(true);
          // On arrête d'observer une fois apparu pour que ça ne rejoue pas à l'infini
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1, rootMargin: "50px" });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div 
      ref={domRef}
      onClick={onClick}
      className={`bg-[rgba(157,202,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 cursor-pointer 
        transition-all duration-[800ms] ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        hover:scale-[1.02]
      `} 
      // La magie de la cascade (stagger) : la colonne 1 a 0ms de délai, la 2 a 150ms, la 3 a 300ms
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
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
  );
};


export default function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-[#f4f3f3] content-stretch flex flex-col items-start pb-[32px] pt-[192px] relative shrink-0 w-full" data-name="Section - More Work Grid">
        <div className="max-w-[1536px] relative shrink-0 w-full mx-auto" data-name="Container">
          <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[inherit] px-[32px] relative w-full">
            
            <div className="flex items-center justify-center gap-6 relative shrink-0 w-full" data-name="Title Container">
              <div className="flex flex-col items-center relative shrink-0" data-name="Heading 2">
                <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[60px] tracking-[-3px] uppercase">
                  <p className="leading-[60px]">Bordel</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[27px]" data-name="Icon Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                  <g id="Container">
                    <path d="M13.5 0L16.5 10.5L27 13.5L16.5 16.5L13.5 27L10.5 16.5L0 13.5L10.5 10.5L13.5 0Z" fill="#212121" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative rounded-[20px] shrink-0 w-full" data-name="Grid Container">
              {/* On utilise maintenant notre nouveau composant AnimatedGridItem */}
              {images.map((image, index) => (
                <AnimatedGridItem 
                  key={index} 
                  image={image} 
                  index={index} 
                  onClick={() => setSelectedImage(image)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal (Inchangée) */}
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

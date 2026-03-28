import { Serie } from './CurvedCarousel';

export interface Serie {
  id: string;
  title: string;
  image: string;
}

interface CurvedCarouselProps {
  series: Serie[];
  onSerieClick: (serie: Serie) => void;
}

export default function CurvedCarousel({ series, onSerieClick }: CurvedCarouselProps) {
  // Astuce de pro : On duplique le tableau plusieurs fois pour créer l'illusion d'une boucle infinie
  const duplicatedSeries = [...series, ...series, ...series, ...series];

  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1536px] pt-[166px] relative w-full overflow-hidden mx-auto">
      
      {/* INJECTION DE L'ANIMATION CSS POUR LE DÉFILEMENT INFINI */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* -50% car on a dupliqué la liste */
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        /* Met l'animation en pause quand la souris survole le carrousel */
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* TITRE */}
      <div className="flex flex-col items-center relative w-full px-[32px]">
        <div className="flex flex-col font-epilogue font-black h-[60px] justify-center leading-none text-[#212121] text-[60px] text-center tracking-[-3px] uppercase">
          <p>Dernières séries</p>
        </div>
      </div>

      {/* LE CARROUSEL ANIMÉ */}
      {/* group/carousel permet de détecter le survol général pour assombrir les cartes non survolées */}
      <div className="w-full overflow-hidden pause-on-hover py-16 group/carousel">
        <div className="flex gap-12 animate-marquee pl-12">
          {duplicatedSeries.map((serie, index) => (
            <div 
              // L'index est nécessaire dans la clé car nous avons des doublons
              key={`${serie.id}-${index}`}
              onClick={() => onSerieClick(serie)}
              // ANIMATIONS DE SURVOL (Hover) :
              className="flex-none w-[400px] cursor-pointer transition-all duration-500 ease-out 
                         group-hover/carousel:opacity-40 hover:!opacity-100 
                         hover:scale-110 hover:-translate-y-6 hover:-rotate-3 z-0 hover:z-10 relative"
            >
              {/* L'image avec l'effet "Polaroïd" épais */}
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl bg-white border-[8px] border-white hover:shadow-2xl transition-shadow duration-500">
                <img 
                  src={serie.image} 
                  alt={serie.title}
                  className={`w-full h-full object-cover pointer-events-none ${
                    serie.id === 'mp3' ? 'mix-blend-multiply' : 
                    serie.id === 'perception' ? 'mix-blend-screen opacity-90' : ''
                  }`}
                />
              </div>
              
              {/* BOUTON SOUS L'IMAGE */}
              <div className="mt-8 flex justify-center">
                <span className="bg-[#e2e2e2] px-8 py-3 rounded-xl font-epilogue font-bold text-[14px] tracking-widest uppercase text-[#212121] transition-colors">
                  {serie.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

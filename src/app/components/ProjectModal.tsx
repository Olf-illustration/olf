import { useEffect } from 'react';
import { Serie } from './CurvedCarousel';

interface ProjectModalProps {
  serie: Serie | null;
  onClose: () => void;
}

interface ProjectData {
  title: string;
  description: string;
  images: string[];
  tags: string[];
}

// Base de données avec toutes tes séries et plusieurs images pour tester la mosaïque
const projectsData: Record<string, ProjectData> = {
  'mp3': {
    title: 'MP3',
    description: 'Quand la musique est bonne, bonne, bonne.',
    images: [
      "https://i.postimg.cc/pLKpwjRQ/bowie_fond_blanc_uni.jpg",
      "https://i.postimg.cc/GpQ921B4/Gainsbourg.png",
      "https://i.postimg.cc/qv2zPK41/Band_of_brothers.png",
      "https://i.postimg.cc/Tw315HmC/mercury.jpg",
      "https://i.postimg.cc/g020XZq9/27white_tri.jpg"
    ],
    tags: ['Illustration', 'Music']
  },
  'perception': {
    title: 'PERCEPTION',
    description: 'Le poids du choix et de l\'indécision',
    images: [
      "https://i.postimg.cc/m2qYdkFB/portes.jpg",
      "https://i.postimg.cc/wTPXWMsH/ombre.jpg",
      "https://i.postimg.cc/mkCn3yMn/trope.jpg",
      ],
    tags: []
  },
  'aaahh!': {
    title: 'AAAHH!',
    description: 'Un peu de couleur dans ce monde de noir & blanc',
    images: [
      "https://i.postimg.cc/sg5vkWsG/A4_21.jpg",
      "https://i.postimg.cc/J0QK340k/rim.jpg",
      "https://i.postimg.cc/BvsX4vnm/cats.jpg",
      "https://i.postimg.cc/kXFLwqzR/zbobok.png",
      "https://i.postimg.cc/DzF8nzz2/effroi_Black.jpg"
    ],
    tags: []
  },
  'ombre passagère': {
    title: 'OMBRE PASSAGÈRE',
    description: 'Exploration des ombres et de la lumière.',
    images: [
      "https://i.postimg.cc/9Qyr69C4/A4_23.jpg",
      "https://i.postimg.cc/FH07MSNS/A4_24.jpg",
      "https://i.postimg.cc/Z56CGN43/A4_25.jpg",
      "https://i.postimg.cc/435ndTKs/eyes_5.png",
      "https://i.postimg.cc/J0J0SGZw/visages_multiples.jpg"
    ],
    tags: []
  }
};

export default function ProjectModal({ serie, onClose }: ProjectModalProps) {
  // Empêche le scroll de la page quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = serie ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [serie]);

  if (!serie) return null;
  
  // Récupère les données du projet ou crée des données par défaut si l'ID n'est pas dans projectsData
  const project = projectsData[serie.id] || {
    title: serie.title,
    description: 'Détails et recherches pour ce projet.',
    images: [serie.image],
    tags: []
  };

  return (
    <div 
      className="fixed inset-0 z-[100] backdrop-blur-[4px] bg-[rgba(33,33,33,0.4)] flex items-center justify-center p-[20px] md:p-[40px]"
      onClick={onClose} // <-- AJOUT : Ferme la modale si on clique sur l'arrière-plan
    >
      
      {/* MODALE PLUS LARGE */}
      <div 
        className="bg-white w-full h-full max-h-[95vh] max-w-[1600px] overflow-y-auto relative rounded-[32px] md:rounded-[48px] shadow-2xl p-[40px] md:p-[80px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" // <-- AJOUT : Classes pour cacher la scrollbar
        onClick={(e) => e.stopPropagation()} // <-- AJOUT : Empêche le clic à l'intérieur de fermer la modale
      >
        
        {/* BOUTON CLOSE */}
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 md:right-12 md:top-12 w-14 h-14 flex items-center justify-center bg-[#f4f3f3] rounded-full text-[#212121] transition-all duration-300 hover:bg-[#e8e8e8] hover:shadow-md hover:scale-105 z-10"
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* CONTENU DE LA MODALE */}
        <div className="flex flex-col items-center w-full mt-4">
          
          {/* En-tête du projet */}
          <h2 className="font-['Epilogue:Black',sans-serif] font-black text-[#212121] text-[48px] md:text-[80px] text-center tracking-[-2px] uppercase leading-none mb-4">
            {project.title}
          </h2>
          <p className="text-[#a0a0a0] font-medium text-[18px] md:text-[22px] text-center max-w-[600px] leading-relaxed mb-16">
            {project.description}
          </p>

          {/* MOSAÏQUE D'IMAGES (Maximum 5) */}
          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20">
            {project.images.slice(0, 5).map((img, idx) => {
              
              // La 3ème image (index 2) prend toute la largeur sur grand écran
              const isFullWidth = idx === 2;

              return (
                <div 
                  key={idx} 
                  className={`relative w-full overflow-hidden rounded-[24px] shadow-sm transition-transform duration-500 hover:scale-[1.02] ${
                    isFullWidth ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} artwork ${idx + 1}`} 
                    // On force un format pour que la grille soit toujours bien alignée
                    className={`w-full h-full object-cover ${
                      isFullWidth ? 'aspect-[2/1] md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'
                    }`}
                  />
                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </div>
  );
}

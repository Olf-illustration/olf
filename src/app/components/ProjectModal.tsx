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

// Base de données temporaire pour tes projets
const projectsData: Record<string, ProjectData> = {
  'mp3': {
    title: 'MP3',
    description: 'Quand la musique est bonne, bonne, bonne.',
    images: ["https://i.postimg.cc/pLKpwjRQ/bowie_fond_blanc_uni.jpg"],
    tags: ['Illustration', 'Editorial']
  },
  'perception': {
    title: 'PERCEPTION',
    description: 'Mural design and installations from California to Kuwait.',
    images: ["https://i.postimg.cc/Qt8yG2J3/meduse-mondrian-2.jpg"],
    tags: []
  },
  // Tu pourras ajouter les autres ici...
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
    <div className="fixed inset-0 z-[100] backdrop-blur-[4px] bg-[rgba(33,33,33,0.4)] flex items-center justify-center p-[20px] md:p-[40px]">
      
      {/* 1. MODALE PLUS LARGE : On passe à max-w-[1600px] pour prendre presque tout l'écran */}
      <div className="bg-white w-full h-full max-h-[95vh] max-w-[1600px] overflow-y-auto relative rounded-[32px] md:rounded-[48px] shadow-2xl p-[40px] md:p-[80px]">
        
        {/* 2. BOUTON CLOSE : Ajout du fond gris, de l'arrondi et de l'ombre au hover */}
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 md:right-12 md:top-12 w-14 h-14 flex items-center justify-center bg-[#f4f3f3] rounded-full text-[#212121] transition-all duration-300 hover:bg-[#e8e8e8] hover:shadow-md hover:scale-105"
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* CONTENU DE LA MODALE */}
        <div className="flex flex-col items-center w-full mt-4">
          
          {/* En-tête du projet façon Gabor */}
          <h2 className="font-['Epilogue:Black',sans-serif] font-black text-[#212121] text-[48px] md:text-[80px] text-center tracking-[-2px] uppercase leading-none mb-4">
            {project.title}
          </h2>
          <p className="text-[#a0a0a0] font-medium text-[18px] md:text-[22px] text-center max-w-[600px] leading-relaxed mb-16">
            {project.description}
          </p>

          {/* 3. IMAGES PLUS PETITES : On contraint la largeur max à 1000px et on centre (mx-auto) */}
          <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-12 items-center pb-20">
            {project.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${project.title} artwork ${idx + 1}`} 
                className="w-full h-auto rounded-[24px] object-cover shadow-sm"
              />
            ))}
          </div>
          
        </div>

      </div>
    </div>
  );
}

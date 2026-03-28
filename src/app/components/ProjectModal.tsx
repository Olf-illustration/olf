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
      "https://i.postimg.cc/ZR5nvD3W/joker.jpg",
      "https://i.postimg.cc/DzF8nzw6/dali.jpg",
      "https://i.postimg.cc/3x2dsGY4/A4_20.jpg",
      "https://i.postimg.cc/GmvHWDdG/Auto_Save_2023_02_08_12_17_37.jpg"
    ],
    tags: ['Illustration', 'Editorial']
  },
  'perception': {
    title: 'PERCEPTION',
    description: 'Mural design and installations from California to Kuwait.',
    images: [
      "https://i.postimg.cc/Qt8yG2J3/meduse-mondrian-2.jpg",
      "https://i.postimg.cc/RFZhJbfs/meduse.png",
      "https://i.postimg.cc/kXFLwqzR/zbobok.png",
      "https://i.postimg.cc/xTSWKcxv/tronches.png",
      "https://i.postimg.cc/TYXZrp7n/bouffon.jpg"
    ],
    tags: []
  },
  'aaahh!': {
    title: 'AAAHH!',
    description: 'Série horrifique et surprenante.',
    images: [
      "https://i.postimg.cc/sg5vkWsG/A4_21.jpg",
      "https://i.postimg.cc/J0QK340k/rim.jpg",
      "https://i.postimg.cc/GtjzPhts/Rebelle_Artwork.jpg",
      "https://i.postimg.cc/mkCn3yMn/trope.jpg",
      "https://i.postimg.cc/DzF8nzz2/effroi_Black.jpg"
    ],
    tags: []
  },
  'ombre passagère': {
    title: 'OMBRE PASSAGÈRE',
    description: 'Exploration des ombres et de la lumière.',
    images: [
      "https://i.postimg.cc/FH07MSNS/A4_24.jpg",
      "https://i.postimg.cc/J0J0SGZw/visages_multiples.jpg",
      "https://i.postimg.cc/QtvV6p9d/littleredhood.jpg",
      "https://i.postimg.cc/ZRX0frBT/Rebelle_Artworkpeinture_2020.jpg",
      "https://i.postimg.cc/5t16bttW/doodle.jpg"
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
    <div className="fixed inset-0 z-[100] backdrop-blur-[4px] bg-[rgba(33,33,33,0.4)] flex items-center justify-center p-[20px] md:p-[40px]">
      
      {/* MODALE PLUS LARGE */}
      <div className="bg-white w-full h-full max-h-[95vh] max-w-[1600px] overflow-y-auto relative rounded-[32px] md:rounded-[48px] shadow-2xl p-[40px] md:p-[80px]">
        
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
          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1

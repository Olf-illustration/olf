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

const projectsData: Record<string, ProjectData> = {
  'mp3': {
    title: 'MP3',
    description: 'Quand la musique est bonne, bonne, bonne.',
    images: ["https://i.postimg.cc/pLKpwjRQ/bowie_fond_blanc_uni.jpg", "https://i.postimg.cc/jjXC5rWf/gallagher.jpg", "https://i.postimg.cc/Tw315HmC/mercury.jpg", "https://i.postimg.cc/W4nt3PD3/gainsbourg.jpg", "https://i.postimg.cc/g020XZq9/27white_tri.jpg"],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'perception': {
    title: 'PERCEPTION',
    description: 'Approche minimaliste pour tenter de coucher sur le papier un état psychologique.',
    images: ["https://i.postimg.cc/m2qYdkFB/portes.jpg", "https://i.postimg.cc/wTPXWMsH/ombre.jpg", "https://i.postimg.cc/mkCn3yMn/trope.jpg"],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'aaahh!': {
    title: 'AAAHH!',
    description: "Un peu de couleur dans ce monde de brute, merde !",
    images: ["https://i.postimg.cc/BvsX4vnm/cats.jpg", "https://i.postimg.cc/YCQh5FMX/cat_2.jpg"],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'ombre passagère': {
    title: 'OMBRE PASSAGÈRE',
    description: 'Peter Pan a vieillit.',
    images: ["https://i.postimg.cc/9Qyr69C4/A4_23.jpg", "https://i.postimg.cc/Z56CGN43/A4_25.jpg"],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  }
};

export default function ProjectModal({ serie, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = serie ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [serie]);

  if (!serie) return null;
  const project = projectsData[serie.id] || projectsData['mp3'];

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-[2px] bg-[rgba(33,33,33,0.3)] flex items-center justify-center p-[40px]">
      <div className="bg-white flex-1 h-full max-w-[1200px] overflow-y-auto relative rounded-[48px] shadow-2xl p-[64px] lg:px-[96px]">
        <div className="flex flex-col gap-[64px] items-center">
          <div className="text-center max-w-[672px]">
            {/* TITRE : Utilisation de font-epilogue et font-black */}
            <h2 className="font-epilogue font-black text-[72px] uppercase tracking-tighter text-[#212121] leading-tight">
              {project.title}
            </h2>
            {/* DESCRIPTION : Utilisation de font-inter et font-medium */}
            <p className="font-inter font-medium text-[#a09f9e] text-[18px] mt-4 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            {project.images.map((img, i) => (
              <div key={i} className="rounded-[32px] overflow-hidden bg-[#f4f3f3]">
                <img src={img} alt="" className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>

          <div className="w-full border-t border-gray-100 pt-8 flex justify-between items-center">
            <div className="flex gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="font-inter bg-[#eee] px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <a href="https://instagram.com" target="_blank" className="font-epilogue bg-[#212121] text-white px-10 py-5 rounded-xl font-black uppercase text-[14px]">instagram</a>
          </div>
        </div>

        <button onClick={onClose} className="absolute right-8 top-8 w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
}

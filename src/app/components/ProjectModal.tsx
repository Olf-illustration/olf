import { useEffect } from 'react';
import svgPaths from "../../imports/svg-ie2a3i820k";
import { Serie } from './CurvedCarousel';

// Import all project images
import img1 from "figma:asset/0a281c31f8174008112eedbf55d4fb8286d3e7b4.png";
import img2 from "figma:asset/714e894c5bf375f314862dd18e6fb00e668fc6d0.png";
import img3 from "figma:asset/277927ffd5b8604dff472698a82b3444473a8b55.png";
import img4 from "figma:asset/eea86cb8c544a2dbe78eec06d74d45639d50fcd7.png";
import img5 from "figma:asset/b7c6e7a6638682e966f5c3a945997fb64854baab.png";

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
    images: [img1, img2, img3, img4, img5],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'perception': {
    title: 'PERCEPTION',
    description: 'Approche minimaliste pour tenter de coucher sur le papier un état psychologique.',
    images: [img1, img2, img3],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'aaahh!': {
    title: 'AAAHH!',
    description: 'Capsule colorée qui vient contrebalancer l\'omnipresence du noir et blanc. Un peu de couleur dans ce monde de brute, merde !',
    images: [img1, img2],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  },
  'ombre passagère': {
    title: 'OMBRE PASSAGÈRE',
    description: 'Peter Pan a vieillit.',
    images: [img1],
    tags: ['Brooklyn', 'Illustration', 'Editorial']
  }
};

function Background({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#eee] relative rounded-[12px] self-stretch shrink-0">
      <div className="content-stretch flex flex-col h-full items-start px-[20px] py-[8px] relative">{children}</div>
    </div>
  );
}

export default function ProjectModal({ serie, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (serie) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [serie]);

  if (!serie) return null;

  const project = projectsData[serie.id] || projectsData['mp3'];

  return (
    <div className="fixed inset-0 z-[100] backdrop-blur-[2px] bg-[rgba(33,33,33,0.3)] content-stretch flex items-center justify-center p-[40px]" data-name="Modal Overlay">
      <div className="bg-white flex-[1_0_0] h-full max-w-[1200px] min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] scrollbar-hide" data-name="Article - Project Detail Modal" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[96px] py-[64px]" data-name="Modal Scrollable Content">
          <div className="content-stretch flex flex-col gap-[14.875px] items-start max-w-[672px] relative shrink-0 w-full" data-name="Header: Centered Title & Description">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
              <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[72px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[72px] text-center tracking-[-3.6px] uppercase">
                <p className="leading-[72px]">{project.title}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center pb-[0.625px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a09f9e] text-[18px] text-center">
                <p className="leading-[24.75px]">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative shrink-0 w-full" data-name="Visuals Grid">
            {project.images.map((image, index) => (
              <div key={index} className="bg-[#f4f3f3] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Featured Image">
                <div className="relative shrink-0 w-full">
                  <div className="relative overflow-hidden w-full">
                    <img alt="" className="w-full h-auto object-contain" src={image} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="content-stretch flex items-center justify-between pt-[41px] relative shrink-0 w-full" data-name="Footer: Navigation/Tags">
            <div aria-hidden="true" className="absolute border-[rgba(196,199,199,0.2)] border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[33px] relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-start relative">
                {project.tags.map((tag, index) => (
                  <Background key={index}>
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[11px] tracking-[1.1px] uppercase">
                      <p className="leading-[16.5px]">{tag}</p>
                    </div>
                  </Background>
                ))}
              </div>
            </div>
            <div className="bg-[#212121] relative rounded-[12px] shrink-0" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[40px] py-[20px] relative">
                <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] uppercase">
                  <p className="leading-[20px]">instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute content-stretch cursor-pointer flex items-center justify-center right-[32px] size-[40px] top-[32px] bg-transparent border-0 hover:opacity-70 transition-opacity" 
          data-name="Close Button"
        >
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
  );
}
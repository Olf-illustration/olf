import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CurvedCarousel, { Serie } from './components/CurvedCarousel';
import ImageGrid from './components/ImageGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import MenuModal from './components/MenuModal';

import imgMeduseMondrian2Jpg from "figma:asset/0c9e0565c8bdb85e02554daa48aeff37a2768b94.png";
import img27WhiteTriJpg from "figma:asset/ac11a7e1786abed2db70b1b98c3c4adb75a163ab.png";
import imgAb6AXuBpeI3E from "figma:asset/af36b7c1eca7c5060d509c7d07b05c72a4fd0d57.png";
import imgAb6AXuBaBIwD from "figma:asset/5efbf3558e1c3f16cd3d379493e7ee2eb9c4d869.png";

export default function App() {
  const [selectedSerie, setSelectedSerie] = useState<Serie | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const series: Serie[] = [
    {
      id: 'mp3',
      title: 'MP3',
      image: imgMeduseMondrian2Jpg
    },
    {
      id: 'perception',
      title: 'Perception',
      image: img27WhiteTriJpg
    },
    {
      id: 'aaahh!',
      title: 'aaahh!',
      image: imgAb6AXuBpeI3E
    },
    {
      id: 'ombre passagère',
      title: 'Ombre passagère',
      image: imgAb6AXuBaBIwD
    }
  ];

  const handleSerieClick = (serie: Serie) => {
    setSelectedSerie(serie);
  };

  const handleCloseModal = () => {
    setSelectedSerie(null);
  };

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#faf9f9] min-h-screen relative size-full overflow-x-hidden">
      <Header onMenuClick={handleMenuClick} />
      
      <main className="content-stretch flex flex-col gap-[160px] items-start relative w-full pt-[128px]">
        <HeroSection />
        <CurvedCarousel series={series} onSerieClick={handleSerieClick} />
        <ImageGrid />
        <ContactSection />
      </main>
      
      <Footer />

      <ProjectModal serie={selectedSerie} onClose={handleCloseModal} />
      <MenuModal isOpen={menuOpen} onClose={handleCloseMenu} />
    </div>
  );
}

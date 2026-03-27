import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CurvedCarousel, { Serie } from './components/CurvedCarousel';
import ImageGrid from './components/ImageGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import MenuModal from './components/MenuModal';

import imgMeduseMondrian2Jpg from "https://i.postimg.cc/qvCwfNCT/meduse_mondrian_2.jpg";
import img27WhiteTriJpg from "https://i.postimg.cc/g020XZq9/27white_tri.jpg";
import imgAb6AXuBpeI3E from "https://i.postimg.cc/QtWh1kBs/A4_11.png";
import imgAb6AXuBaBIwD from "https://i.postimg.cc/QtWh1kBs/A4_11.png";

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

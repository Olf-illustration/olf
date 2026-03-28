import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CurvedCarousel, { Serie } from './components/CurvedCarousel';
import ImageGrid from './components/ImageGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import MenuModal from './components/MenuModal';

// ON NE FAIT PLUS D'IMPORT POUR LES IMAGES DISTANTES ICI

export default function App() {
  const [selectedSerie, setSelectedSerie] = useState<Serie | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // On met les liens directement dans le tableau
  const series: Serie[] = [
    {
      id: 'mp3',
      title: 'MP3',
      image: "https://i.postimg.cc/pLKpwjRQ/bowie_fond_blanc_uni.jpg",
    },
    {
      id: 'perception',
      title: 'Perception',
      image: "https://i.postimg.cc/wTPXWMsH/ombre.jpg",
    },
    {
      id: 'aaahh!',
      title: 'aaahh!',
      image: "https://i.postimg.cc/sg5vkWsG/A4_21.jpg",
    },
    {
      id: 'ombre passagère',
      title: 'Ombre passagère',
      image: "https://i.postimg.cc/FH07MSNS/A4_24.jpg",
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

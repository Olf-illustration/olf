import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div 
      className="absolute backdrop-blur-[12px] bg-[rgba(250,249,249,0.8)] left-0 right-0 top-0 z-50 flex justify-center w-full" 
      data-name="TopNavBar"
    >
      {/* Conteneur principal : limité à 1536px, centré (mx-auto), et éléments espacés (justify-between) */}
      <div className="max-w-[1536px] w-full flex items-center justify-between px-[32px] py-[24px] mx-auto">
        
        {/* LOGO */}
        <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[32px] justify-center leading-[0] text-[#212121] text-[24px] tracking-[-1.2px] uppercase">
          <p className="leading-[32px]">OLF</p>
        </div>
        
        {/* BOUTON BURGER */}
        <button 
          onClick={onMenuClick}
          className="flex items-center justify-center cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity p-2 -mr-2" 
          aria-label="Ouvrir le menu"
        >
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g>
                <rect x="0" y="2" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
                <rect x="0" y="9" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
                <rect x="0" y="16" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
              </g>
            </svg>
          </div>
        </button>

      </div>
    </div>
  );
}

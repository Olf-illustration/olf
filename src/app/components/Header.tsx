import { useState } from 'react';
import svgPaths from "../../imports/svg-3eb6c5k5pc";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(250,249,249,0.8)] content-stretch flex flex-col items-start left-0 right-0 top-0 z-50" data-name="TopNavBar">
      <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[24px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[32px] justify-center leading-[0] relative shrink-0 text-[#212121] text-[24px] tracking-[-1.2px] uppercase w-[42.55px]">
                <p className="leading-[32px]">OLF</p>
              </div>
            </div>
            <button 
              onClick={onMenuClick}
              className="content-stretch flex items-center relative shrink-0 cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity" 
              data-name="Link"
            >
              <div className="relative shrink-0 size-[20px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Container">
                    <rect x="0" y="2" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
                    <rect x="0" y="9" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
                    <rect x="0" y="16" width="20" height="2" fill="#212121" fillOpacity="0.8" rx="1" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
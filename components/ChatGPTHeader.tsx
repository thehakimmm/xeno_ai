"use client";

import Image from "next/image";
import { chatGPTHeaderStyles } from "@/styles/chatGPTHeader.styles";
import { MenuIcon } from "@/styles/icons";

interface ChatGPTHeaderProps {
  onMenuClick: () => void;
  model: string;
  sidebarOpen: boolean;
}

export default function ChatGPTHeader({ onMenuClick, model, sidebarOpen }: ChatGPTHeaderProps) {
  const handleMenuClick = () => {
    console.log("Menu button clicked!");
    onMenuClick();
  };

  return (
    <header className={chatGPTHeaderStyles.container}>
      <div className={chatGPTHeaderStyles.content}>
        <button onClick={handleMenuClick} className={chatGPTHeaderStyles.menuButton}>
          <MenuIcon className={chatGPTHeaderStyles.menuIcon} />
        </button>
        
        {!sidebarOpen && (
          <button onClick={handleMenuClick} className={`${chatGPTHeaderStyles.brandContainer} cursor-pointer`}>
          <div className={chatGPTHeaderStyles.logoImage}>
            <Image 
              src="/images/logo/xeno.jpg" 
              alt="XenoAI Logo" 
              width={28} 
              height={28}
              className={chatGPTHeaderStyles.logoImg}
            />
          </div>
          <div className={chatGPTHeaderStyles.textContainer}>
            <h1 className={chatGPTHeaderStyles.brandName}>XenoAI</h1>
            <div className={chatGPTHeaderStyles.statusContainer}>
              <span className={chatGPTHeaderStyles.statusDot}></span>
              <span className={chatGPTHeaderStyles.modelName}>{model}</span>
            </div>
          </div>
        </button>
        )}
      </div>
    </header>
  );
}


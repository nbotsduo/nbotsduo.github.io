'use client'
import Body from "./Components/Body";
import { WebsiteContext } from "./context";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Menu, X, Github, Users, Settings, FileText, ChevronLeft, ChevronRight, Linkedin, User, GalleryHorizontalEnd, FileUser, LucideIcon } from 'lucide-react';

export interface WebsiteContextType{
  websiteConfig:systemConfig;
  setWebsiteConfig :Dispatch<SetStateAction<systemConfig>>;
}

export interface systemConfig {
  sideBarView: boolean;
  mobileMenuView: boolean;
  darkModeView: boolean;
  menuItems:menuItem[];
  menuSelector:string;
}

interface menuItem{
  name:string;
  icon:LucideIcon;
  href:string;
}
export default function Home() {
  const [websiteConfig, setWebsiteConfig] = useState<systemConfig>({
    sideBarView: true,
    mobileMenuView: false,
    darkModeView: false,
    menuItems: [ 
      // { name: 'Test', icon: User, href: 'test' },
      { name: 'About Me', icon: User, href: 'about' },
      { name: 'Experience', icon: FileUser, href: 'experience' },
      { name: 'Projects', icon: GalleryHorizontalEnd, href: 'project' },
    ],
    menuSelector:"about"
  });

  return (
    <div>
      <WebsiteContext.Provider value={{ websiteConfig, setWebsiteConfig }}>
        <Body />
      </WebsiteContext.Provider>
    </div>
  );
}

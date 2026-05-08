import { useWebsiteContext } from "../context";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Github,
  X,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const context = useWebsiteContext();

  const { websiteConfig, setWebsiteConfig } = context;
  console.log("Context:", websiteConfig.sideBarView);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // Or a loading skeleton
  }
  return (
    <>
      <nav className="border-b border-gray-200 bg-white fixed w-full z-30 top-0 transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Website name and sidebar toggle */}
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-900">naim.hatta</h1>
              <button
                //onClick={() => setebsiteConfig.setSideBarView(!websiteConfig.sideBarView)}
                onClick={() => {
                  setWebsiteConfig((prev) => ({
                    ...prev,
                    sideBarView: !prev.sideBarView,
                  }));
                }}
                className="hidden md:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle sidebar"
              >
                {websiteConfig.sideBarView ? (
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Right side - Desktop menu and GitHub */}
            <div className="hidden md:flex items-center gap-6">
              {/* {websiteConfig.menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))} */}
              <a
                href="https://www.linkedin.com/in/muhammad-na-im-mohammad-hatta-9653411b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="https://github.com/nbotsduo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              {/* <button
              onClick={() => { setWebsiteConfig(prev => ({ ...prev, darkModeView: !prev.darkModeView })) }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${websiteConfig.darkModeView
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
              Toggle {websiteConfig.darkModeView ? 'Light' : 'Dark'} Mode
            </button> */}
              {/* <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-gray-600" />
                  )}
                </motion.div>
              </button> */}
            </div>

            {/* Mobile - Hamburger menu and GitHub */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://www.linkedin.com/in/muhammad-na-im-mohammad-hatta-9653411b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="https://github.com/nbotsduo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              {/* <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-gray-600" />
                  )}
                </motion.div>
              </button> */}
              <button
                // onClick={() => setMobileMenuOpen(!websiteConfig.mobileMenuView)}
                onClick={() => {
                  setWebsiteConfig((prev) => ({
                    ...prev,
                    mobileMenuView: !prev.mobileMenuView,
                  }));
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {websiteConfig.mobileMenuView ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {websiteConfig.mobileMenuView && (
          <div className="md:hidden border-t border-gray-200 bg-white transition-colors duration-300">
            <div className="px-4 py-2 space-y-1">
              {websiteConfig.menuItems.map((item) => (
                <a
                  key={item.name}
                  href=""
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  //onClick={() => setMobileMenuOpen(false)}
                  onClick={(e) => {
                     e.preventDefault();
                    setWebsiteConfig((prev) => ({
                      ...prev,
                      menuSelector: item.href,
                      mobileMenuView: !prev.mobileMenuView,
                    }));
                  }}
                  //     onClick={()=> {setWebsiteConfig(prev => ({...prev, sideBarView: !prev.sideBarView}))}}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

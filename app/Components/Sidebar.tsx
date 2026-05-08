import { useWebsiteContext } from "../context";
import { MouseEvent } from "react";

export default function Sidebar() {
  const context = useWebsiteContext();

  const { websiteConfig, setWebsiteConfig } = context;
  // const handleClick=(value:string,event:MouseEvent<HTMLAnchorElement>)=>{
  //   setWebsiteConfig(prev=>({...prev,menuSelector:value}))
  // }
  return (
    <>
      <aside
        className={`hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-20 ${
          websiteConfig.sideBarView ? "w-56" : "w-0 overflow-hidden"
        }`}
      >
        <div className="p-4 space-y-2">
          {websiteConfig.menuItems.map((item) => (
            <a
              key={item.name}
              href=""
              onClick={(e) => {
                e.preventDefault();
                setWebsiteConfig((prev) => ({
                  ...prev,
                  menuSelector: item.href,
                }));
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors ${websiteConfig.menuSelector === item.href ? "bg-zinc-700 hover:bg-stone-900 text-white hover:font-bold hover:text-white" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="whitespace-nowrap">{item.name}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useWebsiteContext } from "../context";

export default function Body() {
  const context = useWebsiteContext();

  const { websiteConfig, setWebsiteConfig } = context;
  return (
    <>
      <div className={`min-h-screen bg-white  transition-colors duration-300`}>
        <Navbar />
        <Sidebar />
        <main
          className={`pt-16 transition-all duration-300 ${
            websiteConfig.sideBarView ? "md:pl-56" : "md:pl-0"
          }`}
        >
          <div className="p-6 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto">
              <Content />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

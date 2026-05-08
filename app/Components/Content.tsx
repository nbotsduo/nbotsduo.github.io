import { useWebsiteContext } from "../context";
import About from "../Pages/About";
import Experience from "../Pages/Experience";
import Project from "../Pages/Project";
import Test from "../Pages/Test";

export default function Content() {
  const context = useWebsiteContext();

  const { websiteConfig, setWebsiteConfig } = context;

  if (websiteConfig.menuSelector === "about") {
    console.log("about");
    return <About />;
  } else if (websiteConfig.menuSelector === "experience") {
    return <Experience />;
  } else if (websiteConfig.menuSelector === "project") {
    return <Project />;
  } else if (websiteConfig.menuSelector === "test") {
    return <Test />;
  } else {
    return (
      <>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Please select from the menu
        </h2>
      </>
    );
  }
}

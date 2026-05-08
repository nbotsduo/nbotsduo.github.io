import { useWebsiteContext } from "../context";

export default function Test() {
  const context = useWebsiteContext();

  const { websiteConfig, setWebsiteConfig } = context;
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 ">
        Welcome to MyWebsite
      </h2>
      <p className="text-gray-600 mb-6">
        This is a responsive navbar with a toggleable sidebar. On desktop, click
        the chevron icon to show/hide the sidebar. On mobile, use the hamburger
        menu to access navigation items.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Card {item}
            </h3>
            <p className="text-gray-600">
              This is a sample card to demonstrate the layout with the sidebar.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

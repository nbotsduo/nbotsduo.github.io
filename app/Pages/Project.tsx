import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import { EmblaModalCarousel } from "../Tools/ImageSlider/EmblaCarouselModal";

interface ProjectItem {
  id: number;
  title: string;
  images: string[];
  stack: string;
  detail: string;
}

export default function Project() {
  const [selectedCard, setSelectedCard] =  useState<ProjectItem | null>(null);
  // Inside your component, after useState
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const webDev = [
    {
      id: 1,
      title: "RCars",
      // Single image version (using legacy 'image' field)
      images:
        ["/Pictures/rcarsLarge.png",],
      // OR use images array with one item (both work with the conditional logic)
      // images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop"],
      stack: "React, Tailwind, Chart.js",
      detail:
        "Specially design for car enthusiast, this website contains many articles related to car stuff like car reviews and many more to come. Similar like carwow and topgear",
    },
    {
      id: 2,
      title: "VWorld",
      images: [
        "/Pictures/vworldLarge.jpg",
        "/Pictures/vworld2.jpg"
      ],
      stack: "PHP,MySQL",
      detail:
        "Develop Travel Booking System Web based for System Development Subject",
    },
    {
      id: 3,
      title: "La Tapi Resort Management System",
      // Single image (using images array with only 1 item)
      images: [
        "/Pictures/latapi.jpg",
        "/Pictures/latapi2.jpg",
        "/Pictures/latapi3.jpg",
      ],
      stack: "Visual Basic, .NET. Microsoft Access",
      detail:
        "La’Tapi Pantai Resorts management system offers many services such as room booking, facilities booking, entertainment, food and beverage, and so forth.",
    },
    {
      id: 4,
      title: "Tea Ordering System",
      images: [
        "/Pictures/teaLarge.png",

      ],
      stack: "MySQL, Java Enterprise",
      detail:
        "Tea Drink Ordering System is an online drink ordering system and inventory management system.",
    },

  ];
  const mobDev = [
    {
      id: 1,
      title: "Community Marketplace Mobile App",
      // Single image version (using legacy 'image' field)
      images:
        ["/Pictures/comMart.jpg",
          "/Pictures/comMart2.jpg", "/Pictures/comMart3.jpg", "/Pictures/comMart4.jpg", "/Pictures/comMart5.jpg",
        ],
      // OR use images array with one item (both work with the conditional logic)
      // images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop"],
      stack: "Kotlin,Firebase",
      detail:
        "Android Mobile Application for Final Year Project",
    },
    {
      id: 2,
      title: "Emasjid",
      images: [
        "/Pictures/emasjid.png",
        "/Pictures/emasjid2.png",
        "/Pictures/emasjid3.png",
      ],
      stack: "react Native, PHP, MySQL",
      detail:
        "Emasjid is a mobile application that is currently developed to help the mosque or masjid committee to spread announcements, conducting spiritual, economic, and physical activities to the community around the masjid area that are also called ‘qariah.’  .",
    },

  ];
  const dataAnal = [
    {
      id: 1,
      title: "COVID-19 Prediction Model",
      // Single image version (using legacy 'image' field)
      images:
        ["/Pictures/covidLarge.jpg"],
      // OR use images array with one item (both work with the conditional logic)
      // images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop"],
      stack: "Phyton, Jupiter Notebook, Anaconda",
      detail:
        "Predict future number of Covid cases based on the past number of cases in certain countries",
    },

  ];
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900  mb-4">Project</h2>
      {/* web Development */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Web Development
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {webDev.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="flex-none w-80 bg-white rounded-lg border border-gray-200 shadow-sm snap-start overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/*<Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />*/}
              <Image
                width={500}
                height={500}
                alt="Picture of the author"
                src={item.images[0]}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 h-20 w-full overflow-hidden">
                  <span className="line-clamp-3">{item.detail}</span>
                  {item.detail.length > 100 && (
                    <>
                      {" "}
                      <span
                        className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(item);
                        }}
                      >
                        ...see more
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Development */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Mobile Development
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {mobDev.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="flex-none w-80 bg-white rounded-lg border border-gray-200 shadow-sm snap-start overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/*<Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />*/}
              <Image
                width={500}
                height={500}
                alt="Picture of the author"
                src={item.images[0]}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 h-20 w-full overflow-hidden">
                  <span className="line-clamp-3">{item.detail}</span>
                  {item.detail.length > 100 && (
                    <>
                      {" "}
                      <span
                        className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(item);
                        }}
                      >
                        ...see more
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Data Analysis */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Data Analysis
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {dataAnal.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="flex-none w-80 bg-white rounded-lg border border-gray-200 shadow-sm snap-start overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/*<Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />*/}
              <Image
                width={500}
                height={500}
                alt="Picture of the author"
                src={item.images[0]}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 h-20 w-full overflow-hidden">
                  <span className="line-clamp-3">{item.detail}</span>
                  {item.detail.length > 100 && (
                    <>
                      {" "}
                      <span
                        className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(item);
                        }}
                      >
                        ...see more
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
          //             ↑ very light tint           ↑ subtle page blur
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel Header / Images */}
            <div className="relative w-full aspect-video">
              {selectedCard.images && selectedCard.images.length > 1 ? (
                // <ImageCarousel images={selectedCard.images} title={selectedCard.title} />
                <EmblaModalCarousel
                  images={selectedCard.images || []}
                  title={selectedCard.title}
                  onClose={() => setSelectedCard(null)}
                />
              ) : (
                // Fallback for old single-image projects
                <div className="relative w-full aspect-video">
                  <Image
                    src={selectedCard.images[0]}
                    alt={selectedCard.title}
                    fill
                    className="w-full h-64 object-cover rounded-t-lg"
                    priority
                  />
                </div>
              )}

              {/* Close button - moved to top-right of carousel area */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-white"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Details section */}
            <div className="p-6 sm:p-8 overflow-y-auto h-2/5 sm:h-1/3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {selectedCard.title}
              </h2>
              <h4 className="text-sm sm:text-base text-gray-500 mb-4">
                Tech Stack: {selectedCard.stack}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {selectedCard.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

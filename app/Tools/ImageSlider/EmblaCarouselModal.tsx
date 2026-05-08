"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
// Optional: import Autoplay from 'embla-carousel-autoplay'

interface EmblaModalCarouselProps {
  images: string[];
  title: string;
  onClose: () => void;
}

export function EmblaModalCarousel({
  images,
  title,
  onClose,
}: EmblaModalCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    // Optional autoplay: [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video">
      {/* Viewport */}
      <div className="embla h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((src, index) => {
            if (!src || typeof src !== "string" || src.trim() === "")
              return null;

            return (
              <div
                key={src + index}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
              >
                <Image
                  src={src}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover" // or object-contain if you prefer no cropping
                  priority={index < 2}
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  onError={(e) => console.error(`Failed to load: ${src}`)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 rounded-full hover:bg-black/60 text-white transition"
        disabled={!emblaApi?.canScrollPrev()}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 rounded-full hover:bg-black/60 text-white transition"
        disabled={!emblaApi?.canScrollNext()}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-white scale-125"
                : "bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>

      {/* Close */}
      {/*<button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-3 bg-black/50 rounded-full hover:bg-black/70 text-white"
      >
        <X className="w-7 h-7" />
      </button>*/}
    </div>
  );
}

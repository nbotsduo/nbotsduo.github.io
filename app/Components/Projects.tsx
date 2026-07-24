"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "data", label: "Data" },
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">
          Projects
        </h2>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                filter === cat.key
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:text-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => { setSelected(project); setImgIndex(0); }}
              className="text-left group rounded-lg bg-gray-800/40 border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative h-44 bg-gray-900">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-[10px] bg-gray-800 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 w-[90vw] max-w-5xl"
            >
              <div className="relative h-[70vh] bg-gray-900">
                <Image
                  src={selected.images[imgIndex]}
                  alt={selected.title}
                  fill
                  sizes="90vw"
                  className="object-contain p-3"
                />

                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgIndex((i) => (i === 0 ? selected.images.length - 1 : i - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgIndex((i) => (i === selected.images.length - 1 ? 0 : i + 1));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selected.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImgIndex(i);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i === imgIndex ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-white mb-1">{selected.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-gray-700 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

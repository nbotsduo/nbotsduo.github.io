"use client";

import { skills } from "../lib/data";

const categoryLabels: Record<string, string> = {
  backend: "Backend",
  frontend: "Frontend",
  database: "Database",
  tools: "Tools & Methods",
  mobile: "Mobile",
};

export default function Skills() {
  const grouped = skills.reduce<Record<string, string[]>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {Object.entries(grouped).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

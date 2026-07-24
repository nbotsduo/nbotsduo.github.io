"use client";

import { experiences } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                <h3 className="text-base font-medium text-white">
                  {exp.role}
                </h3>
                <span className="text-cyan-400 text-sm">{exp.company}</span>
              </div>
              <p className="text-gray-500 text-xs mb-3">{exp.period}</p>

              <ul className="space-y-1.5 mb-3">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs bg-gray-800 text-gray-400"
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

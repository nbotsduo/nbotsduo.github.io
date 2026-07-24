"use client";

import { personalInfo } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
          About
        </h2>

        <div className="space-y-4">
          {personalInfo.bio.map((paragraph, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            GitHub &rarr;
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            LinkedIn &rarr;
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Email &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Download, Mail } from "lucide-react";
import { personalInfo } from "../lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.12)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
          {personalInfo.name}
          <span className="block text-2xl sm:text-3xl text-gray-400 font-normal mt-2">
            {personalInfo.title}
          </span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Backend-focused, but I wander across the stack — from C# and .NET to React, mobile apps, and whatever else the job needs. Based in {personalInfo.location}.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

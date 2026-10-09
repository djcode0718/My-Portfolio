"use client";

import React from "react";
import { BookOpen, ExternalLink, Bookmark, Sparkles, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 05. RESEARCH & PUBLICATIONS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Peer-Reviewed Scientific Output.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#646A7A]">
            CONFERENCE PROCEEDINGS & IEEE XPLORE
          </div>
        </div>

        {/* Paper Feature Spotlight Card */}
        <div className="rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-[#C5FF4A]/40 transition-all p-6 sm:p-10 relative overflow-hidden group">
          {/* Subtle paper watermark texture */}
          <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none font-mono text-9xl font-bold select-none">
            IEEE
          </div>

          <div className="relative z-10 space-y-6">
            {/* Header Tag Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5" />
                  IEEE Xplore Published
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 text-[#959BAA] border border-white/10 font-mono text-xs">
                  I3CTCON 2026
                </span>
              </div>
              <span className="font-mono text-xs text-[#646A7A]">
                March 2026 • Peer-Reviewed
              </span>
            </div>

            {/* Paper Title */}
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug group-hover:text-[#C5FF4A] transition-colors">
                &ldquo;Hybrid Motion Synthesis for Speech-to-Sign Translation using Deterministic Linguistic Parsing & GRUs&rdquo;
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#959BAA] mt-2">
                Authors: <strong className="text-white">Sreevedh Jella</strong>, et al.
              </p>
            </div>

            {/* Abstract / Scientific Contribution */}
            <div className="p-5 rounded-xl bg-[#0B0C0E] border border-white/[0.06] space-y-3">
              <h4 className="font-mono text-xs text-[#C5FF4A] uppercase tracking-wider font-semibold">
                Core Contribution & Methodology
              </h4>
              <p className="text-xs sm:text-sm text-[#D0D4DE] leading-relaxed">
                Traditional end-to-end deep learning for continuous sign language generation
                suffers from acute motion-capture dataset scarcity. This paper demonstrates a
                data-efficient hybrid architecture combining deterministic linguistic rule parsing,
                dictionary-indexed keypose retrieval, and Gated Recurrent Units (GRUs) for
                co-articulated transition modeling with cosine velocity damping and non-manual facial
                markers.
              </p>
            </div>

            {/* DOI Link & Repository */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#959BAA]">
                <span className="text-[#646A7A]">DOI:</span>
                <span className="text-[#F3F3EE] select-all">10.1109/I3CTCON68242.2026.11507164</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/djcode0718/Sound2Sign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#181B22] border border-white/10 text-xs font-semibold text-white hover:text-[#C5FF4A] transition-colors"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://doi.org/10.1109/I3CTCON68242.2026.11507164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#C5FF4A] text-[#0B0C0E] hover:bg-[#D4FF6B] text-xs font-bold transition-all shadow-lg shadow-[#C5FF4A]/10"
                >
                  <span>Access on IEEE Xplore</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

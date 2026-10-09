"use client";

import React from "react";
import { ExternalLink, Bookmark, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ResearchSection() {
  return (
    <section id="research" className="py-12 sm:py-14 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 mb-6 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 05. SCIENTIFIC RESEARCH
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Peer-Reviewed Publication
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9DA3AF]">
            IEEE XPLORE • I3CTCON 2026 PROCEEDINGS
          </div>
        </div>

        {/* Compact Academic Spotlight Card */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#121419] border border-white/[0.08] hover:border-blue-500/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-[11px] font-semibold flex items-center gap-1.5">
                <Bookmark className="w-3 h-3" />
                IEEE Xplore Published
              </span>
              <span className="font-mono text-xs text-[#9DA3AF]">
                Conference Date: March 2026
              </span>
            </div>

            <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
              &ldquo;Hybrid Motion Synthesis for Speech-to-Sign Translation using Deterministic Linguistic Parsing & GRUs&rdquo;
            </h3>

            <p className="font-mono text-xs text-[#9DA3AF]">
              Authors: <strong className="text-white">Sreevedh Jella</strong>, et al.
            </p>

            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              Resolves deep learning data scarcity in sign language animation by combining
              deterministic English-to-Gloss grammar parsing, dictionary keypose retrieval,
              and GRUs for continuous joint co-articulation, velocity smoothing, and facial marker synthesis.
            </p>

            <div className="font-mono text-xs text-[#9DA3AF]">
              DOI Citation: <span className="text-[#F1F1EB]">10.1109/I3CTCON68242.2026.11507164</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-row md:flex-col items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="https://doi.org/10.1109/I3CTCON68242.2026.11507164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#C5FF4A] text-[#0C0D10] font-bold text-xs hover:bg-[#D4FF6B] transition-all shadow-sm whitespace-nowrap"
            >
              <span>Access on IEEE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/djcode0718/Sound2Sign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0C0D10] border border-white/10 text-white font-medium text-xs hover:text-[#C5FF4A] transition-colors whitespace-nowrap"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

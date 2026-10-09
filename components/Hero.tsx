"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Terminal, ShieldCheck, Zap } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center tech-grid-pattern overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5FF4A]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#16181F] border border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5FF4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5FF4A]"></span>
              </span>
              <span className="text-[#C5FF4A] font-semibold tracking-wider text-[11px]">
                {PERSONAL_INFO.statusText}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[#959BAA] text-[11px] hidden sm:inline">
                HYDERABAD, IN
              </span>
            </div>

            {/* Main Name */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight text-[#F3F3EE] leading-[0.95]">
                SREEVEDH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F3EE] via-white to-[#959BAA]">
                  JELLA
                </span>
              </h1>
            </div>

            {/* Headline */}
            <p className="font-display text-xl sm:text-2xl text-[#C5FF4A] font-medium leading-snug max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Supporting Copy */}
            <p className="text-[#959BAA] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Final-year Computer Science Engineering student specializing in{" "}
              <span className="text-white font-medium">AI & ML at BVRIT</span>. I design
              hybrid retrieval engines, multimodal inference pipelines, federated systems, and
              resilient backend architectures with verified benchmarks.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C5FF4A] text-[#0B0C0E] font-semibold text-sm hover:bg-[#D4FF6B] transition-all shadow-lg shadow-[#C5FF4A]/10 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#16181F] hover:bg-[#1E222B] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#C5FF4A]" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#16181F] hover:bg-[#1E222B] border border-white/10 text-[#959BAA] hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 w-full border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-white">0.80+</div>
                <div className="text-[11px] font-mono text-[#959BAA]">RAG Hit Rate</div>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-white">0.92</div>
                <div className="text-[11px] font-mono text-[#959BAA]">FedSegX Dice</div>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-white">250+</div>
                <div className="text-[11px] font-mono text-[#959BAA]">LeetCode Solved</div>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl text-[#C5FF4A]">IEEE</div>
                <div className="text-[11px] font-mono text-[#959BAA]">Xplore Author</div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Framed Profile Photograph (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative corner brackets */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5FF4A]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5FF4A]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5FF4A]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5FF4A]" />

              {/* Technical Frame Container */}
              <div className="relative bg-[#13161C] border border-white/10 rounded-lg p-3 shadow-2xl group overflow-hidden">
                {/* Header bar of frame */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08] text-[10px] font-mono text-[#959BAA]">
                  <span className="flex items-center gap-1.5 text-[#C5FF4A]">
                    <Terminal className="w-3 h-3" />
                    ID // SREEVEDH.DEV
                  </span>
                  <span className="text-[#646A7A]">17.4334° N, 78.3866° E</span>
                </div>

                {/* Photo with subtle framing */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-[#0B0C0E]">
                  <Image
                    src="/passport size photo.jpg"
                    alt="Sreevedh Jella - Software & AI Systems Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle technical scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-60" />
                </div>

                {/* Footer annotation of frame */}
                <div className="pt-2.5 mt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    <span>Verified Profile</span>
                  </div>
                  <span className="text-[10px] text-[#959BAA] px-2 py-0.5 rounded bg-white/[0.04]">
                    CSE (AI & ML)
                  </span>
                </div>
              </div>

              {/* Floating Engineering Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#16181F]/95 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 flex items-center justify-center text-[#C5FF4A]">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#959BAA] uppercase tracking-wider">
                    Focus
                  </span>
                  <span className="font-display font-bold text-xs text-white">
                    LLM & Retrieval Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 pt-8 flex items-center justify-between border-t border-white/[0.05] text-xs font-mono text-[#646A7A]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5FF4A]"></span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-1.5 text-[#959BAA] hover:text-[#C5FF4A] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

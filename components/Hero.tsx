"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Terminal, Mail, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Hero() {
  const scrollToFlagship = () => {
    document.getElementById("flagship")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center tech-grid-pattern border-b border-white/[0.08] overflow-hidden">
      {/* Subtle radial ambient glows (strictly background non-blocking) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C5FF4A]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Bulletproof 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Positioning & Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#13161C] border border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5FF4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5FF4A]"></span>
              </span>
              <span className="text-[#C5FF4A] font-semibold tracking-wider text-[11px]">
                {PERSONAL_INFO.statusText}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[#94A3B8] text-[11px] hidden sm:inline font-mono">
                HYDERABAD, INDIA
              </span>
            </div>

            {/* Candidate Name */}
            <div className="space-y-1.5">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tight text-[#F3F3EE] leading-[1.05]">
                SREEVEDH JELLA
              </h1>
              {/* Primary AI/ML Positioning Headline */}
              <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#C5FF4A]">
                {PERSONAL_INFO.primaryTitle}
              </div>
            </div>

            {/* Core Narrative / Recruiter Pitch */}
            <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Final-year B.Tech Computer Science (AI & ML) engineer at BVRIT (CGPA 8.40/10). I architect{" "}
              <strong className="text-white font-semibold">hybrid retrieval systems (0.80+ Hit Rate)</strong>,{" "}
              <strong className="text-white font-semibold">multimodal clinical copilots</strong>, and{" "}
              <strong className="text-white font-semibold">hardened FastAPI backends</strong> with empirical benchmarks.
            </p>

            {/* Four Core Competency Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
              <div className="p-2.5 rounded-lg bg-[#13161C] border border-white/[0.08] text-left">
                <div className="text-[10px] font-mono text-[#C5FF4A] font-bold">CORE FOCUS</div>
                <div className="text-xs font-semibold text-white mt-0.5">Applied AI / ML</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#13161C] border border-white/[0.08] text-left">
                <div className="text-[10px] font-mono text-[#C5FF4A] font-bold">SYSTEMS</div>
                <div className="text-xs font-semibold text-white mt-0.5">LLMs & Hybrid RAG</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#13161C] border border-white/[0.08] text-left">
                <div className="text-[10px] font-mono text-[#C5FF4A] font-bold">ENGINEERING</div>
                <div className="text-xs font-semibold text-white mt-0.5">FastAPI & Docker</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#13161C] border border-white/[0.08] text-left">
                <div className="text-[10px] font-mono text-[#C5FF4A] font-bold">PRODUCTS</div>
                <div className="text-xs font-semibold text-white mt-0.5">Full-Stack Apps</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToFlagship}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5FF4A] text-[#0B0C0E] font-bold text-sm hover:bg-[#D4FF6B] transition-all shadow-lg shadow-[#C5FF4A]/10 active:scale-[0.98]"
              >
                <span>Explore Flagship Systems</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#13161C] hover:bg-[#1A1E26] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#C5FF4A]" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#13161C] hover:bg-[#1A1E26] border border-white/10 text-[#94A3B8] hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#CBD5E1] hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 w-full border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">0.80+</div>
                <div className="text-xs font-mono text-[#94A3B8]">RAG Hit Rate</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">0.92</div>
                <div className="text-xs font-mono text-[#94A3B8]">FedSegX Dice</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">250+</div>
                <div className="text-xs font-mono text-[#94A3B8]">LeetCode Solved</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#C5FF4A]">IEEE</div>
                <div className="text-xs font-mono text-[#94A3B8]">Published Author</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Self-Contained Photograph Container (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Profile Card Container (no fragile negative bleed) */}
              <div className="relative bg-[#13161C] border border-white/10 rounded-2xl p-4 shadow-2xl">
                
                {/* Header bar of photograph card */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[#C5FF4A] font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    ID // SREEVEDH.DEV
                  </span>
                  <span className="text-[#94A3B8]">17.43° N, 78.38° E</span>
                </div>

                {/* Photograph with crisp framing */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0B0C0E] border border-white/5">
                  <Image
                    src="/passport size photo.jpg"
                    alt="Sreevedh Jella - Applied AI & ML Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                    className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Footer annotation of card */}
                <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    <span>Verified Profile</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] font-bold text-[11px]">
                    CSE (AI & ML)
                  </span>
                </div>
              </div>

              {/* Status subcard below the photo */}
              <div className="mt-3 p-3 rounded-xl bg-[#13161C] border border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>SPECIALIZATION</span>
                <span className="text-white font-medium">LLM & Multimodal AI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

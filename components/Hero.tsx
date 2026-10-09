"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 tech-grid-pattern border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main 2-Column Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Positioning & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121419] border border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5FF4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5FF4A]"></span>
              </span>
              <span className="text-[#C5FF4A] font-semibold text-[11px] tracking-wide">
                {PERSONAL_INFO.statusText}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[#9DA3AF] text-[11px] hidden sm:inline">
                B.TECH CSE (AI & ML) • 2023–2027
              </span>
            </div>

            {/* Candidate Name & Primary Professional Title */}
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="font-display font-bold text-lg sm:text-xl text-[#C5FF4A] mt-1">
                {PERSONAL_INFO.roleTitle}
              </div>
              <div className="font-mono text-xs sm:text-sm text-[#9DA3AF] mt-0.5">
                {PERSONAL_INFO.specializations}
              </div>
            </div>

            {/* Concise Supporting Statement */}
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.tagline} Final-year engineering student at BVRIT (CGPA 8.40/10) focusing
              on hybrid retrieval pipelines, multimodal inference, and hardened backend architectures.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C5FF4A] text-[#0C0D10] font-bold text-xs hover:bg-[#D4FF6B] transition-all shadow-md active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#121419] hover:bg-[#181B22] border border-white/10 text-white font-medium text-xs transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#121419] hover:bg-[#181B22] border border-white/10 text-[#9DA3AF] hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#D1D5DB] hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean, Compact Photograph Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[320px] bg-[#121419] border border-white/10 rounded-xl p-3 shadow-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-[11px] font-mono text-[#9DA3AF]">
                <span className="text-[#C5FF4A] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  SREEVEDH.DEV
                </span>
                <span>HYDERABAD, IN</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#0C0D10] border border-white/5">
                <Image
                  src="/passport size photo.jpg"
                  alt="Sreevedh Jella — Applied AI / ML Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Annotation footer */}
              <div className="pt-2 mt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#9DA3AF]">
                <span>BVRIT Narsapur</span>
                <span className="text-white font-medium">CGPA: 8.40/10</span>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Credibility Strip (Compact & High Impact) */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.credibilityPoints.map((point, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#121419]/60 border border-white/[0.06]">
              <div className="font-display font-extrabold text-lg sm:text-xl text-[#C5FF4A]">
                {point.value}
              </div>
              <div className="text-xs font-semibold text-white mt-0.5">
                {point.metric}
              </div>
              <div className="text-[11px] text-[#9DA3AF] mt-0.5 leading-snug">
                {point.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

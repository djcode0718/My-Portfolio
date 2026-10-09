"use client";

import React from "react";
import { FLAGSHIP_PROJECTS, FlagshipProject } from "@/data/portfolio-data";
import { ArrowUpRight, Sparkles, CheckCircle2, Workflow, Cpu, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface FlagshipShowcaseProps {
  onSelectProject: (project: FlagshipProject) => void;
}

export default function FlagshipShowcase({ onSelectProject }: FlagshipShowcaseProps) {
  return (
    <section id="projects" className="py-14 sm:py-16 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 02. FLAGSHIP SYSTEMS
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9DA3AF]">
            VERIFIED BENCHMARKS & HARDENED RUNTIMES
          </div>
        </div>

        {/* 2 Flagship Project Cards Stack */}
        <div className="space-y-8">
          {FLAGSHIP_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#121419] border border-white/[0.08] hover:border-[#C5FF4A]/40 transition-all duration-200 shadow-xl"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#181B22] text-[#C5FF4A] border border-[#C5FF4A]/20">
                    FLAGSHIP #{project.number}
                  </span>
                  {project.award && (
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/20 flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      {project.award}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181B22] hover:bg-[#C5FF4A] hover:text-[#0C0D10] text-xs font-semibold text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Body Layout */}
              <div className="pt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Description & Highlights (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-[#C5FF4A] mt-0.5 font-medium">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* 1 Clear Problem/Solution Sentence */}
                  <p className="text-sm text-[#D1D5DB] leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {/* 2-3 Strongest Verified Engineering Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9DA3AF] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0C0D10] text-[#9DA3AF] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics & Pipeline Flow (5 cols) */}
                <div className="lg:col-span-5 space-y-4 bg-[#0C0D10] border border-white/[0.06] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  
                  {/* Profiled Metrics */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#9DA3AF] uppercase">
                      Profiled Benchmark Metrics
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#121419] border border-white/5">
                          <div className="font-display font-extrabold text-lg text-[#C5FF4A]">
                            {m.value}
                          </div>
                          <div className="text-xs font-semibold text-white">
                            {m.label}
                          </div>
                          <div className="text-[10px] font-mono text-[#9DA3AF] mt-0.5 leading-tight">
                            {m.note}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pipeline Stepper Preview */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#9DA3AF]">
                      <span className="flex items-center gap-1.5 text-white">
                        <Workflow className="w-3 h-3 text-[#C5FF4A]" />
                        5-Stage Execution Pipeline
                      </span>
                      <span className="text-[#C5FF4A]">Deterministic</span>
                    </div>

                    <div className="grid grid-cols-5 gap-1 text-center font-mono text-[10px]">
                      {project.architectureSteps.map((step, idx) => (
                        <div key={idx} className="p-1 rounded bg-[#181B22] border border-white/5">
                          <div className="text-[#C5FF4A] font-bold">{idx + 1}</div>
                          <div className="text-[#9DA3AF] text-[9px] truncate">{step.tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deep dive modal trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#181B22] hover:bg-white/[0.08] text-xs font-semibold text-white hover:text-[#C5FF4A] transition-colors border border-white/5"
                    >
                      <span>Deep Dive Architecture & Tests</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

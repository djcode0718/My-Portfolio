"use client";

import React, { useState } from "react";
import {
  FLAGSHIP_PROJECTS,
  FlagshipProject,
} from "@/data/portfolio-data";
import {
  ArrowUpRight,
  Shield,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Activity,
  Workflow,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FlagshipShowcase() {
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "architecture" | "challenges" | "metrics">>({
    "codebase-copilot": "architecture",
    "mediscan-ai": "architecture",
  });

  const setTab = (projectId: string, tab: "architecture" | "challenges" | "metrics") => {
    setActiveTabMap((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="flagship" className="py-24 bg-[#0B0C0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
                // 01. FLAGSHIP CASE STUDIES
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                Evaluated AI Systems & Production Engines
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94A3B8]">
              GROUNDED IN EMPIRICAL BENCHMARKS & HARDENED RUNTIMES
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#CBD5E1] mt-3 max-w-2xl">
            Deep-dive presentations of two production-ready systems featuring AST-aware hybrid RAG,
            privacy-isolated multimodal inference, and automated evaluation suites.
          </p>
        </div>

        {/* Flagship Projects Stack */}
        <div className="space-y-16">
          {FLAGSHIP_PROJECTS.map((project) => {
            const currentTab = activeTabMap[project.id] || "architecture";

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#13161C] border border-white/10 hover:border-[#C5FF4A]/40 transition-all duration-300 p-6 sm:p-10 shadow-2xl overflow-hidden relative"
              >
                {/* Ambient glow in corner */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5FF4A]/[0.02] blur-[90px] pointer-events-none rounded-full" />

                {/* Top Badge & Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#181B22] text-[#C5FF4A] border border-[#C5FF4A]/20">
                      {project.badge}
                    </span>
                    {project.award && (
                      <span className="font-mono text-xs px-3 py-1 rounded-md bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30 flex items-center gap-1.5 font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.award}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181B22] hover:bg-[#C5FF4A] hover:text-[#0B0C0E] border border-white/10 text-white text-xs font-semibold transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Main Headline & Narrative */}
                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Context, Problem & Solution (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-[#C5FF4A] mt-1 font-medium">
                        {project.subtitle}
                      </p>
                      <p className="text-xs font-mono text-[#94A3B8] mt-1">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-sm text-[#CBD5E1] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* The Problem Breakdown */}
                    <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/[0.06] space-y-2">
                      <div className="font-mono text-xs text-red-400 font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        The Technical Challenge
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {project.coreProblem}
                      </p>
                    </div>

                    {/* The Architectural Solution */}
                    <div className="p-4 rounded-xl bg-[#0B0C0E] border border-[#C5FF4A]/20 space-y-2">
                      <div className="font-mono text-xs text-[#C5FF4A] font-semibold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        The Engineering Solution
                      </div>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed">
                        {project.architecturalSolution}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <div className="text-[11px] font-mono text-[#94A3B8] mb-2 uppercase">
                        Production Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[#181B22] border border-white/[0.08] text-xs font-mono text-[#CBD5E1]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Tabbed Deep Dive (Architecture Flow, Metrics, Challenges) (7 cols) */}
                  <div className="lg:col-span-7 bg-[#0B0C0E] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
                    
                    {/* Inner Navigation Tabs */}
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.08]">
                      <button
                        onClick={() => setTab(project.id, "architecture")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          currentTab === "architecture"
                            ? "bg-[#C5FF4A] text-[#0B0C0E] font-bold"
                            : "bg-[#13161C] text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        Pipeline Architecture
                      </button>
                      <button
                        onClick={() => setTab(project.id, "metrics")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          currentTab === "metrics"
                            ? "bg-[#C5FF4A] text-[#0B0C0E] font-bold"
                            : "bg-[#13161C] text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        Profiled Metrics
                      </button>
                      <button
                        onClick={() => setTab(project.id, "challenges")}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          currentTab === "challenges"
                            ? "bg-[#C5FF4A] text-[#0B0C0E] font-bold"
                            : "bg-[#13161C] text-[#94A3B8] hover:text-white"
                        }`}
                      >
                        Engineering Invariants
                      </button>
                    </div>

                    {/* Tab Content: Pipeline Architecture */}
                    {currentTab === "architecture" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] pb-1">
                          <span className="flex items-center gap-1.5 text-[#C5FF4A]">
                            <Workflow className="w-3.5 h-3.5" />
                            Deterministic Multi-Stage Pipeline
                          </span>
                          <span>5 Stages</span>
                        </div>
                        <div className="space-y-2.5">
                          {project.architectureSteps.map((step, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl bg-[#13161C] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#C5FF4A]/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-[#181B22] text-[#C5FF4A] font-mono text-xs flex items-center justify-center font-bold shrink-0">
                                  {idx + 1}
                                </span>
                                <div>
                                  <div className="text-xs font-bold text-white">
                                    {step.title}
                                  </div>
                                  <div className="text-[11px] text-[#94A3B8] max-w-md mt-0.5 leading-snug">
                                    {step.desc}
                                  </div>
                                </div>
                              </div>
                              <span className="self-start sm:self-center font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#C5FF4A] border border-white/5 shrink-0">
                                {step.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab Content: Profiled Metrics */}
                    {currentTab === "metrics" && (
                      <div className="space-y-4">
                        <div className="text-xs font-mono text-[#94A3B8]">
                          EMPIRICAL EVALUATION & RIGOROUS BENCHMARK RESULTS
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {project.metrics.map((m, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl bg-[#13161C] border border-white/[0.06] flex flex-col justify-between"
                            >
                              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#C5FF4A]">
                                {m.value}
                              </div>
                              <div className="text-xs font-semibold text-white mt-1">
                                {m.label}
                              </div>
                              <div className="text-[11px] font-mono text-[#94A3B8] mt-1 leading-snug">
                                {m.note}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab Content: Key Challenges */}
                    {currentTab === "challenges" && (
                      <div className="space-y-3">
                        <div className="text-xs font-mono text-[#94A3B8]">
                          PRODUCTION HARDENING & DEFENSIVE INVARIANTS
                        </div>
                        <div className="space-y-2.5">
                          {project.keyChallenges.map((challenge, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-[#13161C] border border-white/[0.05] flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                              <span className="text-xs text-[#CBD5E1] leading-relaxed">
                                {challenge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Card Footer: GitHub Link */}
                    <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                      <span>Open Source System</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C5FF4A] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Inspect Repository Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

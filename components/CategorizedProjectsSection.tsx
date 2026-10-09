"use client";

import React, { useState } from "react";
import {
  SECONDARY_PROJECTS,
  PROJECT_CATEGORIES,
  SecondaryProject,
  ProjectCategory,
} from "@/data/portfolio-data";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Filter,
  RotateCcw,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface CategorizedProjectsSectionProps {
  onSelectProject: (project: SecondaryProject) => void;
}

export default function CategorizedProjectsSection({
  onSelectProject,
}: CategorizedProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");

  const filteredProjects = SECONDARY_PROJECTS.filter((proj) => {
    if (selectedCategory === "All Projects") return true;
    return proj.categories.includes(selectedCategory);
  });

  return (
    <section className="py-14 sm:py-16 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 03. COMPLETE PROJECT PORTFOLIO
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Ranked Engineering Systems
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9DA3AF]">
            ORDERED BY EVIDENCE OF TECHNICAL DEPTH
          </div>
        </div>

        {/* Filter Controls Directly Above Grid */}
        <div className="mb-6 p-2 sm:p-2.5 rounded-xl bg-[#121419] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* Category Tabs (horizontal scroll on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#C5FF4A] text-[#0C0D10] font-bold shadow-sm"
                      : "bg-[#0C0D10] text-[#9DA3AF] hover:text-white hover:bg-white/[0.04] border border-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Count Pill & Reset */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0C0D10] border border-white/10 text-[#C5FF4A]">
              Showing {filteredProjects.length} of {SECONDARY_PROJECTS.length}
            </span>
            {selectedCategory !== "All Projects" && (
              <button
                onClick={() => setSelectedCategory("All Projects")}
                className="p-1 rounded bg-[#181B22] text-[#9DA3AF] hover:text-white transition-colors"
                title="Reset filter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Compact Grid of Ranked Secondary Projects */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center rounded-xl bg-[#121419] border border-white/[0.08] space-y-3">
            <p className="text-sm text-[#9DA3AF] font-mono">
              No projects found in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => setSelectedCategory("All Projects")}
              className="px-4 py-2 rounded-lg bg-[#C5FF4A] text-[#0C0D10] font-bold text-xs"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-xl bg-[#121419] border border-white/[0.07] hover:border-[#C5FF4A]/40 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Header Information */}
                <div className="space-y-3">
                  
                  {/* Top Bar with Number, Categories and Rank */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#181B22] text-[#C5FF4A] border border-[#C5FF4A]/20">
                        #{project.number}
                      </span>
                      {project.id === "razorpay-recoveriq" && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30 font-semibold">
                          TOP SECONDARY
                        </span>
                      )}
                      {project.paperUrl && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                          IEEE PUBLICATION
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.categories.slice(0, 2).map((cat, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0C0D10] text-[#9DA3AF] border border-white/5"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-white hover:text-[#C5FF4A] transition-colors">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs text-[#9DA3AF] mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Concise Summary */}
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Technical Decision Box */}
                  <div className="p-3 rounded-lg bg-[#0C0D10] border border-white/[0.05] space-y-1">
                    <div className="text-[10px] font-mono text-[#C5FF4A] font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Cpu className="w-3 h-3" />
                      Key Technical Decision
                    </div>
                    <p className="text-xs text-[#9DA3AF] leading-relaxed">
                      {project.keyTechnicalDecision}
                    </p>
                  </div>

                </div>

                {/* Footer with tech tags and links */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#181B22] text-[#9DA3AF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#C5FF4A] transition-colors"
                    >
                      <span>System Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#181B22] hover:bg-blue-500/20 text-blue-400 border border-white/10"
                          title="IEEE Xplore Paper (DOI)"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-[#181B22] hover:bg-[#C5FF4A] hover:text-[#0C0D10] text-white border border-white/10 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

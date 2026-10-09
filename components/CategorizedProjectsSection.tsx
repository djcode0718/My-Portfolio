"use client";

import React, { useState } from "react";
import {
  CATEGORIZED_PROJECTS,
  PROJECT_CATEGORIES,
  CategorizedProject,
  ProjectCategory,
} from "@/data/portfolio-data";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Layers,
  Filter,
  RotateCcw,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface CategorizedProjectsSectionProps {
  onSelectProject: (project: CategorizedProject) => void;
}

export default function CategorizedProjectsSection({
  onSelectProject,
}: CategorizedProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");

  const filteredProjects = CATEGORIZED_PROJECTS.filter((proj) => {
    if (selectedCategory === "All Projects") return true;
    return proj.categories.includes(selectedCategory);
  });

  return (
    <section id="projects" className="py-24 bg-[#0B0C0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 02. SPECIALIZED SYSTEMS & RESEARCH
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Categorized Project Portfolio
            </h2>
            <p className="text-sm text-[#CBD5E1] mt-2 max-w-xl">
              Eight distinct applied AI, multimodal research, computer vision, and full-stack software systems.
            </p>
          </div>

          <div className="font-mono text-xs text-[#94A3B8]">
            MULTI-DOMAIN IMPLEMENTATIONS
          </div>
        </div>

        {/* Filter Controls Directly Above Project Grid */}
        <div className="mb-8 p-3 rounded-2xl bg-[#13161C] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Category Tabs (scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="hidden md:flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#C5FF4A]" />
              Filter:
            </span>
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#C5FF4A] text-[#0B0C0E] font-bold shadow-md shadow-[#C5FF4A]/10 scale-[1.02]"
                      : "bg-[#0B0C0E] text-[#94A3B8] hover:text-white hover:bg-white/[0.04] border border-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Count Pill */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#0B0C0E] border border-white/10 text-[#C5FF4A]">
              Showing {filteredProjects.length} of {CATEGORIZED_PROJECTS.length} systems
            </span>
            {selectedCategory !== "All Projects" && (
              <button
                onClick={() => setSelectedCategory("All Projects")}
                className="p-1.5 rounded-lg bg-[#181B22] text-[#94A3B8] hover:text-white"
                title="Reset filter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#13161C] border border-white/[0.08] space-y-4">
            <p className="text-sm text-[#94A3B8] font-mono">
              No projects found in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => setSelectedCategory("All Projects")}
              className="px-4 py-2 rounded-xl bg-[#C5FF4A] text-[#0B0C0E] font-bold text-xs"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-[#C5FF4A]/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:shadow-[#C5FF4A]/5 relative"
              >
                {/* Header Information */}
                <div className="space-y-4">
                  
                  {/* Number & Category Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#181B22] text-[#C5FF4A] border border-[#C5FF4A]/20">
                      PROJECT #{project.number}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0B0C0E] text-[#94A3B8] border border-white/5"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#C5FF4A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#94A3B8] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics strip if present */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0B0C0E] border border-white/[0.05]">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="font-display font-bold text-sm text-[#C5FF4A]">
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] text-[#94A3B8] truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key points bullets */}
                  <ul className="space-y-1.5 pt-1">
                    {project.keyPoints.slice(0, 2).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8] leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Footer with tech tags and actions */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-3">
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#181B22] text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#C5FF4A] transition-colors"
                    >
                      <span>System Specs & Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#181B22] hover:bg-blue-500/20 text-blue-400 border border-white/10 hover:border-blue-500/30 transition-colors"
                          title="IEEE Xplore Publication"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#181B22] hover:bg-[#C5FF4A] hover:text-[#0B0C0E] border border-white/10 text-white transition-all"
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

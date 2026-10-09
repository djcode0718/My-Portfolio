"use client";

import React, { useState } from "react";
import {
  FEATURED_PROJECTS,
  SECONDARY_PROJECTS,
  Project,
} from "@/data/portfolio-data";
import ProjectCardVisual from "./ProjectCardVisual";
import { GithubIcon } from "@/components/Icons";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = "All Projects" | "AI / ML" | "LLM & RAG" | "Full Stack" | "Research";

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All Projects");
  const [showSecondary, setShowSecondary] = useState(false);

  const filterOptions: FilterCategory[] = [
    "All Projects",
    "AI / ML",
    "LLM & RAG",
    "Full Stack",
    "Research",
  ];

  // Filter primary and secondary projects
  const filteredFeatured = FEATURED_PROJECTS.filter((proj) =>
    activeFilter === "All Projects" ? true : proj.filterCategories.includes(activeFilter)
  );

  const filteredSecondary = SECONDARY_PROJECTS.filter((proj) =>
    activeFilter === "All Projects" ? true : proj.filterCategories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 02. PROOF OF WORK
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Less talk. More things that work.
            </h2>
            <p className="text-sm text-[#959BAA] mt-2 max-w-xl">
              Curated engineering case studies with verified benchmarks, hybrid retrieval
              architectures, and production hardening.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#13161C] border border-white/[0.08]">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? "bg-[#C5FF4A] text-[#0B0C0E] font-bold shadow-sm"
                    : "text-[#959BAA] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid (2x2 prominent layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFeatured.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-[#C5FF4A]/40 transition-all duration-300 p-6 sm:p-8 overflow-hidden hover:shadow-2xl hover:shadow-[#C5FF4A]/5"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#181B22] border border-white/[0.08] text-[#C5FF4A]">
                    PROJECT #{project.number}
                  </span>
                  <span className="font-mono text-xs text-[#646A7A]">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#C5FF4A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#959BAA] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#959BAA] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Custom Visual Architecture / Benchmark Widget */}
                <div className="pt-2">
                  <ProjectCardVisual project={project} />
                </div>
              </div>

              {/* Card Footer: Tech tags & Actions */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#181B22] text-[#959BAA] border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[#646A7A]">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F3F3EE] hover:text-[#C5FF4A] transition-colors"
                  >
                    <span>View Architecture & Metrics</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.paperUrl && (
                      <a
                        href={project.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#181B22] hover:bg-blue-500/20 text-blue-400 border border-white/10 hover:border-blue-500/30 transition-colors"
                        aria-label="IEEE Publication DOI Link"
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

        {/* Expandable Secondary Projects Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-[#C5FF4A]" />
              <h3 className="font-display font-bold text-xl text-white">
                Additional Engineering Systems & Prototypes
              </h3>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 text-[#959BAA]">
                {filteredSecondary.length} Repositories
              </span>
            </div>

            <button
              onClick={() => setShowSecondary(!showSecondary)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#13161C] hover:bg-[#181B22] border border-white/10 text-xs font-mono text-white transition-colors"
            >
              <span>{showSecondary ? "Collapse Projects" : "Explore All 6 Projects"}</span>
              {showSecondary ? (
                <ChevronUp className="w-3.5 h-3.5 text-[#C5FF4A]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[#C5FF4A]" />
              )}
            </button>
          </div>

          {showSecondary && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
              {filteredSecondary.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#13161C] border border-white/[0.08] hover:border-white/20 p-5 flex flex-col justify-between transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#646A7A]">
                      <span className="text-[#C5FF4A]">#{project.number}</span>
                      <span>{project.category}</span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#C5FF4A] transition-colors">
                      {project.title}
                    </h4>
                    <p className="font-mono text-xs text-[#959BAA]">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-[#959BAA] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#181B22] text-[#959BAA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-[11px] text-[#C5FF4A] font-semibold hover:underline"
                      >
                        Details
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-[#181B22] text-white hover:text-[#C5FF4A]"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

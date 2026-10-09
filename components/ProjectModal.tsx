"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, ShieldCheck, ArrowRight, Activity, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FlagshipProject, CategorizedProject } from "@/data/portfolio-data";

export type ModalProject = FlagshipProject | CategorizedProject;

interface ProjectModalProps {
  project: ModalProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isFlagship = "coreProblem" in project;
  const descriptionText = isFlagship ? project.summary : project.description;
  const highlights = isFlagship ? project.keyChallenges : project.keyPoints;
  const steps = isFlagship ? project.architectureSteps : null;
  const categoriesLabel = "categories" in project ? project.categories.join(" • ") : ("badge" in project ? project.badge : "");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#111317] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-mono text-xs text-[#C5FF4A] font-bold px-2 py-0.5 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20">
                PROJ #{project.number}
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                {categoriesLabel}
              </span>
            </div>
            <h2 id="modal-title" className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg bg-[#181B22] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          {/* Award or Distinction Banner */}
          {"award" in project && project.award && (
            <div className="p-3.5 rounded-lg bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 flex items-center gap-2.5 text-xs text-[#C5FF4A] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{project.award}</span>
            </div>
          )}

          {/* DOI / Publication Banner */}
          {"doi" in project && project.doi && (
            <div className="p-3.5 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs text-blue-400">
              <span className="font-mono">IEEE Xplore DOI: {project.doi}</span>
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold underline hover:text-white"
              >
                <span>Read on IEEE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
              System Architecture & Overview
            </h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {descriptionText}
            </p>
          </div>

          {/* Problem / Solution for Flagships */}
          {isFlagship && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/[0.06] space-y-1.5">
                <div className="text-xs font-mono text-red-400 font-semibold">The Core Problem</div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{project.coreProblem}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-[#C5FF4A]/20 space-y-1.5">
                <div className="text-xs font-mono text-[#C5FF4A] font-semibold">The Engineered Solution</div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">{project.architecturalSolution}</p>
              </div>
            </div>
          )}

          {/* Architecture Pipeline Steps (if available) */}
          {steps && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-[#C5FF4A] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Pipeline Execution Flow
              </h3>

              <div className="grid grid-cols-1 gap-2.5 bg-[#0B0C0E] border border-white/[0.08] p-4 rounded-xl">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-[#14171E] border border-white/[0.04] gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1F2430] text-[#C5FF4A] font-mono text-[11px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-medium text-white">{step.title}</span>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] sm:text-right max-w-sm">
                      {step.desc}
                    </div>
                    <span className="self-start sm:self-auto text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#C5FF4A] border border-white/5">
                      {step.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-3">
                Profiled Metrics & Evaluation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#14171E] border border-white/[0.06]"
                  >
                    <div className="font-display font-bold text-lg text-[#C5FF4A]">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-white">{m.label}</div>
                    {m.note && (
                      <div className="text-[10px] font-mono text-[#94A3B8] mt-0.5">
                        {m.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Details */}
          <div>
            <h3 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
              Verified Technical Highlights
            </h3>
            <ul className="space-y-2">
              {highlights.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#181B22] border border-white/10 text-xs font-mono text-[#CBD5E1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#181B22] text-xs font-medium text-[#94A3B8] hover:text-white"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {"paperUrl" in project && project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold"
              >
                <span>IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C5FF4A] text-[#0B0C0E] hover:bg-[#D4FF6B] text-xs font-semibold shadow-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Repository</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

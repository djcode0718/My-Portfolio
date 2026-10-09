"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, ShieldCheck, ArrowRight, Activity, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FlagshipProject, SecondaryProject } from "@/data/portfolio-data";

export type ModalProject = FlagshipProject | SecondaryProject;

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
  const descriptionText = isFlagship ? project.oneLiner : project.summary;
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
        className="relative w-full max-w-3xl bg-[#111317] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-7 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs text-[#C5FF4A] font-bold px-2 py-0.5 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20">
                PROJ #{project.number}
              </span>
              <span className="font-mono text-xs text-[#9DA3AF]">
                {categoriesLabel}
              </span>
            </div>
            <h2 id="modal-title" className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#9DA3AF] mt-0.5 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-[#181B22] border border-white/10 text-[#9DA3AF] hover:text-white hover:border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="py-5 space-y-5 max-h-[70vh] overflow-y-auto pr-1">
          {/* Award or Distinction Banner */}
          {"award" in project && project.award && (
            <div className="p-3 rounded-lg bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 flex items-center gap-2 text-xs text-[#C5FF4A] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{project.award}</span>
            </div>
          )}

          {/* DOI / Publication Banner */}
          {"doi" in project && project.doi && (
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs text-blue-400">
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
            <h3 className="text-xs font-mono text-[#9DA3AF] uppercase tracking-wider mb-1.5">
              System Overview & Goal
            </h3>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              {descriptionText}
            </p>
          </div>

          {/* Problem / Solution for Flagships */}
          {isFlagship ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0C0D10] border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono text-red-400 font-semibold">The Core Problem</div>
                <p className="text-xs text-[#9DA3AF] leading-relaxed">{project.coreProblem}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0C0D10] border border-[#C5FF4A]/20 space-y-1">
                <div className="text-xs font-mono text-[#C5FF4A] font-semibold">The Engineered Solution</div>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">{project.architecturalSolution}</p>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-[#0C0D10] border border-[#C5FF4A]/20 space-y-1">
              <div className="text-xs font-mono text-[#C5FF4A] font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Key Technical Decision
              </div>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                {project.keyTechnicalDecision}
              </p>
            </div>
          )}

          {/* Architecture Pipeline Steps for Flagship */}
          {isFlagship && project.architectureSteps && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono text-[#C5FF4A] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Multi-Stage Pipeline Execution
              </h3>

              <div className="grid grid-cols-1 gap-2 bg-[#0C0D10] border border-white/[0.08] p-3 rounded-xl">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-[#14171E] border border-white/[0.04] gap-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#181B22] text-[#C5FF4A] font-mono text-[11px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-medium text-white">{step.title}</span>
                    </div>
                    <div className="text-[11px] text-[#9DA3AF] sm:text-right max-w-sm">
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

          {/* Profiled Metrics */}
          {isFlagship && project.metrics && (
            <div>
              <h3 className="text-xs font-mono text-[#9DA3AF] uppercase tracking-wider mb-2">
                Empirical Evaluation Results
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#14171E] border border-white/[0.06]"
                  >
                    <div className="font-display font-bold text-base text-[#C5FF4A]">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-white">{m.label}</div>
                    <div className="text-[10px] font-mono text-[#9DA3AF] mt-0.5">
                      {m.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights for Flagship */}
          {isFlagship && project.highlights && (
            <div>
              <h3 className="text-xs font-mono text-[#9DA3AF] uppercase tracking-wider mb-1.5">
                Verified Engineering Highlights
              </h3>
              <ul className="space-y-1.5">
                {project.highlights.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#D1D5DB]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono text-[#9DA3AF] uppercase tracking-wider mb-1.5">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[#181B22] border border-white/10 text-xs font-mono text-[#D1D5DB]"
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
            className="px-3.5 py-1.5 rounded-lg bg-[#181B22] text-xs font-medium text-[#9DA3AF] hover:text-white"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {"paperUrl" in project && project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold"
              >
                <span>IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#C5FF4A] text-[#0C0D10] hover:bg-[#D4FF6B] text-xs font-semibold shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Inspect Repository</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

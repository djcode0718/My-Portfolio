"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import FlagshipShowcase from "@/components/FlagshipShowcase";
import CategorizedProjectsSection from "@/components/CategorizedProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import ProjectModal, { ModalProject } from "@/components/ProjectModal";
import { FLAGSHIP_PROJECTS, CATEGORIZED_PROJECTS } from "@/data/portfolio-data";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ModalProject | null>(null);

  const handleSelectProjectId = (id: string) => {
    const all = [...FLAGSHIP_PROJECTS, ...CATEGORIZED_PROJECTS];
    const found = all.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-[#F3F3EE] selection:bg-[#C5FF4A] selection:text-[#0B0C0E] relative overflow-x-hidden">
      {/* Navbar with quick links and command palette trigger */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Interactive Command Palette (⌘K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectId}
      />

      {/* 1. Hero Section: Applied AI/ML Positioning & Bulletproof Responsive Layout */}
      <Hero />

      {/* 2. Flagship Projects: CodeBase-Copilot & MediScanAI deep-dive case studies */}
      <FlagshipShowcase />

      {/* 3. Categorized Projects: Filterable multi-tagged repository grid */}
      <CategorizedProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 4. Professional Experience: Segritech software development intern */}
      <ExperienceSection />

      {/* 5. Technical Toolkit: 5 grouped panels across languages, CS, backend, DB & AI/ML */}
      <SkillsSection />

      {/* 6. Research Publication: Sound2Sign IEEE Xplore publication & DOI */}
      <ResearchSection />

      {/* 7. Achievements & Coding Profiles: Live/verified LeetCode, GitHub, HackerRank metrics */}
      <AchievementsSection />

      {/* 8. Contact Section: Prefilled mailto, copy email, resume download & footer */}
      <ContactSection />

      {/* Detailed Architecture & Evaluation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import FlagshipShowcase from "@/components/FlagshipShowcase";
import CategorizedProjectsSection from "@/components/CategorizedProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import ProjectModal, { ModalProject } from "@/components/ProjectModal";
import { FLAGSHIP_PROJECTS, SECONDARY_PROJECTS } from "@/data/portfolio-data";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ModalProject | null>(null);

  const handleSelectProjectId = (id: string) => {
    const all = [...FLAGSHIP_PROJECTS, ...SECONDARY_PROJECTS];
    const found = all.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0D10] text-[#F1F1EB] selection:bg-[#C5FF4A] selection:text-[#0C0D10] relative overflow-x-hidden">
      {/* 1. Compact Navbar with Quick Anchors & Resume Action */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Interactive Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectId}
      />

      {/* 2. Hero: Applied AI/ML Identity, Specialization & Verified Credibility Strip */}
      <Hero />

      {/* 3. Technical Toolkit: Positioned Immediately Near the Top for Rapid 5-Second Scanning */}
      <SkillsSection />

      {/* 4. Flagship Case Studies: Compact, High-Impact CodeBase-Copilot & MediScanAI */}
      <FlagshipShowcase onSelectProject={(project) => setSelectedProject(project)} />

      {/* 5. Complete Ranked Portfolio: Instant Multi-Tagged Filtering (RazorpayRecoverIQ Ranked #1) */}
      <CategorizedProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 6. Experience & Achievements: Segritech Internship, Hackathons & Honors in One Unified Flow */}
      <ExperienceSection />

      {/* 7. Research Publication: Sound2Sign IEEE Xplore Paper with DOI Resolution */}
      <ResearchSection />

      {/* 8. Verified Coding Profiles: LeetCode (250+), GitHub, HackerRank with Server-Side Stats */}
      <AchievementsSection />

      {/* 9. Contact & Next Steps: Frictionless Copy Email, Direct Mailto & Resume Download */}
      <ContactSection />

      {/* Comprehensive System Architecture & Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

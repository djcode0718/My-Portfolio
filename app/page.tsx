"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, Project } from "@/data/portfolio-data";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProjectId = (id: string) => {
    const allProjects = [...FEATURED_PROJECTS, ...SECONDARY_PROJECTS];
    const found = allProjects.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-[#F3F3EE] selection:bg-[#C5FF4A] selection:text-[#0B0C0E] relative overflow-x-hidden">
      {/* Navbar with command palette trigger */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Interactive Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectId}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Projects Showcase */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Experience Timeline */}
      <ExperienceSection />

      {/* Technical Toolkit & Skills */}
      <SkillsSection />

      {/* Research & Publications (IEEE Xplore) */}
      <ResearchSection />

      {/* Achievements & Coding Profiles */}
      <AchievementsSection />

      {/* Contact Section & Footer */}
      <ContactSection />

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO, FLAGSHIP_PROJECTS, SECONDARY_PROJECTS } from "@/data/portfolio-data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const allProjectsList = [...FLAGSHIP_PROJECTS, ...SECONDARY_PROJECTS];

  const items = [
    // Navigation
    {
      id: "nav-flagship",
      category: "Navigation",
      title: "Jump to Flagship Case Studies",
      icon: FolderGit2,
      action: () => {
        document.getElementById("flagship")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Jump to Categorized Projects",
      icon: FolderGit2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: "Jump to About Section",
      icon: GraduationCap,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Jump to Experience (Segritech)",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Jump to Skills & Toolkit",
      icon: Code2,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-research",
      category: "Navigation",
      title: "Jump to Research & Publications",
      icon: Sparkles,
      action: () => {
        document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    // Projects
    ...allProjectsList.map((proj) => ({
      id: `proj-${proj.id}`,
      category: "Project Case Studies",
      title: `${proj.title} — ${proj.subtitle}`,
      icon: Code2,
      action: () => {
        if (onSelectProject) {
          onSelectProject(proj.id);
        } else {
          document.getElementById(proj.id === "codebase-copilot" || proj.id === "mediscan-ai" ? "flagship" : "projects")?.scrollIntoView({ behavior: "smooth" });
        }
        onClose();
      },
    })),
    // Actions
    {
      id: "act-copy-email",
      category: "Actions",
      title: `Copy Email: ${PERSONAL_INFO.email}`,
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "act-resume",
      category: "Actions",
      title: "Download Resume PDF",
      icon: FileText,
      action: () => {
        window.open(PERSONAL_INFO.resumePath, "_blank");
        onClose();
      },
    },
    {
      id: "act-ieee",
      category: "Actions",
      title: "Open IEEE Xplore Paper (Sound2Sign DOI)",
      icon: ExternalLink,
      action: () => {
        window.open("https://doi.org/10.1109/I3CTCON68242.2026.11507164", "_blank");
        onClose();
      },
    },
    // Socials
    {
      id: "soc-github",
      category: "Profiles",
      title: "GitHub (@djcode0718)",
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "soc-leetcode",
      category: "Profiles",
      title: "LeetCode (250+ Solved)",
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.socials.leetcode, "_blank");
        onClose();
      },
    },
    {
      id: "soc-linkedin",
      category: "Profiles",
      title: "LinkedIn Profile",
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.socials.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? (filteredItems.length ? filteredItems.length - 1 : 0) : prev - 1
      );
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#111317] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#16181F]/50">
          <Search className="w-4 h-4 text-[#C5FF4A] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search projects, resume, skills..."
            className="w-full bg-transparent text-sm text-[#F3F3EE] placeholder-[#646A7A] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#959BAA] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="ml-2 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#959BAA]">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto py-2 divide-y divide-white/[0.04]">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#959BAA]">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-[#C5FF4A]/10 text-white"
                      : "text-[#959BAA] hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-md ${
                        isSelected
                          ? "bg-[#C5FF4A] text-[#0B0C0E]"
                          : "bg-[#181B22] text-[#959BAA]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div
                        className={`font-medium ${
                          isSelected ? "text-white" : "text-[#D0D4DE]"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#646A7A] font-mono">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#0B0C0E] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#646A7A] font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span className="text-[#C5FF4A]">Quick Navigation</span>
        </div>
      </div>
    </div>
  );
}

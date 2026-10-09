"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Command, Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["flagship", "projects", "about", "experience", "skills", "research", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Flagships", href: "#flagship", id: "flagship" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Research", href: "#research", id: "research" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-md bg-[#16181D] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#C5FF4A] group-hover:border-[#C5FF4A]/50 transition-colors">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-[#C5FF4A] transition-colors">
              SREEVEDH JELLA
            </span>
            <span className="font-mono text-[10px] text-[#959BAA] tracking-wider uppercase">
              AI & Software Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#13161C]/80 border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeSection === link.id
                  ? "bg-[#C5FF4A] text-[#0B0C0E] font-semibold"
                  : "text-[#959BAA] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions: Command Palette & Resume */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#13161C] border border-white/10 text-xs text-[#959BAA] hover:text-white hover:border-[#C5FF4A]/40 transition-colors"
          >
            <Command className="w-3.5 h-3.5 text-[#C5FF4A]" />
            <span className="font-mono text-[11px]">⌘K</span>
          </button>

          {/* Resume Link */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white/[0.05] hover:bg-[#C5FF4A] hover:text-[#0B0C0E] border border-white/10 hover:border-[#C5FF4A] text-xs font-medium text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open search command palette"
            className="p-2 rounded-md bg-[#13161C] border border-white/10 text-[#C5FF4A]"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md bg-[#13161C] border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0C0E]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#C5FF4A] text-[#0B0C0E] font-semibold"
                    : "bg-[#13161C] text-[#959BAA] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#C5FF4A] text-[#0B0C0E] font-semibold text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

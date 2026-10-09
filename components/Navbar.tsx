"use client";

import React, { useState, useEffect } from "react";
import { Command, Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["projects", "skills", "experience", "research", "contact"];
      const scrollPosition = window.scrollY + 180;

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
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Research", href: "#research", id: "research" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#0C0D10]/95 backdrop-blur-md border-b border-white/[0.08] py-2.5 shadow-xl shadow-black/40"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Monogram / Brand */}
        <a href="#" className="flex items-center gap-2.5 text-left group">
          <div className="w-8 h-8 rounded bg-[#16181F] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#C5FF4A] group-hover:border-[#C5FF4A]/40 transition-colors">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-white group-hover:text-[#C5FF4A] transition-colors leading-tight">
              Sreevedh Jella
            </span>
            <span className="font-mono text-[10px] text-[#9DA3AF] tracking-wider leading-tight">
              Applied AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121419]/90 border border-white/[0.08] px-3 py-1 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-[#C5FF4A] text-[#0C0D10] font-semibold"
                  : "text-[#9DA3AF] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open command search"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#121419] border border-white/10 text-xs text-[#9DA3AF] hover:text-white hover:border-[#C5FF4A]/40 transition-colors"
          >
            <Command className="w-3.5 h-3.5 text-[#C5FF4A]" />
            <span className="font-mono text-[11px]">⌘K</span>
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-[#C5FF4A] hover:text-[#0C0D10] border border-white/10 text-xs font-semibold text-white transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-1.5 rounded bg-[#121419] border border-white/10 text-[#C5FF4A]"
            aria-label="Command search"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-[#121419] border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0D10]/98 border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  activeSection === link.id
                    ? "bg-[#C5FF4A] text-[#0C0D10] font-bold"
                    : "bg-[#121419] text-[#9DA3AF] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#C5FF4A] text-[#0C0D10] font-bold text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

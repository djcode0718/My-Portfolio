"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prefilledMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    "AI/ML Engineering Role — Sreevedh Jella"
  )}&body=${encodeURIComponent(
    "Hi Sreevedh,\n\nI reviewed your portfolio and project case studies (CodeBase-Copilot, MediScanAI, RecoverIQ, Sound2Sign). I'd like to discuss an engineering role with our team.\n\nBest regards,"
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#0C0D10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Contact Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#121419] border border-white/[0.08] relative overflow-hidden">
          
          <div className="max-w-2xl space-y-5">
            <div>
              <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
                // 07. NEXT STEPS & CONTACT
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Ready to Discuss Engineering Roles?
              </h2>
              <p className="text-xs sm:text-sm text-[#D1D5DB] mt-2 leading-relaxed">
                I am actively seeking Applied AI/ML and Backend Engineering roles.
                Whether you have an open position or want to discuss technical architectures,
                reach out directly.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2.5 rounded-lg bg-[#0C0D10] border border-white/10 hover:border-[#C5FF4A]/40 text-white font-mono text-xs transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#9DA3AF]">
                  {copied ? (
                    <span className="text-[#C5FF4A] font-bold">COPIED!</span>
                  ) : (
                    <span>COPY</span>
                  )}
                </span>
              </button>

              {/* Direct Mailto */}
              <a
                href={prefilledMailto}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#C5FF4A] text-[#0C0D10] font-bold text-xs hover:bg-[#D4FF6B] transition-all shadow-sm"
              >
                <span>Compose Direct Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Resume Download */}
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#181B22] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-4 text-xs font-mono text-[#9DA3AF]">
              <span>DIRECT PROFILES:</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C5FF4A] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C5FF4A] transition-colors"
              >
                GitHub
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C5FF4A] transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>

        </div>

        {/* Global Clean Footer */}
        <footer className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6B7280] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A]"></span>
            <span>© {year} Sreevedh Jella • Applied AI & ML Engineer</span>
          </div>

          <a href="#" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </footer>

      </div>
    </section>
  );
}

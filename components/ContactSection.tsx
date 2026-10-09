"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  FileText,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = React.useState("2026");

  React.useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const prefilledMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    "Engineering Inquiry / Opportunity — Sreevedh Jella"
  )}&body=${encodeURIComponent(
    "Hi Sreevedh,\n\nI reviewed your portfolio and project case studies (CodeBase-Copilot, MediScanAI, Sound2Sign, FedSegX). I would love to connect regarding an engineering opportunity / technical collaboration.\n\nBest regards,"
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Container */}
        <div className="rounded-3xl bg-[#13161C] border border-white/[0.08] p-8 sm:p-14 relative overflow-hidden">
          {/* Subtle grid and accent blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5FF4A]/[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-3xl space-y-8 relative z-10">
            <div>
              <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-3">
                // 07. INITIATE CONTACT
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Have an interesting problem? <br />
                <span className="text-[#C5FF4A]">Let&apos;s build something.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#959BAA] mt-4 leading-relaxed">
                I am actively seeking software engineering and AI/ML engineering roles where I can
                design high-throughput retrieval pipelines, hardened APIs, and production systems.
                Whether you have an opportunity or want to discuss technical architectures, my inbox is open.
              </p>
            </div>

            {/* Email Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Copy Email Button with Feedback */}
              <button
                onClick={copyEmail}
                className="flex items-center justify-between sm:justify-start gap-3 px-5 py-3.5 rounded-xl bg-[#0B0C0E] border border-white/10 hover:border-[#C5FF4A]/50 text-white font-mono text-xs transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5FF4A]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-[10px] text-[#959BAA]">
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#C5FF4A]" />
                      <span className="text-[#C5FF4A] font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </div>
              </button>

              {/* Direct Mailto Compose */}
              <a
                href={prefilledMailto}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5FF4A] text-[#0B0C0E] font-bold text-xs hover:bg-[#D4FF6B] transition-all shadow-lg shadow-[#C5FF4A]/10"
              >
                <span>Compose Direct Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Download Resume */}
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#181B22] hover:bg-[#202530] border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <FileText className="w-4 h-4 text-[#C5FF4A]" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-[#959BAA]">
              <span>CONNECT DIRECTLY:</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white hover:text-[#C5FF4A] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white hover:text-[#C5FF4A] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white hover:text-[#C5FF4A] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#646A7A] gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
            <span className="text-[#959BAA]">
              © {year} Sreevedh Jella. Built with Next.js, TypeScript & Tailwind.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

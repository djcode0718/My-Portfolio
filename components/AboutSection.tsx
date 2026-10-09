"use client";

import React from "react";
import { GraduationCap, Compass, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 01. CONTEXT & BACKGROUND
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Engineering with Intent.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#646A7A]">
            BVRIT HYDERABAD • CLASS OF 2027
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#959BAA] text-base leading-relaxed">
            <p className="text-lg text-[#F3F3EE] font-medium leading-relaxed">
              I am a final-year B.Tech student pursuing{" "}
              <span className="text-[#C5FF4A]">
                Computer Science Engineering (AI & ML) at BVRIT, Narsapur
              </span>{" "}
              (CGPA: 8.40/10), building software systems with Python, SQL, REST APIs, and
              backend frameworks.
            </p>

            <p>
              Rather than treating machine learning as isolated notebook prototypes, I focus on
              the engineering around models: how retrieval systems handle diverse lexicons, how
              concurrency bounds prevent production bottlenecks, how federated architectures
              preserve privacy, and how automated evaluation suites establish real confidence.
            </p>

            <div className="p-5 rounded-xl bg-[#13161C] border border-white/[0.08] space-y-3">
              <div className="font-mono text-xs text-[#C5FF4A] uppercase tracking-wider font-semibold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                Technical Problem Areas I Care About
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#D0D4DE]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <span>Production-oriented LLM & RAG systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <span>Retrieval quality, MRR & latency evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <span>FastAPI services & hardened backend APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <span>Federated & distributed machine learning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Academic & Technical Blueprint Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Panel */}
            <div className="p-6 rounded-xl bg-[#13161C] border border-white/[0.08] relative overflow-hidden group hover:border-[#C5FF4A]/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 flex items-center justify-center text-[#C5FF4A] mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.05] text-[#C5FF4A] font-semibold border border-white/10">
                  CGPA: 8.40 / 10
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-xs text-[#959BAA] mt-1">
                {PERSONAL_INFO.education.degree}
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#646A7A]">
                <span>Duration</span>
                <span className="text-[#D0D4DE]">{PERSONAL_INFO.education.period}</span>
              </div>
            </div>

            {/* Core Philosophy / Work Ethic Panel */}
            <div className="p-6 rounded-xl bg-[#13161C] border border-white/[0.08] relative">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Full-Stack Systems Orientation
              </h3>
              <p className="text-xs text-[#959BAA] mt-2 leading-relaxed">
                From data ingestion and preprocessing to vector databases, local model inference,
                and Dockerized API endpoints, I build software that runs deterministically and
                measures its own performance.
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#C5FF4A]">
                  238+ Automated Test Suites
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-xs text-white hover:text-[#C5FF4A] font-medium"
                >
                  <span>See Systems</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

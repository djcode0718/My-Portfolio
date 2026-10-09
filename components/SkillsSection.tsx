"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolio-data";
import { Cpu, Terminal, Database, Binary } from "lucide-react";

export default function SkillsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Cpu;
      case 1:
        return Terminal;
      case 2:
        return Database;
      default:
        return Binary;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-14 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 01. TECHNICAL TOOLKIT
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Core Capabilities & Stack
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9DA3AF]">
            PRIORITIZED FOR AI/ML & BACKEND RECRUITING
          </div>
        </div>

        {/* 4 Compact Skill Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#121419] border border-white/[0.07] hover:border-white/[0.15] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#C5FF4A]" />
                      <h3 className="font-display font-bold text-sm sm:text-base text-white">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-[#C5FF4A] border border-white/5 font-semibold">
                      {group.priority}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0C0D10] border border-white/[0.06] text-xs font-mono text-[#D1D5DB] hover:text-[#C5FF4A] hover:border-[#C5FF4A]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

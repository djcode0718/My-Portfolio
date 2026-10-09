"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Terminal, Database, Cpu, Wrench, Binary, Check } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Binary;
      case 1:
        return Cpu;
      case 2:
        return Wrench;
      case 3:
        return Database;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 04. TECHNICAL TOOLKIT
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Systems & Engineering Stack.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#646A7A]">
            GROUNDED IN THEORY • BATTLE-TESTED IN CODE
          </div>
        </div>

        {/* 5 Distinct Grouped Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const isHovered = activeCategory === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`rounded-2xl bg-[#13161C] border transition-all duration-300 p-6 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#C5FF4A]/50 bg-[#161922] shadow-xl shadow-[#C5FF4A]/5"
                    : "border-white/[0.08]"
                } ${idx === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#181B22] text-[#C5FF4A] border border-white/5">
                      {cat.badge}
                    </span>
                    <Icon className="w-4 h-4 text-[#959BAA]" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#959BAA] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0C0E] border border-white/[0.07] text-xs font-mono text-[#D0D4DE] hover:text-[#C5FF4A] hover:border-[#C5FF4A]/30 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C5FF4A]/60" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

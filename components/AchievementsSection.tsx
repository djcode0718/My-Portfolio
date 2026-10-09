"use client";

import React from "react";
import { ACHIEVEMENTS, CODING_PROFILES } from "@/data/portfolio-data";
import { Trophy, Code, Medal, Users, ExternalLink, ArrowUpRight } from "lucide-react";

export default function AchievementsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Trophy;
      case 1:
        return Code;
      case 2:
        return Code;
      case 3:
        return Users;
      default:
        return Medal;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 06. EXECUTION & PROFILES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Proof of Consistency.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#646A7A]">
            COMPETITIONS • ALGORITHMS • LEADERSHIP
          </div>
        </div>

        {/* Achievement Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#13161C] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-[#C5FF4A]/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#C5FF4A] px-2 py-0.5 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20">
                      {ach.category}
                    </span>
                    <Icon className="w-4 h-4 text-[#959BAA] group-hover:text-[#C5FF4A] transition-colors" />
                  </div>

                  <div className="font-display font-bold text-xl text-white mb-1">
                    {ach.highlight}
                  </div>
                  <h3 className="text-xs font-mono text-[#C5FF4A] font-semibold mb-3">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-[#959BAA] leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {ach.url && (
                  <div className="pt-4 mt-4 border-t border-white/[0.06]">
                    <a
                      href={ach.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#C5FF4A] transition-colors"
                    >
                      <span>{ach.urlLabel || "View Verification"}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coding & Professional Profiles Strip */}
        <div className="rounded-2xl bg-[#13161C] border border-white/[0.08] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-white">
              Public Profiles & Repositories
            </h3>
            <span className="font-mono text-xs text-[#646A7A]">DIRECT LINKS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CODING_PROFILES.map((profile, idx) => (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0B0C0E] border border-white/[0.06] hover:border-[#C5FF4A]/50 hover:bg-[#161820] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-base text-white group-hover:text-[#C5FF4A] transition-colors">
                      {profile.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#959BAA] group-hover:text-[#C5FF4A] transition-colors" />
                  </div>
                  <div className="font-mono text-xs text-[#C5FF4A] mb-1">
                    {profile.handle}
                  </div>
                  <p className="text-[11px] text-[#646A7A] leading-relaxed">
                    {profile.stats}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

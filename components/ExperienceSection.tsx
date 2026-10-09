"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#0B0C0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 03. PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Engineering in Practice.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#646A7A]">
            VERIFIED INDUSTRY TRACK RECORD
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#13161C] border-2 border-[#C5FF4A] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#13161C] border border-white/[0.08] p-6 sm:p-8 hover:border-[#C5FF4A]/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {exp.company}
                      </h3>
                      {exp.legalEntity && (
                        <span className="text-[11px] font-mono text-[#646A7A] hidden md:inline">
                          ({exp.legalEntity})
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-[#C5FF4A] mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#959BAA]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5FF4A]" />
                      {exp.period}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-xs font-mono text-[#646A7A] uppercase tracking-wider">
                    Key Contributions & Measured Impact
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-sm text-[#D0D4DE] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Tags */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-[#181B22] border border-white/5 text-xs font-mono text-[#959BAA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

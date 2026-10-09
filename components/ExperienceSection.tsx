"use client";

import React from "react";
import { EXPERIENCE_ITEMS, HONORS_AND_AWARDS, PERSONAL_INFO } from "@/data/portfolio-data";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Users,
  GraduationCap,
  Medal,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-16 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 04. EXPERIENCE & CREDIBILITY
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Work History & Honors
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9DA3AF]">
            PROVEN TRACK RECORD IN INDUSTRY & COMPETITIONS
          </div>
        </div>

        {/* 2-Column Layout: Internship on Left (7 cols), Honors & Education on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Segritech Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#9DA3AF] uppercase">
              Professional Internship
            </div>

            {EXPERIENCE_ITEMS.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#121419] border border-white/[0.08] hover:border-white/[0.15] transition-colors space-y-4"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.06] gap-2">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {exp.company}
                    </h3>
                    <div className="text-xs font-semibold text-[#C5FF4A]">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#9DA3AF]">
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

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-1">
                  {exp.achievements.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs text-[#9DA3AF] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/[0.06]">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0C0D10] text-[#9DA3AF] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Honors, Leadership & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#9DA3AF] uppercase">
              Education & Honors
            </div>

            {/* Education Card */}
            <div className="p-4 rounded-xl bg-[#121419] border border-white/[0.08] flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#181B22] border border-white/5 text-[#C5FF4A] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-white">
                    {PERSONAL_INFO.education.institution}
                  </h4>
                  <span className="font-mono text-xs text-[#C5FF4A] font-bold">
                    CGPA 8.40/10
                  </span>
                </div>
                <p className="text-xs text-[#9DA3AF]">
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className="text-[11px] font-mono text-[#6B7280]">
                  {PERSONAL_INFO.education.period}
                </p>
              </div>
            </div>

            {/* Honors and Competitions */}
            <div className="space-y-2.5">
              {HONORS_AND_AWARDS.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#121419] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-[#0C0D10] text-[#C5FF4A] shrink-0 mt-0.5">
                    {idx === 0 ? <Trophy className="w-4 h-4" /> : <Medal className="w-4 h-4" />}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xs text-white">
                        {item.title}
                      </span>
                      <span className="font-mono text-[10px] text-[#9DA3AF]">
                        {item.context}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#C5FF4A]">
                      {item.highlight}
                    </div>
                    <p className="text-[11px] text-[#9DA3AF] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

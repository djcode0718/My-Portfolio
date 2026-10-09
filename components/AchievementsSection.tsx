"use client";

import React, { useState, useEffect } from "react";
import { ACHIEVEMENTS } from "@/data/portfolio-data";
import {
  Trophy,
  Code,
  Medal,
  Users,
  ExternalLink,
  ArrowUpRight,
  GitBranch,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/Icons";
import { ProfileStatsResponse } from "@/app/api/profile-stats/route";

export default function AchievementsSection() {
  const [profileStats, setProfileStats] = useState<ProfileStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/profile-stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: ProfileStatsResponse) => {
        if (isMounted) {
          setProfileStats(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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

  const lcCount = profileStats?.leetcode?.totalSolved ?? 250;
  const ghRepos = profileStats?.github?.publicRepos ?? 10;
  const ghFollowers = profileStats?.github?.followers ?? 2;
  const syncStatus = profileStats?.leetcode?.status === "live" ? "LIVE SYNCED" : "VERIFIED DATA";

  return (
    <section id="achievements" className="py-24 bg-[#0B0C0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-2">
              // 06. EXECUTION & PUBLIC PROFILES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Proof of Consistency & Problem Solving
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#13161C] border border-white/10 text-[#C5FF4A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] animate-pulse" />
              {syncStatus}
            </span>
          </div>
        </div>

        {/* Live Coding Profiles Bar */}
        <div className="mb-16 rounded-2xl bg-[#13161C] border border-white/[0.08] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-white">
              Public Coding Profiles & Repositories
            </h3>
            <span className="font-mono text-xs text-[#94A3B8]">
              SERVER-VALIDATED PUBLIC METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* LeetCode Tile */}
            <a
              href="https://leetcode.com/u/sj0718/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0C0E] border border-white/[0.06] hover:border-[#C5FF4A]/50 hover:bg-[#161820] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <LeetCodeIcon className="w-4 h-4 text-yellow-500" />
                    <span className="font-display font-bold text-base text-white group-hover:text-[#C5FF4A] transition-colors">
                      LeetCode
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5FF4A] transition-colors" />
                </div>
                <div className="font-mono text-xs text-[#C5FF4A] mb-2">@sj0718</div>
                <div className="font-display font-extrabold text-2xl text-white mb-1">
                  {lcCount}+ Solved
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Data Structures, Dynamic Programming, Graphs & Trees
                </p>
              </div>
            </a>

            {/* GitHub Tile */}
            <a
              href="https://github.com/djcode0718"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0C0E] border border-white/[0.06] hover:border-[#C5FF4A]/50 hover:bg-[#161820] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span className="font-display font-bold text-base text-white group-hover:text-[#C5FF4A] transition-colors">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5FF4A] transition-colors" />
                </div>
                <div className="font-mono text-xs text-[#C5FF4A] mb-2">@djcode0718</div>
                <div className="font-display font-extrabold text-2xl text-white mb-1">
                  {ghRepos} Public Repos
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Open Source AI Systems, RAG Pipelines & Backend APIs
                </p>
              </div>
            </a>

            {/* HackerRank Tile */}
            <a
              href="https://www.hackerrank.com/profile/23211a66f8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0C0E] border border-white/[0.06] hover:border-[#C5FF4A]/50 hover:bg-[#161820] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-base text-white group-hover:text-[#C5FF4A] transition-colors">
                    HackerRank
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5FF4A] transition-colors" />
                </div>
                <div className="font-mono text-xs text-[#C5FF4A] mb-2">@23211a66f8</div>
                <div className="font-display font-extrabold text-2xl text-white mb-1">
                  Verified Skills
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Problem Solving, Python & SQL Algorithmic Proficiency
                </p>
              </div>
            </a>

            {/* LinkedIn Tile */}
            <a
              href="https://www.linkedin.com/in/sreevedh-jella"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0B0C0E] border border-white/[0.06] hover:border-[#C5FF4A]/50 hover:bg-[#161820] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-base text-white group-hover:text-[#C5FF4A] transition-colors">
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5FF4A] transition-colors" />
                </div>
                <div className="font-mono text-xs text-[#C5FF4A] mb-2">@sreevedh-jella</div>
                <div className="font-display font-extrabold text-2xl text-white mb-1">
                  Professional Network
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Engineering Case Studies, Technical Insights & Updates
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* Achievement Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#13161C] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-[#C5FF4A]/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#C5FF4A] px-2.5 py-0.5 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 font-bold">
                      {ach.category}
                    </span>
                    <Icon className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5FF4A] transition-colors" />
                  </div>

                  <div className="font-display font-bold text-xl text-white mb-1">
                    {ach.highlight}
                  </div>
                  <h3 className="text-xs font-mono text-[#C5FF4A] font-semibold mb-3">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
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
                      <span>{ach.urlLabel || "View Proof"}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

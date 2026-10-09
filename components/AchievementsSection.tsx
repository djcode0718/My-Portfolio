"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from "@/components/Icons";
import { ProfileStatsResponse } from "@/app/api/profile-stats/route";

export default function AchievementsSection() {
  const [profileStats, setProfileStats] = useState<ProfileStatsResponse | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/profile-stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: ProfileStatsResponse) => {
        if (isMounted) setProfileStats(data);
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const lcCount = profileStats?.leetcode?.totalSolved ?? 250;
  const ghRepos = profileStats?.github?.publicRepos ?? 31;
  const syncLabel = profileStats?.github?.status === "live" ? "LIVE SYNCED" : "VERIFIED DATA";

  return (
    <section className="py-12 sm:py-14 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 mb-6 border-b border-white/[0.08] gap-2">
          <div>
            <div className="font-mono text-xs text-[#C5FF4A] tracking-widest uppercase mb-1">
              // 06. VERIFIED CODING PROFILES
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Algorithmic Consistency & Code
            </h2>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#121419] border border-white/10 text-[#C5FF4A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] animate-pulse" />
            <span>{syncLabel}</span>
          </div>
        </div>

        {/* 4 Clean Coding Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/sj0718/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#121419] border border-white/[0.06] hover:border-[#C5FF4A]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <LeetCodeIcon className="w-4 h-4 text-yellow-500" />
                  <span className="font-display font-bold text-sm text-white group-hover:text-[#C5FF4A] transition-colors">
                    LeetCode
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9DA3AF] group-hover:text-[#C5FF4A] transition-colors" />
              </div>
              <div className="font-mono text-xs text-[#C5FF4A] mb-1">@sj0718</div>
              <div className="font-display font-extrabold text-xl text-white">
                {lcCount}+ Solved
              </div>
            </div>
            <p className="text-[11px] text-[#9DA3AF] mt-2">
              Data Structures & Algorithmic Problem Solving
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/djcode0718"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#121419] border border-white/[0.06] hover:border-[#C5FF4A]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="font-display font-bold text-sm text-white group-hover:text-[#C5FF4A] transition-colors">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9DA3AF] group-hover:text-[#C5FF4A] transition-colors" />
              </div>
              <div className="font-mono text-xs text-[#C5FF4A] mb-1">@djcode0718</div>
              <div className="font-display font-extrabold text-xl text-white">
                {ghRepos} Public Repos
              </div>
            </div>
            <p className="text-[11px] text-[#9DA3AF] mt-2">
              AI Pipelines, Hybrid RAG & Production Backends
            </p>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/23211a66f8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#121419] border border-white/[0.06] hover:border-[#C5FF4A]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-bold text-sm text-white group-hover:text-[#C5FF4A] transition-colors">
                  HackerRank
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9DA3AF] group-hover:text-[#C5FF4A] transition-colors" />
              </div>
              <div className="font-mono text-xs text-[#C5FF4A] mb-1">@23211a66f8</div>
              <div className="font-display font-extrabold text-xl text-white">
                Verified Skills
              </div>
            </div>
            <p className="text-[11px] text-[#9DA3AF] mt-2">
              Problem Solving, Python & SQL Verification
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sreevedh-jella"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#121419] border border-white/[0.06] hover:border-[#C5FF4A]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  <span className="font-display font-bold text-sm text-white group-hover:text-[#C5FF4A] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9DA3AF] group-hover:text-[#C5FF4A] transition-colors" />
              </div>
              <div className="font-mono text-xs text-[#C5FF4A] mb-1">@sreevedh-jella</div>
              <div className="font-display font-extrabold text-xl text-white">
                Network
              </div>
            </div>
            <p className="text-[11px] text-[#9DA3AF] mt-2">
              Professional Updates & Engineering Case Studies
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

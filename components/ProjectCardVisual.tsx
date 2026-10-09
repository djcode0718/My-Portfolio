"use client";

import React from "react";
import { Project } from "@/data/portfolio-data";
import {
  Code,
  Layers,
  Sparkles,
  GitPullRequest,
  Check,
  Shield,
  Activity,
  FileCode2,
  Workflow,
  Cpu,
} from "lucide-react";

export default function ProjectCardVisual({ project }: { project: Project }) {
  if (project.id === "codebase-copilot") {
    return (
      <div className="bg-[#0B0C0E] border border-white/[0.08] rounded-xl p-4 font-mono text-xs space-y-3">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-[#646A7A]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-1 text-[#959BAA]">hybrid-rag-engine.py</span>
          </div>
          <span className="text-[#C5FF4A]">RETRIEVAL BENCHMARK</span>
        </div>

        {/* 4-Stage Pipeline Schematic */}
        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="p-2 rounded bg-[#16181F] border border-white/[0.05]">
            <div className="text-[#C5FF4A] font-bold">1. AST</div>
            <div className="text-[#646A7A] text-[9px] mt-0.5">Parse & Chunk</div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-white/[0.05]">
            <div className="text-[#C5FF4A] font-bold">2. Dual</div>
            <div className="text-[#646A7A] text-[9px] mt-0.5">Dense + BM25</div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-[#C5FF4A]/20">
            <div className="text-white font-bold">3. RRF</div>
            <div className="text-[#C5FF4A] text-[9px] mt-0.5">Rank Fusion</div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-white/[0.05]">
            <div className="text-[#C5FF4A] font-bold">4. Rerank</div>
            <div className="text-[#646A7A] text-[9px] mt-0.5">Cross-Encoder</div>
          </div>
        </div>

        {/* Measured Metrics Bar */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
          <span className="text-[#959BAA]">Hit Rate: <strong className="text-white">0.80+</strong></span>
          <span className="text-[#959BAA]">MRR: <strong className="text-white">0.60+</strong></span>
          <span className="text-[#959BAA]">Latency: <strong className="text-[#C5FF4A]">~0.1s</strong></span>
        </div>
      </div>
    );
  }

  if (project.id === "mediscan-ai") {
    return (
      <div className="bg-[#0B0C0E] border border-white/[0.08] rounded-xl p-4 font-mono text-xs space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
          <span className="text-[#959BAA] flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#C5FF4A]" />
            PRIVACY-ISOLATED CLINICAL RUNTIME
          </span>
          <span className="px-1.5 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] font-bold text-[9px]">
            DEMUX 2.0 • 4TH/240
          </span>
        </div>

        {/* 3 Modality Channels */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded bg-[#16181F] border border-white/5">
            <span className="text-white font-semibold">Medicine Photo</span>
            <div className="text-[9px] text-[#646A7A] mt-0.5">OCR Text Scan</div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-white/5">
            <span className="text-white font-semibold">Voice Audio</span>
            <div className="text-[9px] text-[#646A7A] mt-0.5">Whisper STT</div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-white/5">
            <span className="text-white font-semibold">Clinical Text</span>
            <div className="text-[9px] text-[#646A7A] mt-0.5">Symptom Query</div>
          </div>
        </div>

        {/* Output verification strip */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#959BAA]">
          <span>FAISS + BM25 RRF Search</span>
          <span className="text-[#C5FF4A] font-medium">PostgreSQL Audit Logging</span>
        </div>
      </div>
    );
  }

  if (project.id === "sound2sign") {
    return (
      <div className="bg-[#0B0C0E] border border-white/[0.08] rounded-xl p-4 font-mono text-xs space-y-3">
        {/* Publication banner */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
          <span className="text-blue-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            IEEE XPLORE • I3CTCON 2026
          </span>
          <span className="text-[#646A7A]">DOI: 10.1109/...11507164</span>
        </div>

        {/* Motion Synthesis flow */}
        <div className="flex items-center justify-between text-[10px] text-center gap-1">
          <div className="flex-1 p-1.5 rounded bg-[#16181F]">
            <div className="text-white">Speech / Text</div>
          </div>
          <span className="text-[#646A7A]">→</span>
          <div className="flex-1 p-1.5 rounded bg-[#16181F]">
            <div className="text-[#C5FF4A]">Grammar Parser</div>
          </div>
          <span className="text-[#646A7A]">→</span>
          <div className="flex-1 p-1.5 rounded bg-[#16181F] border border-[#C5FF4A]/20">
            <div className="text-white">GRU Network</div>
          </div>
          <span className="text-[#646A7A]">→</span>
          <div className="flex-1 p-1.5 rounded bg-[#16181F]">
            <div className="text-white">Sign Motion</div>
          </div>
        </div>

        {/* Technical attribute */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#959BAA]">
          <span>Cosine Velocity Smoothing</span>
          <span className="text-[#C5FF4A]">Facial Markers Preserved</span>
        </div>
      </div>
    );
  }

  if (project.id === "fedseg-x") {
    return (
      <div className="bg-[#0B0C0E] border border-white/[0.08] rounded-xl p-4 font-mono text-xs space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
          <span className="text-[#959BAA]">ZERO RAW DATA TRANSMISSION</span>
          <span className="text-[#C5FF4A]">50 FEDERATED ROUNDS</span>
        </div>

        {/* Client comparison & FedProx aggregation */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded bg-[#16181F] border border-white/5">
            <div className="text-[#959BAA]">Client 1 (COD10K)</div>
            <div className="text-white font-bold mt-1">
              0.15 → <span className="text-[#C5FF4A]">0.92 Dice</span>
            </div>
          </div>
          <div className="p-2 rounded bg-[#16181F] border border-white/5">
            <div className="text-[#959BAA]">Client 2 (Polyps)</div>
            <div className="text-white font-bold mt-1">
              0.22 → <span className="text-[#C5FF4A]">0.80 Dice</span>
            </div>
          </div>
        </div>

        {/* Architectural note */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#959BAA]">
          <span>Backbone: PVTv2-B2</span>
          <span className="text-[#C5FF4A]">FedProx Regularization</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0C0E] border border-white/[0.08] rounded-xl p-4 font-mono text-xs flex items-center justify-between text-[#959BAA]">
      <span className="flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-[#C5FF4A]" />
        {project.category}
      </span>
      <span className="text-[10px] text-[#646A7A]">PROJ #{project.number}</span>
    </div>
  );
}

export type ProjectCategory =
  | "All Projects"
  | "LLMs & Agents"
  | "Multimodal & Speech"
  | "Computer Vision & ML"
  | "Backend & Systems"
  | "Research & Applied ML";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All Projects",
  "LLMs & Agents",
  "Multimodal & Speech",
  "Computer Vision & ML",
  "Backend & Systems",
  "Research & Applied ML",
];

export interface FlagshipProject {
  id: string;
  badge: string;
  number: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  coreProblem: string;
  architecturalSolution: string;
  highlights: string[];
  metrics: { label: string; value: string; note: string }[];
  architectureSteps: { title: string; desc: string; tag: string }[];
  techStack: string[];
  githubUrl: string;
  award?: string;
}

export interface SecondaryProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  rank: number;
  categories: ProjectCategory[];
  summary: string;
  keyTechnicalDecision: string;
  metrics?: { label: string; value: string };
  techStack: string[];
  githubUrl: string;
  paperUrl?: string;
  doi?: string;
}

export const PERSONAL_INFO = {
  name: "Sreevedh Jella",
  roleTitle: "Applied AI / ML Engineer",
  specializations: "LLMs & RAG · Multimodal AI · Backend Systems",
  tagline: "I build AI-enabled applications and engineer the systems that make them useful, reliable, and fast.",
  statusText: "AVAILABLE FOR AI/ML & BACKEND ROLES",
  education: {
    institution: "BVRIT, Narsapur",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2023 – 2027",
    cgpa: "8.40 / 10",
  },
  location: "Hyderabad, India",
  email: "23211a66f8@gmail.com",
  phone: "+91 8978805078",
  resumePath: "/23211a66f8_Sreevedh.pdf",
  photoPath: "/passport size photo.jpg",
  socials: {
    github: "https://github.com/djcode0718",
    linkedin: "https://www.linkedin.com/in/sreevedh-jella",
    leetcode: "https://leetcode.com/u/sj0718/",
    hackerrank: "https://www.hackerrank.com/profile/23211a66f8",
  },
  credibilityPoints: [
    {
      value: "91%",
      metric: "Produce Grading Accuracy",
      context: "OpenCV vision pipeline across 5,000+ produce images at Segritech",
    },
    {
      value: "0.80+",
      metric: "Hybrid RAG Hit Rate",
      context: "Profiled ~0.1s retrieval latency across 238 automated tests in CodeBase-Copilot",
    },
    {
      value: "4th / 240",
      metric: "Teams @ Demux 2.0",
      context: "National Hackathon Finalist (2nd in domain) for MediScanAI",
    },
    {
      value: "IEEE",
      metric: "Xplore Published Author",
      context: "First-author speech-to-sign research at I3CTCON 2026 (DOI: 10.1109)",
    },
  ],
};

export const SKILL_GROUPS = [
  {
    category: "AI / ML & LLM Systems",
    priority: "Primary Identity",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Hybrid Retrieval (Dense + Sparse BM25)",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Reranking",
      "Large Language Models (LLMs)",
      "LlamaIndex",
      "LangGraph State Machines",
      "Computer Vision & OpenCV",
      "PaddleOCR & Whisper STT",
      "PyTorch",
      "Federated Learning (FedProx)",
    ],
  },
  {
    category: "Backend & Systems Engineering",
    priority: "Major Strength",
    skills: [
      "FastAPI & REST APIs",
      "Python (AsyncIO)",
      "Docker & Containerization",
      "Bounded Concurrency Queues",
      "Automated Testing (pytest)",
      "HMAC Webhook Cryptography",
      "Prompt-Injection Sanitization",
      "System Architecture & Microservices",
    ],
  },
  {
    category: "Databases & Storage",
    priority: "Data Infrastructure",
    skills: [
      "PostgreSQL (Schema Isolation)",
      "Vector Stores (FAISS, ChromaDB)",
      "Supabase",
      "SQLAlchemy 2.0 & Alembic",
      "SQL Query Optimization",
      "Data Modeling & Ingestion",
    ],
  },
  {
    category: "Computer Science & Foundations",
    priority: "Core Grounding",
    skills: [
      "Data Structures & Algorithms (250+ LeetCode)",
      "Object-Oriented Programming (OOP)",
      "DBMS & Transaction Isolation",
      "Operating Systems & Multiprocessing",
      "Computer Networks",
      "Git & CI/CD",
    ],
  },
];

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "codebase-copilot",
    badge: "FLAGSHIP CASE STUDY // 01",
    number: "01",
    title: "CodeBase-Copilot",
    subtitle: "Enterprise Repository Intelligence & Code RAG Platform",
    oneLiner:
      "A production-grade repository intelligence platform combining AST symbol parsing, hybrid Dense + Sparse BM25 retrieval, RRF fusion, and Cross-Encoder reranking to eliminate code hallucinations.",
    coreProblem:
      "Naive semantic search fails on complex software repositories because code requires preserving Abstract Syntax Tree (AST) structure, exact symbol signatures, and cross-file dependencies that standard vector embeddings omit.",
    architecturalSolution:
      "Engineered an AST-aware repository indexing engine coupled with a 4-stage hybrid retrieval pipeline combining ColBERT dense embeddings, BM25 sparse inverted indices, Reciprocal Rank Fusion, and Cross-Encoder reranking. Drives 12 automated engineering workflows with profiled ~0.1s retrieval latency distinct from streaming LLM synthesis.",
    highlights: [
      "Profiled ~0.1s baseline retrieval latency (FAISS + BM25 + RRF) distinct from asynchronous LLM token generation stream.",
      "Comprehensive 238-test automated test suite validating API routing, token persistence, latency, faithfulness, and relevancy.",
      "Achieved 0.80+ Hit Rate and 0.60+ MRR across evaluated benchmark codebase query splits.",
    ],
    metrics: [
      { label: "Retrieval Latency", value: "~0.1s", note: "Baseline FAISS + BM25 + RRF retrieval time" },
      { label: "Automated Tests", value: "238 Passing", note: "Full pytest suite across API, auth & RAG" },
      { label: "Hit Rate @ 5", value: "0.80+", note: "Across evaluated benchmark queries" },
      { label: "Mean Reciprocal Rank", value: "0.60+ MRR", note: "Ranked evaluation score" },
    ],
    architectureSteps: [
      { title: "AST-Aware Parsing", desc: "Parses source files into symbol graphs, respecting function and class boundaries.", tag: "AST Parse" },
      { title: "Dual Vector & Lexical Index", desc: "Generates dense semantic embeddings alongside inverted BM25 keyword indices.", tag: "Index" },
      { title: "Reciprocal Rank Fusion", desc: "Harmonizes dense semantic hits with exact code symbol matches via RRF.", tag: "RRF" },
      { title: "Cross-Encoder Rerank", desc: "Re-scores candidates using joint query-code cross-attention logits.", tag: "Rerank" },
      { title: "Asynchronous Synthesis", desc: "Streams context to local Ollama / Groq / Gemini with Supabase session state.", tag: "Output" },
    ],
    techStack: ["Python", "FastAPI", "Next.js 15", "SentenceTransformers", "BM25", "Supabase", "pytest", "Docker"],
    githubUrl: "https://github.com/djcode0718/Codebase-Copilot",
  },
  {
    id: "mediscan-ai",
    badge: "FLAGSHIP CASE STUDY // 02",
    number: "02",
    title: "MediScanAI",
    subtitle: "Privacy-First Multimodal Clinical Triage Assistant",
    oneLiner:
      "A privacy-first clinical assistant converting medicine packaging photos, voice notes, and symptoms into doctor consultation briefings using local LLM inference and a 4-stage hybrid RAG pipeline.",
    coreProblem:
      "Patients struggle to interpret medicine strip packaging, dosage instructions, and symptom contraindications. Transmitting sensitive clinical data to public cloud LLMs creates privacy liabilities, while naive RAG fails on medical entity variations.",
    architecturalSolution:
      "Engineered an air-gapped multimodal pipeline: PaddleOCR extracts text from medicine packaging, Faster-Whisper transcribes spoken symptoms, SymSpell resolves drug entities, and a 4-stage retrieval engine (FAISS + BM25 + Reciprocal Rank Fusion + Cross-Encoder reranking) queries pharmacology before feeding an on-device LLM with PostgreSQL audit logging.",
    highlights: [
      "Awarded 4th Place out of 240 Teams (2nd in Domain) at the Demux 2.0 National Hackathon.",
      "Completely local multimodal pipeline: PaddleOCR packaging extraction and Faster-Whisper speech transcription run on-device without cloud telemetry.",
      "Hardened backend with PostgreSQL 15+, Alembic versioned migrations, SQLAlchemy 2.0 ORM, and bounded concurrency queues to prevent GPU OOM.",
    ],
    metrics: [
      { label: "Demux 2.0 Hackathon", value: "4th / 240", note: "National finalist (2nd in Healthcare/AI domain)" },
      { label: "Modalities Handled", value: "3 Types", note: "Packaging OCR, voice memos & typed symptoms" },
      { label: "Retrieval Pipeline", value: "4-Stage", note: "FAISS dense + BM25 + RRF + Cross-Encoder" },
      { label: "Data Sovereignty", value: "100% Local", note: "Air-gapped on-device inference without telemetry" },
    ],
    architectureSteps: [
      { title: "Multimodal Ingest", desc: "Accepts blister-pack photos, patient voice memos, and symptom text.", tag: "Ingest" },
      { title: "Perception & Extraction", desc: "Extracts packaging text via PaddleOCR and transcribes audio with Faster-Whisper.", tag: "Extract" },
      { title: "Entity Resolution & Retrieval", desc: "Fuzzy drug normalization (SymSpell) + FAISS dense and BM25 sparse retrieval.", tag: "FAISS+BM25" },
      { title: "Cross-Encoder Filter", desc: "Scores candidate drug interactions and contraindications with cross-attention.", tag: "Rerank" },
      { title: "Local LLM Synthesis", desc: "Generates structured clinical consultation briefing with PostgreSQL audit logs.", tag: "Triage View" },
    ],
    techStack: ["Python", "FastAPI", "PaddleOCR", "Faster-Whisper", "PostgreSQL", "Alembic", "Docker", "React"],
    githubUrl: "https://github.com/djcode0718/MediscanAI",
    award: "4th / 240 Teams (2nd in Domain) @ Demux 2.0 Hackathon",
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: "razorpay-recoveriq",
    number: "03",
    rank: 1,
    title: "RecoverIQ (Razorpay)",
    subtitle: "Autonomous, Policy-Bounded Revenue Recovery Engine",
    categories: ["Backend & Systems", "LLMs & Agents"],
    summary:
      "Built for the Razorpay Buildathon (Track 03: Autonomous Revenue Recovery & Payment Resilience). Decouples probabilistic AI diagnosis from 7 deterministic zero-trust safety gates to autonomously recover dropped payment transactions without duplicate charges.",
    keyTechnicalDecision:
      "Inviolable architectural separation: AI determines recovery probability and optimal intervention timing, while 7 hardcoded deterministic policy gates strictly enforce exposure limits (≤ ₹9,000), duplicate-link blocks, and maximum attempt caps with cryptographic HMAC-SHA256 signature verification.",
    metrics: { label: "Safety Policy", value: "7/7 Zero-Trust Gates" },
    techStack: ["FastAPI 0.116", "Next.js", "HMAC-SHA256", "SQLite/PostgreSQL", "pytest", "Tailwind CSS"],
    githubUrl: "https://github.com/djcode0718/RazorpayRecoverIQ",
  },
  {
    id: "sound2sign",
    number: "04",
    rank: 2,
    title: "Sound2Sign",
    subtitle: "Data-Efficient Speech-to-Sign Motion Synthesis",
    categories: ["Multimodal & Speech", "Research & Applied ML"],
    summary:
      "A novel AI framework converting spoken and written English into continuous sign language skeletal animations without massive motion-capture datasets. Presented at I3CTCON 2026 and published in IEEE Xplore.",
    keyTechnicalDecision:
      "Fuses deterministic linguistic parsing with dataset-driven motion retrieval and Gated Recurrent Units (GRUs) for biomechanically smooth joint co-articulation, cosine velocity damping, and facial expression non-manual markers.",
    metrics: { label: "Publication", value: "IEEE Xplore (DOI: 10.1109)" },
    techStack: ["PyTorch", "Python", "MediaPipe", "GRU Networks", "Mistral Glossing", "Flask"],
    githubUrl: "https://github.com/djcode0718/Sound2Sign",
    paperUrl: "https://doi.org/10.1109/I3CTCON68242.2026.11507164",
    doi: "10.1109/I3CTCON68242.2026.11507164",
  },
  {
    id: "fedseg-x",
    number: "05",
    rank: 3,
    title: "FedSegX",
    subtitle: "Cross-Domain Federated Segmentation Engine",
    categories: ["Research & Applied ML", "Computer Vision & ML"],
    summary:
      "A distributed federated learning system coordinating collaborative training between two isolated visual domains (camouflaged object detection and medical polyps) with mathematical zero raw data leakage.",
    keyTechnicalDecision:
      "Diagnosed catastrophic cross-domain collapse and mitigated domain shift using FedProx proximal regularization and dual-head PVTv2-B2 backbones across non-IID client distributions without raw data sharing.",
    metrics: { label: "Architecture", value: "PVTv2-B2 + FedProx" },
    techStack: ["PyTorch", "FedProx", "FedAvg", "PVTv2-B2", "TorchVision"],
    githubUrl: "https://github.com/djcode0718/FedSegX",
  },
  {
    id: "neuro-vera",
    number: "06",
    rank: 4,
    title: "NeuroVera (NeuroTriage)",
    subtitle: "Multi-Agent Brain MRI Analysis & Triage System",
    categories: ["Multimodal & Speech", "Computer Vision & ML", "LLMs & Agents"],
    summary:
      "A multi-agent AI system for brain MRI scan analysis combining 4-class tumor classification, Grad-CAM visual explainability overlays, LangGraph-orchestrated drafting and self-critique agents, and RAG-grounded reporting.",
    keyTechnicalDecision:
      "Implements LangGraph cyclic state machines with an independent Critic verification agent that cross-checks detected visual lesions against verified clinical references before allowing report dispatch.",
    metrics: { label: "Orchestration", value: "LangGraph State Graph" },
    techStack: ["LangGraph", "PyTorch", "Grad-CAM", "FastAPI", "React", "Vector DB"],
    githubUrl: "https://github.com/djcode0718/NeuroVera",
  },
  {
    id: "ugc-ad-studio",
    number: "07",
    rank: 5,
    title: "UGC Ad Studio",
    subtitle: "AI-Native Creative Video & Ad Generation Engine",
    categories: ["LLMs & Agents", "Backend & Systems"],
    summary:
      "Transforms raw product briefs into 30-second short-form ad creatives: viral hooks, scripts, shot-by-shot storyboards, captions, and cinematic visual prompts optimized for TikTok, Instagram Reels, and YouTube Shorts.",
    keyTechnicalDecision:
      "Structured prompt chaining with strict JSON schema parsing guarantees narrative pacing and scene timing across multimodal creative outputs within a sub-5-second generation latency.",
    metrics: { label: "Generation Speed", value: "< 5s Full Brief" },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prompt Engineering"],
    githubUrl: "https://github.com/djcode0718/UGC-Ad-Studio",
  },
  {
    id: "insurance-llm",
    number: "08",
    rank: 6,
    title: "Insurance LLM Assistant",
    subtitle: "Local Policy Reasoning & Automated Claim Adjudication",
    categories: ["LLMs & Agents", "Backend & Systems"],
    summary:
      "An automated medical claim evaluation assistant that ingests natural language queries, matches relevant insurance policy clauses via vector similarity, and reasons over them using local LLaMA 3.",
    keyTechnicalDecision:
      "Deterministic structured output formatting enforces exact approval verdicts, calculated compensation amounts, and cited policy clauses using an entirely local Ollama runtime to prevent data leakage.",
    metrics: { label: "Engine", value: "Local LLaMA 3 (Ollama)" },
    techStack: ["Python", "LLaMA 3", "Ollama", "SentenceTransformers", "Streamlit"],
    githubUrl: "https://github.com/djcode0718/Insurance-llm-project",
  },
  {
    id: "comic-spoiler-web",
    number: "09",
    rank: 7,
    title: "ComicSpoilerApp — Web",
    subtitle: "FastAPI + React Comic Panel Spoiler & Entity Analyzer",
    categories: ["Computer Vision & ML", "Backend & Systems"],
    summary:
      "A modular FastAPI + React application analyzing comic panel uploads to predict narrative spoiler probability, classify comic genres, generate panel captions, and count unique character faces using hybrid vision + NLP.",
    keyTechnicalDecision:
      "Coupled YOLOv8 character detection and OCR text bubble extraction with TF-IDF/XGBoost classification into a unified inference endpoint, secured with httpOnly JWT sessions and drag-and-drop live preview.",
    metrics: { label: "Inference", value: "YOLOv8 + XGBoost" },
    techStack: ["FastAPI", "React", "YOLOv8", "XGBoost", "JWT Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionWebApp",
  },
  {
    id: "comic-spoiler-mobile",
    number: "10",
    rank: 8,
    title: "ComicSpoilerApp — Mobile",
    subtitle: "Cross-Platform Flutter Client for Comic ML Engine",
    categories: ["Computer Vision & ML", "Backend & Systems"],
    summary:
      "Cross-platform Flutter application providing an intuitive mobile interface for on-the-go photo capture, gallery panel uploads, and real-time inference result visualization communicating with the Flask ML backend.",
    keyTechnicalDecision:
      "Asynchronous Flutter network bridge with client-side image compression, retry handling, and responsive state management communicating with YOLOv8 and NLP inference endpoints.",
    metrics: { label: "Framework", value: "Flutter & Flask" },
    techStack: ["Flutter", "Dart", "Flask Backend", "YOLOv8", "TF-IDF"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionMobileApp",
  },
];

export const ALL_PROJECTS = [...FLAGSHIP_PROJECTS, ...SECONDARY_PROJECTS];

export const EXPERIENCE_ITEMS = [
  {
    company: "Segritech",
    legalEntity: "Tikkly Agro Solutions Private Limited",
    role: "Software Development Intern",
    period: "Sept 2025 – Mar 2026",
    location: "Hyderabad, India",
    summary:
      "Engineered computer vision inspection pipelines and nationwide data scraping infrastructure supporting the company's core agricultural technology products.",
    achievements: [
      "Contributed to an AI-based crop-quality inspection system using Python and OpenCV, developing defect detection models that processed 5,000+ produce images and achieved 91% grading accuracy.",
      "Built a robust web-scraping pipeline in Python collecting nationwide temple data across 12,000+ locations for a founder-led side project.",
      "Normalized collected datasets for a booking platform concept and prototyped complete product user flows in Figma.",
    ],
    tags: ["Python", "OpenCV", "Computer Vision", "Web Scraping", "Figma", "Data Modeling"],
  },
];

export const HONORS_AND_AWARDS = [
  {
    title: "Demux 2.0 Hackathon Finalist",
    highlight: "4th / 240 Teams (2nd in Domain)",
    context: "24-Hour National Hackathon",
    desc: "Architected MediScanAI, a privacy-first multimodal clinical assistant with local LLM inference and 4-stage hybrid RAG.",
  },
  {
    title: "IEEE Xplore Research Publication",
    highlight: "First-Author Academic Paper",
    context: "I3CTCON 2026 Conference",
    desc: "Paper on speech-to-sign hybrid motion synthesis published in IEEE Xplore (DOI: 10.1109/I3CTCON68242.2026.11507164).",
    url: "https://doi.org/10.1109/I3CTCON68242.2026.11507164",
    urlLabel: "View on IEEE Xplore",
  },
  {
    title: "LeetCode Problem Solving",
    highlight: "250+ Algorithmic Challenges Solved",
    context: "Data Structures & Algorithms",
    desc: "Consistent practice across dynamic programming, graphs, trees, and system-level algorithm design.",
    url: "https://leetcode.com/u/sj0718/",
    urlLabel: "LeetCode Profile",
  },
  {
    title: "Promethean’25 Leadership",
    highlight: "Lead Organizer — Dark Auction",
    context: "Technical Symposium",
    desc: "Led the technical symposium's flagship Dark Auction event, managing bidding algorithms and participant logistics.",
  },
  {
    title: "School Sports Captaincy",
    highlight: "25+ Medals in Inter-School Sports",
    context: "Leadership & Discipline",
    desc: "Elected School Sports Captain; cultivated rigorous discipline and team leadership across track and field championships.",
  },
];

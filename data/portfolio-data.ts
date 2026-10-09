export type ProjectCategory =
  | "All Projects"
  | "LLM, RAG & AI Agents"
  | "Computer Vision & Applied ML"
  | "Multimodal AI & Research"
  | "AI Products & Full-Stack Applications";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All Projects",
  "LLM, RAG & AI Agents",
  "Computer Vision & Applied ML",
  "Multimodal AI & Research",
  "AI Products & Full-Stack Applications",
];

export interface FlagshipProject {
  id: string;
  badge: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  githubUrl: string;
  award?: string;
  summary: string;
  coreProblem: string;
  architecturalSolution: string;
  architectureSteps: { title: string; desc: string; tag: string }[];
  metrics: { label: string; value: string; note: string }[];
  keyChallenges: string[];
  techStack: string[];
}

export interface CategorizedProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  githubUrl: string;
  paperUrl?: string;
  doi?: string;
  description: string;
  keyPoints: string[];
  metrics?: { label: string; value: string; note?: string }[];
  techStack: string[];
  architectureType: "rag-pipeline" | "multimodal-health" | "motion-gru" | "federated" | "agentic" | "vision-nlp" | "mobile" | "fintech";
}

export interface ExperienceItem {
  company: string;
  legalEntity?: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  highlight: string;
  description: string;
  url?: string;
  urlLabel?: string;
}

export const PERSONAL_INFO = {
  name: "Sreevedh Jella",
  primaryTitle: "Applied AI / ML Engineer",
  tagline: "I build production-grade LLM architectures, hybrid retrieval engines, multimodal systems, and hardened backends.",
  statusText: "AVAILABLE FOR AI/ML & SOFTWARE ROLES",
  education: {
    institution: "BVRIT, Narsapur",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2023 – 2027",
    cgpa: "8.40 / 10",
  },
  location: "Hyderabad, Telangana, India",
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
  summary:
    "Final-year Computer Science Engineering (AI & ML) student with proven capability in designing evaluated retrieval pipelines, multimodal AI backends, distributed federated systems, and robust REST APIs.",
  competencies: [
    {
      label: "Primary Focus",
      title: "Applied AI & ML Systems",
      desc: "Dense & sparse hybrid retrieval, Cross-Encoder reranking, vector spaces, and empirical evaluation.",
    },
    {
      label: "Supporting Strength",
      title: "LLM Systems & RAG",
      desc: "LlamaIndex, ColBERT, BM25, agentic workflows, prompt-injection defense, and local inference.",
    },
    {
      label: "Engineering Backbone",
      title: "Backend & Systems",
      desc: "FastAPI, PostgreSQL schema isolation, Docker, concurrency queues, and automated test suites.",
    },
    {
      label: "Execution",
      title: "Full-Stack Applications",
      desc: "Translating ML pipelines into accessible web/mobile tools with low latency and clean UX.",
    },
  ],
};

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "codebase-copilot",
    badge: "FLAGSHIP CASE STUDY // 01",
    number: "01",
    title: "CodeBase-Copilot",
    subtitle: "Enterprise-Grade Repository Intelligence & Digital Twin Platform",
    role: "Lead Systems Architect & ML Engineer",
    githubUrl: "https://github.com/djcode0718/Codebase-Copilot",
    summary:
      "An enterprise repository intelligence platform that indexes, diagrams, and interrogates complex software codebases. Designed to overcome naive RAG limitations through AST-aware partitioning and a 4-stage hybrid retrieval engine.",
    coreProblem:
      "Naive semantic search fails on complex software repositories because code requires preserving Abstract Syntax Tree (AST) boundaries, specialized programming language keywords, and cross-file symbol references that off-the-shelf vector models obscure.",
    architecturalSolution:
      "Engineered an AST-partitioning ingestion pipeline coupled with a 4-stage hybrid retrieval engine uniting dense vector embeddings (ColBERT/ChromaDB), sparse inverted indices (BM25), Reciprocal Rank Fusion (RRF), and Cross-Encoder reranking. This powers 12 automated engineering workflows (architecture discovery, security scans, technical debt audits) through LlamaIndex agents.",
    architectureSteps: [
      {
        title: "AST-Aware Parsing",
        desc: "Ingests repository files, constructs dependency symbol graphs, and chunks code along function and class boundaries rather than naive character limits.",
        tag: "Ingest",
      },
      {
        title: "Dual-Space Indexing",
        desc: "Builds dense semantic representations with ColBERT while simultaneously maintaining an inverted lexical index using BM25.",
        tag: "Dense + Sparse",
      },
      {
        title: "Reciprocal Rank Fusion",
        desc: "Blends dense semantic top-K and sparse keyword matches via reciprocal ranking, balancing conceptual intent with exact symbol names.",
        tag: "RRF Fusion",
      },
      {
        title: "Cross-Encoder Reranking",
        desc: "Applies a transformer cross-encoder over the fused candidates to compute fine-grained relevance logits, filtering out irrelevant chunks.",
        tag: "Rerank",
      },
      {
        title: "Multi-Agent Synthesis",
        desc: "Feeds prioritized contexts into 12 automated workflows generating Mermaid diagrams, security reviews, and technical-debt metrics.",
        tag: "Synthesis",
      },
    ],
    metrics: [
      { label: "Hit Rate", value: "0.80+", note: "Across evaluated benchmark queries" },
      { label: "MRR", value: "0.60+", note: "Mean Reciprocal Rank" },
      { label: "Retrieval Latency", value: "~0.1s", note: "Baseline retrieval response time" },
      { label: "Automated Tests", value: "238", note: "Comprehensive unit, API & RAG test suite" },
    ],
    keyChallenges: [
      "Mitigated token truncation by respecting programming language AST structures.",
      "Balanced exact symbol lookup (e.g., function signatures) against conceptual architectural queries via RRF.",
      "Constructed a 238-test evaluation suite validating routing, token persistence, faithfulness, relevancy, and retrieval latency.",
    ],
    techStack: ["Python", "FastAPI", "LlamaIndex", "ColBERT", "BM25", "ChromaDB", "Supabase", "Docker", "PyTest"],
  },
  {
    id: "mediscan-ai",
    badge: "FLAGSHIP CASE STUDY // 02",
    number: "02",
    title: "MediScanAI",
    subtitle: "Privacy-First Multimodal AI Health Copilot",
    role: "Full-Stack AI Engineer",
    githubUrl: "https://github.com/djcode0718/MediscanAI",
    award: "Placed 4th out of 240 teams (2nd in domain) at Demux 2.0 National Hackathon",
    summary:
      "A privacy-first clinical assistant processing patient symptoms across text, voice, and medicine packaging photos into structured consultation briefings using local LLM inference and a 4-stage hybrid retrieval pipeline.",
    coreProblem:
      "Patients describe clinical issues across diverse modalities (a photograph of medicine blister strips, voice descriptions of symptoms, or text logs). Sending raw health data to external cloud APIs compromises patient confidentiality, while single-modality tools fail to cross-reference drug contraindications.",
    architecturalSolution:
      "Architected an air-gapped multimodal pipeline utilizing Tesseract OCR for pharmaceutical packaging, Whisper for voice transcription, and a 4-stage retrieval engine (FAISS semantic search + BM25 keyword matching + RRF + Cross-Encoder reranking) backed by local LLM inference and PostgreSQL persistence.",
    architectureSteps: [
      {
        title: "Multimodal Ingestion",
        desc: "Accepts prescription blister-pack imagery, recorded speech audio, and typed symptom journals.",
        tag: "Input Channels",
      },
      {
        title: "Feature Extraction",
        desc: "Runs OCR to extract pharmaceutical dosage/ingredients and Whisper STT for clinical audio transcription.",
        tag: "Vision & Audio",
      },
      {
        title: "Hybrid Knowledge Retrieval",
        desc: "Queries FAISS vector stores alongside BM25 indices indexed with verified pharmacological literature.",
        tag: "FAISS + BM25",
      },
      {
        title: "Cross-Encoder Filter",
        desc: "Reranks retrieved drug interactions and clinical contraindications to isolate statistically significant context.",
        tag: "Cross-Attention",
      },
      {
        title: "Local LLM Synthesis",
        desc: "Local inference produces structured doctor-style consultation notes with strict non-diagnostic disclaimers.",
        tag: "Private LLM",
      },
    ],
    metrics: [
      { label: "Hackathon Standing", value: "Top 2%", note: "4th / 240 Teams (2nd in Domain) @ Demux 2.0" },
      { label: "Modalities", value: "3", note: "Text, Whisper Voice & Packaging OCR" },
      { label: "Retrieval Pipeline", value: "4-Stage", note: "FAISS + BM25 + RRF + Cross-Encoder" },
      { label: "Data Privacy", value: "Local", note: "Zero external cloud LLM leakage" },
    ],
    keyChallenges: [
      "Hardened backend with bounded concurrency queues to prevent GPU out-of-memory crashes during simultaneous OCR and LLM inference.",
      "Implemented PostgreSQL persistence with strict schema isolation for user profiles, clinical records, and immutable audit logs.",
      "Integrated prompt-injection sanitization to prevent adversarial inputs from overriding clinical safety protocols.",
    ],
    techStack: ["FastAPI", "FAISS", "BM25", "Docker", "PostgreSQL", "React", "Whisper", "Tesseract OCR", "PyTorch"],
  },
];

export const CATEGORIZED_PROJECTS: CategorizedProject[] = [
  {
    id: "sound2sign",
    number: "03",
    title: "Sound2Sign",
    subtitle: "Hybrid Motion Synthesis for Speech-to-Sign Translation",
    categories: ["Multimodal AI & Research", "Computer Vision & Applied ML"],
    githubUrl: "https://github.com/djcode0718/Sound2Sign",
    paperUrl: "https://doi.org/10.1109/I3CTCON68242.2026.11507164",
    doi: "10.1109/I3CTCON68242.2026.11507164",
    description:
      "A data-efficient AI synthesis framework converting English speech and text into fluid sign language skeletal animations without requiring massive motion-capture datasets. Published in IEEE Xplore (I3CTCON 2026).",
    keyPoints: [
      "Peer-reviewed academic research published in IEEE Xplore (DOI: 10.1109/I3CTCON68242.2026.11507164).",
      "Combines deterministic grammatical parsing with dataset-driven keypose retrieval to resolve extreme data scarcity.",
      "Employs Gated Recurrent Units (GRUs) to model dynamic co-articulation and continuous joint trajectories.",
      "Integrates cosine interpolation velocity damping and dedicated non-manual facial expression markers.",
    ],
    metrics: [
      { label: "Publication", value: "IEEE Xplore", note: "I3CTCON 2026 Peer-Reviewed" },
      { label: "DOI", value: "10.1109", note: "10.1109/I3CTCON68242.2026.11507164" },
      { label: "Architecture", value: "Hybrid", note: "Grammar Parser + GRU + Cosine Interp" },
    ],
    techStack: ["PyTorch", "Python", "GRU Networks", "Linguistic NLP", "Biomechanical Kinematics"],
    architectureType: "motion-gru",
  },
  {
    id: "fedseg-x",
    number: "04",
    title: "FedSegX",
    subtitle: "Cross-Domain Federated Segmentation Engine",
    categories: ["Computer Vision & Applied ML", "Multimodal AI & Research"],
    githubUrl: "https://github.com/djcode0718/FedSegX",
    description:
      "A distributed federated learning system coordinating collaborative segmentation between two distinct visual domains (camouflaged object detection and medical polyps) without exchanging raw image data.",
    keyPoints: [
      "Diagnosed cross-domain collapse: single-domain baselines dropped from 0.97 to 0.15 and 0.82 to 0.22 Dice.",
      "Recovered Dice scores to 0.92 and 0.80 via FedProx proximal aggregation to stabilize non-IID client drift.",
      "Dual-head PVTv2-B2 architecture with auxiliary edge supervision for boundary-critical segmentation.",
      "Manifest-tracked data-split protocol guaranteeing mathematical zero data leakage across 50 federated rounds.",
    ],
    metrics: [
      { label: "Domain 1 Recovery", value: "0.92 Dice", note: "Recovered from 0.15 collapse" },
      { label: "Domain 2 Recovery", value: "0.80 Dice", note: "Recovered from 0.22 collapse" },
      { label: "Federated Rounds", value: "50", note: "Manifest-tracked zero leakage" },
    ],
    techStack: ["PyTorch", "FedProx", "PVTv2-B2", "Computer Vision", "Distributed Systems"],
    architectureType: "federated",
  },
  {
    id: "neuro-vera",
    number: "05",
    title: "NeuroTriage (NeuroVera)",
    subtitle: "Multi-Agent Brain MRI Analysis & Clinical Routing",
    categories: ["LLM, RAG & AI Agents", "Computer Vision & Applied ML", "AI Products & Full-Stack Applications"],
    githubUrl: "https://github.com/djcode0718/NeuroVera",
    description:
      "A multi-agent AI system for brain MRI scan analysis combining computer vision classification, retrieval-augmented reporting, self-verification critique, and deterministic triage routing orchestrated with LangGraph.",
    keyPoints: [
      "Orchestrates multi-agent state machines with LangGraph: CV extraction -> RAG reporting -> self-verification -> clinical triage.",
      "Self-verification critique loops cross-examine extracted visual anomalies against medical knowledge bases before finalizing reports.",
      "Deterministic clinical triage routes urgent cases to neurosurgeons while flagging low-confidence predictions.",
    ],
    metrics: [
      { label: "Orchestration", value: "LangGraph", note: "State Machine Graph" },
      { label: "Pipeline", value: "Agentic RAG", note: "Vision + Verification + Triage" },
    ],
    techStack: ["LangGraph", "PyTorch", "FastAPI", "React", "Vector DB", "Medical Imaging"],
    architectureType: "agentic",
  },
  {
    id: "ugc-ad-studio",
    number: "06",
    title: "UGC Ad Studio",
    subtitle: "AI-Native Creative Video & Ad Production Platform",
    categories: ["LLM, RAG & AI Agents", "AI Products & Full-Stack Applications"],
    githubUrl: "https://github.com/djcode0718/UGC-Ad-Studio",
    description:
      "An AI-native creative production platform that transforms simple product briefs into complete short-form ad creatives: viral hooks, 30-second scripts, shot-by-shot storyboards, and cinematic scene prompts.",
    keyPoints: [
      "Generates viral hooks, complete script timing breakdowns, and cinematic scene-by-scene prompts in seconds.",
      "Cinematic dark UI optimized for rapid iterative creative workflows across TikTok, Reels, and YouTube Shorts.",
      "Structured prompt chaining guarantees consistent brand tone and scene pacing.",
    ],
    metrics: [
      { label: "Target Formats", value: "3 Channels", note: "TikTok, Reels & Shorts" },
      { label: "Generation Speed", value: "< 5s", note: "End-to-end creative brief output" },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "LLM APIs", "FastAPI"],
    architectureType: "rag-pipeline",
  },
  {
    id: "comic-spoiler-web",
    number: "07",
    title: "ComicSpoilerApp — Web",
    subtitle: "Multimodal Comic Panel Spoiler & Entity Analyzer",
    categories: ["Computer Vision & Applied ML", "AI Products & Full-Stack Applications"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionWebApp",
    description:
      "A modular FastAPI + React web application analyzing uploaded comic panel images to predict spoiler probability, identify genres, generate captions, and count unique character faces using hybrid vision + NLP.",
    keyPoints: [
      "FastAPI + React architecture with JWT authentication stored in httpOnly cookies.",
      "Integrated drag-and-drop panel uploads with live preview and guest mode exploration.",
      "Hybrid inference pipeline uniting OCR text bubble extraction and computer vision character clustering.",
    ],
    metrics: [
      { label: "Inference", value: "Hybrid", note: "Computer Vision + NLP OCR" },
      { label: "Auth", value: "JWT", note: "Secure httpOnly cookie sessions" },
    ],
    techStack: ["FastAPI", "React", "PyTorch", "JWT Auth", "Computer Vision", "NLP"],
    architectureType: "vision-nlp",
  },
  {
    id: "comic-spoiler-mobile",
    number: "08",
    title: "ComicSpoilerApp — Mobile",
    subtitle: "Cross-Platform Mobile Client for Comic ML Engine",
    categories: ["AI Products & Full-Stack Applications"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionMobileApp",
    description:
      "A Flutter mobile application providing an intuitive on-the-go interface for the ComicSpoiler ML backend. Enables mobile photo capture, gallery uploads, and real-time inference result display.",
    keyPoints: [
      "Built with Flutter for high-performance cross-platform mobile rendering.",
      "Asynchronous network layer with retry handling and upload progress indicators.",
      "Clean UI displaying spoiler risk percentages and annotated character detections.",
    ],
    metrics: [
      { label: "Framework", value: "Flutter", note: "Dart Cross-Platform Mobile" },
      { label: "Connection", value: "REST API", note: "Asynchronous backend bridge" },
    ],
    techStack: ["Flutter", "Dart", "REST API", "Mobile UX", "State Management"],
    architectureType: "mobile",
  },
  {
    id: "insurance-llm",
    number: "09",
    title: "Insurance LLM Assistant",
    subtitle: "Policy Reasoning & Automated Claim Adjudication",
    categories: ["LLM, RAG & AI Agents"],
    githubUrl: "https://github.com/djcode0718/Insurance-llm-project",
    description:
      "An automated claim evaluation assistant that ingests natural language patient queries, retrieves relevant policy clauses using vector similarity, and reasons over them with a local LLaMA 3 model to return structured decisions with clause justifications.",
    keyPoints: [
      "Vector similarity search matching complex clinical claim inquiries to dense insurance policy contracts.",
      "Runs local LLaMA 3 via Ollama for zero-cloud data leak compliance.",
      "Generates deterministic structured outputs: approval verdict, approved payout amount, and exact clause citations.",
    ],
    metrics: [
      { label: "Model", value: "LLaMA 3", note: "Local Ollama Inference" },
      { label: "Output", value: "Deterministic", note: "Verdict, Amount & Policy Clauses" },
    ],
    techStack: ["Python", "LLaMA 3", "Ollama", "Vector DB", "RAG", "Prompt Engineering"],
    architectureType: "rag-pipeline",
  },
  {
    id: "razorpay-recoveriq",
    number: "10",
    title: "RecoverIQ (Razorpay)",
    subtitle: "Autonomous Revenue Recovery Command Center",
    categories: ["AI Products & Full-Stack Applications"],
    githubUrl: "https://github.com/djcode0718/RazorpayRecoverIQ",
    description:
      "Built for the Razorpay Buildathon (Track 03: Autonomous Revenue Recovery & Payment Resilience). An autonomous, policy-bounded engine engineered to recover failed subscription and checkout transactions through intelligent retries and risk scoring.",
    keyPoints: [
      "FastAPI + React 18 / Vite architecture with production payment webhook simulator.",
      "Policy-bounded recovery algorithms optimizing retry schedules against bank failure code semantics.",
      "Interactive real-time telemetry command dashboard monitoring recovered revenue and recovery velocity.",
    ],
    metrics: [
      { label: "Platform", value: "RecoverIQ", note: "Razorpay Buildathon Track 03" },
      { label: "Backend", value: "FastAPI", note: "Policy-Bounded Retry Engine" },
    ],
    techStack: ["FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Razorpay APIs"],
    architectureType: "fintech",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Segritech",
    legalEntity: "Tikkly Agro Solutions Private Limited",
    role: "Software Development Intern",
    period: "Sept 2025 – Mar 2026",
    location: "Hyderabad, India",
    achievements: [
      "Contributed to an AI-based crop-quality inspection system using Python and OpenCV, developing defect detection models that processed 5,000+ produce images and achieved 91% grading accuracy, directly supporting the company's core agri-tech product line.",
      "Built a robust web-scraping pipeline in Python to collect nationwide temple data across 12,000+ locations for a founder-led side project.",
      "Structured and normalized the collected dataset for a Rapido-style booking platform concept and prototyped complete product user flows and UI in Figma.",
    ],
    tags: ["Python", "OpenCV", "Computer Vision", "Web Scraping", "Figma", "Data Modeling"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    badge: "CORE CODE",
    description: "Languages used for algorithmic problem-solving, backend APIs, and distributed model engineering.",
    skills: ["Python", "SQL", "Java"],
  },
  {
    title: "Core Computer Science",
    badge: "FOUNDATIONS",
    description: "Strong theoretical and practical grounding in foundational CS pillars.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Software Engineering & Infra",
    badge: "PRODUCTION",
    description: "Tooling and methodologies for building resilient, testable, and containerized backend architectures.",
    skills: ["REST APIs", "FastAPI", "Git", "Docker", "Automated Testing", "System Debugging"],
  },
  {
    title: "Databases & Storage",
    badge: "PERSISTENCE",
    description: "Relational persistence and cloud backend integration with schema-enforced isolation.",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    title: "AI / ML & LLM Engineering",
    badge: "INTELLIGENCE",
    description: "Modern artificial intelligence, retrieval mechanisms, multimodal pipelines, and vision algorithms.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "LlamaIndex",
      "OpenCV",
      "Optical Character Recognition (OCR)",
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Demux 2.0 Hackathon Finalist",
    category: "Competitive Engineering",
    highlight: "4th / 240 Teams (2nd in Domain)",
    description:
      "Ranked 4th place out of 240 national teams and 2nd in the domain at Demux 2.0 (24-hour national hackathon) for architecting MediScanAI, a privacy-first multimodal clinical assistant.",
  },
  {
    title: "IEEE Xplore Research Publication",
    category: "Academic Research",
    highlight: "I3CTCON 2026 Published Author",
    description:
      "First-author paper 'Hybrid Motion Synthesis for Speech-to-Sign Translation using Deterministic Linguistic Parsing & GRUs' published in IEEE Xplore (DOI: 10.1109/I3CTCON68242.2026.11507164).",
    url: "https://doi.org/10.1109/I3CTCON68242.2026.11507164",
    urlLabel: "View on IEEE Xplore",
  },
  {
    title: "Algorithmic Problem Solving",
    category: "Coding Proficiency",
    highlight: "250+ LeetCode Solved",
    description:
      "Solved 250+ algorithmic challenges spanning dynamic programming, graphs, trees, arrays, and greedy algorithms on LeetCode.",
    url: "https://leetcode.com/u/sj0718/",
    urlLabel: "LeetCode Profile",
  },
  {
    title: "Promethean’25 Leadership",
    category: "Organizational Leadership",
    highlight: "Lead Organizer — Dark Auction",
    description:
      "Led the high-stakes Dark Auction event for Promethean’25 technical symposium, overseeing logistics, participant bidding rules, and event execution.",
  },
  {
    title: "Athletic Distinction",
    category: "Sports & Discipline",
    highlight: "School Sports Captain (25+ Medals)",
    description:
      "Elected School Sports Captain; won 25+ competitive medals across track and inter-school sports championships, cultivating rigorous discipline and team leadership.",
  },
];

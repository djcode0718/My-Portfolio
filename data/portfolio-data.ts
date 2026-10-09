export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategories: Array<"All Projects" | "AI / ML" | "LLM & RAG" | "Full Stack" | "Research">;
  githubUrl: string;
  paperUrl?: string;
  doi?: string;
  award?: string;
  description: string;
  keyPoints: string[];
  metrics?: { label: string; value: string; note?: string }[];
  techStack: string[];
  architectureType: "rag-pipeline" | "multimodal-health" | "motion-gru" | "federated" | "agentic" | "standard";
  architectureDetails?: {
    diagramSteps: { title: string; desc: string; tag: string }[];
    technicalHighlights: string[];
  };
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
  tagline: "I build intelligent systems and software that solve real problems.",
  statusText: "BUILDING THINGS THAT MATTER",
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
    "Final-year Computer Science Engineering (AI & ML) student at BVRIT with deep hands-on expertise building hybrid retrieval engines, multimodal AI pipelines, federated learning systems, and hardened backend architectures.",
  focusAreas: [
    "Hybrid RAG Architectures & Dense/Sparse Fusion",
    "Production-Grade FastAPI & Backend Systems",
    "Multimodal Pipelines (Vision, OCR, Audio & LLMs)",
    "Distributed & Federated Learning Systems",
    "Empirical System Evaluation & Benchmarking",
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "codebase-copilot",
    number: "01",
    title: "CodeBase-Copilot",
    subtitle: "Enterprise-Grade Repository Intelligence Platform",
    category: "AI Engineering / Developer Tools",
    filterCategories: ["AI / ML", "LLM & RAG", "Full Stack"],
    githubUrl: "https://github.com/djcode0718/Codebase-Copilot",
    description:
      "A comprehensive digital-twin repository intelligence system that indexes, models, and interrogates complex codebases. Combines 4-stage hybrid retrieval with 12 automated engineering workflows for architecture discovery, security audits, and technical-debt identification.",
    keyPoints: [
      "Indexes and analyzes entire software repositories with AST-aware code partitioning and cross-file symbol graphs.",
      "Supports 12 automated workflows: automated architecture diagrams, security vulnerability scans, dead-code analysis, and technical debt scoring.",
      "Engineered hybrid retrieval pipeline uniting dense vector embeddings, BM25 keyword matching, Reciprocal Rank Fusion (RRF), and Cross-Encoder reranking.",
      "Profiled benchmark performance: 0.80+ Hit Rate, 0.60+ MRR, and ~0.1s baseline retrieval latency across test sets.",
      "Robust 238-test automated evaluation suite validating API routing, token persistence, and LLM evaluation criteria (faithfulness, relevancy, latency).",
    ],
    metrics: [
      { label: "Hit Rate", value: "0.80+", note: "Across evaluation queries" },
      { label: "MRR", value: "0.60+", note: "Mean Reciprocal Rank" },
      { label: "Retrieval Latency", value: "~0.1s", note: "Baseline retrieval response" },
      { label: "Automated Tests", value: "238", note: "Full test suite coverage" },
      { label: "Workflows", value: "12", note: "Automated intelligence pipelines" },
    ],
    techStack: ["Python", "FastAPI", "LlamaIndex", "ColBERT", "BM25", "ChromaDB", "Supabase", "Docker"],
    architectureType: "rag-pipeline",
    architectureDetails: {
      diagramSteps: [
        { title: "Repo Ingestion", desc: "Clones target repo, parses AST, and constructs file-dependency graphs.", tag: "Input" },
        { title: "Dual Embedding", desc: "Generates ColBERT/dense embeddings alongside sparse inverted BM25 indices.", tag: "Index" },
        { title: "Reciprocal Rank Fusion", desc: "Fuses dense semantic top-K and sparse lexical hits using reciprocal scoring.", tag: "RRF" },
        { title: "Cross-Encoder Rerank", desc: "Scores joint query-chunk pairs with cross-attention to filter irrelevant nodes.", tag: "Rerank" },
        { title: "LlamaIndex Synthesis", desc: "Feeds prioritized contexts into 12 distinct analytical workflow agents.", tag: "Output" },
      ],
      technicalHighlights: [
        "Eliminates naive chunk truncation by respecting programming language AST boundaries.",
        "RRF mitigates vocabulary mismatch while preserving specialized symbol matching.",
        "Automated evaluation validates faithfulness and prevents LLM hallucination on codebase queries.",
      ],
    },
  },
  {
    id: "mediscan-ai",
    number: "02",
    title: "MediScanAI",
    subtitle: "Privacy-First Multimodal AI Health Copilot",
    category: "Multimodal AI / Healthcare",
    filterCategories: ["AI / ML", "LLM & RAG", "Full Stack"],
    githubUrl: "https://github.com/djcode0718/MediscanAI",
    award: "Placed 4th / 240 teams (2nd in domain) at Demux 2.0 National Hackathon",
    description:
      "A privacy-centric multimodal medical assistant processing patient symptoms through text, audio recordings, and medicine package imagery to generate clinically grounded insight summaries with zero third-party data leakage.",
    keyPoints: [
      "Multimodal ingestion: handles clinical queries via text chat, Whisper speech-to-text, and OCR text extraction from medicine packaging.",
      "Engineered a 4-stage retrieval pipeline: FAISS semantic search, BM25 keyword matching, Reciprocal Rank Fusion, and Cross-Encoder reranking.",
      "PostgreSQL persistence backed with strict schema isolation for user profiles, clinical analyses, and audit logs.",
      "Production-hardened security: JWT auth, bcrypt password hashing, input validation, strict rate limiting, bounded ML concurrency, and prompt-injection defense layers.",
      "Local LLM inference guarantees data sovereignty and strict patient confidentiality.",
    ],
    metrics: [
      { label: "Hackathon Standing", value: "Top 2%", note: "4th / 240 Teams (2nd Domain)" },
      { label: "Modalities", value: "3", note: "Text, Voice & Medicine Images" },
      { label: "Retrieval Stages", value: "4", note: "FAISS + BM25 + RRF + Cross-Encoder" },
      { label: "Security", value: "Air-gapped", note: "Local LLM & zero raw data sharing" },
    ],
    techStack: ["FastAPI", "FAISS", "BM25", "Docker", "PostgreSQL", "React", "Whisper", "Tesseract OCR"],
    architectureType: "multimodal-health",
    architectureDetails: {
      diagramSteps: [
        { title: "Multimodal Ingest", desc: "Accepts prescription photos, spoken complaints, or typed symptom history.", tag: "Ingest" },
        { title: "Feature Extraction", desc: "Runs OCR for pharmaceutical packaging and Whisper for audio transcription.", tag: "Perception" },
        { title: "Hybrid Knowledge Match", desc: "Queries FAISS vector store & BM25 indices across verified medical literature.", tag: "Retrieval" },
        { title: "Cross-Encoder Filter", desc: "Selects the most statistically relevant clinical contraindications.", tag: "Rerank" },
        { title: "Local LLM Synthesis", desc: "Produces structured doctor-style consultation summary with audit trails.", tag: "Clinical View" },
      ],
      technicalHighlights: [
        "Explicit non-diagnostic disclaimer: acts as a preparation aid, never replacing physician advice.",
        "Bounded concurrency queues prevent GPU memory overflow during concurrent OCR & inference requests.",
        "Prompt-injection filters strip malicious clinical prompt manipulation attempts.",
      ],
    },
  },
  {
    id: "sound2sign",
    number: "03",
    title: "Sound2Sign",
    subtitle: "Hybrid Motion Synthesis for Speech-to-Sign Translation",
    category: "AI Research / Accessibility",
    filterCategories: ["AI / ML", "Research"],
    githubUrl: "https://github.com/djcode0718/Sound2Sign",
    paperUrl: "https://doi.org/10.1109/I3CTCON68242.2026.11507164",
    doi: "10.1109/I3CTCON68242.2026.11507164",
    description:
      "A novel, data-efficient AI synthesis framework converting spoken or written English into fluid, biologically coherent sign language skeletal animations without requiring massive motion-capture datasets.",
    keyPoints: [
      "Authored research paper published in IEEE Xplore: 'Hybrid Motion Synthesis for Speech-to-Sign Translation using Deterministic Linguistic Parsing & GRUs' (I3CTCON 2026).",
      "Overcomes deep learning data scarcity by fusing deterministic grammatical parsing with dataset-driven motion retrieval.",
      "Employs Recurrent Gated Units (GRUs) to model dynamic co-articulation and biological transitions between distinct sign lemmas.",
      "Integrates cosine interpolation curves for biomechanical velocity smoothing and non-manual facial marker synthesis.",
      "Runs efficiently on consumer hardware without massive 3D studio recording prerequisites.",
    ],
    metrics: [
      { label: "Publication", value: "IEEE Xplore", note: "I3CTCON 2026 Peer-Reviewed" },
      { label: "DOI", value: "10.1109", note: "Verified IEEE Citation" },
      { label: "Architecture", value: "Hybrid", note: "Grammar Parser + GRU + Cosine Interp" },
      { label: "Data Efficiency", value: "High", note: "Operates with sparse motion datasets" },
    ],
    techStack: ["PyTorch", "Python", "GRU Networks", "Linguistic NLP", "Biomechanical Kinematics", "Blender/3D"],
    architectureType: "motion-gru",
    architectureDetails: {
      diagramSteps: [
        { title: "Speech / Text Input", desc: "Converts spoken English into normalized text tokens via acoustic modeling.", tag: "Input" },
        { title: "Grammar Re-ordering", desc: "Deterministic parser translates English syntax into Sign Language gloss grammar.", tag: "Parsing" },
        { title: "Keypose Retrieval", desc: "Fetches canonical skeletal sign tokens from motion dictionary.", tag: "Lookup" },
        { title: "GRU Transition Engine", desc: "Predicts continuous joint trajectory vectors connecting discrete signs.", tag: "Neural GRU" },
        { title: "Cosine Smoothing", desc: "Eliminates joint jitter via cosine velocity damping for realistic visual playback.", tag: "Render" },
      ],
      technicalHighlights: [
        "Peer-reviewed academic research published with IEEE DOI indexation.",
        "Addresses non-manual markers (facial cues and head tilts) crucial for sign syntax.",
        "Demonstrates order-of-magnitude reduction in required training samples compared to end-to-end models.",
      ],
    },
  },
  {
    id: "fedseg-x",
    number: "04",
    title: "FedSegX",
    subtitle: "Cross-Domain Federated Segmentation Engine",
    category: "Federated Learning / Computer Vision",
    filterCategories: ["AI / ML", "Research"],
    githubUrl: "https://github.com/djcode0718/FedSegX",
    description:
      "A distributed federated learning system that coordinates collaborative model training between two disparate visual domains (camouflaged object detection and medical polyp segmentation) without ever exchanging raw image data.",
    keyPoints: [
      "Addresses catastrophic cross-domain collapse: single-domain baselines saw Dice scores plunge from 0.97 to 0.15 and 0.82 to 0.22 when evaluated across domains.",
      "FedProx proximal aggregation recovered cross-domain Dice scores back to 0.92 and 0.80, stabilizing non-IID client drift.",
      "Engineered dual-head PVTv2-B2 backbone architecture featuring auxiliary edge supervision for boundary-critical segmentation.",
      "Implemented a strict manifest-tracked data-split protocol guaranteeing mathematical zero data leakage over 50 federated rounds.",
      "Built with PyTorch, providing privacy-preserving multi-institutional collaborative training benchmarks.",
    ],
    metrics: [
      { label: "Domain 1 Recovery", value: "0.92 Dice", note: "Recovered from 0.15 collapse" },
      { label: "Domain 2 Recovery", value: "0.80 Dice", note: "Recovered from 0.22 collapse" },
      { label: "Federated Rounds", value: "50", note: "Zero leakage manifest verified" },
      { label: "Backbone", value: "PVTv2-B2", note: "Dual-head with auxiliary edge heads" },
    ],
    techStack: ["PyTorch", "FedProx", "PVTv2-B2", "Computer Vision", "Distributed Systems", "NumPy"],
    architectureType: "federated",
    architectureDetails: {
      diagramSteps: [
        { title: "Decentralized Nodes", desc: "Client A (COD10K Camouflaged) and Client B (Medical Polyps) hold private data.", tag: "Clients" },
        { title: "Local PVTv2 Training", desc: "Clients compute gradient updates with proximal penalty term against global drift.", tag: "Local Loss" },
        { title: "Weight Aggregation", desc: "Coordinates FedProx parameter consolidation on central server with zero raw data.", tag: "FedProx" },
        { title: "Edge-Supervised Head", desc: "Shared dual-head models learn generalized boundary representations.", tag: "Global Model" },
        { title: "Non-IID Convergence", desc: "Recovers cross-domain segmentation fidelity across 50 discrete communication rounds.", tag: "Results" },
      ],
      technicalHighlights: [
        "Proximal penalty prevents local divergence caused by drastic domain shifts.",
        "Auxiliary edge heads force attention on structural contours common to both domains.",
        "Zero data transmission fulfills strict HIPAA/GDPR clinical privacy prerequisites.",
      ],
    },
  },
];

export const SECONDARY_PROJECTS: Project[] = [
  {
    id: "neuro-vera",
    number: "05",
    title: "NeuroTriage (NeuroVera)",
    subtitle: "Multi-Agent Brain MRI Analysis & Clinical Routing",
    category: "Medical AI / Agentic Systems",
    filterCategories: ["AI / ML", "Full Stack"],
    githubUrl: "https://github.com/djcode0718/NeuroVera",
    description:
      "A multi-agent AI system for brain MRI scan analysis combining computer vision classification, retrieval-augmented diagnostic reporting, independent self-verification, and deterministic triage routing orchestrated end-to-end with LangGraph.",
    keyPoints: [
      "Orchestrated with LangGraph state machines: CV feature extraction -> RAG report generation -> verification agent -> deterministic clinical triage.",
      "Employs self-verification critique loops to cross-check image feature findings against clinical literature before finalizing reports.",
      "Strict research prototype invariants clearly demarcating medical prototype boundaries.",
    ],
    techStack: ["LangGraph", "PyTorch", "FastAPI", "React", "Vector DB", "Medical Imaging"],
    architectureType: "agentic",
  },
  {
    id: "ugc-ad-studio",
    number: "06",
    title: "UGC Ad Studio",
    subtitle: "AI-Native Creative Video & Ad Generation Platform",
    category: "Generative AI / Production Tools",
    filterCategories: ["AI / ML", "Full Stack"],
    githubUrl: "https://github.com/djcode0718/UGC-Ad-Studio",
    description:
      "An AI-native creative platform transforming simple product briefs into complete short-form ad creatives: viral hooks, 30-second scripts, shot-by-shot storyboards, and cinematic scene prompts optimized for TikTok, Instagram Reels, and YouTube Shorts.",
    keyPoints: [
      "Generates viral hooks, complete timing breakdowns, and cinematic scene-by-scene prompts in seconds.",
      "Cinematic dark UI engineered for rapid iterative creative workflows.",
      "Structured prompt chaining ensures brand tone consistency across multi-modal creative outputs.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "LLM APIs", "FastAPI"],
    architectureType: "standard",
  },
  {
    id: "comic-spoiler-web",
    number: "07",
    title: "ComicSpoilerApp — Web",
    subtitle: "Multimodal Comic Panel Spoiler & Entity Analyzer",
    category: "Computer Vision / NLP",
    filterCategories: ["AI / ML", "Full Stack"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionWebApp",
    description:
      "A full-stack comic panel analysis system. Upload an image panel to detect whether it contains narrative spoilers, determine comic genre, generate panel captions, and count unique character faces using hybrid vision + NLP inference.",
    keyPoints: [
      "FastAPI + React architecture with JWT authentication stored in httpOnly cookies.",
      "Integrated drag-and-drop panel uploads with live preview and guest mode exploration.",
      "Hybrid inference pipeline uniting OCR bubble parsing and computer vision face clustering.",
    ],
    techStack: ["FastAPI", "React", "PyTorch", "JWT Auth", "Computer Vision", "NLP"],
    architectureType: "standard",
  },
  {
    id: "comic-spoiler-mobile",
    number: "08",
    title: "ComicSpoilerApp — Mobile",
    subtitle: "Cross-Platform Mobile Interface for Spoiler Detection",
    category: "Mobile Engineering",
    filterCategories: ["Full Stack"],
    githubUrl: "https://github.com/djcode0718/ComicSpoilerDetectionMobileApp",
    description:
      "A Flutter mobile application providing an intuitive on-the-go interface for the ComicSpoiler ML backend. Enables mobile photo capture, gallery uploads, and real-time inference result display.",
    keyPoints: [
      "Built with Flutter for high-performance cross-platform mobile rendering.",
      "Asynchronous network layer with retry handling and upload progress indicators.",
      "Clean UI displaying spoiler risk percentages and annotated character detections.",
    ],
    techStack: ["Flutter", "Dart", "REST API", "Mobile UX", "State Management"],
    architectureType: "standard",
  },
  {
    id: "insurance-llm",
    number: "09",
    title: "Insurance LLM Assistant",
    subtitle: "Policy Reasoning & Automated Claim Adjudication",
    category: "LLM Systems / FinTech",
    filterCategories: ["AI / ML", "LLM & RAG"],
    githubUrl: "https://github.com/djcode0718/Insurance-llm-project",
    description:
      "An automated claim evaluation assistant that ingests natural language patient queries, retrieves relevant policy clauses using vector similarity, and reasons over them with a local LLaMA 3 model to return structured decisions with clause justifications.",
    keyPoints: [
      "Vector similarity search matching complex clinical claim inquiries to dense insurance policy contracts.",
      "Runs local LLaMA 3 via Ollama for zero-cloud data leak compliance.",
      "Generates deterministic structured outputs: approval verdict, approved payout amount, and exact clause citations.",
    ],
    techStack: ["Python", "LLaMA 3", "Ollama", "Vector DB", "RAG", "Prompt Engineering"],
    architectureType: "standard",
  },
  {
    id: "razorpay-recoveriq",
    number: "10",
    title: "RecoverIQ (Razorpay)",
    subtitle: "Autonomous Revenue Recovery Command Center",
    category: "Fintech / Payment Systems",
    filterCategories: ["Full Stack", "AI / ML"],
    githubUrl: "https://github.com/djcode0718/RazorpayRecoverIQ",
    description:
      "Built for the Razorpay Buildathon (Track 03: Autonomous Revenue Recovery & Payment Resilience). An autonomous, policy-bounded engine engineered to recover failed subscription and checkout transactions through intelligent retries and risk scoring.",
    keyPoints: [
      "FastAPI + React 18 / Vite architecture with production payment webhook simulator.",
      "Policy-bounded recovery algorithms optimizing retry schedules against bank failure code semantics.",
      "Interactive real-time telemetry command dashboard monitoring recovered revenue and recovery velocity.",
    ],
    techStack: ["FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Razorpay APIs"],
    architectureType: "standard",
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

export const CODING_PROFILES = [
  {
    name: "GitHub",
    handle: "@djcode0718",
    url: "https://github.com/djcode0718",
    stats: "10+ Public Projects • Open Source Repositories",
    badge: "Code",
  },
  {
    name: "LeetCode",
    handle: "sj0718",
    url: "https://leetcode.com/u/sj0718/",
    stats: "250+ Solved • Data Structures & Algorithms",
    badge: "Algorithms",
  },
  {
    name: "HackerRank",
    handle: "23211a66f8",
    url: "https://www.hackerrank.com/profile/23211a66f8",
    stats: "Verified Problem Solving & Core Foundations",
    badge: "Foundations",
  },
  {
    name: "LinkedIn",
    handle: "sreevedh-jella",
    url: "https://www.linkedin.com/in/sreevedh-jella",
    stats: "Professional Network & Engineering Updates",
    badge: "Network",
  },
];

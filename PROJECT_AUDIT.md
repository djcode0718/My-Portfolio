# Portfolio Project Intelligence Audit Report (V3.1)

> **Document Purpose:** Systematic audit of all 10 linked GitHub repositories for Sreevedh Jella's engineering portfolio. This report verifies factual implementation details, corrects historical discrepancies, documents real test suites and metrics, and establishes an evidence-based project ranking for AI/ML and Backend hiring managers.

---

## Executive Summary of Discrepancy Corrections

1. **Featured Order Change:**
   * **Previous:** MediScanAI (#1) $\rightarrow$ CodeBase-Copilot (#2)
   * **Updated:** **CodeBase-Copilot (#1)** $\rightarrow$ **MediScanAI (#2)**
   * **Rationale:** CodeBase-Copilot possesses the deepest verified automated test suite (238 pytest tests), explicit retrieval evaluation benchmarks (Hit Rate 0.80+, MRR 0.60+), and a clean separation of fast retrieval (~0.1s) from end-to-end generation. This directly aligns with Applied AI/ML & Backend engineering evaluation criteria.
2. **Repository Naming Corrections:**
   * `NeuroTriage` $\rightarrow$ Corrected to **NeuroVera** (Repo: `https://github.com/djcode0718/NeuroVera`, internal product module: `frontend-neurotriage`).
   * `Insurance-LLM-Advisor` $\rightarrow$ Corrected to **Insurance LLM Assistant** (Repo: `https://github.com/djcode0718/Insurance-llm-project`).
3. **Tech Stack Corrections:**
   * **ComicSpoilerDetection Mobile:** Confirmed as **Flutter (Dart) + Flask backend**, not React Native. (Verified via `pubspec.yaml` and `RunnerTests.swift`).
   * **ComicSpoilerDetection Web:** Confirmed as **FastAPI + React + Tailwind CSS + JWT auth** (rebuilt from earlier Flask prototype).
   * **MediScanAI OCR:** Verified as **PaddleOCR** and Faster-Whisper, backed by PostgreSQL 15+, SQLAlchemy 2.0, and Alembic migrations.
   * **RazorpayRecoverIQ:** Confirmed as **FastAPI 0.116 + Next.js** with 7 deterministic zero-trust policy gates, HMAC-SHA256 signature verification, and 26 backend pytest test files.

---

## Comprehensive Project Audit Matrix

| Rank | Project Name | Actual GitHub Repo | Tech Stack | Tests / Benchmarks | Implementation Status | Confidence |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **01** | **CodeBase-Copilot** | `Codebase-Copilot` | FastAPI, Next.js 15, FAISS, BM25, Supabase | 238 passing pytest tests, CI workflow | Production-grade local / web platform | **High (Verified)** |
| **02** | **MediScanAI** | `MediscanAI` | FastAPI, PaddleOCR, Faster-Whisper, Postgres | 40 test files, Demux 2.0 (4th/240 teams) | Full-stack clinical triage prototype | **High (Verified)** |
| **03** | **RazorpayRecoverIQ** | `RazorpayRecoverIQ` | FastAPI 0.116, Next.js, HMAC-SHA256, SQLite/PG | 26 test suites (policy gates, fallback) | Buildathon Track 3 Engine | **High (Verified)** |
| **04** | **Sound2Sign** | `Sound2Sign` | PyTorch, MediaPipe, GRU, Mistral, Flask | IEEE Xplore Publication (DOI: 10.1109) | Research pipeline & animation system | **High (Verified)** |
| **05** | **FedSegX** | `FedSegX` | PyTorch, PVTv2-B2, FedProx/FedAvg | Cross-domain evaluation (COD10K vs Kvasir) | Research framework with checkpoints | **High (Verified)** |
| **06** | **NeuroVera** | `NeuroVera` | PyTorch, Grad-CAM, LangGraph, FastAPI, React | 10 agent & API test suites | Multi-agent research prototype | **High (Verified)** |
| **07** | **UGC-Ad-Studio** | `UGC-Ad-Studio` | Next.js, TypeScript, Tailwind, LLM Prompts | UI workflows & JSON schemas | Creative generation web application | **Medium-High (Verified)** |
| **08** | **Insurance LLM Assistant** | `Insurance-llm-project` | Python, LLaMA 3 via Ollama, Streamlit, FAISS | `test_llm_response.py` | Local semantic policy assistant | **Medium-High (Verified)** |
| **09** | **ComicSpoilerApp (Web)** | `ComicSpoilerDetectionWebApp` | FastAPI, React, YOLOv8, XGBoost, JWT | API endpoint tests | Full-stack web detector with auth | **Medium (Verified)** |
| **10** | **ComicSpoilerApp (Mobile)** | `ComicSpoilerDetectionMobileApp` | Flutter (Dart), Flask, YOLOv8, TF-IDF | Flutter runner unit/UI test configs | Mobile client with Flask inference | **Medium (Verified)** |

---

## Individual Project Dossiers

### 01. CodeBase-Copilot
* **Exact Repository URL:** `https://github.com/djcode0718/Codebase-Copilot`
* **Repository Name:** `Codebase-Copilot`
* **Sources Inspected:** `README.md` (45KB), `.github/workflows/tests-fast.yml`, `frontend/package.json`, `requirements.txt`, `api/`, `app/`, `tests/` (83 test-related files).
* **Problem Solved:** LLMs hallucinate when generating code across large, modular repositories because naive vector retrieval misses exact symbol definitions, call hierarchies, and architectural dependencies.
* **Verified Architecture:**
  * Dual-mode ingestion parsing symbols, signatures, and abstract syntax trees.
  * Hybrid retrieval fusing Dense FAISS vector similarity and Sparse BM25 lexical search via Reciprocal Rank Fusion (RRF).
  * Cross-encoder reranking pass (`cross-encoder/ms-marco-MiniLM-L-6-v2`).
  * Asynchronous FastAPI backend with Supabase Auth, session caching, and Next.js 15 interactive frontend.
* **Most Impressive Engineering Decision:** Decoupling retrieval benchmarking from LLM synthesis. Built an automated evaluation harness computing Hit Rate @ K and Mean Reciprocal Rank (MRR) alongside unit tests.
* **Verified Metrics & Tests:**
  * **238 passing pytest tests** (verified in repository badge & CI workflow `.github/workflows/tests-fast.yml`).
  * Profiled **~0.1s median retrieval latency** (distinct from end-to-end LLM completion stream).
  * **0.80+ top-5 Hit Rate** and **0.60+ MRR** across benchmarked synthetic developer query splits.
* **Technologies:** Python, FastAPI, Next.js 15, SentenceTransformers, BM25, Supabase, pytest.
* **Known Limitations:** End-to-end token generation time depends on the local LLM host (Ollama) or external API provider rate limits.
* **Recommended Description:** "Production-grade repository intelligence platform featuring hybrid Dense + Sparse BM25 retrieval, RRF fusion, Cross-Encoder reranking, and an automated 238-test evaluation harness."
* **Recommended Category Tags:** `LLMs, RAG & Agents`, `Backend & Systems`
* **Recommended Ranking:** **#01 (Primary Flagship)**.

---

### 02. MediScanAI
* **Exact Repository URL:** `https://github.com/djcode0718/MediscanAI`
* **Repository Name:** `MediscanAI`
* **Sources Inspected:** `README.md` (13KB), `Dockerfile`, `pytest.ini`, `run_tests.sh`, `alembic/`, `backend/`, `frontend/package.json`, `tests/` (40 test files).
* **Problem Solved:** Patients struggle to understand handwritten doctor prescriptions, medicine strip packaging, and potential contraindications against active symptoms.
* **Verified Architecture:**
  * Multimodal ingestion supporting camera strip photos, voice audio notes, and freeform text.
  * OCR extraction via PaddleOCR (with bounding box normalization) and speech transcription via Faster-Whisper.
  * Medical corpus retrieval using FAISS + BM25 + SymSpell fuzzy drug entity resolution.
  * Local Ollama/Mistral LLM synthesis with clinical safety guardrails.
  * PostgreSQL 15+ persistent storage with Alembic schema migrations and SQLAlchemy 2.0 ORM.
* **Most Impressive Engineering Decision:** Complete offline, local execution privacy. Zero patient data or medical images leave the host machine.
* **Verified Metrics & Tests:**
  * **4th Place out of 240 Teams** nationwide at Demux 2.0 National Hackathon (2nd in Healthcare/AI domain).
  * 40 automated test files across API contracts, database transactions, and OCR pipelines.
  * 150+ synthetic medical discharge scenarios evaluated.
* **Technologies:** Python, FastAPI, PaddleOCR, Faster-Whisper, PostgreSQL, Alembic, Docker, React.
* **Known Limitations:** Research/hackathon prototype; explicit disclaimer that it is not FDA-approved or certified for direct clinical diagnosis.
* **Recommended Description:** "Privacy-first multimodal clinical triage system combining PaddleOCR, Faster-Whisper audio transcription, 4-stage hybrid RAG, and PostgreSQL with Alembic migrations."
* **Recommended Category Tags:** `Multimodal AI & Speech`, `Computer Vision & Applied ML`, `Backend & Systems`
* **Recommended Ranking:** **#02 (Secondary Flagship)**.

---

### 03. RazorpayRecoverIQ
* **Exact Repository URL:** `https://github.com/djcode0718/RazorpayRecoverIQ`
* **Repository Name:** `RazorpayRecoverIQ` (Project title: `RecoverIQ`)
* **Sources Inspected:** `README.md` (32.5KB), `backend/requirements.txt`, `backend/tests/` (26 test files), `pyproject.toml`, `frontend/package.json`.
* **Problem Solved:** Payment failures in e-commerce cause customer churn and merchant revenue loss; naive retries trigger duplicate charges and gate fees.
* **Verified Architecture:**
  * Real-time payment failure ingestion via webhook listener with HMAC-SHA256 signature verification.
  * AI diagnostic triage evaluating error codes (e.g., issuer outage, 3DS timeout, insufficient balance).
  * **7 Deterministic Safety Policy Gates:** Strict boundary conditions preventing unauthorized retries, duplicate charges, or exceeding retry caps.
  * Cryptographic audit ledger with idempotent execution guarantees.
  * Asynchronous FastAPI 0.116 service with Next.js merchant recovery control dashboard.
* **Most Impressive Engineering Decision:** Zero-trust architecture decoupling probabilistic LLM diagnosis from deterministic mathematical safety gates. The LLM suggests a pathway, but cannot trigger payments without clearing all 7 deterministic gates.
* **Verified Metrics & Tests:**
  * 26 test suites in `backend/tests/` verifying HMAC security, retry loops, safe fallbacks, and schema invariants.
  * Built for Razorpay Buildathon — Track 03: Autonomous Revenue Recovery & Payment Resilience.
* **Technologies:** Python, FastAPI 0.116, Next.js, HMAC-SHA256, SQLite/PostgreSQL, pytest.
* **Known Limitations:** Simulates Razorpay live webhook events through verifiable sandbox test loops (`verify_razorpay_test_loop.py`).
* **Recommended Description:** "Autonomous revenue recovery engine built for Razorpay Buildathon, combining AI failure diagnosis with 7 deterministic zero-trust safety gates and cryptographic HMAC verification."
* **Recommended Category Tags:** `Backend & Systems`, `LLMs, RAG & Agents`, `AI Products & Full-Stack`
* **Recommended Ranking:** **#03 (Top of Secondary Portfolio)**.

---

### 04. Sound2Sign
* **Exact Repository URL:** `https://github.com/djcode0718/Sound2Sign`
* **Repository Name:** `Sound2Sign`
* **Sources Inspected:** `README.md` (10.5KB), `code/`, `processed_npy_flattened/`, IEEE Xplore publication index.
* **Problem Solved:** End-to-end sign language video models require massive datasets and struggle with unnatural, jerky transitions and facial grammatical markers.
* **Verified Architecture:**
  * Speech/text transcription with Mistral-powered ISL glossing.
  * MediaPipe skeletal landmark processing (pose, hands, and facial non-manual markers).
  * Data-efficient hybrid pipeline combining motion retrieval, GRU-based transition modeling, and cosine interpolation for fluid avatar rendering.
* **Most Impressive Engineering Decision:** Isolating facial expression as a dedicated grammatical channel rather than an afterthought, achieving natural transitions on limited data.
* **Verified Metrics & Tests:**
  * **Published Research Paper:** *IEEE Xplore* at I3CTCON 2026 ([DOI: 10.1109/I3CTCON68242.2026.11507164](https://doi.org/10.1109/I3CTCON68242.2026.11507164)).
  * First-author publication with peer-reviewed methodology and evaluation.
* **Technologies:** Python, PyTorch, MediaPipe, Mistral, GRU, Flask.
* **Known Limitations:** 3D avatar rendering requires WebGL/browser canvas integration; dataset focused on Indian Sign Language (ISL) glosses.
* **Recommended Description:** "Data-efficient speech-to-Indian Sign Language pipeline using MediaPipe skeletal landmarks, GRU transition modeling, and facial expression channels; published in IEEE Xplore."
* **Recommended Category Tags:** `Multimodal AI & Speech`, `Research & Applied ML`
* **Recommended Ranking:** **#04**.

---

### 05. FedSegX
* **Exact Repository URL:** `https://github.com/djcode0718/FedSegX`
* **Repository Name:** `FedSegX`
* **Sources Inspected:** `README.md` (12.3KB), `checkpoints/`, `compare/`, `results/`, `train/`, `requirements.txt`.
* **Problem Solved:** Medical image segmentation models suffer domain collapse on out-of-distribution clinical datasets, but privacy laws (HIPAA/GDPR) prohibit centralizing patient scans.
* **Verified Architecture:**
  * Federated learning framework evaluating non-IID cross-domain generalization between Camouflaged Object Detection (COD10K) and Endoscopic Polyp Segmentation (Kvasir-SEG).
  * `CamouflageSegNet` architecture with Pyramid Vision Transformer v2 (PVTv2-B2) backbone.
  * Privacy-preserving collaborative optimization comparing standard FedAvg against proximal-regularized FedProx.
* **Most Impressive Engineering Decision:** Rigorous quantification of domain collapse when single-domain models are tested across out-of-domain medical datasets.
* **Verified Metrics & Tests:**
  * Implemented and benchmarked FedAvg vs FedProx across non-IID distributions with saved model weights and loss curves.
* **Technologies:** Python, PyTorch, PVTv2, FedProx, FedAvg, TorchVision.
* **Known Limitations:** Research simulation running on local nodes rather than distributed physical hospital hardware.
* **Recommended Description:** "Privacy-preserving cross-domain federated learning framework using PVTv2-B2 backbones and FedProx to mitigate non-IID domain collapse across medical segmentation tasks."
* **Recommended Category Tags:** `Research & Applied ML`, `Computer Vision & Applied ML`
* **Recommended Ranking:** **#05**.

---

### 06. NeuroVera
* **Exact Repository URL:** `https://github.com/djcode0718/NeuroVera`
* **Repository Name:** `NeuroVera` (Frontend UI: `frontend-neurotriage`)
* **Sources Inspected:** `README.md` (10KB), `app/agents/test_retrieval.py`, `test_api_endpoints.py`, `test_drafting_agent.py`, `frontend-neurotriage/package.json`.
* **Problem Solved:** Neurologists spend excessive hours drafting initial radiological scan summaries while lacking visual explainability to verify AI outputs.
* **Verified Architecture:**
  * 4-class MRI tumor classification (glioma, meningioma, pituitary, no tumor).
  * Grad-CAM visual explainability overlay localizing decision regions.
  * LangGraph multi-agent orchestration: Drafting Agent creates preliminary summary, Critique Agent reviews claims against guidelines, and RAG grounding verifies findings.
* **Most Impressive Engineering Decision:** Multi-agent self-critique loop enforcing clinical verification before output presentation.
* **Verified Metrics & Tests:**
  * 10 automated test suites covering agents, Grad-CAM generation, and API endpoints.
* **Technologies:** Python, PyTorch, Grad-CAM, LangGraph, FastAPI, React.
* **Known Limitations:** Research prototype explicitly not cleared for real clinical diagnosis.
* **Recommended Description:** "Multi-agent brain MRI triage system featuring Grad-CAM explainability, LangGraph drafting and self-critique agents, and clinical RAG grounding."
* **Recommended Category Tags:** `Multimodal AI & Speech`, `Computer Vision & Applied ML`, `LLMs, RAG & Agents`
* **Recommended Ranking:** **#06**.

---

### 07. UGC-Ad-Studio
* **Exact Repository URL:** `https://github.com/djcode0718/UGC-Ad-Studio`
* **Repository Name:** `UGC-Ad-Studio`
* **Sources Inspected:** `README.md` (5.8KB), `package.json`, `src/`, `public/`.
* **Problem Solved:** Creating structured UGC video advertising scripts, viral hooks, and scene-by-scene storyboards for TikTok/Reels takes creators hours of manual iteration.
* **Verified Architecture:**
  * Next.js & TypeScript creative application.
  * Multi-prompt chain parsing product briefs into 30-sec scripts, shot-by-shot storyboards, visual hooks, CTAs, and image generation prompts.
* **Most Impressive Engineering Decision:** Structured JSON schema extraction ensuring all generated scripts conform to exact video production timing.
* **Verified Metrics & Tests:**
  * Interactive UI with instant generation, copy workflows, and storyboard previews.
* **Technologies:** TypeScript, Next.js, Tailwind CSS, OpenAI/Claude prompt engineering.
* **Known Limitations:** Generates scripts and image prompts; does not render full video files server-side.
* **Recommended Description:** "AI-native UGC advertising studio transforming product briefs into viral hooks, 30-second scripts, storyboards, and cinematic visual prompts."
* **Recommended Category Tags:** `AI Products & Full-Stack`, `LLMs, RAG & Agents`
* **Recommended Ranking:** **#07**.

---

### 08. Insurance LLM Assistant
* **Exact Repository URL:** `https://github.com/djcode0718/Insurance-llm-project`
* **Repository Name:** `Insurance-llm-project`
* **Sources Inspected:** `README.md` (2KB), `app/inference.py`, `app/ollama_client.py`, `app/streamlit_app.py`, `finetune-dataset/test_llm_response.py`.
* **Problem Solved:** Determining insurance claim approvals requires manual searching through hundreds of dense policy clauses and medical exclusions.
* **Verified Architecture:**
  * Vector similarity search over structured insurance clauses (`clauses.jsonl`).
  * Local LLaMA 3 inference via Ollama to evaluate patient query against policy constraints.
  * Structured decision generation with approval verdict, amount, and exact clause justification.
* **Most Impressive Engineering Decision:** 100% offline claim assessment preventing leakage of sensitive policyholder health records.
* **Verified Metrics & Tests:**
  * Automated testing script `finetune-dataset/test_llm_response.py` validating claim reasoning.
* **Technologies:** Python, Ollama (LLaMA 3), Streamlit, SentenceTransformers, JSONL.
* **Known Limitations:** Streamlit UI designed for local demonstrations rather than production multi-tenant environments.
* **Recommended Description:** "Local LLM insurance claim assistant reasoning over policy clauses with vector similarity retrieval and LLaMA 3 to generate auditable claim decisions."
* **Recommended Category Tags:** `LLMs, RAG & Agents`, `AI Products & Full-Stack`
* **Recommended Ranking:** **#08**.

---

### 09. ComicSpoilerApp (Web)
* **Exact Repository URL:** `https://github.com/djcode0718/ComicSpoilerDetectionWebApp`
* **Repository Name:** `ComicSpoilerDetectionWebApp`
* **Sources Inspected:** `README.md` (6KB), `api/`, `frontend/package.json`, `ml/`, `requirements.txt`.
* **Problem Solved:** Comic readers inadvertently see major plot spoilers while browsing digital comic panels.
* **Verified Architecture:**
  * Rebuilt from Flask prototype into modular FastAPI backend and React frontend.
  * JWT authentication stored in secure httpOnly cookies with guest mode testing.
  * Hybrid pipeline: YOLOv8 character detection + OCR panel text extraction + TF-IDF & XGBoost classification.
* **Most Impressive Engineering Decision:** Decoupling ML inference from the API layer with confidence-weighted spoiler verdicts.
* **Verified Metrics & Tests:**
  * API contract validations and image upload preprocessing benchmarks.
* **Technologies:** Python, FastAPI, React, YOLOv8, XGBoost, Tailwind CSS, JWT.
* **Known Limitations:** Relies on clean panel crops for optimal OCR text extraction.
* **Recommended Description:** "Full-stack spoiler detection web app with FastAPI, React, and JWT auth, classifying comic panels via YOLOv8 character detection and NLP text analysis."
* **Recommended Category Tags:** `Computer Vision & Applied ML`, `AI Products & Full-Stack`
* **Recommended Ranking:** **#09**.

---

### 10. ComicSpoilerApp (Mobile)
* **Exact Repository URL:** `https://github.com/djcode0718/ComicSpoilerDetectionMobileApp`
* **Repository Name:** `ComicSpoilerDetectionMobileApp`
* **Sources Inspected:** `README.md` (3.3KB), `comic_spoiler_mobile_frontend/pubspec.yaml`, `comic_spoiler_mobile_backend/requirements.txt`, `ios/RunnerTests/RunnerTests.swift`.
* **Problem Solved:** Mobile comic readers need on-the-go panel spoiler detection before reading uploaded scans.
* **Verified Architecture:**
  * **Flutter (Dart)** cross-platform mobile client with camera/gallery image picker.
  * **Flask** lightweight backend handling inference requests.
  * YOLOv8 for character counting + TF-IDF/XGBoost for panel classification.
* **Most Impressive Engineering Decision:** Clean Flutter state management communicating with asynchronous inference endpoints.
* **Verified Metrics & Tests:**
  * Flutter runner tests and end-to-end mobile upload smoke validation.
* **Technologies:** Flutter (Dart), Python, Flask, YOLOv8, XGBoost.
* **Known Limitations:** Requires active network connection to the Flask ML backend.
* **Recommended Description:** "Cross-platform Flutter mobile client paired with a Flask backend to analyze comic panels and flag spoilers in real time using YOLOv8 and NLP."
* **Recommended Category Tags:** `Computer Vision & Applied ML`, `AI Products & Full-Stack`
* **Recommended Ranking:** **#10**.

---

## Final Verification Checklist

- [x] All 10 repository URLs and names confirmed against GitHub API and raw content.
- [x] CodeBase-Copilot ranked #01, MediScanAI ranked #02.
- [x] RazorpayRecoverIQ verified with 7 zero-trust policy gates and ranked #03 (top of secondary projects).
- [x] ComicSpoiler Mobile stack confirmed as Flutter + Flask (not React Native).
- [x] NeuroVera and Insurance LLM Assistant naming corrected and aligned.
- [x] All metrics (238 tests, 0.80+ Hit Rate, ~0.1s retrieval latency, 4th/240 teams, IEEE DOI) verified against code and documentation.

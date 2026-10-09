# Sreevedh Jella — Personal Portfolio & Systems Showcase

A high-performance personal portfolio and engineering case-study showcase built for **Sreevedh Jella**, a final-year B.Tech Computer Science Engineering (AI & ML) student at BVRIT, Narsapur.

Designed with an editorial, dark technical aesthetic (`#0B0C0E` background, `#C5FF4A` electric lime accents, `#F3F3EE` warm white typography) inspired by developer studios and product landing pages.

---

## ⚡ Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Typography**: Syne (Headlines), Inter (Body text), JetBrains Mono (Technical annotations)
- **Icons**: Lucide React + Custom Brand SVGs
- **Deployment Target**: Vercel (Zero configuration, 100% static prerendered)

---

## 🚀 Key Features

1. **Interactive Hero Section**:
   - Status badge: `BUILDING THINGS THAT MATTER` with pulse indicator.
   - Verified profile photograph frame preserving `passport size photo.jpg`.
   - Measured metrics quick-ticker (`0.80+ RAG Hit Rate`, `0.92 FedSegX Dice`, `250+ LeetCode Solved`, `IEEE Xplore Author`).
   - Direct CTA navigation and resume access.

2. **Global Command Palette (⌘K / Ctrl+K)**:
   - Full keyboard navigation (Arrow keys, Enter, Escape).
   - Deep navigation to sections, project case studies, IEEE research publication, profile links, and instant email copy.

3. **Curated Engineering Showcase ("Less talk. More things that work.")**:
   - **Functional Category Filters**: `All Projects`, `AI / ML`, `LLM & RAG`, `Full Stack`, `Research`.
   - **Featured Top 4 Case Studies**:
     - **Project 01 — CodeBase-Copilot**: AI Repository Intelligence Platform with 12 workflows, 4-stage hybrid retrieval (dense, BM25, RRF, Cross-Encoder), 0.80+ Hit Rate, 0.60+ MRR, ~0.1s latency, and a 238-test evaluation suite.
     - **Project 02 — MediScanAI**: Privacy-First Multimodal AI Health Copilot (Demux 2.0 Hackathon 4th/240 teams & 2nd in domain) with text/voice/OCR ingestion and PostgreSQL persistence.
     - **Project 03 — Sound2Sign**: Hybrid Speech-to-Sign translation motion synthesis published in IEEE Xplore (`DOI: 10.1109/I3CTCON68242.2026.11507164`).
     - **Project 04 — FedSegX**: Distributed cross-domain federated learning system recovering non-IID collapse (0.92 and 0.80 Dice) with zero raw data transmission over 50 rounds.
   - **Interactive Architecture & Metrics Modals**: Step-by-step pipeline flows and profiled benchmark breakdowns.
   - **Secondary Expandable Drawer**: Additional 6 systems (NeuroVera/NeuroTriage, UGC-Ad-Studio, ComicSpoilerDetection Web & Mobile, Insurance LLM Assistant, RazorpayRecoverIQ).

4. **Experience Timeline**:
   - Software Development Intern at **Segritech (Tikkly Agro Solutions)**:
     - 5,000+ produce images processed with OpenCV (91% grading accuracy).
     - Nationwide web-scraping pipeline collecting 12,000+ temple data points.
     - Rapido-style booking platform UI prototyped in Figma.

5. **Technical Toolkit**:
   - 5 structured, non-gamified panels (Programming Languages, Core CS, Software Engineering & Infra, Databases, and AI/ML & LLMs).

6. **Peer-Reviewed Scientific Output**:
   - Dedicated IEEE Xplore publication spotlight with direct DOI citation resolution.

7. **Achievements & Verified Profiles**:
   - 250+ LeetCode solved, Demux 2.0 hackathon, Promethean'25 leadership, School Sports Captain (25+ medals).
   - Direct links to GitHub, LeetCode, HackerRank, and LinkedIn.

8. **Contact & Resume**:
   - One-click copy email button with feedback.
   - Prefilled `mailto:` client trigger.
   - Direct download link to `23211a66f8_Sreevedh.pdf` served from `public/`.

---

## 🛠️ Local Development

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `10+`

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build Verification

```bash
# Run production build
npm run build
```

---

## ☁️ Free Deployment to Vercel

The portfolio is 100% static and optimized for zero-cost deployment on Vercel:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: world-class portfolio for Sreevedh Jella"
   git remote add origin https://github.com/djcode0718/my-portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel will automatically detect **Next.js**. Leave default settings (`npm run build` and Next.js preset).
5. Click **"Deploy"**. The site will be live on an official `.vercel.app` domain in seconds with automatic HTTPS, edge CDN, and asset caching.

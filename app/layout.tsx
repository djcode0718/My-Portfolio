import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sreevedh.dev"),
  title: "Sreevedh Jella — AI Systems & Software Engineer",
  description:
    "Personal portfolio of Sreevedh Jella, a final-year CS (AI & ML) engineer specializing in intelligent retrieval architectures, LLM systems, multimodal pipelines, and production backend software.",
  keywords: [
    "Sreevedh Jella",
    "AI Engineer",
    "Machine Learning",
    "LLM Systems",
    "RAG",
    "FastAPI",
    "Backend Engineer",
    "Full Stack",
    "Codebase Copilot",
    "MediScanAI",
    "Sound2Sign",
    "FedSegX",
  ],
  authors: [{ name: "Sreevedh Jella", url: "https://github.com/djcode0718" }],
  openGraph: {
    title: "Sreevedh Jella — AI Systems & Software Engineer",
    description:
      "Building intelligent systems, hybrid retrieval engines, multimodal pipelines, and production-grade software.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/passport size photo.jpg",
        width: 800,
        height: 1000,
        alt: "Sreevedh Jella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreevedh Jella — AI Systems & Software Engineer",
    description:
      "Building intelligent systems, hybrid retrieval engines, multimodal pipelines, and production-grade software.",
    images: ["/passport size photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0B0C0E] text-[#F3F3EE] font-sans antialiased selection:bg-[#C5FF4A] selection:text-[#0B0C0E] min-h-screen">
        {children}
      </body>
    </html>
  );
}

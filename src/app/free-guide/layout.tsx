import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Gut Health Guide | Step Zero",
  description: "Get five practical, evidence-aware foundations for better gut health, created for real Indian lives by Step Zero with Palasha.",
};

export default function FreeGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}

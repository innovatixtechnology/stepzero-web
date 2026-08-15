import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Palasha | Step Zero",
  description: "Start a WhatsApp conversation, book a 30-minute Clarity Call, or enquire about personalised Step Zero health coaching.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

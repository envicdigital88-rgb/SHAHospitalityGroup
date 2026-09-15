import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: {
    default: "Eventra Hospitality & Events | UAE-Based Event Management",
    template: "%s | Eventra Hospitality & Events",
  },
  description:
    "A UAE-based hospitality and event management company specializing in technical production, sports tournaments, golf events, and corporate training.",
  keywords: [
    "event management UAE",
    "hospitality UAE",
    "technical production",
    "golf tournament management",
    "sports events UAE",
    "corporate events Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Eventra Hospitality & Events",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

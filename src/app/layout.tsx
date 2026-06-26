import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexFlow — AI-Driven Data Automation Platform",
  description:
    "NexFlow orchestrates intelligent data pipelines with neural precision. Automate ingestion, transformation, and delivery at scale.",
  keywords: [
    "AI automation",
    "data pipeline",
    "ETL",
    "data orchestration",
    "NexFlow",
  ],
  authors: [{ name: "NexFlow" }],
  openGraph: {
    title: "NexFlow — AI-Driven Data Automation Platform",
    description:
      "Automate intelligence. Accelerate everything. Premium AI data automation for modern teams.",
    type: "website",
    locale: "en_US",
    siteName: "NexFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFlow — AI-Driven Data Automation Platform",
    description:
      "Automate intelligence. Accelerate everything. Premium AI data automation for modern teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-oceanic-noir text-arctic-powder antialiased">
        <StructuredData />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}

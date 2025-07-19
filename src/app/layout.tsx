import React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruklist",
  description: "We provide better functional waitlists",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
        )}
      >
        <RootProviders>{children}</RootProviders>
        <Analytics />
      </body>
    </html>
  );
}

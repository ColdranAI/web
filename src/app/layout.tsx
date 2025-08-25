import React from "react";
import type { Metadata } from "next";
import { Poppins, Inter, Instrument_Sans, Fira_Sans, Public_Sans, Ubuntu } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontMono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fontInstrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const fontPublicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const fontFiraSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Coldran",
  description: "We provide better customer experience with knowledgebase",
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
          fontFiraSans.variable,
          fontPoppins.variable,
          fontMono.variable,
          fontInstrumentSans.variable,
          fontPublicSans.variable,
        )}
      >
        <RootProviders>{children}</RootProviders>
        <Analytics />
      </body>
    </html>
  );
}

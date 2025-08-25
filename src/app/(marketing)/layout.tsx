import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 ">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

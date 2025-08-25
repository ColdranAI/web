"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="w-full py-20 max-w-7xl mx-auto px-4 lg:px-6 h-auto overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center">
        <div className="text-center my-16">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 mb-6">
            <span className="text-4xl font-bold text-neutral-400">404</span>
          </div>

          <h1 className="text-4xl font-semibold text-neutral-800 mb-4">
            You seem lost bro
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            This page doesn't exist but you should play with our features.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button variant="lightgray" size="lg">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button variant="blue" size="lg">
              <Link href="/" className="flex items-center gap-2">
                Play with Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

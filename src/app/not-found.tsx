"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-auto overflow-y-auto md:overflow-hidden my-15 flex flex-col items-center justify-center">
      <div className="text-center my-16">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 mb-6">
          <span className="text-4xl font-bold text-neutral-400">404</span>
        </div>

        <h1 className="text-3xl font-semibold text-neutral-800 mb-4">
          Page not found
        </h1>

        <p className="text-md text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been moved or deleted.
        </p>

        <div className="border-r border-neutral-100 bg-neutral-100 h-10 w-0.75 my-8 mx-auto"></div>

        <Button
          className="bg-[#4285F4] hover:bg-[#3B78E7] text-white border-none"
          asChild
        >
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

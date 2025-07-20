import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full py-2 bg-white">
        <div className="flex h-14 items-center justify-between max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-normal flex items-center gap-4">
              <span className="text-sm md:text-xl text-neutral-800 flex items-center gap-3">
                <img src="/logo.svg" alt="Coldran" draggable={false} width={46} height={46} />
                <span className="font-semibold font-poppins tracking-wide">
                  Coldran</span>
              </span>
            </Link>
            <nav className="hidden font-semibold text-md md:flex pl-5 gap-1">
                <Link href="/pricing" className="circular rounded-md px-3 py-2 text-neutral-800">Pricing</Link>
                <Link href="/features" className="circular rounded-md px-3 py-2 text-neutral-800">Features</Link>
                <Link href="/blog" className="circular rounded-md px-3 py-2 text-neutral-800">Blog</Link>
                <Link href="/about" className="circular rounded-md px-3 py-2 text-neutral-800">About</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
          <Button variant="secondary" size="minor">Sign In</Button>
            <Button variant="black" size="minor">Try for Free</Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 ">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <KiteLogo />
              <h3 className="font-semibold text-lg mb-1.5 mt-4">
                KitePortfolio
              </h3>
              <p className="text-muted-foreground text-sm">
                This tool is designed for Zerodha users who want a fast,
                lightweight way to monitor their stock holdings without going
                through daily login barriers.
                <br />
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://discord.gg/xvA8rgGr6Q"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://buymeacoffee.com/nermalcat69"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Buy Me A Coffee
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Creator's Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://x.com/arjvnz"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/nermalcat69"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://arjunaditya.xyz"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Website
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy & Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} KitePortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const KiteLogo = () => {
  return (
    <div className="group relative overflow-visible">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 60"
        width="32"
        height="24"
        style={{ overflow: "visible" }}
      >
        <defs>
          <style>
            {`
              .cls-1 {
                fill: #f6461a;
                transition: transform 0.3s ease-in-out, fill 0.3s ease;
              }
              .cls-2 {
                fill: #db342c;
                transition: transform 0.3s ease-in-out, fill 0.3s ease;
              }
              svg:hover .cls-1 {
                fill: #ff5733;
                z-index: 5;
                transform: translateX(-25px);
              }
              svg:hover .cls-2 {
                fill: #ff2a1f;
                z-index: 1;
                transform: translateX(-13px);
              }
            `}
          </style>
        </defs>
        <title>Kite logo trimmed</title>
        <polygon className="cls-1" points="30 0 0 30 30 60 60 30 90 0 30 0" />
        <polygon className="cls-2" points="30 60 60 30 90 60 30 60" />
      </svg>
    </div>
  );
};

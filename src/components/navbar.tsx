"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type WhoAmI =
  | { authenticated: false }
  | { authenticated: true; user: { id: string; name?: string | null; image?: string | null } };

export function Navbar() {
  const [auth, setAuth] = useState<WhoAmI>({ authenticated: false });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("https://app.coldran.com/api/whoami", {
      method: "GET",
      credentials: "include",
    })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: WhoAmI) => {
        if (!cancelled) {
          setAuth(data);
          setReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setAuth({ authenticated: false });
          setReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className="w-full py-2 bg-white">
      <div className="flex h-14 items-center justify-between max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-normal flex items-center gap-4">
            <span className="text-sm md:text-xl text-neutral-800 flex items-center gap-3">
              <img src="/logo.svg" alt="Coldran" draggable={false} width={46} height={46} />
              <span className="font-semibold font-poppins tracking-wide">
                Coldran
              </span>
            </span>
          </Link>
          <nav className="hidden font-semibold text-md md:flex pl-5 gap-1">
            <Link href="/pricing" className="circular rounded-md px-3 py-2 text-neutral-800">
              Pricing
            </Link>
            <Link href="/blog" className="circular rounded-md px-3 py-2 text-neutral-800">
              Blog
            </Link>
            <Link href="https://docs.coldran.com" target="_blank" className="circular rounded-md px-3 py-2 text-neutral-800">
              Docs
            </Link>
            <Link href="/about" className="circular rounded-md px-3 py-2 text-neutral-800">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {!ready ? (
            <Button variant="secondary" size="minor" className="opacity-70 pointer-events-none">
              Loading…
            </Button>
          ) : auth.authenticated ? (
            <>
              {auth.user.name && (
                <span className="text-sm text-neutral-600 mr-2">
                  Welcome, {auth.user.name}
                </span>
              )}
              <Button variant="black" size="minor" asChild>
                <a href="https://app.coldran.com">Go to App</a>
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" size="minor" asChild>
                <a href="https://app.coldran.com/sign-in">Sign In</a>
              </Button>
              <Button variant="black" size="minor">
                Play with Agents
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
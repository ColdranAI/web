"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type WhoAmI =
  | { authenticated: false }
  | { authenticated: true; user: { id: string; name?: string | null; image?: string | null } };

export function Navbar() {
  const pathname = usePathname();

  // Default to "not ready" only on /sign-in (where we might swap to Dashboard).
  const [ready, setReady] = useState(pathname === "/sign-in" ? false : true);
  const [auth, setAuth] = useState<WhoAmI>({ authenticated: false });

  useEffect(() => {
    // Only bother fetching auth on /sign-in (so other pages never show a loading state).
    if (pathname !== "/sign-in") return;

    const ctrl = new AbortController();

    fetch("https://app.coldran.com/api/whoami", {
      method: "GET",
      credentials: "include",
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : { authenticated: false }))
      .then((data: WhoAmI) => {
        setAuth(data);
        setReady(true);
      })
      .catch(() => {
        setAuth({ authenticated: false });
        setReady(true);
      });

    return () => ctrl.abort();
  }, [pathname]);

  const showDashboardCTA = pathname === "/sign-in" && auth.authenticated;

  return (
    <header className="w-full py-4 bg-white">
      <div className="flex h-14 items-center justify-between max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-normal flex items-center gap-4">
            <span className="text-sm md:text-xl text-neutral-800 flex items-center gap-3">
              <img src="/logo.svg" alt="Coldran" draggable={false} width={46} height={46} />
              <span className="font-semibold font-poppins tracking-wide">Coldran</span>
            </span>
          </Link>
          <nav className="hidden font-semibold text-md md:flex pl-5 gap-1">
            <Link href="/pricing" className="circular rounded-md px-3 py-2 text-neutral-800">Pricing</Link>
            <Link href="/blog" className="circular rounded-md px-3 py-2 text-neutral-800">Blog</Link>
            <Link href="/team" className="circular rounded-md px-3 py-2 text-neutral-800">Team</Link>
            <a href="https://docs.coldran.com" target="_blank" className="circular rounded-md px-3 py-2 text-neutral-800">Docs</a>
            <Link href="/about" className="circular rounded-md px-3 py-2 text-neutral-800">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Only ever show a loading state on /sign-in while we decide if we should show Dashboard */}
          {!ready && pathname === "/sign-in" ? (
            <Button variant="secondary" size="minor" className="opacity-70 pointer-events-none">
              Loading…
            </Button>
          ) : showDashboardCTA ? (
            <a href="https://app.coldran.com">
              <Button variant="black" size="minor">Dashboard</Button>
            </a>
          ) : (
            <>
              {/* Internal route: use Link + asChild so it doesn't flash a reload */}
              <Link href="/play-with-us" className="inline-block">
                <Button variant="lightgray" size="minor">Play with Us</Button>
              </Link>

              {/* Sign-in always visible outside the app */}
              <a href="https://app.coldran.com/" target="_blank" rel="dofollow noopener">
                <Button variant="blue" size="minor">Sign In</Button>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

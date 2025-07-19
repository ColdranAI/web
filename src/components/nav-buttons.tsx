"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UserProfile } from "@/components/user-profile";
import { useSession } from "@/lib/auth-client";

export function MarketingNavButtons() {
  const { data: session, isPending } = useSession();

  return (
    <>
      {!isPending &&
        (session ? (
          <div className="h-full border-dashed">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 group/nav"
            >
              <span>Dashboard</span>
              <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
                <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
                <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
              </div>
            </Link>
          </div>
        ) : (
          <>
            <Link
              href="/sign-in"
              className="flex text-muted-foreground font-medium items-center"
            >
              <span>Sign In</span>
            </Link>
            <Link
              href="/sign-up"
              className="flex font-medium py-1.5 px-3.5 items-center text-white bg-[#F6471A] hover:bg-[#F6471A]/93 transition-colors"
            >
              <span>Sign Up</span>
            </Link>
          </>
        ))}
      <UserProfile className="size-9" />
    </>
  );
}

export function DashboardNavButtons() {
  return (
    <>
      <div className="h-full border-l border-dashed">
        <a
          href="https://x.com/rahul_kumar_v"
          target="_blank"
          className="flex items-center gap-2 group/nav"
        >
          <span>X</span>
          <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
            <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
            <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
          </div>
        </a>
      </div>
      <div className="h-full border-l border-dashed">
        <a
          href="https://github.com/rahul-kumar-v"
          target="_blank"
          className="flex items-center gap-2 group/nav"
        >
          <span>Github</span>
          <div className="relative z-10 size-4 overflow-hidden flex items-center justify-center">
            <ArrowUpRight className="-z-10 absolute opacity-100 scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/nav:-translate-y-5 group-hover/nav:translate-x-5 group-hover/nav:opacity-0 group-hover/nav:scale-0 transition-all duration-200" />
            <ArrowUpRight className="absolute -z-10 -bottom-4 -left-4 opacity-0 scale-0 group-hover/nav:-translate-y-[15px] group-hover/nav:translate-x-4 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-200" />
          </div>
        </a>
      </div>
    </>
  );
}

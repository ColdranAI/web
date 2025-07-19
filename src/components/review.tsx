import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import arjun from "./arjun.jpg";
import ruklist from "./ruklist.png";

export const Review = () => (
  <div className="relative rounded-xl flex flex-col justify-between border component-outline bg-card p-6 h-full">
    <p className="max-w-3xl text-balance font-semibold text-lg tracking-tight sm:text-xl">
      &ldquo;A production-grade, monorepo-first, full stack Next.js template.
      Very thoughtfully engineered and documented. Covers auth, DB & ORM,
      payments, docs, blog, o11y, analytics, emails, and even feature flags &
      dark mode.&rdquo;
    </p>
    <div className="flex items-center justify-between gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="-space-x-1 flex items-center">
          <Image
            src={arjun}
            alt=""
            width={28}
            draggable={false}
            height={28}
            className="rounded-xl ring-2 ring-background"
          />
          <Image
            src={ruklist}
            alt=""
            width={28}
            draggable={false}
            height={28}
            className="rounded-xl ring-2 ring-background"
          />
        </div>
        <p className="text-muted-foreground text-sm">
          <span className="font-medium">Arjun Aditya</span>, Creator of Ruklist
        </p>
      </div>
      <a href="https://x.com/arjvnz" target="_blank" rel="noopener noreferrer">
        <svg
          fill="none"
          height={16}
          viewBox="0 0 24 24"
          width={16}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>X</title>
          <path
            clipRule="evenodd"
            d="m15.9455 23-5.5495-7.9099-6.94714 7.9099h-2.939094l8.582324-9.7689-8.582324-12.2311h7.545944l5.23029 7.45502 6.5533-7.45502h2.9391l-8.1841 9.3165 8.8971 12.6835zm3.273-2.23h-1.9787l-12.52169-17.54h1.97899l5.015 7.0232.8672 1.2187z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
);

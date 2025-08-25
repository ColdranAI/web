import { Button } from "@/components/ui/button";

export function FeatureCard() {
  return (
    <div className="relative mx-4 flex h-full flex-col gap-y-6 rounded-xl bg-neutral-50 hover:bg-neutral-100/70 hover:border-neutral-300 transition-all duration-300 p-8 border border-neutral-200">
      <div className="flex flex-row items-center gap-3">
        <h3 className="text-xl font-semibold text-neutral-800">
          Managed Waitlist Platform
        </h3>
      </div>

      <div className="flex flex-1 flex-col justify-start gap-2">
        <p className="text-balance text-md text-neutral-600">
          We&apos;re building a seamless, managed waitlist service for those who
          prefer not to self-host. Interested? Add your name to the waitlist and
          help shape the future of this platform! (I Support Self-Hosting but if
          people want a managed service, I&apos;ll build it.)
        </p>
      </div>

      <a
        href="https://x.com/ArjunShips"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="w-fit rounded-full bg-transparent bg-white hover:bg-neutral-100 text-black border-neutral-200"
        >
          <span className="flex flex-row items-center gap-2">
            I&apos;m Interested!
          </span>
        </Button>
      </a>
    </div>
  );
}

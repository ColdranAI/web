import Image from "next/image";
import { BuyMeCoffeeCard } from "@/components/buy-me-coffee-card";
import { Support } from "@/components/support";
import { Review } from "@/components/review";
import { PricingCard } from "@/components/pricing-card";
import { SecondFeature } from "@/components/second-feature";
import { FeatureCard } from "@/components/FeedbackForm";
import { TemplatesSection } from "@/components/templates-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" mx-auto px-4 max-w-5xl lg:px-6 h-auto overflow-y-auto md:overflow-hidden my-10  items-center justify-center">
      <div className="md:min-h-screen pt-20 pb-20 md:pb-0">
        <div className=" w-full max-w-2xl mx-auto py-2">
          <h1 className="text-black text-4xl md:text-5xl font-semibold text-center z-10 ">
            Frictionless Waitlists for Busy Founders
          </h1>
        </div>
        <p className="text-md text-center text-muted-foreground mt-3">
          Focus on the serving your{" "}
          <span className="font-semibold text-black">Potential Customers</span>{" "}
          while you build the{" "}
          <span className="font-semibold text-black">MVP</span>. Coldran will
          help you do that.
        </p>
        <div className="flex items-center pt-10 justify-center">
        <Button variant="default" size="lg">Build Your Agent</Button>
      </div>
      </div>
      <div className="mb-14 max-w-4xl mx-auto px-4">
          <section>
            <header className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  You wouldn't be here if your
                  <br className="hidden md:block" /> current waitlist ACSHUALLY
                  worked.
                  <br className="hidden md:block" /> It's time for better
                  templates.
              </h2>
            </header>
            <article>
              <p className="text-lg text-neutral-700 leading-relaxed">
                A Vibe Coder and not sure about the security of your waitlist?{" "}
                <strong>It's time for better templates.</strong> <br />
                Users bouncing because your page looks unprofessional?{" "}
                <strong>It's time for better templates.</strong> <br/>
                Spending 2 days on what should take 20 minutes to setup & deploy?{" "}
                <strong>It's time for better templates.</strong> <br/>
                Database setup giving you headaches?{" "}
                <strong>It's time for better templates.</strong> <br />
                Animation code breaking your brain?{" "}
                <strong>It's time for better templates.</strong> <br />
                Notion integration seems impossible?{" "}
                <strong>It's time for better templates.</strong> <br />
                People Spamming your waitlist?{" "}
                <strong className="inline-block bg-neutral-100 border border-neutral-300 text-black px-2 py-1 transform rotate-[-2deg] font-bold">
                  It's time for Better Waitlists.
                </strong>
                <br />
                <br />
                ps: we are not a design shop, that stuff is very brand oriented.
                <br />
                we sell functionality, not design.

              </p>
            </article>
          </section>
        </div>
        <div className="grid grid-cols-2 gap-8 my-10 px-4">
        <div>
          <Review />
        </div>
        <div>
          <Support />
        </div>
      </div>
      <SecondFeature />
      <FeatureCard />
      <div className="mx-4 my-2">
        <div className="relative w-full max-w-5xl aspect-[10/3] rounded-2xl mx-auto overflow-hidden">
          <Image
            src="/gradient-2.png"
            alt="Kite"
            width={800}
            height={450}
            draggable={false}
            className="rounded-xl select-none brightness-75 object-cover w-full h-full"
          />
          <h1 className="absolute bottom-0 font-mono lg:right-1/4 transform translate-x-1/4 md:translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold text-center z-10 whitespace-nowrap">
            Treat. Customers. Better.
          </h1>
        </div>
      </div>
      <TemplatesSection />
    </div>
  );
}

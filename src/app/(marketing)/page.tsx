"use client";

import Image from "next/image";
import { Support } from "@/components/support";
import { Review } from "@/components/review";
// import { SecondFeature } from "@/components/second-feature";
// import { FeatureCard } from "@/components/FeedbackForm";
import { TemplatesSection } from "@/components/templates-section";
import { Button } from "@/components/ui/button";
import { ChatToDashboard } from "@/components/chat-to-dashboard";
import { SlackAnalyzer } from "@/components/slack-analyzer";
import { FeedbackOrganizer } from "@/components/feedback-organizer";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className=" mx-auto px-4 max-w-5xl lg:px-6 h-auto overflow-y-auto md:overflow-hidden my-10  items-center justify-center">
      <div className="md:min-h-screen pt-20 pb-20 md:pb-0">
        <div className=" w-full max-w-2xl mx-auto py-2">
          <h1 className="text-black text-4xl md:text-5xl font-semibold text-center z-10 ">
            Customer Relationship Management for Founders
          </h1>
        </div>
        <p className="text-md text-center text-muted-foreground mt-3">
          Focus on building your next{" "}
          <span className="font-semibold text-black">Features</span>{" "}
          while we tell you what to build{" "}
          <span className="font-semibold text-black">For Your Customers</span>.
          <br />
          <br />
          <span className="max-w-5xl font-semibold text-black">Mini Secret</span> we also provide short-term memory and long term memory for your customer support agents.
        </p>
        <div className="flex items-center pt-10 gap-4 justify-center">
        <Button variant="default" size="lg">Build Your Agent</Button>
        <Button variant="blue" size="lg">
          <a href="/demo">View Live Demo</a>
        </Button>
        <Button variant="red" size="lg">Build Your Agent</Button>
      </div>
      </div>
      <TemplatesSection />

      <div className="space-y-16">
          {/* Row 1: Chat to Dashboard Pipeline */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ChatToDashboard />
          </motion.section>

          {/* Row 2: Two components side by side */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Slack Analyzer */}
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-3">
                  Real-time Workspace Analysis
                </h2>
                <p className="text-neutral-600">
                  Automatically analyzes communication channels, tracks sentiment, 
                  and identifies engagement patterns across your workspace
                </p>
              </div>
              <div className="flex justify-center">
                <SlackAnalyzer />
              </div>
            </div>

            {/* Feedback Organizer */}
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-3">
                  Smart Feedback Intelligence
                </h2>
                <p className="text-neutral-600">
                  Transforms unstructured feedback into prioritized insights with 
                  sentiment analysis and automated categorization
                </p>
              </div>
              <div className="flex justify-center">
                <FeedbackOrganizer />
              </div>
            </div>
          </motion.section>
        </div>
        <div className="grid grid-cols-2 gap-8 my-10 px-4">
        <div>
          <Review />
        </div>
        <div>
          <Support />
        </div>
      </div>
      {/* <SecondFeature /> */} 
      {/* <FeatureCard /> */}
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
    </div>
  );
}

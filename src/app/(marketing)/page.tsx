"use client";

import Image from "next/image";
import { TemplatesSection } from "@/components/templates-section";
import { Button } from "@/components/ui/button";
import { ChatToDashboard } from "@/components/chat-to-dashboard";
import { SlackAnalyzer } from "@/components/slack-analyzer";
import { FeedbackOrganizer } from "@/components/feedback-organizer";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className=" mx-auto px-4  lg:px-6 h-auto overflow-y-auto md:overflow-hidden my-10  items-center justify-center">
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
          <span className="text-muted-foreground">We make it easy for people to have a vast amount of knowledgebase which updates itself over time.</span>
          <br />
          <br />
          <span className="max-w-5xl font-semibold text-black">Mini Secret</span> we also provide short-term memory and long term memory for your customer support agents.
        </p>
        <div className="flex flex-col sm:flex-row items-center py-10 gap-4 justify-center">
        <Button variant="default" size="lg">Build Your Agent</Button>
        <Button variant="blue" size="lg">
          <a href="/demo">Run Your Scraper</a>
        </Button>
        <Button variant="red" size="lg">Build Your Survey</Button>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center py-10 gap-4 justify-center">
        <Button variant="default" size="lg">Build Your Survey</Button>
        <Button variant="blue" size="lg">Visual Bug Reporting in IDE</Button>
        <Button variant="red" size="lg">Web Customer Agents</Button>
        <Button variant="default" size="lg">Discord Customer Bot</Button>
        <Button variant="red" size="lg">Slack Scraper Agent</Button>
        <Button variant="blue" size="lg">Run Surveys & Deep Research</Button>
        <Button variant="default" size="lg">Web Search Subreddits</Button>
        <Button variant="red" size="lg">Discord Scraper Agent</Button>
        <Button variant="blue" size="lg">IDE Customer Agents</Button>
        <Button variant="red" size="lg">Transcribe & Analyze Customer Calls</Button>
        <Button variant="blue" size="lg">Customer Feedback Classification</Button>
        <Button variant="red" size="lg">Automatically Trigger Issues</Button>
        <Button variant="blue" size="lg">Integrate with Zapier, Airtable, Notion, Github, Gitlab, Jira, etc.</Button>
        <Button variant="default" size="lg">Advanced Mail Client</Button>
        <Button variant="red" size="lg">Customer Knowledge Base</Button>
        <Button variant="default" size="lg">Internal Knowledge Base</Button> 
        <Button variant="red" size="lg">Create A Roadmap Page</Button>
        <Button variant="blue" size="lg">Create a Help & Support Page</Button>
        <Button variant="red" size="lg">Screen Record The Bug using Widget</Button>
        <Button variant="blue" size="lg">Component Behavior Reporting via Web</Button>
        <Button variant="blue" size="lg">Whatsapp & Instagram Agents</Button>

      </div>
      {/* <p className="text-center text-sm text-muted-foreground">would love to buy coldrun.ai but it's costly. ps: this platform is work in progress</p> */}
      </div>
      <TemplatesSection />
      <Image src="/knowledge-base.png" alt="Knowledge Base" width={1000} height={1000} className="mb-20" />

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
                  Coming for both Discord & Slack.
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
                  Smart Classification of Data
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
        <div className="py-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Everything You Need to Understand Your Customers</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Understanding & Classification */}
              <div className="border border-neutral-200 p-4 rounded-lg bg-white">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Customer Intelligence
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Auto-classify messages into bugs, features & feedback</li>
                  <li>• Use our Email client and scan for customer pain point analysis and save into knowledge base.</li>
                  <li>• Zoom & Google Meet call recording with insights</li>
                  <li>• Scrape Discord, Reddit, Slack & forums for competitor insights</li>
                </ul>
              </div>

              {/* AI Support Agents */}
              <div className="border border-neutral-200 p-4 rounded-lg bg-white">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  AI Support Agents
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Client-facing agent with memory & knowledge graph</li>
                  <li>• Web search API for real-time answers</li>
                  <li>• Dashboard agent with organized data intelligence</li>
                  <li>• Vector DB & knowledge graph powered responses</li>
                </ul>
              </div>

              {/* Community Features */}
              <div className="border border-neutral-200 p-4 rounded-lg bg-white">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Community & Feedback
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Feature voting like feedback.ycombinator.com</li>
                  <li>• Integrated support & roadmap management</li>
                  <li>• Waitlist pages with survey forms & deep research</li>
                  <li>• Auto-convert bugs to GitHub issues</li>
                </ul>
              </div>

              {/* Native Integrations */}
              <div className="border border-neutral-200 p-4 rounded-lg bg-white">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Native Integrations
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Discord, Slack, Zoom, Notion, Airtable</li>
                  <li>• Intercom, Stripe, Segment, GitHub</li>
                  <li>• Zapier, Twilio for workflow automation</li>
                  <li>• Free tier & startup credits available</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-neutral-200 p-4 rounded-lg bg-neutral-50">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No More "Schedule a Call" Barriers</h3>
              <p className="text-sm text-neutral-700">
                Unlike other platforms, we provide everything in one place with gentle, human-like AI behavior. 
                Perfect onboarding for small customers who want to try before they buy—no formal sales calls required.
              </p>
            </div>
            </div>
      <div className="mx-4 mt-10 my-2">
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

"use client";

import { ChatToDashboard } from "./chat-to-dashboard";
import { SlackAnalyzer } from "./slack-analyzer";
import { FeedbackOrganizer } from "./feedback-organizer";
import { motion } from "framer-motion";

export function DemoShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            AI-Powered Customer Intelligence Platform
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transforming customer conversations into actionable insights through 
            intelligent automation and real-time analysis
          </p>
        </motion.div>

        {/* Components Grid */}
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

        {/* Value Proposition */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Why This Matters for Founders
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Instant Insights</h4>
                <p className="text-neutral-600 text-sm">
                  Turn weeks of manual analysis into real-time automated intelligence. 
                  Know what customers want before they ask.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Data-Driven Decisions</h4>
                <p className="text-neutral-600 text-sm">
                  Every feature request, bug report, and customer interaction is 
                  automatically categorized and prioritized by impact.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Scale Without Friction</h4>
                <p className="text-neutral-600 text-sm">
                  Handle 10x more customer conversations without hiring 10x more people. 
                  AI scales with your growth.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Market Opportunity */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-neutral-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Market Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">$12B</div>
                <div className="text-neutral-300">Customer Analytics Market</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-neutral-300">YoY Growth in AI Customer Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">87%</div>
                <div className="text-neutral-300">of Founders Struggle with Customer Intelligence</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
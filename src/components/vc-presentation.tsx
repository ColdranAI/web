"use client";

import { ChatToDashboard } from "./chat-to-dashboard";
import { SlackAnalyzer } from "./slack-analyzer";
import { FeedbackOrganizer } from "./feedback-organizer";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";

export function VCPresentation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
              Customer Intelligence
              <br />
              <span className="text-neutral-600">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform every customer interaction into competitive advantage through 
              AI-powered analysis and automation
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-8 mt-16 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-neutral-900 mb-2">90%</div>
                <div className="text-neutral-600">Faster Insights</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-neutral-900 mb-2">10x</div>
                <div className="text-neutral-600">Scale Efficiency</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-neutral-900 mb-2">$12B</div>
                <div className="text-neutral-600">Market Opportunity</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">The Problem Founders Face</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3">Drowning in Data</h3>
                <p className="text-neutral-300 text-sm">
                  Customer feedback scattered across Slack, support tickets, surveys. 
                  No unified view of what customers actually want.
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3">Reactive Product Decisions</h3>
                <p className="text-neutral-300 text-sm">
                  Building features based on gut feelings instead of data-driven insights. 
                  Missing critical patterns in customer behavior.
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3">Can't Scale Support</h3>
                <p className="text-neutral-300 text-sm">
                  Every new customer requires more human support. Growth becomes 
                  a burden instead of an opportunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Demo */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Solution in Action</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Three core AI engines working together to transform customer chaos into clear action
            </p>
          </motion.div>

          {/* Live Demos */}
          <div className="space-y-20">
            {/* Chat to Dashboard Demo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <div className="bg-blue-50 inline-block px-3 py-1 rounded-full text-blue-800 text-sm font-medium mb-4">
                  Core Intelligence Pipeline
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  From Chat to Action in Seconds
                </h3>
                <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                  AI processes customer feedback, structures it intelligently, and feeds organized data 
                  directly to your action dashboard with GitHub and Slack integration.
                </p>
              </div>
              <ChatToDashboard />
            </motion.div>

            {/* Slack Analyzer Demo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2">
                <div className="bg-green-50 inline-block px-3 py-1 rounded-full text-green-800 text-sm font-medium mb-4">
                  Workspace Intelligence
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Real-time Communication Analysis
                </h3>
                <p className="text-neutral-600 text-lg mb-6">
                  Turn Slack conversations into strategic insights. Automatically track 
                  sentiment, engagement, and identify trending topics across channels.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    Multi-channel sentiment analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    Participant engagement tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    Automated trend detection
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <SlackAnalyzer />
              </div>
            </motion.div>

            {/* Feedback Organizer Demo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <div className="bg-purple-50 inline-block px-3 py-1 rounded-full text-purple-800 text-sm font-medium mb-4">
                  Feedback Intelligence
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Smart Feedback Processing
                </h3>
                <p className="text-neutral-600 text-lg mb-6">
                  Transform chaotic feedback into clear product roadmaps. AI automatically 
                  categorizes, prioritizes, and visualizes customer input.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    Automatic categorization and tagging
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    Priority scoring based on impact
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    Visual insights for product decisions
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <FeedbackOrganizer />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market & Traction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Market Opportunity</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Massive & Growing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Customer Analytics Market</span>
                  <span className="font-bold text-neutral-900">$12.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">AI Customer Tools Growth</span>
                  <span className="font-bold text-green-600">+127% YoY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">B2B SaaS TAM</span>
                  <span className="font-bold text-neutral-900">$350B</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Now?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remote work created communication chaos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI reached human-level language understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Founders need data-driven product decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer acquisition costs are rising 60% YoY</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Customer Intelligence?</h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join us in building the future of customer-driven product development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-neutral-900 transition-colors">
                View Deck
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { SimpleChatDemo } from "./animated-chatbot";
import { FeedbackDashboard } from "./feedback-dashboard";

export function ChatToDashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          AI Chat → Data Pipeline → Dashboard
        </h2>
        <p className="text-neutral-600">
          Chat processes feedback, feeds structured data to dashboard for action
        </p>
      </div>

      {/* Components Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Chat Component */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <div className="text-center mb-4">
            <h3 className="font-medium text-neutral-800 mb-1">
              Customer Support
            </h3>
          </div>
          <SimpleChatDemo />
        </motion.div>

        {/* Animated Pipeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-4 px-4"
        >
          {/* Desktop Pipeline */}
          <div className="hidden lg:flex flex-col items-center">
            {/* Horizontal Pipeline */}
            <div className="relative w-32 h-8 bg-neutral-200 rounded-full overflow-hidden border border-neutral-300">
              {/* Pipeline background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200"></div>

              {/* Flowing data particles */}
              {[
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
                66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
                82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
                98, 99, 100,
              ].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 w-1 h-1 bg-neutral-600 rounded-full transform -translate-y-1/2"
                  animate={{
                    x: [-20, 500],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <div className="text-xs text-neutral-500 mt-2">Data Flow</div>
          </div>

          {/* Mobile Pipeline */}
          <div className="lg:hidden flex flex-row items-center">
            {/* Vertical Pipeline */}
            <div className="relative w-8 h-20 bg-neutral-200 rounded-full overflow-hidden border border-neutral-300">
              {/* Pipeline background */}
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-200"></div>

              {/* Flowing data particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 w-3 h-3 bg-neutral-600 rounded-full transform -translate-x-1/2"
                  animate={{
                    y: [-12, 100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dashboard Component */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex-1"
        >
          <div className="text-center mb-4">
            <h3 className="font-medium text-neutral-800 mb-1">Dashboard</h3>
          </div>
          <FeedbackDashboard />
        </motion.div>
      </div>
    </div>
  );
}

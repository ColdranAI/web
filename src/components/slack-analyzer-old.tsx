"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Users, TrendingUp, Hash, Eye, BarChart3 } from "lucide-react";

interface Channel {
  name: string;
  messageCount: number;
  participants: number;
  sentiment: "positive" | "neutral" | "negative";
}

interface AnalysisStep {
  title: string;
  status: "pending" | "analyzing" | "completed";
  progress: number;
}

export function SlackAnalyzer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [currentPhase, setCurrentPhase] = useState<"analyzing" | "summary" | "chat">("analyzing");
  const [analysisSteps, setAnalysisSteps] = useState<AnalysisStep[]>([
    { title: "Scanning channels", status: "pending", progress: 0 },
    { title: "Processing messages", status: "pending", progress: 0 },
    { title: "Analyzing sentiment", status: "pending", progress: 0 },
    { title: "Generating insights", status: "pending", progress: 0 },
  ]);

  const [channels, setChannels] = useState<Channel[]>([]);
  const [messages, setMessages] = useState<Array<{id: string, type: "user" | "bot", content: string}>>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const mockChannels: Channel[] = [
    { name: "general", messageCount: 1247, participants: 23, sentiment: "positive" },
    { name: "product-feedback", messageCount: 892, participants: 15, sentiment: "neutral" },
    { name: "support", messageCount: 634, participants: 8, sentiment: "negative" },
    { name: "feature-requests", messageCount: 456, participants: 12, sentiment: "positive" },
    { name: "bug-reports", messageCount: 234, participants: 6, sentiment: "negative" },
  ];

  useEffect(() => {
    if (!isInView || hasStarted) return;
    
    setHasStarted(true);
    
    const timer = setInterval(() => {
      setAnalysisSteps(prev => {
        const newSteps = [...prev];
        
        // Find current active step
        let activeStepIndex = newSteps.findIndex(step => step.status === "analyzing");
        
        if (activeStepIndex === -1) {
          // Start next pending step
          activeStepIndex = newSteps.findIndex(step => step.status === "pending");
          if (activeStepIndex !== -1) {
            newSteps[activeStepIndex].status = "analyzing";
          }
        }

        if (activeStepIndex !== -1) {
          const currentProgress = newSteps[activeStepIndex].progress;
          if (currentProgress < 100) {
            newSteps[activeStepIndex].progress = Math.min(currentProgress + 5, 100);
          } else {
            newSteps[activeStepIndex].status = "completed";
            
            // Add channels gradually as analysis completes
            if (activeStepIndex === 1) { // Processing messages
              setChannels(mockChannels.slice(0, 3));
            } else if (activeStepIndex === 2) { // Analyzing sentiment
              setChannels(mockChannels);
            } else if (activeStepIndex === 3) { // Generating insights
              clearInterval(timer);
              // Move to summary phase
              setTimeout(() => {
                setCurrentPhase("summary");
                // After showing summary, move to chat
                setTimeout(() => {
                  setCurrentPhase("chat");
                  // Start chat conversation
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: "1", 
                      type: "bot", 
                      content: "Analysis complete! I've processed 5 channels with 3,463 messages. What would you like to know?"
                    }]);
                  }, 500);
                  
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: "2", 
                      type: "user", 
                      content: "What's the overall sentiment in #support?"
                    }]);
                  }, 2000);
                  
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: "3", 
                      type: "bot", 
                      content: "The #support channel shows 23% negative sentiment, mainly due to login timeout issues. 634 total messages from 8 participants."
                    }]);
                  }, 4000);
                }, 3000);
              }, 1000);
            }
          }
        }

        return newSteps;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [isInView, hasStarted]);

  const getSentimentColor = (sentiment: Channel["sentiment"]) => {
    switch (sentiment) {
      case "positive": return "text-green-600 bg-green-50";
      case "negative": return "text-red-600 bg-red-50";
      default: return "text-yellow-600 bg-yellow-50";
    }
  };

  const getSentimentIcon = (sentiment: Channel["sentiment"]) => {
    switch (sentiment) {
      case "positive": return "↗";
      case "negative": return "↘";
      default: return "→";
    }
  };

  return (
    <div ref={ref} className="w-full max-w-lg mx-auto bg-white border border-neutral-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-neutral-200 bg-neutral-50">
        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-neutral-900">Slack Channel Analyzer</h3>
          <p className="text-xs text-neutral-500">
            {currentPhase === "analyzing" 
              ? "Analyzing workspace..." 
              : currentPhase === "summary" 
              ? "Analysis Complete" 
              : "Ready for questions"}
          </p>
        </div>
      </div>

      <div className="h-96 overflow-y-auto bg-neutral-50">
        <AnimatePresence mode="wait">
          {currentPhase === "analyzing" ? (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-4"
            >
              {/* Analysis Steps */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-neutral-700">Analysis Progress</h4>
          {analysisSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    step.status === "completed" 
                      ? "bg-green-100 text-green-600" 
                      : step.status === "analyzing"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-neutral-100 text-neutral-400"
                  }`}>
                    {step.status === "completed" ? (
                      "✓"
                    ) : step.status === "analyzing" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-2 border border-blue-600 border-t-transparent rounded-full"
                      />
                    ) : (
                      <Eye className="w-2 h-2" />
                    )}
                  </div>
                  <span className={`text-sm ${
                    step.status === "completed" ? "text-green-700" : "text-neutral-600"
                  }`}>
                    {step.title}
                  </span>
                </div>
                <span className="text-xs text-neutral-500">{step.progress}%</span>
              </div>
              
              <div className="w-full bg-neutral-200 rounded-full h-1.5">
                <motion.div
                  className={`h-1.5 rounded-full ${
                    step.status === "completed" ? "bg-green-500" : "bg-blue-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${step.progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel Results */}
        <AnimatePresence>
          {channels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              <h4 className="text-sm font-medium text-neutral-700">Channel Insights</h4>
              <div className="space-y-2">
                {channels.map((channel, index) => (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-neutral-50 rounded-lg border border-neutral-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4 text-neutral-400" />
                        <span className="font-medium text-neutral-800">
                          {channel.name}
                        </span>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getSentimentColor(channel.sentiment)}`}>
                        {getSentimentIcon(channel.sentiment)} {channel.sentiment}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-neutral-600">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{channel.messageCount.toLocaleString()} messages</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{channel.participants} participants</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Stats */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <h5 className="font-medium text-blue-900 mb-2">Analysis Summary</h5>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-900">5</div>
                  <div className="text-xs text-blue-700">Channels</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-900">3.4K</div>
                  <div className="text-xs text-blue-700">Messages</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-900">64</div>
                  <div className="text-xs text-blue-700">Participants</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
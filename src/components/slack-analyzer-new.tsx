"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Users, Hash, Eye, BarChart3, User } from "lucide-react";

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
                  }, 2500);
                  
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      id: "3", 
                      type: "bot", 
                      content: "The #support channel shows 23% negative sentiment, mainly due to login timeout issues. 634 total messages from 8 participants."
                    }]);
                  }, 4500);
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
                          className="p-3 bg-white rounded border border-neutral-200"
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
            </motion.div>
          ) : currentPhase === "summary" ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 space-y-4"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-green-600 font-bold"
                  >
                    ✓
                  </motion.div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Analysis Complete!</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Processed 5 channels, 3,463 messages, and 64 participants
                </p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h4 className="font-medium text-neutral-900 mb-3">Key Findings:</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• #support has high negative sentiment (login issues)</li>
                  <li>• #general shows strong positive engagement</li>
                  <li>• #feature-requests trending upward</li>
                  <li>• 23% of conversations need immediate attention</li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-neutral-600">Ask me anything about the analysis...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[85%] ${
                        message.type === "user" ? "flex-row-reverse" : "flex-row"
                      }`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user" 
                            ? "bg-neutral-700" 
                            : "bg-neutral-300"
                        }`}>
                          {message.type === "user" ? (
                            <User className="w-3 h-3 text-white" />
                          ) : (
                            <BarChart3 className="w-3 h-3 text-neutral-700" />
                          )}
                        </div>
                        <div className={`px-3 py-2 rounded text-sm ${
                          message.type === "user"
                            ? "bg-neutral-700 text-white"
                            : "bg-white text-neutral-800 border border-neutral-300"
                        }`}>
                          {message.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Chat Input */}
              <div className="p-3 border-t border-neutral-300 bg-white">
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-2 py-1.5 bg-neutral-100 border border-neutral-300 rounded text-sm text-neutral-500">
                    Ask about the analysis...
                  </div>
                  <button className="px-3 py-1.5 bg-neutral-700 text-white rounded text-sm">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
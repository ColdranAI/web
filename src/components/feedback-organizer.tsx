"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Lightbulb,
  Bug,
  Star,
  TrendingUp,
  Filter,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

interface FeedbackItem {
  id: string;
  type: "feature" | "bug" | "general";
  title: string;
  description: string;
  sentiment: "positive" | "neutral" | "negative";
  priority: "high" | "medium" | "low";
  votes: number;
  status: "new" | "reviewing" | "planned" | "in-progress" | "completed";
  tags: string[];
}

interface CategoryStats {
  total: number;
  positive: number;
  neutral: number;
  negative: number;
  trending: boolean;
}

export function FeedbackOrganizer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentView, setCurrentView] = useState<"incoming" | "organized">(
    "incoming",
  );
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [processingIndex, setProcessingIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const mockFeedback: FeedbackItem[] = [
    {
      id: "1",
      type: "feature",
      title: "Dark mode support",
      description:
        "Would love to have a dark theme option for better night usage",
      sentiment: "positive",
      priority: "high",
      votes: 127,
      status: "new",
      tags: ["ui", "accessibility", "theme"],
    },
    {
      id: "2",
      type: "bug",
      title: "Login timeout issues",
      description:
        "Users are getting logged out too frequently, very frustrating",
      sentiment: "negative",
      priority: "high",
      votes: 89,
      status: "new",
      tags: ["auth", "session", "critical"],
    },
    {
      id: "3",
      type: "feature",
      title: "Mobile app needed",
      description:
        "Please create a mobile app version, web app is not responsive enough",
      sentiment: "neutral",
      priority: "medium",
      votes: 156,
      status: "new",
      tags: ["mobile", "app", "responsive"],
    },
    {
      id: "4",
      type: "general",
      title: "Great customer support",
      description: "Your team has been incredibly helpful with my questions",
      sentiment: "positive",
      priority: "low",
      votes: 23,
      status: "new",
      tags: ["support", "praise"],
    },
    {
      id: "5",
      type: "feature",
      title: "Advanced search filters",
      description: "Need more filtering options in the search functionality",
      sentiment: "neutral",
      priority: "medium",
      votes: 67,
      status: "new",
      tags: ["search", "filters", "ux"],
    },
  ];

  const [categoryStats, setCategoryStats] = useState<
    Record<string, CategoryStats>
  >({
    feature: {
      total: 0,
      positive: 0,
      neutral: 0,
      negative: 0,
      trending: false,
    },
    bug: { total: 0, positive: 0, neutral: 0, negative: 0, trending: false },
    general: {
      total: 0,
      positive: 0,
      neutral: 0,
      negative: 0,
      trending: false,
    },
  });

  useEffect(() => {
    if (!isInView || hasStarted) return;

    setHasStarted(true);
    setCurrentView("incoming");
    setFeedbackItems([]);
    setProcessingIndex(0);
    setIsProcessing(false);

    // Show incoming feedback
    setTimeout(() => {
      setIsProcessing(true);

      // Add feedback items one by one (slower)
      const addNextItem = (index: number) => {
        if (index < mockFeedback.length) {
          setFeedbackItems((prev) => [...prev, mockFeedback[index]]);
          setProcessingIndex(index + 1);

          setTimeout(() => addNextItem(index + 1), 2000); // Slower: 2000ms instead of 800ms
        } else {
          // Process and organize
          setTimeout(() => {
            setCurrentView("organized");

            // Calculate stats
            const stats = mockFeedback.reduce(
              (acc, item) => {
                if (!acc[item.type]) {
                  acc[item.type] = {
                    total: 0,
                    positive: 0,
                    neutral: 0,
                    negative: 0,
                    trending: false,
                  };
                }
                acc[item.type].total++;
                acc[item.type][item.sentiment]++;
                acc[item.type].trending = item.votes > 100;
                return acc;
              },
              {} as Record<string, CategoryStats>,
            );

            setCategoryStats(stats);
            setIsProcessing(false);
            // Don't restart - keep final state
          }, 2000); // Slower: 2000ms instead of 1000ms
        }
      };

      addNextItem(0);
    }, 1500); // Slower: 1500ms instead of 1000ms
  }, [isInView, hasStarted]);

  const getTypeIcon = (type: FeedbackItem["type"]) => {
    switch (type) {
      case "feature":
        return <Lightbulb className="w-4 h-4" />;
      case "bug":
        return <Bug className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: FeedbackItem["type"]) => {
    switch (type) {
      case "feature":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "bug":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-purple-600 bg-purple-50 border-purple-200";
    }
  };

  const getSentimentColor = (sentiment: FeedbackItem["sentiment"]) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-50";
      case "negative":
        return "text-red-600 bg-red-50";
      default:
        return "text-yellow-600 bg-yellow-50";
    }
  };

  const getPriorityColor = (priority: FeedbackItem["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-700 bg-red-100";
      case "medium":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "text-green-700 bg-green-100";
    }
  };

  const getStatusIcon = (status: FeedbackItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3 text-green-600" />;
      case "in-progress":
        return <Clock className="w-3 h-3 text-blue-600" />;
      case "planned":
        return <AlertCircle className="w-3 h-3 text-yellow-600" />;
      default:
        return <div className="w-3 h-3 rounded-full bg-neutral-400" />;
    }
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-2xl mx-auto bg-white border border-neutral-200 rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-neutral-200 bg-neutral-50">
        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="rounded-full"
            draggable={false}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-neutral-900">Feedback Organizer</h3>
          <p className="text-xs text-neutral-500">
            {currentView === "incoming"
              ? `Processing feedback... (${processingIndex}/${mockFeedback.length})`
              : "Analysis complete • Insights ready"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              isProcessing ? "bg-blue-500 animate-pulse" : "bg-green-500"
            }`}
          />
          <span className="text-xs text-neutral-500">
            {isProcessing ? "Processing" : "Ready"}
          </span>
        </div>
      </div>

      <div className="h-96 overflow-y-auto">
        <AnimatePresence mode="wait">
          {currentView === "incoming" ? (
            <motion.div
              key="incoming"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-medium text-neutral-700">
                  Incoming Feedback
                </span>
              </div>

              {feedbackItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 border border-neutral-200 rounded-lg bg-neutral-50"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-1 rounded border ${getTypeColor(item.type)}`}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-neutral-900 text-sm truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`px-1.5 py-0.5 rounded text-xs ${getSentimentColor(item.sentiment)}`}
                        >
                          {item.sentiment}
                        </span>
                        <span className="text-xs text-neutral-500">•</span>
                        <span className="text-xs text-neutral-500">
                          {item.votes} votes
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center py-4"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border border-neutral-300 border-t-neutral-600 rounded-full"
                    />
                    Organizing feedback...
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="organized"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-4"
            >
              {/* Stats Overview */}
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(categoryStats).map(([type, stats]) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg border ${getTypeColor(type as FeedbackItem["type"])} relative`}
                  >
                    {stats.trending && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center"
                      >
                        <TrendingUp className="w-2 h-2 text-white" />
                      </motion.div>
                    )}

                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(type as FeedbackItem["type"])}
                      <span className="font-medium text-sm capitalize">
                        {type}
                      </span>
                    </div>

                    <div className="text-lg font-bold mb-1">{stats.total}</div>

                    <div className="flex gap-1 text-xs">
                      <span className="text-green-600">+{stats.positive}</span>
                      <span className="text-yellow-600">={stats.neutral}</span>
                      <span className="text-red-600">-{stats.negative}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Organized Feedback by Priority */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-neutral-700">
                  Prioritized Items
                </h4>

                {["high", "medium", "low"].map((priority) => {
                  const items = feedbackItems.filter(
                    (item) => item.priority === priority,
                  );
                  if (items.length === 0) return null;

                  return (
                    <motion.div
                      key={priority}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium capitalize ${getPriorityColor(priority as FeedbackItem["priority"])}`}
                        >
                          {priority} Priority
                        </span>
                        <span className="text-xs text-neutral-500">
                          ({items.length} items)
                        </span>
                      </div>

                      {items.slice(0, 2).map((item) => (
                        <div
                          key={item.id}
                          className="p-2 bg-neutral-50 border border-neutral-200 rounded text-xs"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {getStatusIcon(item.status)}
                            <span className="font-medium">{item.title}</span>
                            <div className="flex items-center gap-1 ml-auto">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span className="text-neutral-600">
                                {item.votes}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-1 py-0.5 bg-neutral-200 text-neutral-600 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

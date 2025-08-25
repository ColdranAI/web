"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Lightbulb,
  Bug,
  Github,
  MessageCircle,
  Clock,
  User,
  ChevronRight,
} from "lucide-react";

interface FeedbackItem {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  votes: number;
  user: string;
  created: string;
}

interface BugItem {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
  reporter: string;
  created: string;
  reproduced: boolean;
}

export function FeedbackDashboard() {
  const [activeTab, setActiveTab] = useState<"features" | "bugs">("features");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const featureRequests: FeedbackItem[] = [
    {
      id: "FR001",
      title: "Dark mode support",
      description:
        "Add dark theme option for better night usage and accessibility",
      priority: "high",
      votes: 127,
      user: "sarah.chen",
      created: "2 days ago",
    },
    {
      id: "FR002",
      title: "Mobile app version",
      description: "Native mobile app for iOS and Android platforms",
      priority: "high",
      votes: 98,
      user: "mike.johnson",
      created: "3 days ago",
    },
    {
      id: "FR003",
      title: "Advanced search filters",
      description: "More granular filtering options in search functionality",
      priority: "medium",
      votes: 76,
      user: "alex.kim",
      created: "1 week ago",
    },
    {
      id: "FR004",
      title: "Export data to CSV",
      description: "Allow users to export dashboard data in CSV format",
      priority: "medium",
      votes: 54,
      user: "emma.davis",
      created: "1 week ago",
    },
    {
      id: "FR005",
      title: "Team collaboration features",
      description: "Add team workspaces and shared projects",
      priority: "low",
      votes: 32,
      user: "james.wilson",
      created: "2 weeks ago",
    },
  ];

  const bugReports: BugItem[] = [
    {
      id: "BUG001",
      title: "Login timeout issues",
      description:
        "Users getting logged out every 10 minutes, should be 24 hours",
      severity: "critical",
      reporter: "support.team",
      created: "1 day ago",
      reproduced: true,
    },
    {
      id: "BUG002",
      title: "Dashboard charts not loading",
      description: "Charts show loading spinner indefinitely on Chrome",
      severity: "high",
      reporter: "qa.tester",
      created: "2 days ago",
      reproduced: true,
    },
    {
      id: "BUG003",
      title: "Email notifications not sent",
      description: "Weekly digest emails are not being delivered to users",
      severity: "high",
      reporter: "john.doe",
      created: "3 days ago",
      reproduced: false,
    },
    {
      id: "BUG004",
      title: "Mobile layout broken on small screens",
      description: "UI elements overlap on screens smaller than 320px",
      severity: "medium",
      reporter: "ui.designer",
      created: "5 days ago",
      reproduced: true,
    },
    {
      id: "BUG005",
      title: "Search autocomplete lag",
      description: "Search suggestions appear with 2-3 second delay",
      severity: "low",
      reporter: "beta.user",
      created: "1 week ago",
      reproduced: false,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getPriorityColor = (priority: FeedbackItem["priority"]) => {
    switch (priority) {
      case "high":
        return "text-neutral-900 bg-neutral-200";
      case "medium":
        return "text-neutral-700 bg-neutral-150";
      default:
        return "text-neutral-600 bg-neutral-100";
    }
  };

  const getSeverityColor = (severity: BugItem["severity"]) => {
    switch (severity) {
      case "critical":
        return "text-neutral-900 bg-neutral-300";
      case "high":
        return "text-neutral-800 bg-neutral-200";
      case "medium":
        return "text-neutral-700 bg-neutral-150";
      default:
        return "text-neutral-600 bg-neutral-100";
    }
  };

  const handleMoveToGithub = (item: FeedbackItem | BugItem) => {
    console.log(`Moving ${item.id} to GitHub`);
  };

  const handlePingSlack = (item: FeedbackItem | BugItem) => {
    console.log(`Pinging Slack about ${item.id}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-neutral-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-neutral-300 bg-neutral-100">
        <h2 className="text-lg font-semibold text-neutral-900">
          Feedback Pipeline
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-neutral-300 bg-white">
        <button
          onClick={() => setActiveTab("features")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "features"
              ? "text-neutral-900 border-b-2 border-neutral-800 bg-white"
              : "text-neutral-600 hover:text-neutral-800 bg-neutral-50"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Feature Requests ({featureRequests.length})
          </div>
        </button>
        <button
          onClick={() => setActiveTab("bugs")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "bugs"
              ? "text-neutral-900 border-b-2 border-neutral-800 bg-white"
              : "text-neutral-600 hover:text-neutral-800 bg-neutral-50"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Bug className="w-4 h-4" />
            Bug Reports ({bugReports.length})
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="h-96 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === "features" ? (
            <motion.div
              key="features"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 space-y-3"
            >
              {isDataLoaded ? (
                featureRequests.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-neutral-300 rounded p-3"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-neutral-900 text-sm">
                            {item.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${getPriorityColor(item.priority)}`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {item.user}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.created}
                          </span>
                          <span>{item.votes} votes</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                      <button
                        onClick={() => handleMoveToGithub(item)}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Move to GitHub
                      </button>
                      <button
                        onClick={() => handlePingSlack(item)}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-200 text-neutral-800 rounded hover:bg-neutral-300 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Ping Slack
                      </button>
                      <div className="ml-auto">
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="text-sm text-neutral-600">
                    Loading feature requests...
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="bugs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 space-y-3"
            >
              {isDataLoaded ? (
                bugReports.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-neutral-300 rounded p-3"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-neutral-900 text-sm">
                            {item.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${getSeverityColor(item.severity)}`}
                          >
                            {item.severity}
                          </span>
                          {item.reproduced && (
                            <span className="px-2 py-0.5 rounded text-xs bg-neutral-800 text-white">
                              reproduced
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-600 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {item.reporter}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.created}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                      <button
                        onClick={() => handleMoveToGithub(item)}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Create Issue
                      </button>
                      <button
                        onClick={() => handlePingSlack(item)}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-200 text-neutral-800 rounded hover:bg-neutral-300 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Alert Team
                      </button>
                      <div className="ml-auto">
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="text-sm text-neutral-600">
                    Loading bug reports...
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary Stats */}
      <div className="p-3 border-t border-neutral-300 bg-neutral-100">
        <div className="flex items-center justify-between text-xs text-neutral-600">
          <div className="flex gap-4">
            <span>
              Total items: {featureRequests.length + bugReports.length}
            </span>
            <span>
              High priority:{" "}
              {featureRequests.filter((f) => f.priority === "high").length +
                bugReports.filter(
                  (b) => b.severity === "critical" || b.severity === "high",
                ).length}
            </span>
          </div>
          <div className="flex items-center gap-1 text-neutral-500">
            <span>Pipeline active</span>
            <div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

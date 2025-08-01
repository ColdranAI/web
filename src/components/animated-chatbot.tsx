"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, User, Database, Search, FileText } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const staticMessages = [
  {
    type: "user" as const,
    content: "I'm having trouble with the login timeout",
  },
  {
    type: "bot" as const,
    content: "I understand the login issue is frustrating. Let me help you troubleshoot this and report it to our team.",
  },
  {
    type: "user" as const,
    content: "Also, it would be great to have a dark mode option",
  },
  {
    type: "bot" as const,
    content: "That's a great suggestion! I've noted your request for dark mode. Many users have asked for this feature.",
  },
  {
    type: "user" as const,
    content: "The mobile app is really needed too",
  },
  {
    type: "bot" as const,
    content: "Thanks for the feedback! I've recorded your mobile app request. Our team reviews all suggestions regularly.",
  },
];

export function SimpleChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Add initial messages on mount
    const timer = setTimeout(() => {
      staticMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: `msg-${index}`,
            type: msg.type,
            content: msg.content,
            timestamp: new Date(),
          }]);
        }, index * 1500);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-neutral-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-3 border-b border-neutral-300 bg-neutral-100">
        <div className="w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-neutral-900 text-sm">Customer Support</h3>
          <p className="text-xs text-neutral-600">How can I help you?</p>
        </div>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-3 space-y-3 bg-neutral-50">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-neutral-500 text-sm">
            Loading conversation...
          </div>
        )}
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
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === "user" 
                    ? "bg-neutral-700" 
                    : "bg-neutral-300"
                }`}>
                  {message.type === "user" ? (
                    <User className="w-3 h-3 text-white" />
                  ) : (
                    <Bot className="w-3 h-3 text-neutral-700" />
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

      {/* Input */}
      <div className="p-3 border-t border-neutral-300 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex-1 px-2 py-1.5 bg-neutral-100 border border-neutral-300 rounded text-sm text-neutral-500">
            Type your message...
          </div>
          <button className="px-3 py-1.5 bg-neutral-700 text-white rounded text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
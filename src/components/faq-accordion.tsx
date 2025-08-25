"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Users,
  Zap,
  Building2,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getFAQIcon = (question: string) => {
    if (
      question.toLowerCase().includes("security") ||
      question.toLowerCase().includes("compliant")
    ) {
      return <Shield className="h-5 w-5 text-blue-600" />;
    } else if (
      question.toLowerCase().includes("team") ||
      question.toLowerCase().includes("support")
    ) {
      return <Users className="h-5 w-5 text-green-600" />;
    } else if (
      question.toLowerCase().includes("pricing") ||
      question.toLowerCase().includes("cost")
    ) {
      return <Building2 className="h-5 w-5 text-purple-600" />;
    } else {
      return <Zap className="h-5 w-5 text-yellow-600" />;
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex items-center gap-3">
              {getFAQIcon(item.question)}
              <h3 className="text-lg font-medium text-gray-900 pr-4">
                {item.question}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Additional Help Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: items.length * 0.05 }}
        viewport={{ once: true }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center"
      >
        <HelpCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-4">
          Our enterprise team is ready to help you find the perfect solution for
          your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Contact Sales Team
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition-colors">
            Schedule a Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";

export function TemplatesSection() {
  const [activeTab, setActiveTab] = useState<"scraping" | "research" | "output">("scraping");

  const templatesData = {
    scraping: {
      statement: "Advanced web scraping tools that extract customer feedback from multiple platforms automatically.",
      video: "https://www.youtube.com/embed/XWrJsKjhkzQ?si=MYc2pieuBRJYitzn",
    },
    research: {
      statement: "Deep research capabilities that analyze customer sentiment and identify patterns across conversations.",
      video: "https://www.youtube.com/embed/kqRwnvwo5vk?si=-K_GyL0_wvYQkFA1",
    },
    output: {
      statement: "Professional output generation that creates actionable reports and insights for business decision making.",
      video: "https://www.youtube.com/embed/LTLcbwJFJt0?si=cYwWFNogdW5J0Rx7",
    },
  };

  const tabButtonClass = (isActive: boolean) => 
    `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
      isActive 
        ? 'bg-black text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-neutral-800 pb-5">Analyze Competitor's Discord Server</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Scrape and find out what they're missing or doing wrong. Analyze Customers Problems.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setActiveTab("scraping")}
            className={tabButtonClass(activeTab === "scraping")}
          >
            Scraping
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={tabButtonClass(activeTab === "research")}
          >
            Deep Research
          </button>
          <button
            onClick={() => setActiveTab("output")}
            className={tabButtonClass(activeTab === "output")}
          >
            Output
          </button>
        </div>
      </div>

      {/* 20-word Statement */}
      <div className="text-center mb-8">
        <p className="text-lg text-neutral-700 font-medium max-w-3xl mx-auto">
          {templatesData[activeTab].statement}
        </p>
      </div>

      {/* Screen Recording Placeholder */}
      <div className="mb-12 flex justify-center">
          <div className="text-center border-2 bg-neutral-100 p-2 border-dashed border-neutral-300 rounded-lg">
            <iframe className="aspect-video" src={templatesData[activeTab].video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
      </div>
    </div>
  );
} 
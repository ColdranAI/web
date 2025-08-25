"use client";

import { useState } from "react";

export function TemplatesSection() {
  const [activeTab, setActiveTab] = useState<
    "scraping" | "research" | "output"
  >("scraping");

  const templatesData = {
    scraping: {
      statement:
        "Currently just discord but we plan to add more platforms eg. reddit, slack, etc.",
      video: "https://www.youtube.com/embed/XWrJsKjhkzQ?si=MYc2pieuBRJYitzn",
    },
    research: {
      statement:
        "Currently it's not integrated in our dashboard but this is an example of what we can do. We don't have economic viability to provide.",
      video: "https://www.youtube.com/embed/_9h7pSxJz9Q?si=O91oIJQrauAfDH8f",
    },
    output: {
      statement: "Here's the output of the scraping and research.",
      video: "https://chatgpt.com/share/688c3afb-d0e8-800d-a133-050cba74f311",
    },
  };

  const tabButtonClass = (isActive: boolean) =>
    `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-black text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-neutral-800 pb-5">
          Analyze Competitor's Discord Server
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Scrape and find out what they're missing or doing wrong. Analyze
          Customers Problems.
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

      {/* Screen Recording/Content */}
      <div className="mb-12 flex justify-center">
        <div className="text-center border-2 bg-neutral-100 p-2 border-dashed border-neutral-300 rounded-lg">
          {activeTab === "output" ? (
            <div className="flex flex-col items-center justify-center p-12 space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-800">
                Preview Analysis
              </h3>
              <p className="text-neutral-600 max-w-md text-center">
                View the complete analysis and insights generated from the
                scraped data and research mode.
              </p>
              <a
                href={templatesData[activeTab].video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 cursor-pointer py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors duration-200"
              >
                View Full Analysis
              </a>
            </div>
          ) : (
            <iframe
              className="aspect-video"
              src={templatesData[activeTab].video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

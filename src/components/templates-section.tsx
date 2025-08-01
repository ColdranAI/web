"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";



interface TemplateCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  tier: "scraping" | "research" | "output";
  currentTier: "scraping" | "research" | "output";
  onCompare?: () => void;
}

const TemplateCard = ({ title, description, features, buttonText, tier, currentTier, onCompare }: TemplateCardProps) => {
  const getCompareButtonText = () => {
    if (currentTier === "scraping") return "Compare with Deep Research";
    if (currentTier === "research") return "Compare with Output";
    return null;
  };

  const shouldShowCompareButton = currentTier !== "output";

  return (
    <div className="flex flex-col h-full max-w-xs gap-8 justify-between">
      
      {/* Left Card Preview */}
      <div className="p-2 ">
        {/* Image Section */}
        <Image src="/template.png" draggable={false} className="rounded-lg" alt="Waitlist Preview" width={300} height={300} />
        
        <div className="flex justify-center gap-3 my-4">
          <a href="https://waitlist.kite.so" target="_blank" className="px-4 w-fit py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium hover:-translate-y-0.25 duration-300 transition-all">
            Preview
          </a>
          
          {shouldShowCompareButton && (
            <Button 
              onClick={onCompare}
              className=" px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-200/50 duration-300 transition-all"
            >
              {getCompareButtonText()}
            </Button>
          )}
        </div>
        <h2 className="text-2xl font-semibold text-neutral-800 pb-2">{title}</h2>
        <ul className="flex flex-col gap-y-2 text-start text-xs text-gray-700">

            <span className="flex gap-2 ">
              <span className="text-start">{features}</span>
            </span>
        </ul>
      </div>
      <div className="mt-auto">
        <Button className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export function TemplatesSection() {
  const [activeTab, setActiveTab] = useState<"scraping" | "research" | "output">("scraping");

  const templatesData = {
    scraping: {
      statement: "Advanced web scraping tools that extract customer feedback from multiple platforms automatically.",
      templates: [
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Discord Server Template for your waitlist",
            "Rate Limiting",
            "Drizzle ORM",
            "Supabase or PlanetScale SQL Database",
          ],
          buttonText: "Serve Yourself",
          tier: "scraping" as const,
        },
      ],
    },
    research: {
      statement: "Deep research capabilities that analyze customer sentiment and identify patterns across conversations.",
      templates: [
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from Scraping",
            "AI Sentiment Analysis",
            "Pattern Recognition",
            "Trend Identification",
            "Competitive Analysis",
            "Market Research Tools",
            "Data Correlation Engine",
            "Advanced Analytics",
          ],
          buttonText: "Start Research",
          tier: "research" as const,
        },
      ],
    },
    output: {
      statement: "Professional output generation that creates actionable reports and insights for business decision making.",
      templates: [
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from Deep Research",
            "Executive Dashboards",
            "Automated Reports",
            "Business Intelligence",
            "ROI Analysis",
            "Strategic Recommendations",
            "Export to Multiple Formats",
            "White-label Solutions",
          ],
          buttonText: "Generate Output",
          tier: "output" as const,
        },
      ],
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
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Select the perfect waitlist template for your needs. Each tier offers enhanced features and capabilities.
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
        <div className="w-full max-w-4xl aspect-video bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🎬</div>
            <p className="text-neutral-600 font-medium">Screen Recording for {activeTab === "scraping" ? "Scraping" : activeTab === "research" ? "Deep Research" : "Output"}</p>
            <p className="text-sm text-neutral-500 mt-2">Demo video will be placed here</p>
          </div>
        </div>
      </div>

      {/* Template Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl gap-8">
        {templatesData[activeTab].templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            features={template.features}
            buttonText={template.buttonText}
            tier={template.tier}
            currentTier={activeTab}
            onCompare={() => {
              if (activeTab === "scraping") setActiveTab("research");
              else if (activeTab === "research") setActiveTab("output");
            }}
          />
        ))}
      </div>
    </div>
  );
} 
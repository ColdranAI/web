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
  tier: "basic" | "standard" | "enterprise";
  currentTier: "basic" | "standard" | "enterprise";
  onCompare?: () => void;
}

const TemplateCard = ({ title, description, features, buttonText, tier, currentTier, onCompare }: TemplateCardProps) => {
  const getCompareButtonText = () => {
    if (currentTier === "basic") return "Compare with _Standard";
    if (currentTier === "standard") return "Compare with _Enterprise";
    return null;
  };

  const shouldShowCompareButton = currentTier !== "enterprise";

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
  const [activeTab, setActiveTab] = useState<"basic" | "standard" | "enterprise">("basic");

  const templatesData = {
    basic: {
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
          tier: "basic" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Discord Server Template for your waitlist",
            "Rate Limiting",
            "Drizzle ORM",
            "Supabase or PlanetScale SQL Database",
            "Basic Email Notifications",
            "Simple Form Validation",
            "Mobile Responsive Design",
          ],
          buttonText: "Serve Yourself",
          tier: "basic" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Discord Server Template for your waitlist",
            "Rate Limiting",
            "Drizzle ORM",
            "Supabase or PlanetScale SQL Database",
            "Basic Email Notifications",
            "Simple Form Validation",
            "Mobile Responsive Design",
          ],
          buttonText: "Serve Yourself",
          tier: "basic" as const,
        },
      ],
    },
    standard: {
      templates: [
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Basic",
            "Resend Integration",
            "Discord & Slack Webhook with Email & Count",
            "Script to Export Mails from Discord Channel",
            "Integrations with Zapier, Airtable & Notion",
            "Advanced Form Validation",
            "Analytics Dashboard",
            "Priority Support",
          ],
          buttonText: "Serve Yourself",
          tier: "standard" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Basic",
            "Resend Integration",
            "Discord & Slack Webhook with Email & Count",
            "Script to Export Mails from Discord Channel",
            "Integrations with Zapier, Airtable & Notion",
            "Advanced Form Validation",
            "Analytics Dashboard",
            "Priority Support",
          ],
          buttonText: "Serve Yourself",
          tier: "standard" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Basic",
            "Resend Integration",
            "Discord & Slack Webhook with Email & Count",
            "Script to Export Mails from Discord Channel",
            "Integrations with Zapier, Airtable & Notion",
            "Advanced Form Validation",
            "Analytics Dashboard",
            "Priority Support",
          ],
          buttonText: "Serve Yourself",
          tier: "standard" as const,
        },
      ],
    },
    enterprise: {
      templates: [
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Standard",
            "Beautiful Dashboard with Analytics",
            "Custom Branding & White-label",
            "Advanced Security Features",
            "Multi-language Support",
            "API Access & Custom Integrations",
            "24/7 Priority Support",
            "Custom Development Services",
          ],
          buttonText: "Serve Yourself",
          tier: "enterprise" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Standard",
            "Beautiful Dashboard with Analytics",
            "Custom Branding & White-label",
            "Advanced Security Features",
            "Multi-language Support",
            "API Access & Custom Integrations",
            "24/7 Priority Support",
            "Custom Development Services",
          ],
          buttonText: "Serve Yourself",
          tier: "enterprise" as const,
        },
        {
          title: "Coming Soon",
          description: "A better way to experience a future AI-powered productivity suite. Join the waitlist to explore what's coming.",
          features: [
            "Everything from _Standard",
            "Beautiful Dashboard with Analytics",
            "Custom Branding & White-label",
            "Advanced Security Features",
            "Multi-language Support",
            "API Access & Custom Integrations",
            "24/7 Priority Support",
            "Custom Development Services",
          ],
          buttonText: "Serve Yourself",
          tier: "enterprise" as const,
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
            onClick={() => setActiveTab("basic")}
            className={tabButtonClass(activeTab === "basic")}
          >
            _Basic
          </button>
          <button
            onClick={() => setActiveTab("standard")}
            className={tabButtonClass(activeTab === "standard")}
          >
            _Standard
          </button>
          <button
            onClick={() => setActiveTab("enterprise")}
            className={tabButtonClass(activeTab === "enterprise")}
          >
            _Enterprise
          </button>
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
              if (activeTab === "basic") setActiveTab("standard");
              else if (activeTab === "standard") setActiveTab("enterprise");
            }}
          />
        ))}
      </div>
    </div>
  );
} 
"use client";

import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "blue" | "red";
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic features",
    features: [
      "1 Customer Agent (Widget only)",
      "1 project with basic memory (resets after 7 days)",
      "1 integration (Discord or Slack or IDE)",
      "500 messages/month",
      "Basic analytics",
      "Email support"
    ],
    buttonText: "Get Started",
    buttonVariant: "default"
  },
  {
    name: "Vibe",
    price: "$30",
    description: "The Perfect Plan for Small Teams",
    features: [
      "Up to 3 Customer Agents (Widget + Discord + Slack)",
      "3 projects with persistent memory",
      "All core integrations (Discord, Slack, IDE)",
      "5,000 messages/month",
      "Basic knowledge base upload (50 docs)",
      "Simple automation triggers (form → email)",
      "Email + chat support"
    ],
    buttonText: "Choose Vibe",
    buttonVariant: "blue"
  },
  {
    name: "Cracked",
    price: "$150",
    description: "Most popular choice for growing teams",
    features: [
      "Up to 10 Customer Agents (any mix: Widget, Discord, Slack, IDE)",
      "Unlimited projects with persistent memory",
      "Advanced workflows (bug reporter → GitHub, Sentry → ticket, form → analysis)",
      "50,000 messages/month",
      "Internal Knowledge Base Agent",
      "Real-time monitoring & alerts",
      "API access for agents",
      "Priority support"
    ],
    buttonText: "Go Cracked",
    buttonVariant: "red",
    popular: true
  },
  {
    name: "Startups",
    price: "$300",
    description: "Advanced features for scaling startups",
    features: [
      "Unlimited Customer Agents",
      "Unlimited projects with persistent memory",
      "Advanced AI routing (multi-agent escalation, handoff)",
      "200,000 messages/month",
      "ColdChat + team collaboration tools",
      "Full integration suite (Sentry, GitHub, CRMs, form builders)",
      "Advanced analytics & trends dashboard",
      "Dedicated onboarding & training",
      "SLA-backed priority support"
    ],
    buttonText: "Scale Up",
    buttonVariant: "default"
  },
  {
    name: "Companies",
    price: "$900",
    description: "Big solutions for Big Companies",
    features: [
      "Everything in Startups",
      "White-label agents",
      "Enterprise SSO & RBAC",
      "Unlimited messages/month",
      "Custom AI model fine-tuning",
      "Compliance & audit logging",
      "24/7 support with dedicated account manager",
      "Quarterly strategy sessions & feature prioritization"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "blue"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your team size and needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative border p-6 bg-white ${
                tier.popular ? "border-neutral-500 shadow-lg" : "border-neutral-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neutral-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-black">{tier.price}</span>
                  {tier.price !== "$0" && tier.name !== "Companies" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>
                            <Button 
                variant={tier.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {tier.buttonText}
              </Button>

              <ul className="space-y-3 mt-10 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
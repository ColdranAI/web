"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";

const features = [
  {
    name: "AI Support Agents",
    description: "Intelligent customer support with memory and context",
    starter: "Up to 5 agents",
    professional: "Up to 15 agents",
    enterprise: "Unlimited agents + custom training",
  },
  {
    name: "Customer Intelligence",
    description: "Advanced analytics and customer insights",
    starter: "Basic insights",
    professional: "Advanced analytics",
    enterprise: "Real-time intelligence + custom dashboards",
  },
  {
    name: "Workspace Analysis",
    description: "Analyze communication across platforms",
    starter: "Slack only",
    professional: "Slack + Discord",
    enterprise: "All platforms + custom integrations",
  },
  {
    name: "Feedback Classification",
    description: "Automated categorization and prioritization",
    starter: "Basic classification",
    professional: "Advanced sentiment analysis",
    enterprise: "Custom ML models + priority routing",
  },
  {
    name: "API Access",
    description: "Developer tools and integrations",
    starter: "Limited access",
    professional: "Full API access",
    enterprise: "Custom API + dedicated support",
  },
  {
    name: "Integrations",
    description: "Connect with your existing tools",
    starter: "5 integrations",
    professional: "15 integrations",
    enterprise: "Unlimited + custom development",
  },
  {
    name: "Support",
    description: "Customer service and technical support",
    starter: "Email support",
    professional: "Priority email support",
    enterprise: "24/7 dedicated support + SLA",
  },
  {
    name: "Security",
    description: "Enterprise-grade security and compliance",
    starter: "Standard security",
    professional: "Enhanced security",
    enterprise: "SOC 2, GDPR, custom compliance",
  },
  {
    name: "Analytics",
    description: "Reporting and business intelligence",
    starter: "Basic reports",
    professional: "Advanced reports",
    enterprise: "Custom analytics + BI integration",
  },
  {
    name: "Storage",
    description: "Data storage and retention",
    starter: "100GB storage",
    professional: "1TB storage",
    enterprise: "Unlimited storage + custom retention",
  },
  {
    name: "Users",
    description: "Team member access",
    starter: "Up to 50 users",
    professional: "Up to 200 users",
    enterprise: "Unlimited users + SSO",
  },
  {
    name: "Onboarding",
    description: "Setup and implementation support",
    starter: "Self-service",
    professional: "Assisted onboarding",
    enterprise: "Dedicated implementation team",
  },
];

const getFeatureIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "ai support agents":
      return <Users className="h-5 w-5" />;
    case "customer intelligence":
      return <BarChart3 className="h-5 w-5" />;
    case "workspace analysis":
      return <Zap className="h-5 w-5" />;
    case "security":
      return <Shield className="h-5 w-5" />;
    case "storage":
    case "api access":
      return <Database className="h-5 w-5" />;
    case "support":
      return <Clock className="h-5 w-5" />;
    default:
      return <Zap className="h-5 w-5" />;
  }
};

export function EnterpriseFeaturesTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Header Row */}
        <div className="md:col-span-3 bg-gray-50 p-6 border-r border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
        </div>
        <div className="md:col-span-3 bg-blue-50 p-6 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
          </div>
          <p className="text-sm text-gray-600">$29/user/month</p>
        </div>
        <div className="md:col-span-3 bg-purple-50 p-6 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Professional
            </h3>
          </div>
          <p className="text-sm text-gray-600">$79/user/month</p>
        </div>
        <div className="md:col-span-3 bg-amber-50 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          </div>
          <p className="text-sm text-gray-600">Custom Pricing</p>
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-gray-200 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            {/* Feature Name */}
            <div className="md:col-span-3 p-6 border-r border-gray-200">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 mt-1">
                  {getFeatureIcon(feature.name)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Starter */}
            <div className="md:col-span-3 p-6 border-r border-gray-200">
              <div className="flex items-center justify-center h-6">
                {feature.name === "AI Support Agents" ||
                feature.name === "Customer Intelligence" ||
                feature.name === "Workspace Analysis" ||
                feature.name === "Feedback Classification" ||
                feature.name === "Storage" ||
                feature.name === "Users" ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <X className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {feature.starter}
              </p>
            </div>

            {/* Professional */}
            <div className="md:col-span-3 p-6 border-r border-gray-200">
              <div className="flex items-center justify-center h-6">
                {feature.name === "Storage" || feature.name === "Users" ? (
                  <X className="h-5 w-5 text-gray-400" />
                ) : (
                  <Check className="h-5 w-5 text-green-600" />
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {feature.professional}
              </p>
            </div>

            {/* Enterprise */}
            <div className="md:col-span-3 p-6">
              <div className="flex items-center justify-center h-6">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {feature.enterprise}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <div className="md:col-span-12 bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Enterprise includes:</p>
              <ul className="space-y-1">
                <li>• Dedicated account manager</li>
                <li>• Custom development work</li>
                <li>• Advanced security features</li>
                <li>• 24/7 priority support</li>
              </ul>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Contact Sales for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

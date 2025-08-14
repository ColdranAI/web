"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Building2, Users, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing-card";
import { EnterpriseContactForm } from "@/components/enterprise-contact-form";
import { EnterpriseFeaturesTable } from "@/components/enterprise-features-table";
import { FAQAccordion } from "@/components/faq-accordion";
import { Testimonials } from "@/components/testimonials";

export default function PricingPage() {
  const [activeForm, setActiveForm] = useState(false);

  const enterpriseFeatures = [
    "Unlimited AI Support Agents",
    "Advanced Customer Intelligence",
    "Real-time Workspace Analysis",
    "Smart Feedback Classification",
    "Custom Integrations & API Access",
    "Dedicated Account Manager",
    "24/7 Priority Support",
    "Advanced Security & Compliance",
    "Custom Workflows & Automation",
    "White-label Options Available",
    "Advanced Analytics & Reporting",
    "SLA Guarantee & Uptime Monitoring"
  ];

  const faqItems = [
    {
      question: "How is pricing determined for enterprise customers?",
      answer: "Enterprise pricing is customized based on your specific needs, including team size, usage requirements, integration needs, and support level. Contact us for a personalized quote."
    },
    {
      question: "What kind of support is included?",
      answer: "Enterprise customers receive 24/7 priority support with a dedicated account manager, faster response times, and proactive monitoring of your CRM system."
    },
    {
      question: "Can we integrate with existing systems?",
      answer: "Yes, we offer custom integrations with your existing tools including Slack, Discord, Salesforce, HubSpot, and any other systems you use."
    },
    {
      question: "How secure is our data?",
      answer: "We enterprise-grade security with end-to-end encryption, regular security audits, and compliance with SOC 2, GDPR, and other relevant standards."
    },
    {
      question: "Is there a setup fee?",
      answer: "Setup fees vary based on customization requirements. We offer streamlined onboarding for most enterprise customers with minimal setup time."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Building2 className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Enterprise-Grade CRM
              <span className="block text-blue-600">for Growing Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your customer relationships with AI-powered insights, 
              automated workflows, and dedicated support designed for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => setActiveForm(true)}
              >
                Get Custom Enterprise Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Features
              </Button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm">1000+ Teams Trust Us</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="h-5 w-5 text-purple-600" />
              <span className="text-sm">4.9/5 Customer Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Pricing Built for Enterprise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom solutions tailored to your specific business needs and scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Basic Tier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Starter"
                price="$29"
                period="per user/month"
                description="Perfect for small teams getting started"
                features={[
                  "Up to 5 AI Support Agents",
                  "Basic Customer Intelligence",
                  "Email Integration",
                  "Standard Support",
                  "Basic Analytics",
                  "Mobile App Access"
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                tier="basic"
              />
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Professional"
                price="$79"
                period="per user/month"
                description="For growing teams with advanced needs"
                features={[
                  "Up to 15 AI Support Agents",
                  "Advanced Customer Intelligence",
                  "Workspace Analysis",
                  "Priority Support",
                  "Advanced Analytics",
                  "API Access",
                  "Custom Integrations",
                  "White-label Options"
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                popular={true}
                tier="pro"
              />
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Enterprise"
                price="Custom"
                period="tailored pricing"
                description="Full-featured solution for large organizations"
                features={enterpriseFeatures}
                buttonText="Contact Sales"
                buttonVariant="default"
                tier="premium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section id="features" className="py-20 lg:py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Everything Your Enterprise Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive feature set designed for enterprise-scale operations.
            </p>
          </motion.div>

          <EnterpriseFeaturesTable />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of companies transforming their customer relationships.
            </p>
          </motion.div>

          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Enterprise FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our enterprise solutions.
            </p>
          </motion.div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of enterprises already using our platform to build stronger customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => setActiveForm(true)}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
                onClick={() => window.open('/demo', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Contact Form Modal */}
      {activeForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Get Your Enterprise Quote</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setActiveForm(false)}
                >
                  ✕
                </Button>
              </div>
              <p className="text-muted-foreground mt-2">
                Tell us about your needs and we&apos;ll provide a customized solution.
              </p>
            </div>
            <EnterpriseContactForm onSuccess={() => setActiveForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
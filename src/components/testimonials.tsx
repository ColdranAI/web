"use client";

import { motion } from "framer-motion";
import { Star, Building2, Users, TrendingUp, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow Inc.",
    company: "SaaS Company",
    content:
      "The enterprise-grade AI support agents have transformed our customer experience. Response times have improved by 70% and customer satisfaction is at an all-time high.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    company: "Global Retail Corp",
    content:
      "The workspace analysis and feedback classification tools give us unprecedented insights into customer needs. Our product development cycle has accelerated significantly.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Director",
    company: "HealthTech Solutions",
    content:
      "Dedicated support and custom integrations made the transition seamless. The platform scales perfectly with our growing team and complex requirements.",
    rating: 5,
    avatar: "ER",
  },
];

const stats = [
  { icon: Building2, value: "1000+", label: "Enterprise Customers" },
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime SLA" },
  { icon: Award, value: "4.9/5", label: "Customer Rating" },
];

export function Testimonials() {
  return (
    <div className="space-y-12">
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg border border-gray-200"
            >
              <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="pt-8 border-t border-gray-200"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>CCPA Compliant</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

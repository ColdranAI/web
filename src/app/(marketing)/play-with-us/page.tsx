import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";
import ContactMethod from "@/components/contact-methods";

export const metadata: Metadata = {
  title: "Contact Us - Coldran",
  description: "Get in touch with Coldran to transform your customer feedback into actionable insights. Contact our team to discuss your business needs.",
  openGraph: {
    title: "Contact Us - Coldran",
    description: "Get in touch with Coldran to transform your customer feedback into actionable insights.",
    type: "website",
  },
};

export default function PlayWithFeaturesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Work
            <span className="block text-neutral-950">
              In Progress
            </span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          </p>
        </div>

        {/* Contact Form */}
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          we are going to allow people to do basic test without registering.
        </p>

        <ContactMethod />
      </div>
    </div>
  );
}
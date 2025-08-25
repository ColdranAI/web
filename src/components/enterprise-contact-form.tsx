"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckIcon,
  Loader2,
  Building2,
  Users,
  DollarSign,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

interface EnterpriseContactFormProps {
  onSuccess: () => void;
}

export function EnterpriseContactForm({
  onSuccess,
}: EnterpriseContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formData = {
    companyName: "",
    website: "",
    industry: "",
    teamSize: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    budgetRange: "",
    requirements: "",
    timeline: "",
  };

  const steps = [
    {
      title: "Company Information",
      icon: Building2,
      fields: [
        {
          name: "companyName",
          label: "Company Name",
          placeholder: "Acme Corporation",
          required: true,
        },
        {
          name: "website",
          label: "Website",
          placeholder: "https://acme.com",
          required: true,
        },
        {
          name: "industry",
          label: "Industry",
          placeholder: "SaaS, E-commerce, Healthcare, etc.",
          required: true,
        },
      ],
    },
    {
      title: "Team Details",
      icon: Users,
      fields: [
        {
          name: "teamSize",
          label: "Team Size",
          placeholder: "50-200 employees",
          required: true,
        },
        {
          name: "contactName",
          label: "Contact Name",
          placeholder: "John Smith",
          required: true,
        },
        {
          name: "contactEmail",
          label: "Contact Email",
          placeholder: "john@acme.com",
          required: true,
        },
        {
          name: "contactPhone",
          label: "Contact Phone",
          placeholder: "+1 (555) 123-4567",
          required: false,
        },
      ],
    },
    {
      title: "Requirements",
      icon: MessageSquare,
      fields: [
        {
          name: "budgetRange",
          label: "Budget Range",
          placeholder: "$10,000 - $50,000 per month",
          required: true,
        },
        {
          name: "timeline",
          label: "Implementation Timeline",
          placeholder: "Next 30-60 days",
          required: true,
        },
        {
          name: "requirements",
          label: "Key Requirements",
          placeholder:
            "Describe your specific needs, integrations, and any custom requirements...",
          required: true,
          type: "textarea",
        },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/webhooks/enterprise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "enterprise",
          timestamp: new Date().toISOString(),
          step: currentStep,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (err) {
      setError("Failed to submit. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    // In a real implementation, you'd use state management
    console.log(`${field}: ${value}`);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
        >
          <CheckIcon className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ve received your enterprise inquiry and will contact you
          within 24 hours to discuss your customized solution.
        </p>
        <Button onClick={onSuccess} className="w-full">
          Close
        </Button>
      </div>
    );
  }

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{currentStepData.title}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Header */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
        <IconComponent className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold">{currentStepData.title}</h3>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {currentStepData.fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                placeholder={field.placeholder}
                className="min-h-[100px]"
                required={field.required}
                onChange={(e) => updateFormData(field.name, e.target.value)}
              />
            ) : (
              <Input
                id={field.name}
                type={field.name === "contactEmail" ? "email" : "text"}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => updateFormData(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {currentStep === steps.length - 1 ? (
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <DollarSign className="mr-2 h-4 w-4" />
                  Request Quote
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Next
            </Button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your information will only be used to provide
        you with a customized enterprise quote.
      </p>
    </form>
  );
}

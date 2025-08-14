"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeatureAndFeedback() {
  const [formType, setFormType] = useState<"feature" | "feedback">("feature");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!message.trim()) {
      setError("Please enter a message");
      setIsSubmitting(false);
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email");
      setIsSubmitting(false);
      return;
    }

    try {
      // Choose the appropriate webhook URL based on form type
      const webhookUrl =
        formType === "feature"
          ? "/api/webhooks/feature"
          : "/api/webhooks/feedback";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          email,
          twitter: twitter.trim() ? twitter : "Not provided",
          type: formType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
      setMessage("");
      setEmail("");
      setTwitter("");
    } catch (err) {
      setError("Failed to submit. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-auto overflow-y-auto md:overflow-hidden my-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-12 text-center">
          Feature Requests & Feedback
        </h1>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-neutral-800 mb-2">
              Thank you for your {formType}!
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We appreciate your input and will review it soon.
            </p>
            <Button
              variant="outline"
              className="border-[#F6471A] text-[#F6471A] hover:bg-[#F6471A]/5"
              onClick={() => setIsSubmitted(false)}
            >
              Submit another{" "}
              {formType === "feature" ? "feedback" : "feature request"}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 space-y-6">
              <div className="space-y-2">
                <Label className="text-base">
                  What would you like to submit?
                </Label>
                <RadioGroup
                  defaultValue="feature"
                  value={formType}
                  onValueChange={(value: string) =>
                    setFormType(value as "feature" | "feedback")
                  }
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feature" id="feature" />
                    <Label htmlFor="feature" className="cursor-pointer">
                      Feature Request
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feedback" id="feedback" />
                    <Label htmlFor="feedback" className="cursor-pointer">
                      Feedback
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  {formType === "feature"
                    ? "Describe the feature you'd like to see"
                    : "Your feedback"}
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                  placeholder={
                    formType === "feature"
                      ? "I would like to see..."
                      : "I think the application could improve by..."
                  }
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Your email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="email@example.com"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  We&apos;ll use this to follow up on your{" "}
                  {formType === "feature" ? "request" : "feedback"}.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-base">
                  Twitter handle (optional)
                </Label>
                <Input
                  id="twitter"
                  value={twitter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTwitter(e.target.value)
                  }
                  placeholder="@username"
                />
              </div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className={cn(
                  "w-full bg-[#4285F4] hover:bg-[#3B78E7] cursor-pointer text-white border-none",
                  isSubmitting && "opacity-70",
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  `Submit ${formType === "feature" ? "Feature Request" : "Feedback"}`
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We value your input and use it to improve our application. Thank
                you for helping us make it better!
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

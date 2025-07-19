import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  popular?: boolean;
  tier: "basic" | "pro" | "premium";
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
  tier,
}: PricingCardProps) {
  const getCardColors = () => {
    switch (tier) {
      case "basic":
        return {
          bg: "bg-blue-50",
          iconBg: "bg-blue-500",
          badgeBg: "bg-blue-100",
          badgeText: "text-blue-800",
          icon: Star,
        };
      case "pro":
        return {
          bg: "bg-purple-50",
          iconBg: "bg-purple-500",
          badgeBg: "bg-purple-100",
          badgeText: "text-purple-800",
          icon: Zap,
        };
      case "premium":
        return {
          bg: "bg-amber-50/50",
          iconBg: "bg-amber-500",
          badgeBg: "bg-amber-100",
          badgeText: "text-amber-800",
          icon: Crown,
        };
      default:
        return {
          bg: "bg-neutral-50",
          hoverBg: "hover:bg-neutral-100",
          iconBg: "bg-neutral-500",
          badgeBg: "bg-neutral-100",
          badgeText: "text-neutral-800",
          icon: Star,
        };
    }
  };

  const colors = getCardColors();
  const IconComponent = colors.icon;

  return (
    <div
      className={`relative w-full border border-neutral-200 rounded-lg p-6 ${colors.bg} ${colors.hoverBg} transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge
            className={`${colors.badgeBg} ${colors.badgeText} border-none`}
          >
            Most Popular
          </Badge>
        </div>
      )}

      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`${colors.iconBg} p-3 rounded-full flex items-center justify-center`}
        >
          <IconComponent className="h-8 w-8 text-white" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neutral-800 mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="py-2">
          <span className="text-3xl font-bold text-neutral-800">{price}</span>
          <span className="text-sm text-muted-foreground ml-1">/{period}</span>
        </div>

        <ul className="space-y-2 text-sm text-left w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full mt-6 ${
            tier === "pro"
              ? "bg-purple-500 hover:bg-purple-600 text-white border-none"
              : tier === "premium"
                ? "bg-amber-500 hover:bg-amber-600 text-white border-none"
                : "bg-blue-500 hover:bg-blue-600 text-white border-none"
          }`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

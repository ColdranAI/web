import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardsProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

interface CardProps {
  title?: string;
  description?: string;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  image?: string;
  children?: ReactNode;
  className?: string;
  arrow?: boolean;
}

export function Cards({ children, className, cols = 2 }: CardsProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("my-6 grid gap-4", gridCols[cols], className)}>
      {children}
    </div>
  );
}

export function Card({
  title,
  description,
  href,
  external = false,
  icon,
  image,
  children,
  className,
  arrow = true,
}: CardProps) {
  const CardContent = () => (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300",
        href && "cursor-pointer hover:border-primary/50",
        className,
      )}
    >
      {/* Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title || ""}
            className="w-full h-32 object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="space-y-2">
        {title && (
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
            {href && arrow && (
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                {external ? (
                  <ExternalLink className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </span>
            )}
          </h3>
        )}

        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}

        {children && (
          <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <CardContent />
        </a>
      );
    }

    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}

// Feature card variant
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  href?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  features,
  href,
  className,
}: FeatureCardProps) {
  return (
    <Card
      title={title}
      description={description}
      icon={icon}
      href={href}
      className={className}
    >
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-muted-foreground"
            >
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

// Comparison card variant
interface ComparisonCardProps {
  title: string;
  description?: string;
  price?: string;
  features: string[];
  highlighted?: boolean;
  href?: string;
  buttonText?: string;
  className?: string;
}

export function ComparisonCard({
  title,
  description,
  price,
  features,
  highlighted = false,
  href,
  buttonText = "Learn More",
  className,
}: ComparisonCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card p-6",
        highlighted && "border-primary shadow-lg scale-105",
        className,
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60" />
      )}

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          )}
          {price && <div className="text-2xl font-bold mt-2">{price}</div>}
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {href && (
          <div className="pt-4">
            <Link
              href={href}
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 w-full",
                highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

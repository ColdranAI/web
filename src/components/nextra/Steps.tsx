import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  children: ReactNode;
  className?: string;
}

interface StepProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  return <div className={cn("my-6 space-y-6", className)}>{children}</div>;
}

export function Step({ children, title, className }: StepProps) {
  return (
    <div className={cn("relative flex gap-4", className)}>
      {/* Step indicator */}
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          {/* Step number will be auto-generated via CSS counter */}
        </div>
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      {/* Step content */}
      <div className="flex-1 pb-8">
        {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
        <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

// Enhanced Steps component with auto-numbering
export function NumberedSteps({ children, className }: StepsProps) {
  const stepCount = Array.isArray(children) ? children.length : 1;

  return (
    <div className={cn("my-6", className)} style={{ counterReset: "step" }}>
      <style jsx>{`
        .step-item {
          counter-increment: step;
        }
        .step-number::before {
          content: counter(step);
        }
      `}</style>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            className="step-item relative flex gap-4 mb-6 last:mb-0"
          >
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div className="step-number flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold" />
              {index < stepCount - 1 && (
                <div className="w-px h-16 bg-border mt-2" />
              )}
            </div>

            {/* Step content */}
            <div className="flex-1">{child}</div>
          </div>
        ))
      ) : (
        <div className="step-item relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className="step-number flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold" />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      )}
    </div>
  );
}

// Simple step item for use with NumberedSteps
interface StepItemProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function StepItem({ title, children, className }: StepItemProps) {
  return (
    <div className={cn("", className)}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

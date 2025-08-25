"use client";

import { ReactNode, useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export function CodeBlock({
  children,
  language = "text",
  filename,
  showLineNumbers = false,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = extractTextFromChildren(children);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const extractTextFromChildren = (node: ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (Array.isArray(node)) return node.map(extractTextFromChildren).join("");
    if (node && typeof node === "object" && "props" in node) {
      return extractTextFromChildren((node as any).props.children);
    }
    return "";
  };

  const codeLines = extractTextFromChildren(children).split("\n");

  return (
    <div className={cn("relative group my-6", className)}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border border-b-0 rounded-t-lg">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm font-medium text-foreground">
                {filename}
              </span>
            )}
            {language && (
              <span className="text-xs px-2 py-1 bg-background rounded text-muted-foreground">
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}

      {/* Code Content */}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-4 bg-muted/50 border text-sm",
            filename || language ? "rounded-b-lg" : "rounded-lg",
            "scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
          )}
        >
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              <div className="table w-full">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={cn(
                      "table-row",
                      highlightLines.includes(index + 1) &&
                        "bg-yellow-100 dark:bg-yellow-900/20",
                    )}
                  >
                    <span className="table-cell select-none w-8 pr-4 text-right text-muted-foreground/60 border-r border-border">
                      {index + 1}
                    </span>
                    <span className="table-cell pl-4">{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              children
            )}
          </code>
        </pre>

        {/* Copy button for blocks without header */}
        {!filename && !language && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

// Inline code component
interface InlineCodeProps {
  children: ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

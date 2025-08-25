"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  // Auto-set first tab if no default value
  const firstTabValue = defaultValue || extractFirstTabValue(children);
  if (!activeTab && firstTabValue) {
    setActiveTab(firstTabValue);
  }

  return (
    <TabsContext.Provider
      value={{ activeTab: activeTab || firstTabValue, setActiveTab }}
    >
      <div className={cn("my-6", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-background/50 hover:text-foreground",
        className,
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const { activeTab } = context;
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

// Helper function to extract the first tab value
function extractFirstTabValue(children: ReactNode): string {
  let firstValue = "";

  const findFirstTrigger = (node: ReactNode): void => {
    if (!node || firstValue) return;

    if (Array.isArray(node)) {
      node.forEach(findFirstTrigger);
      return;
    }

    if (typeof node === "object" && "props" in node) {
      const element = node as any;
      if (element.type === TabsTrigger && element.props.value) {
        firstValue = element.props.value;
        return;
      }
      if (element.props.children) {
        findFirstTrigger(element.props.children);
      }
    }
  };

  findFirstTrigger(children);
  return firstValue;
}

// Convenience component for common tab patterns
interface SimpleTabsProps {
  items: Array<{
    label: string;
    value: string;
    content: ReactNode;
  }>;
  defaultValue?: string;
  className?: string;
}

export function SimpleTabs({
  items,
  defaultValue,
  className,
}: SimpleTabsProps) {
  return (
    <Tabs defaultValue={defaultValue || items[0]?.value} className={className}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

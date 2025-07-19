import React from "react";
import { Toaster } from "@/components/ui/sonner";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
}

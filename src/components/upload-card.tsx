"use client";

import { Button } from "@/components/ui/button";
import { Upload, FileUp, Check } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface UploadCardProps {
  title: string;
  description: string;
  acceptedFormats?: string;
}

export function UploadCard({
  title,
  description,
  acceptedFormats = ".csv",
}: UploadCardProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // This is a dummy component, so we're not actually doing anything with the file
      console.log("File selected:", file.name);
    }
  };

  return (
    <div
      className={cn(
        "w-full border border-neutral-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/50 hover:bg-white transition-colors",
        fileName && "border-green-200 bg-green-50/50",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "p-2 rounded-md flex items-center justify-center",
            fileName ? "bg-green-100" : "bg-neutral-100",
          )}
        >
          {fileName ? (
            <Check className="h-6 w-6 text-green-600" />
          ) : (
            <FileUp className="h-6 w-6 text-neutral-800" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-neutral-800">{title}</span>
            {acceptedFormats && (
              <span
                className={cn(
                  "text-xs text-muted-foreground px-2 py-0.5 rounded-full",
                  fileName ? "bg-green-100" : "bg-blue-100",
                )}
              >
                {acceptedFormats}
              </span>
            )}
            {fileName && (
              <span className="text-xs text-green-600 font-medium">
                File selected
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {fileName ? `Selected: ${fileName}` : description}
          </p>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={acceptedFormats}
        className="hidden"
      />
      <Button
        variant={fileName ? "default" : "outline"}
        size="sm"
        className={cn(
          "shrink-0",
          fileName
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "hover:bg-neutral-100",
        )}
        onClick={handleUploadClick}
      >
        {fileName ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Change File
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </>
        )}
      </Button>
    </div>
  );
}

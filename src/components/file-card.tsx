import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface FileCardProps {
  fileName: string;
  fileSize: string;
  description: string;
  downloadUrl: string;
}

export function FileCard({
  fileName,
  fileSize,
  description,
  downloadUrl,
}: FileCardProps) {
  return (
    <div className="w-full border border-neutral-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/50 hover:bg-white transition-colors">
      <div className="flex items-start gap-3">
        <div className="bg-neutral-100 p-2 rounded-md flex items-center justify-center">
          <FileText className="h-6 w-6 text-neutral-800" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-neutral-800">{fileName}</span>
            <span className="text-xs text-muted-foreground bg-green-100 px-2 py-0.5 rounded-full">
              {fileSize}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <a href={downloadUrl} download>
        <Button
          variant="outline"
          size="sm"
          className="shrink-0 hover:bg-neutral-100"
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </a>
    </div>
  );
}

import { Button } from "@/components/ui/button";

interface BuyMeCoffeeCardProps {
  title: string;
  description: string;
  coffeeUrl: string;
}

export function BuyMeCoffeeCard({
  title,
  description,
  coffeeUrl,
}: BuyMeCoffeeCardProps) {
  return (
    <div className="w-full border border-neutral-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-amber-50 hover:bg-amber-100 transition-colors">
      <div className="flex items-start gap-3">
        <div className="bg-amber-500 p-2 rounded-full flex items-center justify-center">
          <CoffeeIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-neutral-800">{title}</span>
            <span className="text-xs text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
              Support
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <a href={coffeeUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white border-none"
        >
          Buy Coffee
        </Button>
      </a>
    </div>
  );
}

// Coffee cup icon component
function CoffeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

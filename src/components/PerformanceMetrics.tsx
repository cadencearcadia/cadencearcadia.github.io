import { Progress } from "./ui/progress";
import { Tooltip } from "./ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HelpCircle } from "lucide-react";

interface PerformanceMetricsProps {
  performance: number;
  lcp: string;
  tbt: string;
  cls: string;
  fcp: string;
}

export const PerformanceMetrics = ({
  performance,
  lcp,
  tbt,
  cls,
  fcp,
}: PerformanceMetricsProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-4 mt-4 p-4 bg-card/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">Performance Score</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Overall performance score based on Core Web Vitals and other metrics
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <span className={`text-sm font-medium ${getScoreColor(performance)} px-2 py-1 rounded-full text-white`}>
          {performance}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Largest Contentful Paint (LCP)</span>
          <span>{lcp}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Total Blocking Time (TBT)</span>
          <span>{tbt}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Cumulative Layout Shift (CLS)</span>
          <span>{cls}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">First Contentful Paint (FCP)</span>
          <span>{fcp}</span>
        </div>
      </div>
    </div>
  );
};
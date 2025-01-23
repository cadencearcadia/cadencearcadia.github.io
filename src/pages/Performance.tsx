import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Metrics {
  performance: number;
  lcp: string;
  tbt: string;
  cls: string;
  fcp: string;
}

const Performance = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPerformanceMetrics = async (url: string) => {
    const apiKey = "AIzaSyDIxbw12by2RiEXJLJWdg46cXG3DgIqruk"; // Note: This should be moved to environment variables
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&key=${apiKey}&strategy=mobile`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        performance: Math.round(
          data.lighthouseResult.categories.performance.score * 100
        ),
        lcp: data.lighthouseResult.audits["largest-contentful-paint"].displayValue,
        tbt: data.lighthouseResult.audits["total-blocking-time"].displayValue,
        cls: data.lighthouseResult.audits["cumulative-layout-shift"].displayValue,
        fcp: data.lighthouseResult.audits["first-contentful-paint"].displayValue,
      };
    } catch (error) {
      console.error("Error fetching performance metrics:", error);
      throw error;
    }
  };

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const result = await fetchPerformanceMetrics(
          "https://2koperating.netlify.app"
        );
        setMetrics(result);
      } catch (err) {
        setError("Error loading metrics. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadMetrics();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Project Performance Metrics</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Project 1: Example Project</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[220px]" />
                  <Skeleton className="h-4 w-[180px]" />
                </div>
              ) : error ? (
                <p className="text-destructive">{error}</p>
              ) : metrics ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Page Performance Metrics</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Performance:</strong> {metrics.performance}/100
                    </li>
                    <li>
                      <strong>LCP:</strong> {metrics.lcp}
                    </li>
                    <li>
                      <strong>TBT:</strong> {metrics.tbt}
                    </li>
                    <li>
                      <strong>CLS:</strong> {metrics.cls}
                    </li>
                    <li>
                      <strong>FCP:</strong> {metrics.fcp}
                    </li>
                  </ul>
                  <a
                    href={`https://pagespeed.web.dev/report?url=${encodeURIComponent(
                      "https://2koperating.netlify.app"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-block mt-4"
                  >
                    View Full Report
                  </a>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Performance;

// This component displays performance metrics for a project using the Google PageSpeed API.
// It includes loading states, error handling, and a clean UI using shadcn/ui components.
// The metrics are fetched on component mount and displayed in a card layout.

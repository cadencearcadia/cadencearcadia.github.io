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

interface Project {
  name: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "2koperating - Oil & Gas Saltwater Disposal",
    url: "https://2koperating.netlify.app",
    image: "/2k-project-view.webp",
  },
  {
    name: "Cabin Reservation Platform",
    url: "https://the-wild-oasis-website-bice.vercel.app",
    image: "/lovable-uploads/44896dd8-0840-425a-af0b-724b5a3e3e81.png",
  },
  {
    name: "Cabin Management App",
    url: "https://oasis-bookings-app.netlify.app",
    image: "/lovable-uploads/a7673e4c-528b-4fdf-97ff-12aa048e569a.png",
  },
];

const Performance = () => {
  const [projectMetrics, setProjectMetrics] = useState<Record<string, Metrics | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const fetchPerformanceMetrics = async (url: string) => {
    const apiKey = "AIzaSyDIxbw12by2RiEXJLJWdg46cXG3DgIqruk";
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
      for (const project of projects) {
        setLoading(prev => ({ ...prev, [project.url]: true }));
        try {
          const result = await fetchPerformanceMetrics(project.url);
          setProjectMetrics(prev => ({ ...prev, [project.url]: result }));
        } catch (err) {
          setErrors(prev => ({
            ...prev,
            [project.url]: "Error loading metrics. Please try again later.",
          }));
        } finally {
          setLoading(prev => ({ ...prev, [project.url]: false }));
        }
      }
    };

    loadMetrics();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Project Performance Metrics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.url} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {loading[project.url] ? (
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[220px]" />
                    <Skeleton className="h-4 w-[180px]" />
                  </div>
                ) : errors[project.url] ? (
                  <p className="text-destructive">{errors[project.url]}</p>
                ) : projectMetrics[project.url] ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Page Performance Metrics</h3>
                    <ul className="space-y-2">
                      <li>
                        <strong>Performance:</strong> {projectMetrics[project.url]?.performance}/100
                      </li>
                      <li>
                        <strong>LCP:</strong> {projectMetrics[project.url]?.lcp}
                      </li>
                      <li>
                        <strong>TBT:</strong> {projectMetrics[project.url]?.tbt}
                      </li>
                      <li>
                        <strong>CLS:</strong> {projectMetrics[project.url]?.cls}
                      </li>
                      <li>
                        <strong>FCP:</strong> {projectMetrics[project.url]?.fcp}
                      </li>
                    </ul>
                    <a
                      href={`https://pagespeed.web.dev/report?url=${encodeURIComponent(
                        project.url
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
          ))}
        </div>
      </main>
    </div>
  );
};

export default Performance;

// This component displays performance metrics for multiple projects using the Google PageSpeed API.
// It includes loading states, error handling, and a clean UI using shadcn/ui components.
// The metrics are fetched on component mount and displayed in a responsive card layout.
// Each card includes project details, an image, and performance metrics with a link to the full report.
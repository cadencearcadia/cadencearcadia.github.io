import { supabase } from "@/integrations/supabase/client";

export const fetchPerformanceMetrics = async (url: string) => {
  const apiKey = "AIzaSyDIxbw12by2RiEXJLJWdg46cXG3DgIqruk";
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&key=${apiKey}&strategy=mobile`;

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
};

export const getStoredPerformanceMetrics = async (url: string) => {
  const { data, error } = await supabase
    .from("performance_metrics")
    .select("*")
    .eq("project_url", url)
    .single();

  if (error) {
    console.error("Error fetching stored metrics:", error);
    return null;
  }

  return data;
};

export const updatePerformanceMetrics = async (url: string) => {
  const metrics = await fetchPerformanceMetrics(url);
  
  const { error } = await supabase
    .from("performance_metrics")
    .upsert({
      project_url: url,
      performance_score: metrics.performance,
      lcp: metrics.lcp,
      tbt: metrics.tbt,
      cls: metrics.cls,
      fcp: metrics.fcp,
      last_updated: new Date().toISOString(),
    });

  if (error) {
    console.error("Error updating metrics:", error);
    throw error;
  }

  return metrics;
};

export const shouldUpdateMetrics = (lastUpdated: string | null) => {
  if (!lastUpdated) return true;
  
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // one week in milliseconds
  const lastUpdate = new Date(lastUpdated).getTime();
  const now = new Date().getTime();
  
  return now - lastUpdate > oneWeek;
};
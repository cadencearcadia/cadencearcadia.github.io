import { useQuery } from "@tanstack/react-query";
import { getStoredPerformanceMetrics, shouldUpdateMetrics, updatePerformanceMetrics } from "@/utils/performance";

export const usePerformanceMetrics = (url: string) => {
  return useQuery({
    queryKey: ["performance", url],
    queryFn: async () => {
      try {
        const storedMetrics = await getStoredPerformanceMetrics(url);
        
        if (!storedMetrics || shouldUpdateMetrics(storedMetrics.last_updated)) {
          return updatePerformanceMetrics(url);
        }
        
        return {
          performance: storedMetrics.performance_score,
          lcp: storedMetrics.lcp,
          tbt: storedMetrics.tbt,
          cls: storedMetrics.cls,
          fcp: storedMetrics.fcp,
        };
      } catch (error) {
        console.error("Error in usePerformanceMetrics:", error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: 1, // Only retry once to avoid excessive API calls
  });
};
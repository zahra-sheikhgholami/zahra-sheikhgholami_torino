import { useQuery } from "@tanstack/react-query";
import { getTours } from "@/src/core/services/tour";

function useTours(searchQuery, initialData) {
  return useQuery({
    queryKey: ["getTours", searchQuery],
    queryFn: () => getTours(searchQuery),
    initialData,
    staleTime: 0
  });
}
export default useTours;

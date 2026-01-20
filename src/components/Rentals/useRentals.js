import { useQuery } from "@tanstack/react-query";
import { getRentals } from "../../services/ApiRentals";
import { useSearchParams } from "react-router";

export function useRentals() {
  //SortBy
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "desc";

  const {
    data: rentals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rentals", sortBy],
    queryFn: () => getRentals({ sortBy }),
  });

  return { rentals, isLoading, error };
}

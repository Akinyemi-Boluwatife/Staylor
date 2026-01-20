import { useQuery } from "@tanstack/react-query";
import { getRentals } from "../../services/ApiRentals";
import { useSearchParams } from "react-router";

export function useRentals() {
  //Filter
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter") || 5;

  //SortBy
  const sortBy = searchParams.get("sortBy") || "desc";

  const {
    data: rentals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rentals", sortBy, filterValue],
    queryFn: () => getRentals({ sortBy, filterValue: Number(filterValue) }),
  });

  return { rentals, isLoading, error };
}

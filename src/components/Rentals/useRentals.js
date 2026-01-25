import { useQuery } from "@tanstack/react-query";
import { getRentals } from "../../services/ApiRentals";
import { useSearchParams } from "react-router";

export function useRentals(customFilterValue) {
  //Filter
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";
  const filterValue = customFilterValue || searchParams.get("filter") || 60;

  //SortBy
  const sortBy = searchParams.get("sortBy") || "desc";

  const {
    data: rentals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rentals", sortBy, filterValue, status],
    queryFn: () =>
      getRentals({ sortBy, filterValue: Number(filterValue), status }),
  });

  return { rentals, isLoading, error, status };
}

export function useAllRentals(customFilterValue) {
  //Filter
  const [searchParams] = useSearchParams();
  const filterValue = customFilterValue || searchParams.get("filter") || 60;

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

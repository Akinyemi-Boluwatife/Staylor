import { useQuery } from "@tanstack/react-query";
import { getRentals } from "../../services/ApiRentals";

export function useRentals() {
  const {
    data: rentals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rentals"],
    queryFn: () => getRentals(),
  });

  return { rentals, isLoading, error };
}

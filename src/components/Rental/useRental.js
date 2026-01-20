import { useQuery } from "@tanstack/react-query";
import { getRental } from "../../services/ApiRentals";

export function useRental(id) {
  const {
    data: rental,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rental", id],
    queryFn: () => getRental(id),
  });

  return { rental, isLoading, error };
}

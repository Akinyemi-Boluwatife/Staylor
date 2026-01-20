import { useQuery } from "@tanstack/react-query";
import { getParkingSlots } from "../../services/ApiParkingSlots";

export const useParkingSlots = () => {
  const {
    data: parkingSlots,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["parkingSlots"],
    queryFn: () => getParkingSlots(),
  });

  return { parkingSlots, isPending, isError, error };
};

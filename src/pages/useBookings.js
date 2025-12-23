import { useQuery } from "@tanstack/react-query";
import { getParkingSlots } from "../services/ApiParkingSlots";

export function useBookings() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Bookings"],
    queryFn: getParkingSlots,
  });

  return { data, isLoading, error };
}

// hooks/useCreateRental.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRental as createRentalApi } from "../../services/ApiRentals";
import { toast } from "react-toastify"; // Optional: for notifications

export function useCreateRental() {
  const queryClient = useQueryClient();

  const {
    mutate: createRental,
    isPending: isCreatingRental,
    error,
  } = useMutation({
    mutationFn: createRentalApi,
    onSuccess: () => {
      // Refresh any queries matching ['rentals'] to show the new booking
      queryClient.invalidateQueries({ queryKey: ["rentals"] });
      toast.success("Rental created successfully!");
    },
    onError: (error) => {
      toast.error(`Booking failed: ${error.message}`);
      console.error("Rental Error:", error);
    },
  });

  return { createRental, isCreatingRental, error };
}

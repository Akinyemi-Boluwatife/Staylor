import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserDetails as updateCurrenUserDetailsApi } from "../../services/ApiProfiles";

export function useUpdateCurrentUserDetails() {
  const queryClient = useQueryClient();
  const { mutate: updateCurrentUserDetails, isPending: isUpdating } =
    useMutation({
      mutationFn: updateCurrenUserDetailsApi,
      onSuccess: (user) => {
        toast.success("Your account has been successfully updated");
        queryClient.setQueryData(["user", user.id], user);
        queryClient.invalidateQueries({ queryKey: ["user", user.id] });
      },
      onError: (err) => toast.error(err.message),
    });

  return { updateCurrentUserDetails, isUpdating };
}

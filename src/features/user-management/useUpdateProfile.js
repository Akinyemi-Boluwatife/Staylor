import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateProfile as updateProfileApi } from "../../services/ApiProfiles";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: async ({ userId, updates, password, fullName, avatar }) => {
      // 1. Update Auth (Password/FullName/Avatar) if needed
      let updatedUser = null;
      if (password || fullName || avatar) {
        updatedUser = await updateCurrentUserApi({
          password,
          fullName,
          avatar,
        });
      }

      // 2. Extract new avatar URL if it exists
      const avatarUrl = updatedUser?.user?.user_metadata?.avatar;
      const finalUpdates = avatarUrl ? { ...updates, avatarUrl } : updates;

      // 3. Update Profile table
      return await updateProfileApi({ userId, updates: finalUpdates });
    },
    onSuccess: (user) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

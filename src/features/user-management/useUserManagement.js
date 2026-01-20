import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/ApiProfiles";

export const useUserManagement = (userId) => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["CurrentUser", userId],
    queryFn: () => getProfile(userId),
    enabled: !!userId,
  });

  return {
    user,
    isLoading,
    isError,
    error,
  };
};

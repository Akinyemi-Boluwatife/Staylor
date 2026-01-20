import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/ApiProfiles";

export function useProfile(id) {
  const { data: profileData, isPending: isLoadingProfile } = useQuery({
    queryFn: () => getProfile(id),
    queryKey: ["profile", id],
  });
  return { profileData, isLoadingProfile };
}

import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../services/ApiProfiles";

export function useProfiles() {
  const { data: profiles, isLoading: isLoadingProfiles } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => getProfiles(),
  });
  return { profiles, isLoadingProfiles };
}

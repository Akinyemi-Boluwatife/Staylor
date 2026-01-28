import { useUser } from "../features/authentication/useUser";
import { useUserManagement } from "../features/user-management/useUserManagement";

export function useCurrentUser() {
  // 1. Get the Auth User (Session)
  const { user: userData, isLoading: isLoadingAuth } = useUser();

  // 2. Get the Database Profile (Dependent on userData.id)
  const {
    user: userInfo,
    isLoading: isLoadingUserInfo,
    isError: isErrorUserInfo,
    error: errorUserInfo,
  } = useUserManagement(userData?.id);

  /**
   * 3. THE LOGIC:
   * A "Loading" state is true if:
   * - We are still checking the initial Auth session.
   * - OR we have a UserID but the Profile fetch hasn't finished yet.
   */
  const isLoading = isLoadingAuth || (!!userData?.id && isLoadingUserInfo);

  return {
    userInfo, // Full DB Profile (fullName, avatar, etc.)
    userData, // Auth Object (email, metadata)
    isLoading,
    isError: isErrorUserInfo,
    error: errorUserInfo,
    isAuthenticated: !!userData?.id && !isLoading,
  };
}

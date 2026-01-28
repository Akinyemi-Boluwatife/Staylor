import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import InputFile from "./InputFile";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import { useUserManagement } from "../features/user-management/useUserManagement";
import { getInitials } from "../utils/helpers";
import Loader from "./ui/Loader";
import { CircleUserRound } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const { user: userData } = useUser();

  const { user: userInfo } = useUserManagement(userData?.id);

  return (
    <header className="flex h-[60px] items-center border-b border-e-gray-400 bg-background p-2.5 sm:h-[100px] md:p-6">
      <div className="flex h-5 w-full items-center justify-between sm:h-11">
        <div className="flex w-[200px] items-center justify-center gap-1.5 sm:w-[400px]">
          <SidebarTrigger />
          <InputFile />
        </div>

        <div className="flex w-[102px] items-center justify-center gap-2.5 lg:gap-[22px]">
          <ModeToggle />

          {!userData || !userInfo ? (
            <Avatar>
              <AvatarImage alt="User" />
              <AvatarFallback>
                <CircleUserRound />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar onClick={() => navigate("/profile-settings")}>
              <AvatarImage src={userInfo?.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-xl">
                {userInfo?.fullName ? getInitials(userInfo?.fullName) : ""}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

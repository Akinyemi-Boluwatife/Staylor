import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import InputFile from "./InputFile";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import { useUserManagement } from "../features/user-management/useUserManagement";
import { getInitials } from "../utils/helpers";
import { CircleUserRound } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const { user: userData } = useUser();

  const { user: userInfo } = useUserManagement(userData?.id);

  return (
    <header className="flex h-[60px] items-center border-b border-e-gray-400 bg-background p-2.5 sm:h-[100px] md:p-6">
      <div className="flex h-9 w-full items-center justify-between sm:h-15">
        <div className="flex items-center justify-start gap-1.5">
          <SidebarTrigger size="icon-lg" />
          {/* <InputFile /> */}
        </div>

        <div className="flex w-[102px] items-center justify-center gap-2.5 lg:gap-[22px]">
          <ModeToggle />

          {!userData || !userInfo ? (
            <Avatar>
              <AvatarImage alt="User" />
              <AvatarFallback>
                <CircleUserRound className="size-6 sm:size-9" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar
              onClick={() => navigate("/profile-settings")}
              className="size-6 sm:size-9"
            >
              <AvatarImage src={userInfo?.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-xl sm:text-2xl">
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

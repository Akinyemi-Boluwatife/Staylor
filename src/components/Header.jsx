import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import InputFile from "./InputFile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { useNavigate } from "react-router";
// import { useUserManagement } from "./User-Management/UseUserManagement";

function Header() {
  const navigate = useNavigate();
  // const { user } = useUserManagement; GET THE USER IMAGE AFTER LOGIN
  // console.log(user);

  return (
    <header className="flex h-[60px] items-center border-b border-e-gray-400 p-2.5 sm:h-[100px] md:p-6">
      <div className="flex h-5 w-full items-center justify-between sm:h-11">
        <div className="flex w-[200px] items-center justify-center gap-1.5 sm:w-[400px]">
          <SidebarTrigger />
          <InputFile />
        </div>

        <div className="flex w-[102px] items-center justify-center gap-2.5 lg:gap-[22px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden p-2">
              <Bell />
            </DropdownMenuTrigger>
            {/* //Hidden for now */}{" "}
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>notification/settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />

          <Avatar onClick={() => navigate("/user-management")}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Calendar,
  ChevronUp,
  CircleParking,
  Headset,
  HomeIcon,
  House,
  Inbox,
  SearchIcon,
  SettingsIcon,
  SquareParking,
  SquareParkingIcon,
  User2,
  Users,
} from "lucide-react";
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "./ui/sidebar";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { NavLink, useLocation } from "react-router";

const items = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <House />,
  },
  {
    title: "Rentals",
    to: "rentals",
    icon: <CircleParking />,
  },
  {
    title: "Parking Slots",
    to: "parking-Slots",
    icon: <SquareParking />,
  },
  {
    title: "User Management",
    to: "user-management",
    icon: <Users />,
  },
  {
    title: "Contact Us",
    to: "contact-us",
    icon: <Headset />,
  },

  // {
  //   title: "Rental Detail",
  //   to: "Rentals/123",
  //   icon: <CircleParking />,
  // },
  //   {
  //     title: "User Management",

  //     icon: <Users />,
  //   },
  //   {
  //     title: "Parking Facilities Management",

  //     icon: <Inbox />,
  //   },
  //   {
  //     title: "Parking Status",

  //     icon: <SearchIcon />,
  //   },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="h-12 w-full border-amber-700 py-4 text-2xl/9 font-bold">
          <div>
            <span className="text-primary">STAYLOR</span> INT.
          </div>
        </SidebarHeader>
        {/* <Separator /> */}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isAbsolute = item.to.startsWith("/");
                const pathToCheck = isAbsolute ? item.to : `/${item.to}`;
                const isActive =
                  location.pathname === pathToCheck ||
                  location.pathname.startsWith(`${pathToCheck}/`);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <NavLink to={item.to}>
                        <span className="">{item.icon}</span>
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Profile
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem asChild>
                  <NavLink to="Profile-settings">
                    <SettingsIcon /> Settings
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

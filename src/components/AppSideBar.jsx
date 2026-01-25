import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  ChevronUp,
  CircleParking,
  Headset,
  House,
  SettingsIcon,
  SquareParking,
  User2,
  Users,
} from "lucide-react";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader
          className={cn(
            "w-full border-amber-700 font-bold transition-all duration-300",
            state === "collapsed" ? "h-16 justify-center" : "h-45",
          )}
        >
          {/* <div>
            <span className="text-primary">STAYLOR</span> INT.
          </div> */}
          <div className="flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="Staylorww3.png"
              alt="staylor"
              className={cn(
                "transition-all duration-300",
                state === "collapsed" ? "h-8 w-8" : "h-30 w-30",
              )}
            />
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

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  User,
  Shield,
  Car,
  CreditCard,
  Flag,
  MapPin,
  MoreHorizontal,
  Calendar,
  LogOut,
} from "lucide-react";
import { useLogout } from "../../features/authentication/useLogout";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import EditUserDetails from "./EditUserDetails";
import { useUser } from "../../features/authentication/useUser";
import { useUserManagement } from "../../features/user-management/useUserManagement";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import {
  formatDate,
  formatDistanceToNow,
  getFlagClass,
  getInitials,
} from "../../utils/helpers";

function UserDetails() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { logout, isLoading: isLoadingLogout } = useLogout();

  const { user: userData } = useUser();

  const {
    user: userInfo,
    isLoading: isLoadingUserInfo,
    error: errorUserInfo,
  } = useUserManagement(userData?.id);

  if (isLoadingUserInfo) return <Loader />;

  if (errorUserInfo) return <ErrorMessage message={errorUserInfo.message} />;

  const {
    fullName,
    email,
    role,
    gender,
    nationalId,
    nationality,
    avatarUrl,
    vehicleModel,
    createdAt,
  } = userInfo || {};

  // // Mock user data
  // const user = {
  //   fullname: "Alex Johnson",
  //   email: "alex.johnson@example.com",
  //   role: "Admin", // or "Customer"
  //   gender: "Male",
  //   nationalId: "948302-58193",
  //   nationality: "United States",
  //   countryCode: "us", // for flag
  //   avatarUrl: "https://github.com/shadcn.png",
  //   vehicleModel: "Tesla Model S Plaid",
  //   joinDate: "January 15, 2024",
  // };

  return (
    <div className="flex h-full w-full flex-col space-y-8 bg-muted/10 p-6 duration-500 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Profile Settings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your profile details, permissions, and vehicle information.
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Edit Details</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] max-w-[90%] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] md:max-w-2xl [&::-webkit-scrollbar]:hidden">
              <DialogHeader>
                <DialogTitle>Edit User Details</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here.
                </DialogDescription>
              </DialogHeader>
              <EditUserDetails onClose={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={logout} disabled={isLoadingLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-12">
        <Card className="relative flex h-full flex-col overflow-hidden border bg-card/50 lg:col-span-4">
          <CardHeader className="relative z-10 flex flex-col items-center pt-16 pb-8">
            <Avatar className="h-32 w-32 border-4 border-muted">
              <AvatarImage src={avatarUrl} className="object-cover" />
              <AvatarFallback className="text-2xl">
                {fullName ? getInitials(fullName) : ""}
              </AvatarFallback>
            </Avatar>
            <div className="mt-4 space-y-2 text-center">
              <CardTitle className="text-3xl font-bold">{fullName}</CardTitle>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </div>
              <Badge
                variant={role === "Admin" ? "default" : "secondary"}
                className="mt-2 rounded-full px-4 py-1.5 text-sm font-medium"
              >
                {role}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-end px-8 pb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/50 py-3">
                <span className="text-sm text-muted-foreground">
                  Member Since
                </span>
                <span className="font-medium">{formatDate(createdAt)}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/50 py-3">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="flex items-center gap-2 font-medium text-green-600">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  </span>
                  Active
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6 lg:col-span-8">
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="flex flex-col border bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Flag className="h-5 w-5 text-green-500" />
                  Nationality
                </CardTitle>
                {nationality && (
                  <span
                    className={getFlagClass(nationality)}
                    style={{ fontSize: "18px" }}
                  ></span>
                )}
              </CardHeader>
              <CardContent className="flex flex-col gap-1 pt-2">
                <span className="text-3xl font-bold tracking-tight">
                  {nationality || "N/A"}
                </span>
                <span className="text-sm text-muted-foreground">Citizen</span>
              </CardContent>
            </Card>

            <Card className="flex flex-col border bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  National ID
                </CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex flex-col gap-1 pt-2">
                <div className="font-mono text-3xl tracking-wider">
                  {nationalId || "N/A"}
                </div>
                <span className="text-sm text-muted-foreground">
                  Verified Identity
                </span>
              </CardContent>
            </Card>

            <Card className="flex flex-col border bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <User className="h-5 w-5 text-blue-500" />
                  Gender
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 pt-2">
                <span className="text-3xl font-bold">{gender || "N/A"}</span>
                <span className="text-sm text-muted-foreground">
                  Personal Info
                </span>
              </CardContent>
            </Card>

            <Card className="flex flex-col border bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Car className="h-5 w-5 text-teal-500" />
                  Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-1 pt-2">
                <span className="text-2xl font-bold tracking-wide">
                  {vehicleModel || "N/A"}
                </span>
                <span className="text-sm text-muted-foreground">
                  Registered Vehicle
                </span>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1">
            <Card className="flex flex-col border bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  Account Created
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold">
                    {formatDate(createdAt) || "N/A"}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      {formatDistanceToNow(createdAt) || "N/A"}
                    </span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Founding Member
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

import { IconDoorEnter, IconDoorExit } from "@tabler/icons-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DashboardRatingChart from "./DashboardRatingChart";
import {
  ChevronsDown,
  ChevronsUp,
  CircleDollarSignIcon,
  Folder,
} from "lucide-react";
import { formatCurrency } from "../../utils/helpers";
import RecentDashboardBookingList from "./RecentDashboardBookingList";

function DashboardLayout() {
  return (
    <div className="my-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Rentals</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            600
          </CardTitle>
          <CardAction>
            <div className="flex items-center justify-center rounded-full bg-secondary p-2">
              <Folder className="size-5" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <Badge className="text-green-400" variant="secondary">
              <ChevronsUp className="size-4" />
              8.07%
            </Badge>
            from last week
          </div>
          <div className="text-muted-foreground">
            Rentals for the last months
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Check in</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            318
          </CardTitle>
          <CardAction>
            <div className="flex items-center justify-center rounded-full bg-secondary p-2">
              <IconDoorEnter className="size-5" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <Badge className="text-destructive" variant="secondary">
              <ChevronsDown className="size-4" />
              8.07%
            </Badge>
            from last week
          </div>
          <div className="text-muted-foreground">
            Rentals for the last months
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Check Out</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            318
          </CardTitle>
          <CardAction>
            <div className="flex items-center justify-center rounded-full bg-secondary p-2">
              <IconDoorExit className="size-5" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <Badge className="text-destructive" variant="secondary">
              <ChevronsDown className="size-4" />
              8.07%
            </Badge>
            from last week
          </div>
          <div className="text-muted-foreground">
            Rentals for the last months
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(515, 920)}
          </CardTitle>
          <CardAction>
            <div className="flex items-center justify-center rounded-full bg-secondary p-2">
              <CircleDollarSignIcon className="size-5" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <Badge className="text-green-400" variant="secondary">
              <ChevronsUp className="size-4" />
              8.07%
            </Badge>
            from last week
          </div>
          <div className="text-muted-foreground">
            Total revenue for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <RecentDashboardBookingList />
      <DashboardRatingChart />
    </div>
  );
}

export default DashboardLayout;

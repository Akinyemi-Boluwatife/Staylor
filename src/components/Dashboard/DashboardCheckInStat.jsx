import { IconDoorEnter } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRentals } from "../Rentals/useRentals";

function DashboardCheckInStat() {
  const { rentals } = useRentals();

  const RentalsCheckedInCount = rentals?.filter(
    (rental) => rental.status === "checked-in",
  ).length;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>Check in</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {RentalsCheckedInCount ? RentalsCheckedInCount : 0}
        </CardTitle>
        <CardAction>
          <div className="flex items-center justify-center rounded-full bg-secondary p-2">
            <IconDoorEnter className="size-5" />
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="text-muted-foreground">Current rentals checked in</div>
      </CardFooter>
    </Card>
  );
}

export default DashboardCheckInStat;

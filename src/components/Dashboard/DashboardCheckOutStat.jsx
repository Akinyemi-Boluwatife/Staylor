import { IconDoorExit } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useRentals } from "../Rentals/useRentals";

function DashboardCheckOutStat() {
  const { rentals } = useRentals();

  const RentalsCheckOutCount = rentals?.filter(
    (rental) => rental?.status === "checked-out",
  )?.length;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>Check Out</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {RentalsCheckOutCount ? RentalsCheckOutCount : 0}
        </CardTitle>
        <CardAction>
          <div className="flex items-center justify-center rounded-full bg-secondary p-2">
            <IconDoorExit className="size-5" />
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="text-muted-foreground">
          Rentals for the last 2 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default DashboardCheckOutStat;

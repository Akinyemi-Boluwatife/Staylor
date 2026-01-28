import { useRentals } from "../Rentals/useRentals";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Folder } from "lucide-react";

function DashboardNewRentalsStat() {
  const { rentals } = useRentals();
  const newRentalsCount = rentals?.length;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>New Rentals</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {newRentalsCount ? newRentalsCount : 0}
        </CardTitle>
        <CardAction>
          <div className="flex items-center justify-center rounded-full bg-secondary p-2">
            <Folder className="size-5" />
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

export default DashboardNewRentalsStat;

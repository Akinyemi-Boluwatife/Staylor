import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatCurrency } from "../../utils/helpers";
import { CircleDollarSignIcon } from "lucide-react";
import { useRentals } from "../Rentals/useRentals";

function DashboardTotalRevenueStat() {
  const { rentals } = useRentals();

  const totalRevenue = rentals?.reduce((acc, rental) => {
    return acc + rental?.totalAmount;
  }, 0);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {totalRevenue ? formatCurrency(totalRevenue) : 0}
        </CardTitle>
        <CardAction>
          <div className="flex items-center justify-center rounded-full bg-secondary p-2">
            <CircleDollarSignIcon className="size-5" />
          </div>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="text-muted-foreground">
          Total revenue for the last 2 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default DashboardTotalRevenueStat;

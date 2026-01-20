import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronsUp } from "lucide-react";
import { formatCurrency } from "../../utils/helpers";
import { CircleDollarSignIcon } from "lucide-react";

function DashboardTotalRevenueStat() {
  return (
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
  );
}

export default DashboardTotalRevenueStat;

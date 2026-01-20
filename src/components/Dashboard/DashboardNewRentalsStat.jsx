import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Folder } from "lucide-react";
import { ChevronsUp } from "lucide-react";

function DashboardNewRentalsStat() {
  return (
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
        <div className="text-muted-foreground">Rentals for the last months</div>
      </CardFooter>
    </Card>
  );
}

export default DashboardNewRentalsStat;

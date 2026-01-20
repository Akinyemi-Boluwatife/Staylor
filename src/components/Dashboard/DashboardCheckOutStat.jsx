import { IconDoorExit } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronsDown } from "lucide-react";
import { Badge } from "../ui/badge";

function DashboardCheckOutStat() {
  return (
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
        <div className="text-muted-foreground">Rentals for the last months</div>
      </CardFooter>
    </Card>
  );
}

export default DashboardCheckOutStat;

import { CircleDollarSign, CalendarDays } from "lucide-react";
import RentalInfoHeader from "./RentalInfoHeader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { Button } from "../ui/button";
import { IconArrowBack } from "@tabler/icons-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useParams } from "react-router";
import { useRental } from "./useRental";
import { useGoBack } from "../../hooks/useGoBack";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";

function RentalInfo() {
  const { rentalId } = useParams();
  const { rental, isLoading, error } = useRental(rentalId);
  const goBack = useGoBack();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Card className="w-full overflow-hidden border-2 bg-card/60">
      <CardContent className="space-y-2 p-2">
        <RentalInfoHeader />

        <Separator />

        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-accent/30 bg-accent/20 p-2 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-chart-2/10 p-3 text-chart-2">
              <CircleDollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Amount
              </p>
              <p className="text-2xl font-bold tracking-tight">
                {formatCurrency(rental?.totalAmount)}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="border-(--chart-2)/20 bg-chart-2/10 px-4 py-1 text-base text-chart-2 shadow-none"
          >
            Paid
          </Badge>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-end">
          <CalendarDays className="h-4 w-4" />
          <span>
            Booked on{" "}
            <span className="font-medium text-foreground">
              {formatDate(rental?.createdAt)}
            </span>
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
          onClick={goBack}
        >
          <IconArrowBack className="mr-2 h-4 w-4" /> Back to Rentals
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RentalInfo;

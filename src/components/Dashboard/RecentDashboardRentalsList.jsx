import { formatDate, getToday } from "../../utils/helpers";
import EmptyData from "../EmptyData";
import { useRentals } from "../Rentals/useRentals";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import ErrorMessage from "../ui/ErrorMessage";
import Loader from "../ui/Loader";
import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function RecentDashboardRentalsList() {
  const { rentals: rentalsData, isLoading, error } = useRentals();

  if (isLoading)
    return (
      <Card className="flex h-[500px] flex-col items-center justify-center shadow-lg md:col-span-2">
        <Loader />
      </Card>
    );

  if (error)
    return (
      <Card className="flex h-[500px] flex-col items-center justify-center shadow-lg md:col-span-2">
        <ErrorMessage message={error.message} />;
      </Card>
    );

  if (!rentalsData || rentalsData?.length === 0)
    return (
      <div className="rounded-(--radius) border-2 md:col-span-2">
        <EmptyData info=" Rentals" />
      </div>
    );

  return (
    <div className="rounded-(--radius) border-2 md:col-span-2">
      <h2 className="mx-1.5 my-1.5 text-2xl/relaxed font-semibold">
        Recent Rentals
      </h2>
      <ScrollArea className="h-95">
        <Table>
          <TableCaption>
            A list of the recent rentals: {formatDate(getToday())}.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Number</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentalsData.map(
              (
                rental,
                i, //Fix this index key later
              ) => (
                <TableRow key={i} className="text-center">
                  <TableCell>{rental.parkingSlots.slotNumber}</TableCell>
                  <TableCell>
                    {rental?.profiles?.fullName || "Anonymous"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        rental.status === "checked-in" ? "active" : "outline"
                      }
                      className="uppercase"
                    >
                      {rental.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{rental?.numDays || "Unknown"} days</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}

export default RecentDashboardRentalsList;

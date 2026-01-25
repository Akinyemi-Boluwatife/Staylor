import { formatCurrency } from "../../utils/helpers";
import EmptyData from "../EmptyData";
import InputFile from "../InputFile";
import { Badge } from "../ui/badge";
import ErrorMessage from "../ui/ErrorMessage";
import Loader from "../ui/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { RentalsAction } from "./RentalsAction";
import { useRentals } from "./useRentals";

//  Mock data
// const parkings = [
//   {
//     parkingName: "Central Plaza Garage",
//     parkingNumber: "P001",
//     price: "15.00",
//     status: "checked-in",
//     description: "Covered parking, 24/7 security. Near cinema complex.",
//   },
// ];

function RentalsTable() {
  const { rentals, isLoading, error } = useRentals();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage errorMessage={error.message} />;

  if (!rentals.length) return <EmptyData info="rentals" />;

  return (
    <div className="rounded-2xl border-2 border-gray-400 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">All Rentals</h3>

        <div className="hidden w-[200px] sm:w-[400px]">
          <InputFile className="rounded-full" />
        </div>
      </div>

      <Table>
        <TableCaption>A list of the recent Parkings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Full Name</TableHead>
            <TableHead className="text-center">Slot Name</TableHead>
            <TableHead className="text-center">Parking Number</TableHead>
            <TableHead className="text-center"> Total Price</TableHead>
            <TableHead className="text-center"> status</TableHead>
            <TableHead className="text-left">Description</TableHead>
            <TableHead className="text-center"> Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map(
            (
              rental,
              i, //Change the i later
            ) => (
              <TableRow className="text-center" key={i}>
                <TableCell className="text-left">
                  {rental?.profiles?.fullName || "Unknown"}
                </TableCell>
                <TableCell className="text-center font-medium">
                  {rental?.parkingSlots?.slotName || "Unknown"}
                </TableCell>
                <TableCell className="text-center">
                  {rental?.parkingSlots?.slotNumber || "Unknown"}
                </TableCell>
                <TableCell> {formatCurrency(rental.totalAmount)}</TableCell>
                <TableCell>
                  <Badge
                    className="uppercase"
                    variant={
                      rental.status === "checked-in" ? "active" : "outline"
                    }
                  >
                    {rental.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-left">
                  {rental?.parkingSlots?.description || "Unknown"}
                </TableCell>
                <TableCell>
                  <RentalsAction rentalId={rental.id} />
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}

export default RentalsTable;

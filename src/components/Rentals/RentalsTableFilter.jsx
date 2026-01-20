import { Filter, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useRentals } from "./useRentals";

function RentalsTableFilter() {
  const { rentals } = useRentals();
  const numRentals = rentals?.length || 0;
  const numBooked =
    rentals.filter((rental) => rental?.status === "checked-in")?.length || 0;

  //Calculate the available parking slots later
  // const numAvailable =
  //   rentals?.filter((rental) => rental.status === "available")?.length || 0;

  return (
    <div className="my-4 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center gap-2 overflow-x-auto text-sm text-destructive md:w-auto md:justify-center md:text-base">
        <p className="border-b-2 border-b-foreground px-2 py-4 font-bold whitespace-nowrap">
          All Parking Slots ({numRentals})
        </p>
        <p className="px-2 py-4 whitespace-nowrap">
          {" "}
          Available Parking Slot (293)
        </p>
        <p className="px-2 py-4 whitespace-nowrap">
          Booked Parking Slot ({numBooked}){" "}
        </p>
      </div>

      <div className="flex w-full gap-2 md:w-auto">
        <Button
          variant="secondary"
          className="flex-1 rounded-2xl border border-ring md:flex-none"
        >
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
        <Button
          variant="secondary"
          className="flex-1 rounded-2xl border border-ring md:flex-none"
        >
          <Plus className="mr-2 h-4 w-4" /> Add a new room
        </Button>
      </div>
    </div>
  );
}

export default RentalsTableFilter;

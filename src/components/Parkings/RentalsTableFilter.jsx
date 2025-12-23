import { Filter, Plus } from "lucide-react";
import { Button } from "../ui/button";

function RentalsTableFilter() {
  return (
    <div className="my-4 flex w-full items-center justify-between">
      <div className="flex items-center justify-center text-destructive">
        <p className="border-b-2 border-b-foreground px-2 py-4 font-bold">
          All Parking Slots (496)
        </p>
        <p className="px-2 py-4"> Available Parking Slot (293)</p>
        <p className="px-2 py-4">Booked Parking Slot (62) </p>
      </div>

      <div className="space-x-2">
        <Button variant="secondary" className="rounded-2xl border border-ring">
          <Filter /> Filter
        </Button>
        <Button variant="secondary" className="rounded-2xl border border-ring">
          <Plus /> Add a new room
        </Button>
      </div>
    </div>
  );
}

export default RentalsTableFilter;

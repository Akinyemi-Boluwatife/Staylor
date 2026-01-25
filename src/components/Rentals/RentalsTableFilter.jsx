import { useRentals } from "./useRentals";

function RentalsTableFilter() {
  const { rentals } = useRentals();
  const numRentals = rentals?.length || 0;
  const numRented =
    rentals?.filter((rental) => rental?.status === "checked-in")?.length || 0;
  const numCheckedOut =
    rentals?.filter((rental) => rental?.status === "checked-out")?.length || 0;

  return (
    <div className="my-4 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center gap-2 overflow-x-auto text-sm text-destructive md:w-auto md:justify-center md:text-base">
        <p className="border-b-2 border-b-foreground px-2 py-4 font-bold whitespace-nowrap">
          All Rentals ({numRentals})
        </p>
        <p className="px-2 py-4 whitespace-nowrap">
          {" "}
          Active Rentals ({numRented}){" "}
        </p>
        <p className="px-2 py-4 whitespace-nowrap">
          Checked Out Rentals ({numCheckedOut})
        </p>
      </div>
    </div>
  );
}

export default RentalsTableFilter;

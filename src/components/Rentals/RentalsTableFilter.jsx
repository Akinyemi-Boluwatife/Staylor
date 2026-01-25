import { useSearchParams } from "react-router";
import { useAllRentals } from "./useRentals";

function RentalsTableFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";

  const { rentals } = useAllRentals();
  const numRentals = rentals?.length || 0;
  const numRented =
    rentals?.filter((rental) => rental?.status === "checked-in")?.length || 0;
  const numCheckedOut =
    rentals?.filter((rental) => rental?.status === "checked-out")?.length || 0;

  return (
    <div className="my-4 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4 font-semibold">
        <button
          onClick={() => setSearchParams({ status: "all" })}
          className={` ${
            status === "all" ? "border-b-2 border-b-foreground" : ""
          }`}
        >
          All Rentals ({numRentals})
        </button>
        <button
          onClick={() => setSearchParams({ status: "checked-in" })}
          className={` ${
            status === "checked-in" ? "border-b-2 border-b-foreground" : ""
          }`}
        >
          Active Rentals ({numRented})
        </button>
        <button
          onClick={() => setSearchParams({ status: "checked-out" })}
          className={` ${
            status === "checked-out" ? "border-b-2 border-b-foreground" : ""
          }`}
        >
          Checked Out Rentals ({numCheckedOut})
        </button>
      </div>
    </div>
  );
}

export default RentalsTableFilter;

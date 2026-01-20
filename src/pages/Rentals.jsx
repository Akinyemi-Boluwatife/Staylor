import RentalsTable from "../components/Rentals/RentalsTable";
import RentalsAlert from "../components/Rentals/RentalsAlert";
import RentalsTableFilter from "../components/Rentals/RentalsTableFilter";

function Rentals() {
  return (
    <div className="">
      <div className="text-3xl/relaxed font-bold">Rentals</div>
      <RentalsAlert />
      <RentalsTableFilter />
      <RentalsTable />
    </div>
  );
}

export default Rentals;

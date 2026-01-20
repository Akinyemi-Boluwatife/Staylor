import RentalsTable from "../components/Rentals/RentalsTable";
import RentalsAlert from "../components/Rentals/RentalsAlert";
import RentalsTableFilter from "../components/Rentals/RentalsTableFilter";
import RentalsHeader from "../components/Rentals/RentalsHeader";

function Rentals() {
  return (
    <div className="">
      <RentalsHeader />
      <RentalsAlert />
      <RentalsTableFilter />
      <RentalsTable />
    </div>
  );
}

export default Rentals;

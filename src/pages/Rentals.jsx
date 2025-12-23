import ParkingAlert from "../components/Parkings/ParkingAlert";
import ParkingsTableFilter from "../components/Parkings/RentalsTableFilter";
import RentalsTable from "../components/Parkings/RentalsTable";

function Rentals() {
  return (
    <div className="">
      <div className="text-2xl/relaxed font-semibold">Rentals</div>
      <ParkingAlert />
      <ParkingsTableFilter />
      <RentalsTable />
    </div>
  );
}

export default Rentals;

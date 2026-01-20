import RentalsFilter from "./RentalsFilter";

function RentalsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl font-bold">Rentals</div>
      <RentalsFilter />
    </div>
  );
}

export default RentalsHeader;

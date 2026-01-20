import ParkingSlotsHeading from "../components/Parking-Slots/ParkingSlotsHeading";
import ParkingSlotsGrid from "../components/Parking-Slots/ParkingSlotsGrid";

function ParkingSlots() {
  return (
    <div className="space-y-6">
      <ParkingSlotsHeading />
      <ParkingSlotsGrid />
    </div>
  );
}

export default ParkingSlots;

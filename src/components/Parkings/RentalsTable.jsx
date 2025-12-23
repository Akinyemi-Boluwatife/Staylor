import InputFile from "../InputFile";
import { Badge } from "../ui/badge";
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
import { ParkingsAction } from "./ParkingsAction";

const parkings = [
  {
    parkingName: "Central Plaza Garage",
    parkingNumber: "P001",
    price: "15.00",
    status: "checked-in",
    description: "Covered parking, 24/7 security. Near cinema complex.",
  },
  {
    parkingName: "Riverfront Lot",
    parkingNumber: "L105",
    price: "8.00",
    status: "checked-in",
    description:
      "Open-air lot, daily maximum rate applies. Close to public transport.",
  },
  {
    parkingName: "Executive Tower Valet",
    parkingNumber: "V303",
    price: "35.00",
    status: "checked-out",
    description:
      "Premium valet service, priority access. For building tenants only.",
  },
  {
    parkingName: "North Gate Surface",
    parkingNumber: "S210",
    price: "5.00",
    status: "checked-out",
    description: "Budget option, furthest from main entrance. Hourly rate.",
  },
  {
    parkingName: "Express Airport Deck",
    parkingNumber: "D550",
    price: "22.50",
    status: "checked-in",
    description: "Long-term airport parking. Includes free shuttle service.",
  },
  {
    parkingName: "University Visitor Area",
    parkingNumber: "U088",
    price: "10.00",
    status: "checked-out",
    description: "Time-limited visitor parking. Pay-and-display machine.",
  },
  {
    parkingName: "City Hall Underground",
    parkingNumber: "C412",
    price: "18.00",
    status: "checked-in",
    description:
      "Secure, monitored basement parking. Ideal for business meetings.",
  },
  {
    parkingName: "Westside Eco-Park",
    parkingNumber: "E701",
    price: "7.50",
    status: "checked-in",
    description:
      "Eco-friendly lot with EV charging stations. App payment required.",
  },
  {
    parkingName: "Convention Center Roof",
    parkingNumber: "R909",
    price: "12.00",
    status: "checked-out",
    description:
      "Rooftop parking with good city views. Event-based pricing may apply.",
  },
  {
    parkingName: "Grand Hotel Private",
    parkingNumber: "H666",
    price: "40.00",
    status: "checked-in",
    description:
      "Exclusive parking for hotel guests only. In-and-out privileges.",
  },
];

function RentalsTable() {
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
            <TableHead className="w-[100px] text-left">Parking Name</TableHead>
            <TableHead className="text-center">Parking Number</TableHead>
            <TableHead className="text-center"> Total Price</TableHead>
            <TableHead className="text-center"> status</TableHead>
            <TableHead className="text-left">Description</TableHead>
            <TableHead className="text-center"> Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parkings.map((parking) => (
            <TableRow className="text-center" key={parking.parkingNumber}>
              <TableCell className="text-left font-medium">
                {parking.parkingName}
              </TableCell>
              <TableCell className="text-center">
                {parking.parkingNumber}
              </TableCell>
              <TableCell>{parking.price}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    parking.status === "checked-in" ? "outline" : "destructive"
                  }
                >
                  {parking.status}
                </Badge>
              </TableCell>
              <TableCell className="text-left">{parking.description}</TableCell>
              <TableCell>
                <ParkingsAction />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default RentalsTable;

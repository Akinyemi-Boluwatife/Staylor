import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const rentals = [
  {
    status: "Active",
    name: "Liam Smith",
    duration: "12 months",
    number: "RN-1001",
  },
  {
    status: "Pending",
    name: "Olivia Johnson",
    duration: "4 hours",
    number: "RN-1002",
  },
  {
    status: "Completed",
    name: "Noah Williams",
    duration: "1 day",
    number: "RN-1003",
  },
  {
    status: "Active",
    name: "Emma Brown",
    duration: "7 days",
    number: "RN-1004",
  },
  {
    status: "Cancelled",
    name: "Oliver Jones",
    duration: "6 months",
    number: "RN-1005",
  },
  {
    status: "Active",
    name: "Amelia Garcia",
    duration: "2 hours",
    number: "RN-1006",
  },
  {
    status: "Pending",
    name: "James Miller",
    duration: "48 hours",
    number: "RN-1007",
  },
  {
    status: "Completed",
    name: "Sophia Davis",
    duration: "5 days",
    number: "RN-1008",
  },
  {
    status: "Active",
    name: "Mateo Rodriguez",
    duration: "3 days",
    number: "RN-1009",
  },
  {
    status: "Overdue",
    name: "Charlotte Martinez",
    duration: "24 hours",
    number: "RN-1010",
  },
  {
    status: "Active",
    name: "Elijah Hernandez",
    duration: "1 month",
    number: "RN-1011",
  },
  {
    status: "Pending",
    name: "Isabella Lopez",
    duration: "2 days",
    number: "RN-1012",
  },
  {
    status: "Completed",
    name: "William Gonzalez",
    duration: "6 hours",
    number: "RN-1013",
  },
  {
    status: "Active",
    name: "Mia Wilson",
    duration: "24 months",
    number: "RN-1014",
  },
  {
    status: "Active",
    name: "Henry Anderson",
    duration: "12 hours",
    number: "RN-1015",
  },
];

function RecentDashboardBookingList() {
  return (
    <div className="rounded-(--radius) border-2 md:col-span-2">
      <h2 className="mx-1.5 my-1.5 text-2xl/relaxed font-semibold">
        Recent Rentals
      </h2>
      <ScrollArea className="h-95">
        <Table>
          <TableCaption>A list of the recent rentals.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentals.map((rent) => (
              <TableRow key={rent.number}>
                <TableCell>{rent.number}</TableCell>
                <TableCell>{rent.name}</TableCell>
                <TableCell>{rent.status}</TableCell>
                <TableCell>{rent.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}

export default RecentDashboardBookingList;

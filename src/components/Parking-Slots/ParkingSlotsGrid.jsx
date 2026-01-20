import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { ParkingSlotsActions } from "./ParkingSlotsActions";
import { useParkingSlots } from "./useParkingSlots";
import { Skeleton } from "../ui/skeleton";
import Loader from "../ui/Loader";
import { formatCurrency } from "../../utils/helpers";
import EmptyData from "../EmptyData";

function ParkingSlotsGrid() {
  const { parkingSlots, isPending, isError, error } = useParkingSlots();

  // Mock data
  // const parkingSlots1 = [
  //   {
  //     slotNumber: "A-01",
  //     slotName: "A-Group",
  //     totalAmount: "$250.00",
  //     discount: "$50.00",
  //     status: "active",
  //     description: "Premium spot near the main entrance.",
  //   },
  // ];

  if (isPending) {
    return (
      <div className="">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-center text-destructive">
        <p className="text-sm">Error: {error.message}</p>
      </div>
    );
  }

  if (!parkingSlots.length) {
    return <EmptyData info="Parking Slot" />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {parkingSlots.map((slot) => {
        return (
          <Card
            key={slot.id}
            className={`group cursor-pointer border py-0 transition-all duration-150 hover:shadow-lg ${
              slot.isActive
                ? "hover:border-emerald-500/40"
                : "hover:border-rose-500/40"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      slot.isActive ? "bg-emerald-500" : "bg-rose-500"
                    }`}
                  />

                  <span className="text-lg font-semibold tracking-tight">
                    {slot.slotNumber}
                  </span>
                </div>
                <ParkingSlotsActions
                  slotId={slot.id}
                  isAvailable={slot.isActive}
                />
              </div>

              <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                {slot.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-medium">
                  {formatCurrency(slot.totalPrice)}
                </span>
                <Badge
                  variant="outline"
                  className={`text-xs font-normal ${
                    slot.isActive
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {slot.isActive ? "Available" : "Occupied"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default ParkingSlotsGrid;

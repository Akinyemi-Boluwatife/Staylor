import { CircleAlert, X } from "lucide-react";
import { Button } from "../ui/button";

function RentalsAlert() {
  return (
    //Hidden for now
    <div className="hidden w-full flex-col items-center justify-center gap-2.5 rounded-2xl bg-destructive p-3.5">
      <div className="flex w-full items-center justify-between px-4">
        <p className="flex gap-2.5">
          <span>
            <CircleAlert />
          </span>
          Room Alert
        </p>
        <p className="h-1.5">
          <X />
        </p>
      </div>

      <div className="flex w-full items-center justify-start gap-1.5 pl-5">
        <p>You have 30 parking slots that needs urgent attention!</p>
        <Button
          size="sm"
          variant="outline"
          className="rounded-xl border-2 border-gray-400 bg-background px-3 py-1.5 font-normal"
        >
          View details
        </Button>
      </div>
    </div>
  );
}

export default RentalsAlert;

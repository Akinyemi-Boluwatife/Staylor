import { ArrowRight, CalendarClock, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useRental } from "./useRental";
import { useParams } from "react-router";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import { formatDate, formatTime, getInitials } from "../../utils/helpers";

function RentalInfoHeader() {
  const { rentalId } = useParams();
  const { rental, isLoading, error } = useRental(rentalId);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  if (!rental) return <ErrorMessage message="Rental not found" />;

  const { profiles, startTime, endTime, status } = rental;

  const { fullName: namePlaceholder, avatarUrl, role } = profiles || {};

  const fullName = namePlaceholder ?? "Anonymous User";

  const initials = getInitials(fullName);

  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
          <AvatarImage src={avatarUrl} alt="Image" />
          <AvatarFallback className="bg-primary/10 text-lg font-medium text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight">{fullName}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="mr-1 h-3 w-3" />
              {role}
            </div>
            <Badge
              variant={status === "checked-in" ? "active" : "destructive"}
              className="uppercase"
            >
              {status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center rounded-xl border border-border/50 bg-muted/30 p-4 md:w-auto">
        <div className="flex flex-col">
          <span className="mb-1 text-xs font-medium text-muted-foreground uppercase">
            Check-in
          </span>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                {formatDate(startTime)}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatTime(startTime)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 text-muted-foreground/40">
          <ArrowRight className="h-5 w-5" />
        </div>

        <div className="flex flex-col text-right md:text-left">
          <span className="mb-1 text-xs font-medium text-muted-foreground uppercase">
            Check-out
          </span>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                {formatDate(endTime)}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatTime(endTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalInfoHeader;

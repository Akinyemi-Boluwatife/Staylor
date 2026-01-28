import { MoreHorizontalIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ParkingSlotsActions({ slotId, isAvailable }) {
  const navigate = useNavigate();

  if (!isAvailable)
    return (
      <Badge variant="secondary" className="hidden sm:inline-flex">
        Currently Unavailable
      </Badge>
    );

  return (
    <>
      <div className="flex items-center gap-2">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" aria-label="Open menu" size="icon-sm">
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem
                onSelect={() => navigate(`/rentals/new?slotId=${slotId}`)}
              >
                Create Rental
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

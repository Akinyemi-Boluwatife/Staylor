"use client";

import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RentalsAction({ rentalId }) {
  const navigate = useNavigate();

  function handleNavigateToRentalPage() {
    navigate(`/Rentals/${rentalId}`);
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          {/* <DropdownMenuLabel>File Actions</DropdownMenuLabel> */}
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={handleNavigateToRentalPage}>
              View Details
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

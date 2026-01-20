import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

function Filter({ options }) {
  const [selectedFilterValue, setSelectedFilterValue] = useState(30);

  return (
    <div className="flex items-center gap-2">
      {/* Desktop View */}
      <div className="hidden md:flex gap-x-1.5">
        {options.map((option) => (
          <Button
            variant={Number(selectedFilterValue) === Number(option.value) ? "default" : "outline"}
            key={option.value}
            onClick={() => setSelectedFilterValue(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {options.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setSelectedFilterValue(option.value)}
                className={Number(selectedFilterValue) === Number(option.value) ? "bg-accent" : ""}
              >
                 {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      

    </div>
  );
}

export default Filter;

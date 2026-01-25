import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useSearchParams } from "react-router";

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter") || options[0]?.value;

  function handleFilterChange(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-2">
      {/* Desktop View */}
      <div className="hidden gap-x-1.5 lg:flex">
        {options.map((option) => (
          <Button
            variant={
              Number(filterValue) === Number(option.value)
                ? "default"
                : "outline"
            }
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
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
                onClick={() => handleFilterChange(option.value)}
                className={
                  Number(filterValue) === Number(option.value)
                    ? "bg-accent"
                    : ""
                }
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

import { useState } from "react";
import { Button } from "./ui/button";

function Filter({ options }) {
  const [selectedFilterValue, setSelectedFilterValue] = useState(30);
  //   const options = [
  //     { value: "7", label: "Last 7 days" },
  //     { value: "30", label: "Last 30 days" },
  //     { value: "90", label: "Last 90 days" },
  //   ];

  return (
    <div className="flex gap-x-1.5">
      {options.map((option) => (
        <Button
          variant="outline"
          key={option.value}
          onClick={() => setSelectedFilterValue(option.value)}
        >
          {option.label}
        </Button>
      ))}

      {selectedFilterValue && <p>{selectedFilterValue}</p>}
    </div>
  );
}

export default Filter;

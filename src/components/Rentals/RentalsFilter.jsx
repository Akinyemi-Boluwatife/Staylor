import { useSearchParams } from "react-router";
import Filter from "../Filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function RentalsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "desc";

  //   console.log(sortBy);
  return (
    <div className="flex items-center gap-2">
      <Filter
        options={[
          { value: "7", label: "Last 7 days" },
          { value: "30", label: "Last 30 days" },
          { value: "90", label: "Last 90 days" },
        ]}
      />

      <Select
        value={sortBy}
        onValueChange={(value) => {
          searchParams.set("sortBy", value);
          setSearchParams(searchParams);
        }}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue value={sortBy} placeholder="Sort By Asc/Desc" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="asc">Asc</SelectItem>
            <SelectItem value="desc">Desc</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RentalsFilter;

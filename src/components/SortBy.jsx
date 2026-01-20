import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSearchParams } from "react-router";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "desc";

  return (
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
  );
}

export default SortBy;

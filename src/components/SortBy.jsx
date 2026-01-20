import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function SortBy({ options = { name: "", value: "" } }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || options[0]?.value;

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
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
          {/* <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="desc">Desc</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SortBy;

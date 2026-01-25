import Filter from "../Filter";
import SortBy from "../SortBy";

function RentalsFilter() {
  return (
    <div className="flex items-center gap-2">
      <SortBy
        options={[
          { value: "desc", label: "Desc" },
          { value: "asc", label: "Asc" },
        ]}
      />

      <Filter
        options={[
          { value: "7", label: "Last 7 days" },
          { value: "30", label: "Last 30 days" },
          { value: "90", label: "Last 90 days" },
        ]}
      />
    </div>
  );
}

export default RentalsFilter;

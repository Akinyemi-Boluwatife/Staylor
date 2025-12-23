import Filter from "../Filter";

function DashboardFilter() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold">Dashboard</h2>
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

export default DashboardFilter;

import DashboardRatingChart from "./DashboardRatingChart";
import RecentDashboardRentalsList from "./RecentDashboardRentalsList";
import DashboardNewRentalsStat from "./DashboardNewRentalsStat";
import DashboardCheckInStat from "./DashboardCheckInStat";
import DashboardCheckOutStat from "./DashboardCheckOutStat";
import DashboardTotalRevenueStat from "./DashboardTotalRevenueStat";

function DashboardLayout() {
  return (
    <div className="my-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
      <DashboardNewRentalsStat />

      <DashboardCheckInStat />

      <DashboardCheckOutStat />

      <DashboardTotalRevenueStat />

      <RecentDashboardRentalsList />
      <DashboardRatingChart />
    </div>
  );
}

export default DashboardLayout;

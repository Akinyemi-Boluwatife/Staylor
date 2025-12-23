import { IconTrendingUp } from "@tabler/icons-react";
import DropDown from "../components/DropDown";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import DashboardFilter from "../components/Dashboard/DashboardFilter";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardFilter />
      <DashboardLayout />
    </>
  );
}

export default Dashboard;

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./components/AppLayout";
import ProfileSettings from "./pages/ProfileSettings";
import Parkings from "./pages/Rentals";
import ContactUs from "./pages/ContactUs";
import FacilitiesManagement from "./pages/FacilitiesManagement";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ParkingStatus from "./pages/ParkingStatus";
import UserManagement from "./pages/UserManagement";
import Parking from "./pages/Rental";
import Rentals from "./pages/Rentals";
import Rental from "./pages/Rental";
import ParkingSlots from "./pages/ParkingSlots";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// const navigate = useNavigate();

function App() {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="Parking-slots" element={<ParkingSlots />} />
                <Route path="Rentals" element={<Rentals />} />
                <Route path="Rentals/:parkingId" element={<Rental />} />
                <Route path="parking-status" element={<ParkingStatus />} />
                <Route path="user-management" element={<UserManagement />} />
                <Route path="Profile-settings" element={<ProfileSettings />} />
                <Route
                  path="facilities-management"
                  element={<FacilitiesManagement />}
                />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            theme="dark"
          />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

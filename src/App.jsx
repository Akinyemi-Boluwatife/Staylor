import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import { Slide, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./components/AppLayout";
import ProfileSettings from "./pages/ProfileSettings";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import CreateRental from "./pages/CreateRental";
import Rentals from "./pages/Rentals";
import Rental from "./pages/Rental";
import ParkingSlots from "./pages/ParkingSlots";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateAccountForm from "./features/authentication/CreateAccountForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="Parking-slots" element={<ParkingSlots />} />
                <Route path="Rentals" element={<Rentals />} />
                <Route path="Rentals/new" element={<CreateRental />} />
                <Route path="Rentals/:rentalId" element={<Rental />} />
                <Route path="Profile-settings" element={<ProfileSettings />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="create-account" element={<CreateAccountForm />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Slide}
          />

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

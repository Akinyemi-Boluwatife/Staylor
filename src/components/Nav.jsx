import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="row-span-2 hidden bg-red-500 md:block">
      sidebar
      <NavLink
        to="/dashboard"
        className="active:border-b-2 active:border-b-blue-900"
      >
        Dashboard
      </NavLink>
      <NavLink to="/parking-facilities">Parking Facilities</NavLink>
      <NavLink to="/profile-settings">profile settings</NavLink>
      <NavLink to="/parkings/${jrjr}">parking detail</NavLink>
      <NavLink to="/facilities-management">Facilities management</NavLink>
      <NavLink to="/contact-us">Contact us</NavLink>
      <NavLink to="/parking-status">Parking status</NavLink>
      <NavLink to="/user-management">User Management</NavLink>
    </nav>
  );
}

export default Nav;

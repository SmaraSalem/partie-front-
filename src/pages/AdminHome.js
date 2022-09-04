import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/Navbar";

function AdminHome() {
  return (
    <Fragment>
      <NavbarComponent />
      <Outlet />
    </Fragment>
  );
}

export default AdminHome;

import React, { Fragment } from "react";
import NavbarUsers from "../components/navbarUsers/NavbarUsers";
import { Outlet } from "react-router-dom";

function UserHome() {
  return (
    <Fragment>
      <NavbarUsers />
      <Outlet />
    </Fragment>
  );
}

export default UserHome;

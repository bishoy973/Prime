import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
}

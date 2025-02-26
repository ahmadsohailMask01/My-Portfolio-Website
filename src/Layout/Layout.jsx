import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

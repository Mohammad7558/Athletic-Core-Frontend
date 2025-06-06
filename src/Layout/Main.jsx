import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import CustomCursor from "../components/CustomCursor/CustomCursor";

const Main = () => {
  return (
    <div className="bg-gray-100">
      {/* <CustomCursor/> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

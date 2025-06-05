import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { useLocation } from "react-router";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      window.document.title = "Home - Athletic-Core";
    }
  }, [location.pathname]);


  return (
    <div>
      <CustomCursor/>
      <Slider />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { useLocation } from "react-router";
// import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularSports from "../../components/PopularSports/PopularSports";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      window.document.title = "Home - Athletic-Core";
    }
  }, [location.pathname]);


  return (
    <div>
      {/* <CustomCursor/> */}
      <Slider />
      <FeaturedEvents/>
      <PopularSports/>
      <Testimonials/>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { useLocation } from "react-router";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularSports from "../../components/PopularSports/PopularSports";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";
import SportsBlogSection from "../SportsBlogSection/SportsBlogSection";
import SponsorsPartners from "../SponsorsPartners/SponsorsPartners";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
import ContactSection from "../../components/ContactSection/ContactSection";
import BackToTop from "../../components/BackToTop/BackToTop";
import FAQSection from "../../components/FAQSection/FAQSection";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      window.document.title = "Home - Athletic-Core";
    }
  }, [location.pathname]);


  return (
    <div>
      <Slider />
      <FeaturedEvents/>
      <PopularSports/>
      <Testimonials/>
      <SportsBlogSection/>
      <PricingPlans/>
      <SponsorsPartners/>
      <FAQSection/>
      <ContactSection/>
      <BackToTop/>
    </div>
  );
};

export default Home;

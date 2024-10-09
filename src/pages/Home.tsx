import React from "react";
import About from "./About";
import Service from "./Service";
import Guard from "./Guard";
import Contact from "./Contact";
import HeroSection from "../components/commonComponents/HeroSection";
import TestimonialsSection from "../components/commonComponents/TestimonialsSection";

function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Service/>
      <TestimonialsSection/>
      <Contact/>
      <Guard/>
    </>
  );
}

export default Home;
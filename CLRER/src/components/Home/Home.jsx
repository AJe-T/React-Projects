// import React from "react";

import About from "../../subComponents/About/About";
import Contact from "../../subComponents/Contact/Contact";
import HeroSection from "../../subComponents/HeroSection/HeroSection";
import Host from "../../subComponents/Host/Host";
import OurSpecialties from "../../subComponents/OurSpecialities/OurSpecialties";
import Regions from "../../subComponents/Regions/Regions";
import TopVillas from "../../subComponents/TopVillas/TopVillas";

const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection />
        <TopVillas />
        <Regions />
        <OurSpecialties />
        <Host />
        <About />
        <Contact />
      </article>
    </>
  );
};

export default Home;

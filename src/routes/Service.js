import React from "react";
import Navbar from "../components/Navbar";
import exploreImg from "../assets/exploreImg.avif";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function explorePage() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={exploreImg}
        title="explore"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default explorePage;

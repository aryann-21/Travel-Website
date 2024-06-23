import React, { useRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assets/homeImg.avif";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function HomePage() {
  // Create a ref for the Destination section
  const destinationRef = useRef(null);

  // Function to scroll to the Destination section
  const scrollToDestination = () => {
    if (destinationRef.current) {
      // Use window.scrollTo for smooth scrolling
      window.scrollTo({
        top: destinationRef.current.offsetTop - 125, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Padharo Mahare Desh"
        text="Your Journey, Your Adventure, Your Royal Heritage"
        buttonText="Plan your travel"
        btnClass="show"
        onClick={scrollToDestination} // Pass the scroll function to the Hero component
      />
      {/* Use ref on the Destination wrapper div */}
      <div ref={destinationRef}>
        <Destination />
      </div>
      <Trip />
      <Footer />
    </>
  );
}

export default HomePage;

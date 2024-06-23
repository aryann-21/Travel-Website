import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactUs from "../assets/contactUs.avif";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactUs}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactPage;

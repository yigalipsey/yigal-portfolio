import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import OrbitingItems from "../components/animata/list/orbiting-items";
import ServicesSection from "./components/ServicesSection";
import AboutMe from "./components/AboutMe";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className=" bg-grainy">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutMe />
      <HowItWorks />
      <Footer />
    </div>
  );
}

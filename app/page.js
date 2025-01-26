import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import OrbitingItems from "../components/animata/list/orbiting-items";
import ServicesSection from "./components/ServicesSection";
import AboutMe from "./components/AboutMe";
import HowItWorks from "./components/HowItWorks";
import Testi from "./components/Testi";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className=" bg-grainy">
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutMe />
      <HowItWorks />
      <Footer />
    </div>
  );
}

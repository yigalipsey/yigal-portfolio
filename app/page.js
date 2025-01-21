import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import OrbitingItems3D from "@/components/animata/list/orbiting-items-3-d";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className=" bg-grainy">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

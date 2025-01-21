import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className=" bg-grainy">
      <Navbar />
      <Hero />
      <StackSection />
      <ProjectsSection />
    </div>
  );
}

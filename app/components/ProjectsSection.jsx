"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Smart sales",
    description: "דף נחיתה",
    image: { src: "/images/sm.png", alt: "Smart sales" },
    url: "https://www.smartsalesil.com",
  },
  {
    number: "02",
    title: "Yoad lipsey",
    description: "אתר תדמית",
    image: { src: "/images/yoad.png", alt: "Yoad Lipsey Website" },
    url: "https://smartsalesil.com",
  },
  {
    number: "03",
    title: "TK Group",
    description: "ייבוא רהיטים מסין",
    image: { src: "/images/tkweb.png", alt: "TK Group Website" },
    url: "https://websitetomtk.vercel.app/",
  },
  {
    number: "04",
    title: "Fitness app",
    description: "אפליקציית ווב",
    image: { src: "/images/fittnes.png", alt: "Fitness App" },
    url: "https://www.yigalipsey-fittnes.com/",
  },
  {
    number: "05",
    title: "Fantasy league",
    description: "אפליקציית ווב",
    image: { src: "/images/fantasy.png", alt: "Fantasy League App" },
    url: "https://www.yigalipsey-fantasy.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex   mt-20 relative   flex-col w-full md:w-5/6 items-center justify-center mx-auto min-h-screen  mobile:w-full mobile:p-0"
    >
      <div className=" w-full mb-8 md:mb-0  flex justify-end">
        <h1 className=" rubik-bold mr-8 md:mr-2 font-semibold text-[#ff0088] text-3xl md:text-5xl">
          פרוייקטים <span className=" text-white 3">אחרונים </span>
        </h1>
      </div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          number={project.number}
          title={project.title}
          description={project.description}
          image={project.image}
          url={project.url}
          direction={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </section>
  );
}

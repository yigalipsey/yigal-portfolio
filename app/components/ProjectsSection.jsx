"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Smart sales",
    description: "דף נחיתה",
    image: "/images/sm.png",
    url: "https://www.smartsalesil.com",
  },
  {
    number: "02",
    title: "Yoad lipsey",
    description: "אתר תדמית   ",
    image: "/images/yoad.png",
    url: "https://smartsalesil.com",
  },
  {
    number: "03",
    title: "TK Group",
    description: "ייבוא רהיטים מסין  ",
    image: "/images/tkweb.png",
    url: "https://websitetomtk.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="flex   mt-10 relative z-40  flex-col w-full md:w-4/5 items-center justify-center mx-auto min-h-screen  mobile:w-full mobile:p-0">
      <div className=" w-full  mb-2 flex justify-end">
        <h1 className=" rubik-bold mr-14 md:mr-4 font-semibold text-[#ff0088] text-3xl md:text-5xl">
          פרוייקטים <span className=" text-white 3">נבחרים </span>
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

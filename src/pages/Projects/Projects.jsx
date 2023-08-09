import React from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  document.title = 'Solucion Tech | Contato';

  const data = [
    {
      imgUrl: "https://github.com/SudhansuuRanjan/tesla-nitp-web/raw/main/teslaclublive.png",
      desc: "Official website of Tesla Club using ReactJs, Tailwind and Firebase with animations and dark theme, which also has an admin portal.",
      title: "Solucion Tech Official Website",
      link: "https://tesla-nitp.vercel.app/",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase", "aos"],
      tags: ["#tesla", "#nitp", "#reactjs"],
      id: "p01"
    },

  ];

  return (
    <div className="pt-16">
      <Heading heading="Contato"></Heading>
      <div className="project_main">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

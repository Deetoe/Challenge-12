import React from "react";
import Project from "../components/Project";

const projects = [
  {
    id: 1,
    title: "Collective Movement",
    deployedLink: "https://collectivemovement.netlify.app/",  // Replace with actual deployed URL
    repoLink: "https://github.com/Deetoe/Collective-Movement", // Replace with actual GitHub URL
  },
  // You can add more projects here by copying the structure above
];

const Portfolio = () => (
  <div className="portfolio">
    {projects.map((project) => (
      <Project
        key={project.id}
        title={project.title}
        deployedLink={project.deployedLink}  // Pass the correct prop names
        repoLink={project.repoLink}  // Pass the correct prop names
      />
    ))}
  </div>
);

export default Portfolio;

import React from "react";

const Project = ({ title, deployedLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View App
        </a>{" "}
        |{" "}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
};

export default Project;

import React from "react";
import Project from "./Project";
const ProjectList = ({ projects }) => {
  return (
    <div className="project-list grid grid-cols-1 p-12 md:grid-cols-2 lg:p-16 lg:mx-20  lg:grid-cols-3 gap-20">
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
};

export default ProjectList;

import Link from "next/link";
import React from "react";
import SeeMoreIcon from "./icons/SeeMoreIcon";
import Project from "./Project";
const ProjectList = ({ projects, seeMore }) => {
  return (
    <div className="project-list grid  py-14 grid-cols-1 md:grid-cols-2 md:auto-rows-fr 	lg:grid-cols-3 gap-20">
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
      {seeMore && (
        <Link href="/portfolio">
          <a>
            <div className="see-more text-2xl h-52 md:h-full  lg:text-4xl border border-purple-500 text-purple-800  flex flex-col justify-center items-center bg-purple-100 shadow transition duration-200 rounded transform hover:scale-105 hover:shadow-lg">
              <p className="mb-5">See more</p>
              <SeeMoreIcon />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ProjectList;

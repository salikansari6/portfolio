import Link from "next/link";
import React from "react";
import SeeMoreIcon from "./icons/SeeMoreIcon";
import Project from "./Project";

const ProjectList = ({ projects, seeMore }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
      {seeMore && (
        <Link href="/portfolio">
          <div className="see-more text-2xl h-52 md:h-full  lg:text-4xl border border-purple-500 text-purple-800  flex flex-col justify-center items-center bg-purple-100 shadow transition duration-200 rounded transform hover:scale-105 hover:shadow-lg">
            <p className="mb-5">See more</p>
            <SeeMoreIcon />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProjectList;

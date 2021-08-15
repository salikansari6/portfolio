import React from "react";
import ProjectList from "./ProjectList";

const MyWork = ({ projects }) => {
  return (
    <div className="my-work mt-12 px-8 lg:px-0">
      <div className="center-wrap flex justify-center">
        <div className="text-xl lg:text-4xl mb-2 text-center text-purple-700 font-bold bg-purple-50 inline-block p-3 rounded shadow">
          My Work
        </div>
      </div>
      <ProjectList projects={projects} seeMore={true} />
    </div>
  );
};

export default MyWork;

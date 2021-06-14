import React from "react";
import Image from "next/image";

const Project = ({ name, images, description, sourceCode, demo }) => {
  return (
    <div className="project shadow rounded hover:shadow-lg transition duration-200 transform hover:scale-105 ">
      <div className="project-image shadow-inner h-52 w-full relative">
        <Image
          src={`/images/${images[0]}.png`}
          layout="fill"
          className="rounded-t"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="project-details">
        <div className="project-name p-5 bg-yellow-50 text-2xl text-center font-bold">
          {name}
        </div>
        <div className="project-description p-5 text-lg h-50 shadow-inner">
          <p className="line-clamp-3">{description}</p>
        </div>
        <div className="project-source flex justify-around py-5 shadow-inner">
          <a
            href={sourceCode}
            target="blank"
            rel="noreferrer"
            className="source-code bg-red-400 p-2 w-1/3 text-center text-white font-bold rounded"
          >
            Source Code <span className="font-black">&lt;/&gt;</span>
          </a>
          <a
            href={demo}
            target="blank"
            rel="noreferrer"
            className="bg-red-400 p-2 text-white w-1/3 text-center font-bold rounded"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

import React from "react";
import Image from "next/image";
import Link from "next/link";
const Project = ({
  name,
  images,
  description,
  sourceCode,
  demo,
  stack,
  slug,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="project shadow rounded hover:shadow-lg transition duration-200 transform hover:scale-105 relative"
    >
      <Link href={`/portfolio/${slug}`}>
        <a>
          <div className="project-image shadow-inner h-52 w-full relative rounded-t">
            <Image
              src={`/images/${images[0]}.png`}
              layout="fill"
              className="rounded-t"
              objectFit="cover"
              objectPosition="top"
            />
            <div className="bg-gradient-to-t rounded-t from-transparent via-transparent to-gray-900 absolute inset-0 w-full h-full opacity-50 "></div>
          </div>
          <div className="project-details">
            <div className="project-name p-5 bg-purple-50 text-2xl text-center font-bold">
              {name}
            </div>
            <div className="project-description p-5 text-md lg:text-lg h-50 shadow-inner">
              <p className="line-clamp-3">{description}</p>
            </div>
          </div>
        </a>
      </Link>
      <div className="project-source flex justify-around py-5 shadow-inner">
        <a
          href={sourceCode}
          target="blank"
          rel="noreferrer"
          className="source-code bg-red-400 shadow w-1/3 p-2  flex items-center justify-center text-center text-white font-bold rounded"
        >
          Source Code <span className="font-black">&lt;/&gt;</span>
        </a>
        <a
          href={demo}
          target="blank"
          rel="noreferrer"
          className="bg-red-400  text-white shadow w-1/3 p-2 flex items-center justify-center text-center font-bold rounded"
        >
          Demo
        </a>
      </div>
      <div className="stack flex justify-end absolute -top-10 right-0">
        {stack.map((tech) => {
          return (
            <div
              className="h-14 w-14 lg:h-16 lg:w-16 p-3 shadow -ml-3 bg-purple-50 opacity-90 rounded-full"
              key={tech}
            >
              <Image
                src={`https://raw.githubusercontent.com/salikansari6/githubProfileReadmeGenerator/main/icons/${tech}.svg`}
                height={50}
                width={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

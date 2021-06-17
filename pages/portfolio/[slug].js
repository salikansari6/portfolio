import React from "react";
import path from "path";
import fs from "fs/promises";
import Image from "next/image";
import ImageGallery from "../../components/ImageGallery";

const ProjectPage = ({ project }) => {
  return (
    <main className="px-5 py-5 md:px-16 lg:px-24 xl:px-48 2xl:px-52 lg:pt-16">
      <div className="center-wrap flex justify-center">
        <div className="inline-block mx-auto p-3 px-10 rounded shadow project-name bg-purple-100  text-2xl text-center mb-5 font-bold lg:text-6xl">
          {project.name}
        </div>
      </div>
      <ImageGallery images={project.images} />
      <div className="project-description mt-5 ">
        <h1 className="text-lg  bg-purple-50 inline-block p-1 lg:p-3 rounded shadow font-bold  lg:text-4xl">
          Description :
        </h1>
        <div className="lg:grid lg:grid-cols-12">
          <p className="bg-purple-50 col-start-1 col-span-10 leading-relaxed lg:text-2xl rounded shadow p-5 mt-5">
            {project.description}
          </p>
        </div>
      </div>
      <div className="tech-stack-used mt-5">
        <h1 className="text-lg  bg-purple-50 inline-block p-1 lg:p-3 rounded shadow font-bold  lg:text-4xl">
          Technology &#38; Tools Used:
        </h1>
        <ul className="list-inside p-5 list-disc text-2xl lg:flex">
          {project.formattedStackNames.map((tech) => {
            return (
              <li className="flex items-center mt-3 lg:mr-5">
                <div className="h-14 w-14 lg:h-14 lg:w-14 p-2 mr-3 shadow  bg-purple-50  rounded-full">
                  <Image
                    src={`https://raw.githubusercontent.com/salikansari6/githubProfileReadmeGenerator/main/icons/${tech.toLowerCase()}.svg`}
                    // layout="fill"
                    height={50}
                    width={50}
                  />
                </div>
                <p>{tech}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProjectPage;

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "db", "projects.json");
  const projectsJSON = await fs.readFile(filePath);
  const projects = JSON.parse(projectsJSON);
  const project = projects.find(
    (project) => project.slug === context.params.slug
  );
  return {
    props: {
      project: project,
    },
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "db", "projects.json");
  const projectsJSON = await fs.readFile(filePath);
  const projects = JSON.parse(projectsJSON);
  return {
    fallback: "blocking",

    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
  };
}

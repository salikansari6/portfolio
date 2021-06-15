import React from "react";
import path from "path";
import fs from "fs/promises";
import ImageGallery from "../../components/ImageGallery";

const ProjectPage = ({ project }) => {
  return (
    <main className="px-5 md:px-20 lg:px-48 xl:px-52 xl:pt-10">
      <ImageGallery images={project.images} />
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

import React from "react";
import fs from "fs/promises";
import path from "path";
import ProjectList from "../../components/ProjectList";

const Portfolio = ({ projects }) => {
  return (
    <div className="portfolio">
      <h1 className="text-2xl lg:text-4xl font-medium text-center">
        Here's some of my work
      </h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Portfolio;

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "db", "projects.json");
  const projectsJSON = await fs.readFile(filePath);
  const projects = JSON.parse(projectsJSON);
  return {
    props: {
      projects: projects,
    },
  };
}

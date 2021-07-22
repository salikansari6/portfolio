import Head from "next/head";
import MyWork from "../components/MyWork";
import Skills from "../components/Skills";
import path from "path";
import fs from "fs/promises";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Salik Ansari - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5 lg:py-20 lg:pt-0  lg:px-20 xl:px-38 2xl:px-64">
        <div className="hero flex flex-col items-center  lg:flex-row justify-between lg:items-center">
          <div
            data-aos="fade-right"
            className="intro text-center w-5/6 lg:text-left lg:w-1/2 lg:mt-32"
          >
            <div className="bg-purple-50 rounded shadow p-2 lg:bg-transparent lg:shadow-none">
              <p className="name text-2xl  md:text-4xl lg:text-7xl">
                I am Salik Ansari
              </p>
              <p className="work-title text-xl md:text-2xl lg:text-3xl italic font-thin ">
                A Full-Stack Developer
              </p>
            </div>
            <p className="bio bg-purple-50  rounded-md shadow  text-md  p-5 md:text-xl text-justify mt-8">
              I am a Final Year Computer Engineering Student and a Software
              Engineer. I have a passion for building and coding User Interfaces
              for the Web and Mobile. I have had a knack for computers and tech
              since childhood. I am fluent in JavaScript and ReactJS. I also
              keep an extra eye on the performance of applications and always
              try to look for optimizations as much as possible. I love to
              implement UI animations across different platforms to provide a
              great User Exprience
            </p>
          </div>
          <img
            data-aos="fade-left"
            src="/images/hero_image.png"
            className="h-56  md:h-72 order-first lg:order-last  lg:w-1/3 lg:h-2/3 opacity-70 filter"
          />
        </div>
        <div className="spacer h-0 lg:h-36"></div>
        <MyWork projects={projects.slice(0, 2)} />
        <Skills />
      </main>
    </div>
  );
}

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

'use client'
import React, { useEffect } from "react";
// import AOS from "aos";

const Skills = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 2000,
  //     });
  //   }, []);

  const frontendSkills = ["ReactJS", "NextJS", "JavaScript", "SASS", "CSS", "Rollup", "Storybook"];

  return (
    <div className="skills px-8 py-16 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          data-aos="fade-up"
          className="bg-dark-light border border-dark-lighter hover:border-primary rounded-xl p-6 transition-colors"
        >
          <h3 className="text-lg font-semibold text-primary mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-dark text-primary-light">React</span>
            <span className="badge bg-dark text-primary-light">Next.js</span>
            <span className="badge bg-dark text-primary-light">TypeScript</span>
            <span className="badge bg-dark text-primary-light">Tailwind</span>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          className="bg-dark-light border border-dark-lighter hover:border-primary rounded-xl p-6 transition-colors"
        >
          <h3 className="text-lg font-semibold text-primary mb-4">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-dark text-primary-light">Node.js</span>
            <span className="badge bg-dark text-primary-light">Express</span>
            <span className="badge bg-dark text-primary-light">GraphQL</span>
            <span className="badge bg-dark text-primary-light">MongoDB</span>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          className="bg-dark-light border border-dark-lighter hover:border-primary rounded-xl p-6 transition-colors"
        >
          <h3 className="text-lg font-semibold text-primary mb-4">Mobile</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-dark text-primary-light">React Native</span>
            <span className="badge bg-dark text-primary-light">Android</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

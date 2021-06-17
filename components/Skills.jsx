import React, { useEffect } from "react";
// import AOS from "aos";

const Skills = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 2000,
  //     });
  //   }, []);

  return (
    <div className="skills p-10 md:p-20 lg:p-0">
      <div className="center-wrap flex justify-center">
        <div className="text-xl lg:text-4xl text-center text-purple-700 font-bold bg-purple-50 inline-block p-3 rounded shadow">
          Technology and Tools I've worked with :
        </div>
      </div>
      <div className="skills-wrapper grid lg:grid-cols-3 p-2 lg:p-5  gap-10">
        <div
          data-aos="fade-up"
          className="front-end py-3  bg-purple-300 shadow  lg:p-5 rounded  grid place-items-center content-start "
        >
          <div className="text-lg leading-relaxed bg-purple-600 text-white inline-block font-bold p-2 rounded">
            Front End :{" "}
          </div>
          <div className="badges-wrappper rounded bg-white p-2 shadow-inner m-2 text-center">
            <span className="badge bg-blue-500 text-white flex items-center">
              ReactJS
            </span>
            <span className=" badge bg-yellow-400 ">JavaScript</span>
            <span className="badge bg-pink-500 text-white">SASS</span>
            <span className="badge bg-blue-300">CSS</span>
            <span className="badge bg-red-500 text-white">Rollup</span>
            <span className="badge bg-pink-300">Storybook</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="back-end py-3  bg-purple-300 shadow  lg:p-5 rounded  grid place-items-center content-start"
        >
          <div className="text-lg leading-relaxed bg-purple-600 text-white inline-block font-bold p-2 rounded">
            Back End :{" "}
          </div>
          <div className="badges-wrappper rounded bg-white p-2 shadow-inner m-2 text-center">
            <span className="badge bg-green-700 text-white">NodeJS</span>
            <span className=" badge bg-black text-white ">Express</span>
            <span className="badge bg-pink-500 text-white">GraphQL</span>
            <span className="badge bg-green-300">MongoDB</span>
            <span className="badge bg-yellow-600 text-white">MySQL</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="mobile py-3  bg-purple-300 shadow  lg:p-5 rounded  grid place-items-center content-start"
        >
          <div className="text-lg leading-relaxed bg-purple-600 text-white inline-block font-bold p-2 rounded">
            Mobile :{" "}
          </div>
          <div className="badges-wrappper rounded bg-white p-2 shadow-inner m-2 text-center">
            <span className="badge bg-blue-700 text-white">React Native</span>
            <span className=" badge bg-green-600 text-white">Android</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

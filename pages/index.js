import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salik Ansari - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-20 lg:pt-0">
        <div className="h-screen lg:h-screen hero flex flex-col items-center  lg:flex-row justify-center lg:items-start">
          <div className="intro text-center w-5/6 lg:text-left lg:w-1/3 lg:mt-32">
            <p className="name text-4xl lg:text-7xl">I am Salik Ansari</p>
            <p className="work-title text-2xl lg:text-3xl italic font-thin ">
              A Full-Stack Developer
            </p>
            <p className="bio bg-yellow-50 rounded-md shadow-lg   p-5 text-xl text-justify mt-8">
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
            src="/images/hero_image.png"
            className="h-1/2  order-first lg:order-last  lg:w-1/4 lg:h-2/3"
          />
        </div>
      </main>
    </div>
  );
}

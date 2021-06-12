import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salik Ansari - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen hero flex justify-center items-center">
          <div className="intro text-center">
            <p className="name text-7xl">I am Salik Ansari</p>
            <p className="work-title text-4xl">A Full-Stack Developer</p>
          </div>
          <img src="/images/hero_image.png" width="400px" />
        </div>
      </main>
    </div>
  );
}

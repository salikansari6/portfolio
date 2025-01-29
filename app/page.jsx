import Image from 'next/image';
import Experience from '../components/Experience';
import MyWork from '../components/MyWork';
import Skills from '../components/Skills';
import { getProjects } from '../lib/projects';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-6xl font-bold text-zinc-100 inline-block">
                Hi, I am <span className="text-primary">Salik</span>
              </h2>
            </div>

            <h3 className="text-2xl lg:text-3xl text-zinc-100">
              Software Engineer specializing in <span className="text-primary">Frontend</span> along
              with full-stack capabilities
            </h3>

            <p className="text-lg text-zinc-400 max-w-xl">
              An enthusiastic and passionate coder with an eye for detail and a focus to produce
              quality work. Can wear multiple hats and be tech agnostic, focused on delivering and
              solving problems using any tech instead of romanticizing selective tech stacks.
            </p>

            <div className="flex space-x-4">
              <a
                href="#skills"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-dark font-medium transition-colors"
              >
                View My Skills
                <svg
                  className="ml-2 w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex space-x-6 text-zinc-400">
              <a
                href="https://www.linkedin.com/in/salikansari6/"
                className="hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/salikansari6"
                className="hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden mx-auto">
            <Image
              src="/images/salik_portfolio_hero.jpeg"
              alt="Salik's Portfolio Image"
              fill
              className="object-cover transition-transform hover:scale-105 duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full py-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            My <span className="text-primary">Experience</span>
          </h2>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-48 flex items-center px-6 lg:px-12 bg-dark-light/50">
        <div className="max-w-7xl mx-auto w-full py-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            My <span className="text-primary">Skills</span>
          </h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full py-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            My <span className="text-primary">Projects</span>
          </h2>
          <MyWork projects={projects} />
        </div>
      </section>
    </main>
  );
}

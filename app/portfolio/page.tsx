import ProjectList from '../../components/ProjectList';
import { getProjects } from '../../lib/projects';

export const metadata = {
  title: 'Portfolio - Salik Ansari',
  description: 'View my portfolio of web development projects',
};

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-100">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Here are some of my favorite projects I've worked on. Each project is unique and
            demonstrates different skills and technologies.
          </p>
        </div>
        <ProjectList projects={projects} seeMore={false} />
      </div>
    </div>
  );
}

import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ImageGallery from '../../../components/ImageGallery';
import { getProject, getProjects } from '../../../lib/projects';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }
  return {
    title: `${project.name} - Portfolio Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-100 mb-4">Project Not Found</h1>
          <p className="text-zinc-400 mb-8">The project you are looking for does not exist.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-dark font-medium transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">{project.name}</h1>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {project.formattedStackNames.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-dark/50 text-primary-light rounded-full border border-dark-lighter"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <FaGithub className="text-xl" />
              Source Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-dark transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <ImageGallery images={project.images} />
        </div>

        {/* Project Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About the Project</h2>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-dark-lighter">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-zinc-400 hover:text-primary transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

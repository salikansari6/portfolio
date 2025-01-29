import { Project as ProjectType } from '@/types';
import Link from 'next/link';
import SeeMoreIcon from './icons/SeeMoreIcon';
import Project from './Project';
const ProjectList = ({ projects, seeMore }: { projects: ProjectType[]; seeMore: boolean }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
      {seeMore && (
        <Link href="/portfolio">
          <div className="see-more text-2xl h-52 md:h-full lg:text-4xl  flex flex-col justify-center items-center bg-dark-light backdrop-blur-sm shadow transition duration-200 rounded-lg border border-transparent hover:shadow-lg hover:border-primary">
            <p className="mb-5">See more</p>
            <SeeMoreIcon />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProjectList;

import { Project } from '@/types';
import ProjectList from './ProjectList';

const MyWork = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="my-work mt-12 px-8 lg:px-0">
      <ProjectList projects={projects.slice(0, 3)} seeMore={true} />
    </div>
  );
};

export default MyWork;

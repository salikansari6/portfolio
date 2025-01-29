'use client';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer II',
      company: 'Procedure',
      location: 'Mumbai, India',
      date: 'May 2023 - Present',
      techStack: [
        'React',
        'TypeScript',
        'Python',
        'FastAPI',
        'MongoDB',
        'Docker',
        'Motor',
        'Jest',
        'React Testing Library',
      ],
      description: (
        <ul className="list-disc p-4">
          <li>
            Developing an intelligent scheduling platform for high schools in the US with
            sophisticated drag-and-drop interface, enabling intuitive course and section management
            for administrators using React"
          </li>
          <li>
            Improved app performance by using React Dev Tools to treat for bottle-necks occurring in
            components
          </li>
          <li>
            Engineered a complex scheduling interface that enables administrators to visually assign
            teaching patterns across multiple days, handling real-time conflict validation,
            co-teaching assignments, and pattern completion verification while maintaining strict
            business logic for period selection and teacher availability
          </li>
          <li>
            Implemented an optimized tiling algorithm using a greedy placement strategy to visualize
            complex academic scheduling constraints, handling multiple days, terms, and staff
            availability patterns
          </li>
          <li>
            Sole contributor in designing and implementing a robust MongoDB transaction management
            solution by configuring local MongoDB replica set in Docker for consistent local and CI
            testing environments, integrating Motor for asynchronous MongoDB operations, and
            developing comprehensive unit tests to validate transaction integrity and error handling
          </li>
          <li>
            Added a DB level schema validation in MongoDB to ensure data integrity and prevent
            invalid data from being inserted
          </li>
        </ul>
      ),
      icon: 'work',
    },
    {
      title: 'Software Development Engineer I',
      company: 'Procedure',
      location: 'Mumbai, India',
      date: 'Jan 2022 - May 2023',
      techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'CSS', 'TailwindCSS'],
      description: (
        <ul className="list-disc p-4">
          <li>
            Worked with one of the largest fin-tech companies in India on multiple apps (in domain
            on Lending and Credit) as a Front End Engineer
          </li>
          <li>
            Bumped Lighthouse score from 30 to 70+ for Mobile Devices by running audits consistently
            and incorporating feedback into code by improving initial render and first paint for a
            Mini App (React.js/TypeScript)
          </li>
          <li>
            Made complex animations in React single-handedly from scratch with no external libraries
            for a Credit Score Tracker Mini App for Paytm.
          </li>
          <li>
            Used Sentry to aggregate issues for the front-end and shipped specific fixes for
            different mobile platforms
          </li>
          <li>
            Consulted with one of the largest health-tech in Middle East to significantly improve
            their web portal's Lighthouse and GTMetrix score and suggested strategies to bring
            GTMetrix score from D to A+
          </li>
        </ul>
      ),
      icon: 'work',
    },
    {
      title: 'Frontend Web Developer',
      company: 'Incepthink',
      location: 'Mumbai, India',
      date: 'Oct 2021 - Dec 2021',
      techStack: ['React', 'TypeScript', 'Framer Motion', 'Next.js'],
      description: (
        <ul className="list-disc p-4">
          <li>
            Delivering pixel-perfect, responsive and animation driven blockchain DApp NFT
            marketplace websites using React.js
          </li>
          <li>
            Used Framer Motion animation library for React to achieve complex animations specified
            by client
          </li>
          <li>
            Suggested and implemented to replace multiple MP4 files with minimal movement in a
            website with animated PNG images using Framer motion which reduced the static assets
            size by a significant amount
          </li>
        </ul>
      ),
      icon: 'work',
    },
  ];

  return (
    <VerticalTimeline layout="1-column-left" lineColor="rgba(148, 163, 184, 0.2)">
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.9))',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(59, 130, 246, 0.2)' }}
          date={exp.date}
          dateClassName="text-zinc-400"
          iconStyle={{
            background: exp.icon === 'work' ? '#3b82f6' : '#8b5cf6',
            color: '#020617',
          }}
          icon={exp.icon === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
        >
          <h3 className="text-xl font-bold text-zinc-100">{exp.title}</h3>
          <h4 className="text-lg text-primary">{exp.company}</h4>
          <p className="text-zinc-400 text-sm">{exp.location}</p>
          {exp.techStack && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-slate-800 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p className="text-zinc-400 mt-2">{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Experience;

'use client';
import React from 'react';

const Skills = () => {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'Docker',
    'Jest',
    'React Testing Library',
    'Tailwind',
    'Node.js',
    'Express',
    'GraphQL',
    'MongoDB',
    'React Native',
    'Android',
  ];

  return (
    <div className="skills px-8 py-16 lg:px-0">
      <div className="flex flex-wrap justify-start gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="badge bg-dark text-primary-light px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-dark transition-colors duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

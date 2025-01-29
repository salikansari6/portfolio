import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project as ProjectType } from '../types';

const Project: React.FC<ProjectType> = ({
  name,
  images,
  description,
  sourceCode,
  demo,
  stack,
  slug,
}) => {
  return (
    <Link href={`/portfolio/${slug}`}>
      <div className="group bg-gradient-card backdrop-blur-sm border border-dark-lighter/50 hover:border-primary rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={`/images/${images[0]}`}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition-transform duration-500"
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light/90 to-transparent" />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-zinc-100 mb-3">{name}</h3>
          <p className="text-zinc-400 mb-6 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-dark/50 text-primary-light rounded-full border border-dark-lighter"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={sourceCode}
              className="flex-1 py-3 px-4 text-center font-medium border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              View Code
            </a>
            <a
              href={demo}
              className="flex-1 py-3 px-4 text-center font-medium bg-primary hover:bg-primary-dark text-dark rounded-lg transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;

import fs from 'fs/promises';
import path from 'path';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'db', 'projects.json');
  const projectsJSON = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(projectsJSON);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

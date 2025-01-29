import fs from 'fs/promises'
import path from 'path'

export async function getProjects() {
  const filePath = path.join(process.cwd(), "db", "projects.json")
  const projectsJSON = await fs.readFile(filePath)
  return JSON.parse(projectsJSON)
}

export async function getProject(slug) {
  const projects = await getProjects()
  return projects.find(project => project.slug === slug)
} 
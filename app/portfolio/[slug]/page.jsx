import { getProject, getProjects } from "../../../lib/projects"
import ImageGallery from "../../../components/ImageGallery"
import Image from "next/image"

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug)
  return {
    title: `${project.name} - Portfolio Project`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug)
  
  return (
    <main className="px-5 py-5 md:px-16 lg:px-24 lg:mt-24 xl:px-48 2xl:px-52 lg:py-0">
      {/* Your existing project page JSX */}
    </main>
  )
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
} 
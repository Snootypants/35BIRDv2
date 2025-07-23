import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projects.json'

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  status: string
  splashImage: string
  iconImage: string
  slug: string
  folder: string
  links: {
    live: string | null
    repo: string | null
  }
  features: string[]
  theme: string
  priority: number
  lastUpdate?: string
}

function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Sort projects by priority
    const sortedProjects = [...projectsData].sort((a, b) => a.priority - b.priority)
    setProjects(sortedProjects)
  }, [])

  return (
    <motion.div 
      className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 pt-20" 
      role="region" 
      aria-label="Project showcase"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectGrid
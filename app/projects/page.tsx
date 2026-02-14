'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio',
    description: 'A beautiful personal portfolio website built with modern web technologies',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/luvisdaisy/luvisdaisy.github.io',
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'task-manager',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    tags: ['React', 'Node.js', 'Socket.io'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Weather forecasting application with interactive maps',
    tags: ['Vue.js', 'OpenWeather API', 'Leaflet'],
    githubUrl: 'https://github.com',
  },
  {
    slug: 'chat-application',
    title: 'Real-time Chat App',
    description: 'Modern chat application with group support and file sharing',
    tags: ['React', 'Firebase', 'Redux'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'blog-cms',
    title: 'Blog CMS',
    description: 'Content management system for blogs with markdown support',
    tags: ['Next.js', 'Markdown', 'Prisma'],
    githubUrl: 'https://github.com',
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col flex-1 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Some of the projects I&apos;ve worked on
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

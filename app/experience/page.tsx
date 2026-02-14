'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface Experience {
  id: string
  type: 'education' | 'work'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string
  details: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    type: 'education',
    title: 'Master of Information Technology',
    organization: 'Monash University',
    location: 'Melbourne, Australia',
    startDate: '2023',
    endDate: '2024',
    description: 'Specialized in software development and human-centered computing',
    details: `## Monash University

### Master of Information Technology
- **Duration**: 2023 - 2024
- **GPA**: High Distinction

### Key Subjects:
- Advanced Software Engineering
- Human-Centered Computing
- Distributed Systems
- Artificial Intelligence

### Activities:
- Member of Student Technology Association
- Volunteer at Melbourne Tech Events`,
    tags: ['IT', 'Software Development', 'Melbourne'],
  },
  {
    id: '2',
    type: 'education',
    title: 'Bachelor of Software Engineering',
    organization: 'Henan University',
    location: 'Henan, China',
    startDate: '2019',
    endDate: '2023',
    description: 'Focus on web development and software engineering principles',
    details: `## Henan University

### Bachelor of Software Engineering
- **Duration**: 2019 - 2023
- **GPA**: 3.8/4.0

### Key Subjects:
- Data Structures & Algorithms
- Database Systems
- Web Development
- Computer Networks

### Achievements:
- First Prize in National Software Competition
- Dean's List (2020-2022)`,
    tags: ['Software Engineering', 'Web Development', 'China'],
  },
  {
    id: '3',
    type: 'work',
    title: 'Frontend Developer Intern',
    organization: 'Tech Company',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    description: 'Building modern web applications with React and TypeScript',
    details: `## Frontend Developer Intern

### Company: Tech Company
- **Duration**: 2024 - Present
- **Type**: Remote

### Responsibilities:
- Developed responsive web applications using React
- Collaborated with design team for UI/UX improvements
- Participated in code reviews and agile ceremonies

### Tech Stack:
- React, TypeScript
- Next.js, Tailwind CSS
- Git, GitHub Actions`,
    tags: ['React', 'TypeScript', 'Next.js'],
  },
]

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{exp.title}</CardTitle>
              <CardDescription className="text-base mt-1">
                {exp.organization}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.startDate} - {exp.endDate}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{exp.title}</DialogTitle>
            <DialogDescription>{exp.organization}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 prose prose-sm dark:prose-invert">
            {exp.details.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h3 key={i} className="text-lg font-semibold mt-4">{line.replace('## ', '')}</h3>
              }
              if (line.startsWith('### ')) {
                return <h4 key={i} className="text-md font-medium mt-3">{line.replace('### ', '')}</h4>
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
              }
              if (line.trim()) {
                return <p key={i} className="my-2">{line}</p>
              }
              return null
            })}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export default function ExperiencePage() {
  const educationExperiences = experiences.filter(exp => exp.type === 'education')
  const workExperiences = experiences.filter(exp => exp.type === 'work')

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col flex-1 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-muted-foreground">
          My educational background and work experience
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {/* Left Column - Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Education</h2>
          </motion.div>

          <div className="space-y-4">
            {educationExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Right Column - Work */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-accent/10">
              <Briefcase className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold">Work</h2>
          </motion.div>

          <div className="space-y-4">
            {workExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Mountain, Film } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface Interest {
  id: string
  icon: React.ElementType
  title: string
  description: string
  details: string
  tags: string[]
}

const interests: Interest[] = [
  {
    id: 'cs2',
    icon: Gamepad2,
    title: 'CS2',
    description: 'Competitive FPS gaming',
    details: `## Counter-Strike 2

I&apos;ve been playing CS since 2018, and CS2 has been an exciting evolution of the classic formula. The game combines strategic teamwork with mechanical skill in a way that keeps me coming back.

### Stats
- **Hours Played**: 2000+
- **Favorite Maps**: Mirage, Inferno, Nuke
- **Peak Rank**: Global Elite

### What I Love
- Team coordination and communication
- The skill ceiling and room for improvement
- Community and esports scene`,
    tags: ['FPS', 'Competitive', 'Team Gaming'],
  },
  {
    id: 'hiking',
    icon: Mountain,
    title: 'Outdoor Hiking',
    description: 'Exploring nature trails and mountains',
    details: `## Hiking & Outdoor Adventures

There&apos;s something magical about being in nature, away from the screens and city noise. Hiking has become my way to disconnect and recharge.

### Favorite Trails
- **Mount Huangshan** - The Yellow Mountains
- **Great Ocean Road** - Victoria, Australia
- **Blue Mountains** - Sydney, Australia

### Gear
- Osprey Backpack
- Merrell Hiking Boots
- Garmin GPS Watch`,
    tags: ['Nature', 'Fitness', 'Adventure'],
  },
  {
    id: 'movies',
    icon: Film,
    title: 'Movies',
    description: 'Film enthusiast and casual cinephile',
    details: `## Cinema & Film

I love watching movies across all genres, from blockbusters to indie films. Cinema is a form of art that tells stories in ways nothing else can.

### Favorite Genres
- Sci-Fi & Fantasy
- Thriller & Mystery
- Documentary

### Recent Favorites
- Dune: Part Two
- Oppenheimer
- Everything Everywhere All at Once
- The Batman

### Watching
- 200+ movies per year
- Favorite: Interstellar`,
    tags: ['Cinema', 'Film', 'Entertainment'],
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col flex-1 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          I&apos;m a frontend developer with a passion for building beautiful and functional web applications.
          When I&apos;m not coding, you can find me gaming, hiking, or watching movies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interests.map((interest, index) => (
          <InterestCard key={interest.id} interest={interest} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>More About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I started my journey in software development during university, where I discovered
              my passion for creating user interfaces that are both beautiful and functional.
            </p>
            <p>
              I believe in continuous learning and staying up-to-date with the latest web
              technologies. Currently, I&apos;m focused on React, TypeScript, and modern CSS.
            </p>
            <p>
              When I&apos;m not working on projects, I enjoy contributing to open-source,
              writing technical blogs, and participating in developer communities.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

function InterestCard({ interest, index }: { interest: Interest; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{interest.title}</CardTitle>
              </div>
              <CardDescription className="mt-2">{interest.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interest.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <interest.icon className="h-5 w-5 text-primary" />
              </div>
              {interest.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {interest.details.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h3 key={i} className="text-lg font-semibold">{line.replace('## ', '')}</h3>
              }
              if (line.startsWith('### ')) {
                return <h4 key={i} className="text-md font-medium mt-3">{line.replace('### ', '')}</h4>
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
              }
              if (line.startsWith('**')) {
                return <p key={i} className="font-medium">{line.replace(/\*\*/g, '')}</p>
              }
              if (line.trim()) {
                return <p key={i}>{line}</p>
              }
              return null
            })}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

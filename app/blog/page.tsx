'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface BlogPost {
  slug: string
  title: string
  description: string
  category: 'tech' | 'life'
  tags: string[]
  date: string
  readingTime: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    description: 'A comprehensive guide to building modern web applications with Next.js 14 and App Router',
    category: 'tech',
    tags: ['Next.js', 'React', 'TypeScript'],
    date: '2024-01-15',
    readingTime: '8 min read',
  },
  {
    slug: 'tailwind-css-tips',
    title: '10 Tailwind CSS Tips to Improve Your Workflow',
    description: 'Learn tips and tricks to write cleaner and more maintainable Tailwind CSS code',
    category: 'tech',
    tags: ['Tailwind CSS', 'CSS', 'Frontend'],
    date: '2024-01-10',
    readingTime: '5 min read',
  },
  {
    slug: 'hiking-trip-2024',
    title: 'My Hiking Trip to Mount Huangshan',
    description: 'An unforgettable journey to the Yellow Mountains in China',
    category: 'life',
    tags: ['Hiking', 'Travel', 'China'],
    date: '2024-01-05',
    readingTime: '6 min read',
  },
  {
    slug: 'react-hooks-guide',
    title: 'A Complete Guide to React Hooks',
    description: 'Master React Hooks from useState to useReducer with practical examples',
    category: 'tech',
    tags: ['React', 'Hooks', 'JavaScript'],
    date: '2023-12-20',
    readingTime: '10 min read',
  },
  {
    slug: 'favorite-movies-2023',
    title: 'My Favorite Movies of 2023',
    description: 'A回顾2023年我最喜欢的电影',
    category: 'life',
    tags: ['Movies', 'Cinema', '2023'],
    date: '2023-12-15',
    readingTime: '4 min read',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tech' | 'life'>('all')

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col flex-1 min-h-0 max-w-4xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on technology, life, and everything in between
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-2 mb-8"
      >
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveCategory('all')}
        >
          All
        </Button>
        <Button
          variant={activeCategory === 'tech' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveCategory('tech')}
        >
          Tech
        </Button>
        <Button
          variant={activeCategory === 'life' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveCategory('life')}
        >
          Life
        </Button>
      </motion.div>

      {/* Blog Posts */}
      <div className="grid gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={post.category === 'tech' ? 'default' : 'secondary'}>
                          {post.category === 'tech' ? 'Tech' : 'Life'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {post.description}
                      </CardDescription>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readingTime}
                    </div>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found in this category.</p>
        </div>
      )}
    </div>
  )
}

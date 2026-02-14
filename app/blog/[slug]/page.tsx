import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// This would typically come from markdown files
const blogPosts: Record<string, {
  title: string
  description: string
  category: 'tech' | 'life'
  tags: string[]
  date: string
  readingTime: string
  content: string
  prev?: string
  next?: string
}> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js 14',
    description: 'A comprehensive guide to building modern web applications with Next.js 14 and App Router',
    category: 'tech',
    tags: ['Next.js', 'React', 'TypeScript'],
    date: '2024-01-15',
    readingTime: '8 min read',
    content: `
## Introduction

Next.js 14 brings exciting new features and improvements to the React ecosystem. In this guide, we&apos;ll explore the App Router, Server Components, and more.

## What is Next.js?

Next.js is a React framework that enables features like server-side rendering and static site generation.

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Key Features

1. **App Router** - The new file-system based router
2. **Server Components** - Render components on the server
3. **Improved Performance** - Faster builds and smaller bundles

## Conclusion

Next.js 14 is a powerful framework for building modern web applications. Start exploring today!
    `,
    next: 'tailwind-css-tips',
  },
  'tailwind-css-tips': {
    title: '10 Tailwind CSS Tips to Improve Your Workflow',
    description: 'Learn tips and tricks to write cleaner and more maintainable Tailwind CSS code',
    category: 'tech',
    tags: ['Tailwind CSS', 'CSS', 'Frontend'],
    date: '2024-01-10',
    readingTime: '5 min read',
    content: `
## Introduction

Tailwind CSS is amazing, but here are some tips to make your experience even better.

## Tip 1: Use @apply

Extract reusable styles into utility classes.

## Tip 2: Use config

Customize your tailwind.config.js for consistency.

## Tip 3: Use dark mode

Leverage the dark: variant for theme switching.

... more tips coming soon!
    `,
    prev: 'getting-started-with-nextjs',
    next: 'hiking-trip-2024',
  },
  'hiking-trip-2024': {
    title: 'My Hiking Trip to Mount Huangshan',
    description: 'An unforgettable journey to the Yellow Mountains in China',
    category: 'life',
    tags: ['Hiking', 'Travel', 'China'],
    date: '2024-01-05',
    readingTime: '6 min read',
    content: `
## The Journey Begins

Mount Huangshan, also known as the Yellow Mountains, has been a dream destination for me for years.

## Day 1: Arrival and First Views

We arrived early in the morning and took the cable car up to the mountains...

## Day 2: Sunrise at the Peak

Waking up at 4 AM was worth it for this view...

## Day 3: The Famous Trails

We hiked through the famous cloud-formed peaks...

## Final Thoughts

This trip reminded me why I love hiking so much.
    `,
    prev: 'tailwind-css-tips',
    next: 'react-hooks-guide',
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog">
          <Button variant="link">← Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              <Badge variant={post.category === 'tech' ? 'default' : 'secondary'}>
                {post.category === 'tech' ? 'Tech' : 'Life'}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <p className="text-xl text-muted-foreground mb-4">{post.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">{line.replace('## ', '')}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-medium mt-6 mb-3">{line.replace('### ', '')}</h3>
              }
              if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                return <li key={i} className="ml-6 mb-2">{line.replace(/^\d\. /, '')}</li>
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-6 mb-2">{line.replace('- ', '')}</li>
              }
              if (line.startsWith('```')) {
                return null
              }
              if (line.trim() && !line.startsWith('#')) {
                // Skip code lines that are inside code blocks
                if (!post.content.includes('```') || (i > 0 && !post.content.split('\n')[i-1].startsWith('```'))) {
                  return <p key={i} className="mb-4">{line}</p>
                }
              }
              return null
            })}
          </div>
        </article>

        <div className="flex justify-between mt-12 pt-8 border-t">
          {post.prev ? (
            <Link href={`/blog/${post.prev}`}>
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            </Link>
          ) : <div />}
          {post.next ? (
            <Link href={`/blog/${post.next}`}>
              <Button variant="ghost">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}

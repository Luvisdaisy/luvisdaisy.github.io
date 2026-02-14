"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/luvisdaisy", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/haotian",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:haotian@example.com", label: "Email" },
];

export default function HomePage() {
  return (
    <div className="relative flex min-h-0 flex-1 items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Haotian</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-2">
                Frontend Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Passionate about building beautiful, performant web applications.
              I love clean code, modern design, and creating delightful user
              experiences.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20" />
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-background shadow-2xl">
                <AvatarImage
                  src="/img/avatar.jpeg"
                  alt="Haotian"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">HT</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

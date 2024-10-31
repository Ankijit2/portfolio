"use client"

import React from 'react'
import { motion } from "framer-motion"
import NextImage from 'next/image'
import { Card, CardBody, CardFooter, Button, Link } from '@nextui-org/react'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/e-commerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek, animated portfolio website showcasing creative works and skills.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/portfolio"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A feature-rich task management application with real-time updates and team collaboration.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/task-manager"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/weather-dashboard"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "A comprehensive analytics tool for tracking and visualizing social media engagement and growth.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/social-analytics"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "A mobile-first fitness tracking application with personalized workout plans and progress tracking.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/projects/fitness-app"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function WorkPage() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-primary"
      >
        Our Work
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className="h-full bg-foreground" >
              <CardBody className="p-0">
                <NextImage
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl text-primary font-semibold mb-2">{project.title}</h2>
                  <p className="text-white mb-4">{project.description}</p>
                </div>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  href={project.link}
                  color="primary"
                  className="w-full text-background"
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WorkPage
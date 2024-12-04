'use client'

import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  caseStudy?: string
  type: 'Partner' | 'Solo'
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Connexa App",
    description: "An automated sales application for efficient sales and marketing automation along with ease of people finding",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://connexa.space/",
    type: "Partner"
  },
  {
    id: 2,
    title: "Bingeee An ai chat application",
    description: "A chatbot built using the OpenAI API. It is designed to be user-friendly and easy to use it provdie advance features like image sending and voice recording along with creating groups",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://bingee-azure.vercel.app/",
    type: "Partner"
  },
  {
    id: 3,
    title: "Skillero (in development)",
    description: "A futuristic platform where finding your dream job and enrolling in the necessary courses go hand-in-hand, seamlessly merging career goals with educational pathways",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://skillero.vercel.app/",
    caseStudy: "/case-studies/skillero",
    type: "Solo"
  },
]

export default function AdminPanel() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  const handleCreateProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      title: `New Project ${projects.length + 1}`,
      description: "This is a new project. Click to edit and add your content.",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      type: Math.random() > 0.5 ? "Partner" : "Solo"
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
        <Button color="primary" onPress={handleCreateProject}>
          Create New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="h-full bg-foreground">
            <CardBody className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl text-primary font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button
                as={Link}
                href={project.link}
                color="primary"
                className="w-full text-background"
              >
                View Project
              </Button>
              {project.caseStudy && (
                <Button
                  as={Link}
                  href={project.caseStudy}
                  color="primary"
                  className="w-full ml-2 text-background"
                >
                  Case Study
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


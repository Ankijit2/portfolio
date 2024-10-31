"use client"

import React from 'react'
import { motion } from "framer-motion"
import NextImage from 'next/image'
import { Card, CardBody, CardFooter, Button} from '@nextui-org/react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Connexa App",
    description: "An automated sales application for efficient sales and marketing automation along with ease of people finding",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://connexa.space/"
  },
  {
    id: 2,
    title: "Bingeee An ai chat application",
    description: "A chatbot built using the OpenAI API. It is designed to be user-friendly and easy to use it provdie advance features like image sending and voice recording along with creating groups",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://bingee-azure.vercel.app/"
  },
  {
    id: 3,
    title: "skillero(in development)",
    description: "A futuristic platform where finding your dream job and enrolling in the necessary courses go hand-in-hand, seamlessly merging career goals with educational pathways",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://skillero.vercel.app/"
  },
 
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
"use client"
import React from 'react'
import NextImage from 'next/image'
import { Card, CardBody, CardFooter, Button } from '@nextui-org/react'
import Link from 'next/link'
import { Project } from '@prisma/client'
import { motion } from 'framer-motion'


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
export default function ProjectCard({ProjectData,title}:{ProjectData:Project[],title:string}) {
    return (
 
      <>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-primary"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {ProjectData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full bg-foreground">
                <CardBody className="p-0">
                  <NextImage
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
                <CardFooter className="flex justify-between gap-3">
  
                 <a href={`${project.link}`} className='w-full' target='blank'><Button className='bg-primary text-white w-full'>Link</Button></a>
                  {project.case_study_included && <Button as={Link} href={`work/${project.id}`} className='bg-primary text-white w-full'>View Case Study</Button>}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </>
    )
  }
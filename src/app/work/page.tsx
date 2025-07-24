'use client'

import React from 'react'
import { motion } from "framer-motion"

import { useProjects } from '@/hooks/hooks'
import LoadingProject from '@/components/project-skeleton'

import ProjectCard from '@/components/project-section'




function WorkPage() {
  const { data, isLoading }= useProjects()
  console.log(data?.projects)
  if(!data){
    return(
      <div>
        No data found
      </div>
    )
  }
  if(isLoading){
    return (
      <LoadingProject/>
    )
  }
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-primary"
      >
        Projects We&apos;ve Worked On
      </motion.h1>
      <ProjectCard title="" ProjectData={data?.projects}  />
     
    </section>
  )
}

export default WorkPage


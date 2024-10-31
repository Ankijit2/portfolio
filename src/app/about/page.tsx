"use client";

import { Card, CardHeader, CardBody, Image, Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaPython, 
  FaAngular,
  FaFigma,
  FaAws,
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaBriefcase,
  FaBuilding
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiKubernetes, 
  SiDjango,
  SiTailwindcss,
  SiJquery,
  SiCplusplus,
  SiJira
} from "react-icons/si";

function About() {
  const workExperience = [
    {
      company: "Connexa Technologies",
      role: "Web Developer",
      period: "June 2024 - Present",
      achievements: [
        "Engineered robust backend systems with Next.js and TypeScript, enhancing system performance",
        "Implemented dynamic search functionality, improving accuracy by 35%",
        "Integrated AI for personalized email generation",
        "Developed comprehensive UI with Tailwind CSS and shadcn UI, increasing user engagement by 22%",
        "Managed cloud deployment using AWS, Docker, and Kubernetes",
        "Reduced load times by 25% through system integration",
        "Led version control and project management efforts, reducing code conflicts by 40%"
      ]
    },
    {
      company: "Octanet Technologies",
      role: "Web Development Intern",
      period: "March 2024 - April 2024",
      achievements: [
        "Created responsive UI for food website, reducing ordering time by 18%",
        "Developed task management app improving productivity by 35%"
      ]
    }
  ];

  const skillsData = {
    icon: <FaLaptopCode className="size-6" />,
    title: "Technical Skills",
    categories: [
      {
        icon: <FaCode className="size-5" />,
        title: "Frontend Development",
        skills: [
          { name: "HTML", icon: <FaHtml5 className="size-8" /> },
          { name: "CSS", icon: <FaCss3Alt className="size-8" /> },
          { name: "TypeScript", icon: <SiTypescript className="size-8" /> },
          { name: "React.js", icon: <FaReact className="size-8" /> },
          { name: "Next.js", icon: <SiNextdotjs className="size-8" /> },
          { name: "Angular", icon: <FaAngular className="size-8" /> },
          { name: "jQuery", icon: <SiJquery className="size-8" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="size-8" /> },
          { name: "Figma", icon: <FaFigma className="size-8" /> },
        ],
      },
      {
        icon: <FaServer className="size-5" />,
        title: "Backend Development",
        skills: [
          { name: "Node.js", icon: <FaNodeJs className="size-8" /> },
          { name: "Express", icon: <SiExpress className="size-8" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="size-8" /> },
          { name: "MongoDB", icon: <SiMongodb className="size-8" /> },
          { name: "Django", icon: <SiDjango className="size-8" /> },
        ],
      },
      {
        icon: <FaTools className="size-5" />,
        title: "Tools & Technologies",
        skills: [
          { name: "Git", icon: <FaGitAlt className="size-8" /> },
          { name: "GitHub", icon: <FaGithub className="size-8" /> },
          { name: "Docker", icon: <FaDocker className="size-8" /> },
          { name: "Kubernetes", icon: <SiKubernetes className="size-8" /> },
          { name: "AWS", icon: <FaAws className="size-8" /> },
          { name: "Jira", icon: <SiJira className="size-8" /> },
          
        ],
      },
      {
        icon: <FaCode className="size-5" />,
        title: "Programming Languages",
        skills: [
          { name: "Python", icon: <FaPython className="size-8" /> },
          { name: "C++", icon: <SiCplusplus className="size-8" /> },
          { name: "JavaScript", icon: <FaJs className="size-8" /> },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen bg-background p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:basis-1/2"
          >
            <Image
              as={NextImage}
              width={800}
              height={600}
              src="/hero-section.svg"
              alt="Hero Image"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:basis-1/2"
          >
            <Card className="bg-foreground/50 backdrop-blur-xl border border-primary/10 h-full">
              <CardHeader className="pb-0 pt-6 px-6">
                <h2 className="text-4xl text-primary font-bold">About Me</h2>
              </CardHeader>
              <CardBody className="flex flex-col gap-6 text-primary/90">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    as={NextImage}
                    width={128}
                    height={128}
                    src="/profile.jpg"
                    alt="Ankijit Roy"
                    className="rounded-full object-cover shadow-xl"
                  />
                </div>
                <p className="text-lg leading-relaxed text-white">
                The Code Canvas is led by Ankijit Roy, an experienced web developer passionate about crafting high-quality digital solutions. With a strong background in full-stack development, Ankijit specializes in building responsive, high-performance web applications that prioritize user experience and efficiency.
                </p>
                <p className="text-lg leading-relaxed text-white">
                Through his work with Connexa Technologies and projects like an AI-driven marketing platform and real-time chat applications, Ankijit has honed expertise in tools like Next.js, TypeScript, AWS, and Docker. Each project at The Code Canvas reflects a commitment to innovation, optimization, and impactful design, transforming complex challenges into intuitive solutions tailored to client needs.
                </p>

                <Accordion 
                  variant="shadow"
                  className="px-0"
                  selectionMode="multiple"
                >
                  <AccordionItem
                    key="experience"
                    aria-label="Work Experience"
                    title={
                      <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                        <FaBriefcase className="size-6" />
                        <span>Work Experience</span>
                      </div>
                    }
                    className="bg-background"
                  >
                    {workExperience.map((job, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-6 last:mb-0"
                      >
                        <div className="flex items-start gap-3 mb-3 ">
                          <FaBuilding className="size-6 mt-1 text-primary" />
                          <div>
                            <h3 className="text-xl font-semibold text-primary">{job.company}</h3>
                            <p className="text-sm text-white">{job.role} | {job.period}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 pl-9 text-white">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-primary/80 list-disc">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </AccordionItem>

                  <AccordionItem
                    key="skills"
                    aria-label={skillsData.title}
                    title={
                      <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                        {skillsData.icon}
                        <span>{skillsData.title}</span>
                      </div>
                    }
                    className="bg-background"
                  >
                    <Accordion selectionMode="multiple">
                      {skillsData.categories.map((category, index) => (
                        <AccordionItem
                          key={index}
                          aria-label={category.title}
                          title={
                            <div className="flex items-center gap-2 text-lg font-medium text-primary">
                              {category.icon}
                              <span>{category.title}</span>
                            </div>
                          }
                          className="bg-background"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2"
                          >
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-foreground backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg"
                              >
                                <div className="text-primary">
                                  {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-primary text-center">
                                  {skill.name}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
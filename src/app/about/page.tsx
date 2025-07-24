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
import { GrGraphQl } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";

function About() {
  const workExperience = [
  {
    company: "Connexa Technologies",
    role: "Full Stack Engineer",
    period: "June 2023 - December 2024",
    achievements: [
      "Engineered robust backend systems using Next.js and TypeScript, enhancing system performance and maintainability.",
      "Implemented dynamic search functionality, improving search accuracy by 35%.",
      "Integrated AI for personalized email generation, automating outreach and saving manual effort.",
      "Developed a modern, responsive UI using Tailwind CSS and shadcn/ui, increasing user engagement by 22%.",
      "Managed end-to-end cloud deployment with AWS, Docker, and Kubernetes, improving scalability and reliability.",
      "Reduced load times by 25% through optimized system integration and API refactoring.",
      "Led version control and streamlined project workflows using Git and GitHub, reducing code conflicts by 40%."
    ]
  },
  {
    company: "Stackkaroo",
    role: "Full Stack Developer",
    period: "Dec 2024 - Ongoing",
    achievements: [
      "Orchestrated the launch of Hub4Media’s agency management dashboard using Next.js and NestJS, cutting publishing time by 30% through optimized editorial workflows.",
      "Spearheaded the development of Indian Municipal Bond platform interface, achieving a 35% faster page load and 20% uplift in daily active sessions via Next.js and TypeScript optimizations.",
      "Conceptualized and shipped ROI Magnet, a Shopify-integrated WhatsApp marketing solution with Razorpay, GA4, Meta Pixel, and custom analytics links—boosting campaign ROIs by 25%.",
      "Designed event-driven services with NestJS, GraphQL, Redis, and BullMQ, maintaining 99.9% uptime while handling 10K+ events/minute."
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
          {name:"React Native", icon: <TbBrandReactNative className="size-8" />},
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
          { name: "Nest.js", icon: <SiNextdotjs className="size-8" /> },
          { name: "GraphQL", icon: <GrGraphQl className="size-8" /> },
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
            The Code Canvas is driven by Ankijit Roy, a full-stack developer focused on delivering clean, scalable, and impactful web applications. Ankijit brings a strong foundation in Next.js, TypeScript, MongoDB, Prisma, AWS, and Docker, with a sharp eye for performance and UX.
                </p>
                <p className="text-lg leading-relaxed text-white">
              His work spans AI-powered platforms like Connexa Technologies, dynamic e-commerce sites such as ARvan and RaasCreation, and public-sector data tools like India Municipal Bonds. From real-time chat systems to smart lead-generation engines, every project reflects a commitment to modern architecture, efficient coding, and results-driven design—turning business ideas into seamless digital experiences.
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
                        <div className="flex items-start gap-3 mb-5 ">
                          <FaBuilding className="size-6 mt-1 text-primary" />
                          <div>
                            <h3 className="text-xl font-semibold text-primary">{job.company}</h3>
                            <p className="text-sm text-white">{job.role} | {job.period}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 pl-9 text-white">
                          {job?.achievements?.map((achievement, i) => (
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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineSteps = [
    {
      step: 1,
      title: "Discovery Call",
      duration: "2 HOURS",
      content:
        "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      bullets: [
        "We get to know each other better",
        "Determine how I can best assist you",
        "Understand the goals you have for your website",
      ],
    },
    {
      step: 2,
      title: "Concept & Strategy",
      duration: "1 WEEK",
      content:
        "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
      bullets: ["UX Design", "Wireframes", "Interactive Prototype"],
    },
    {
      step: 3,
      title: "Web Design",
      duration: "1 WEEK",
      content:
        "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competitors, fits your target audience ideally, and provides an excellent user experience.",
      bullets: [
        "High-end web design tailored to your brand",
        "Interactive prototype of the design",
      ],
    },
    {
      step: 4,
      title: "Development",
      duration: "2 WEEK",
      content:
        "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site to set you apart from the boring competition.",
      bullets: [
        "Custom-built website",
        "Modular web design systems",
        "CMS integration",
      ],
    },
    {
      step: 5,
      title: "Website Onboarding",
      duration: "2 HOURS",
      content:
        "In a personal 1-on-1 workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials. Moving forward, you can access all up-to-date files from the website and get a completed handover of new files for an additional programmer.",
      bullets: [
        "Personal workshop",
        "Personalized video tutorials",
        "Edit text and images directly on your website",
      ],
    },
  ];

  return (
    <div className="bg-[#000000]">
      <div className="w-full max-w-4xl mx-auto px-4 py-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#D4B595]">
            Your Website
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#D4B595] italic">
            in 5 steps
          </h2>
          <p className="text-gray-400 mt-4">
            Our process ensures that we create a website tailored to your
            business goals
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Background line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 -translate-x-1/2" />

          {/* Progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#D4B595] -translate-x-1/2 origin-top"
            style={{ scaleY: scaleY }}
          />

          {/* Step numbers */}
          {timelineSteps.map((_, index) => (
            <motion.div
              key={index}
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-gray-700 flex items-center justify-center"
              style={{
                top: `${(index * 100) / (timelineSteps.length - 1)}%`,
                borderColor: useTransform(
                  scaleY,
                  [
                    index / timelineSteps.length,
                    (index + 1) / timelineSteps.length,
                  ],
                  ["rgb(55, 65, 81)", "rgb(212, 181, 149)"]
                ),
                // eslint-disable-next-line react-hooks/rules-of-hooks
                backgroundColor: useTransform(
                  scaleY,
                  [
                    index / timelineSteps.length,
                    (index + 1) / timelineSteps.length,
                  ],
                  ["rgb(0, 0, 0)", "rgb(212, 181, 149)"]
                ),
              }}
            >
              <motion.span
                className="text-xs font-medium"
                style={{
                  color: useTransform(
                    scaleY,
                    [
                      index / timelineSteps.length,
                      (index + 1) / timelineSteps.length,
                    ],
                    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
                  ),
                }}
              >
                {index + 1}
              </motion.span>
            </motion.div>
          ))}

          {timelineSteps.map((item, index) => (
            <TimelineItem key={item.step} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-24 relative ${
        index % 2 === 0 ? "md:ml-[50%] md:pl-12" : "md:mr-[50%] md:pr-12"
      }`}
      style={{ marginTop: index === 0 ? "0" : "2rem" }}
    >
      <Card className="w-full bg-[#1C1C1C] shadow-xl">
        <CardHeader className="pb-0">
          <div className="space-y-2">
            <span className="text-xs text-gray-400">{item.duration}</span>
            <h3 className="text-lg font-medium uppercase text-white">
              {item.title}
            </h3>
          </div>
        </CardHeader>
        <CardBody className="text-gray-300">
          <p className="text-sm mb-4">{item.content}</p>
          <ul className="space-y-2">
            {item.bullets.map((bullet: string, i: number) => (
              <li key={i} className="text-sm flex items-start">
                <span className="mr-2">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
}

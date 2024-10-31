"use client";

import Timeline from "@/components/timeline";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaCheck as Check} from "react-icons/fa";

function Service() {
  const serviceProvided = [
    {
      heading: "Website Design",
      description:
        "Custom, responsive web design that aligns with your brand's identity, crafted for seamless user experiences.",
      price: "₹50,000 - ₹2,00,000",
      features: [
        "Custom design mockups",
        "Mobile-first responsive layouts",
        "User experience (UX) optimization",
        "Integration of brand guidelines",
        "Revisions based on feedback",
      ],
    },
    {
      heading: "E-commerce Development",
      description:
        "End-to-end e-commerce solutions, from storefront design to checkout, to grow your online sales.",
      price: "₹2,00,000 - ₹6,00,000",
      features: [
        "Custom storefront design",
        "Product management system",
        "Secure payment integration",
        "User account and cart functionality",
        "Analytics and tracking setup",
      ],
    },
    {
      heading: "SEO Optimization",
      description:
        "Search engine optimization to increase your website's visibility and drive organic traffic.",
      price: "₹20,000 - ₹1,00,000",
      features: [
        "Keyword research and targeting",
        "On-page optimization",
        "Meta tags and descriptions",
        "Content optimization",
        "Technical SEO audits",
      ],
    },
    {
      heading: "Web Application Development",
      description:
        "Custom web applications built to scale, providing advanced functionality and user engagement.",
      price: "₹4,00,000+",
      features: [
        "Custom backend development",
        "API integration",
        "User authentication and security",
        "Scalable architecture",
        "Real-time features and notifications",
      ],
    },
    {
      heading: "Maintenance and Support",
      description:
        "Ongoing support to keep your website updated, secure, and performing optimally.",
      price: "₹10,000 - ₹40,000 per month",
      features: [
        "Regular updates and security patches",
        "Performance monitoring",
        "Bug fixes and troubleshooting",
        "Content updates",
        "Monthly reports and analytics",
      ],
    },
    {
      heading: "Content Management Systems",
      description:
        "CMS integration for easy website management and content updates, allowing your team to control site content effortlessly.",
      price: "₹1,00,000 - ₹3,00,000",
      features: [
        "Custom CMS setup",
        "User-friendly interface",
        "Content scheduling and management",
        "Role-based access control",
        "Training and support for CMS use",
      ],
    },
  ];
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-background pb-20">
      <Timeline />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mt-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary font-lora mb-4">
          Experience the power of premium web design
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Transform your digital presence with our comprehensive web services
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {serviceProvided.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="bg-foreground/50 border font-lora border-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
                isPressable
              >
                <CardHeader className="pb-2 pt-6 px-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 text-primary font-open-sans font-semibold rounded-full px-4 py-1 text-sm w-fit">
                      {service.price}
                    </div>
                    <h2 className="text-2xl font-open-sans font-semibold text-primary">
                      {service.heading}
                    </h2>
                  </div>
                </CardHeader>
                <CardBody className="px-6 pb-6">
                  <p className="text-white mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-primary"
                      >
                        <Check className="h-5 w-5 mt-0.5 shrink-0" />
                        <span className="text-sm font-open-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Service;
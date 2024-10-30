/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"
import { Link, Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaDribbble,
  FaBehance,
  FaArrowRight
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Footer() {
  const footerSections = {
    about: {
      title: "About Code Canvas",
      content: "Crafting digital experiences through innovative web solutions. Transforming ideas into elegant, functional realities.",
    },
    expertise: {
      title: "Expertise",
      links: [
        { name: "Frontend Development", href: "/expertise/frontend" },
        { name: "UI/UX Design", href: "/expertise/design" },
        { name: "Web Applications", href: "/expertise/web-apps" },
        { name: "Mobile Development", href: "/expertise/mobile" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  }

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "Dribbble", icon: FaDribbble, href: "https://dribbble.com" },
    { name: "Behance", icon: FaBehance, href: "https://behance.net" },
    { name: "Email", icon: MdEmail, href: "mailto:contact@codecanvas.dev" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="bg-black text-white py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-[#D4B595]">Code Canvas</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerSections.about.content}
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4B595] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold">{footerSections.expertise.title}</h3>
            <ul className="space-y-3">
              {footerSections.expertise.links.map((link) => (
                <li key={link.name}>
                  <Link
                   
                    className="text-gray-400 hover:text-[#D4B595] transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold">{footerSections.resources.title}</h3>
            <ul className="space-y-3">
              {footerSections.resources.links.map((link) => (
                <li key={link.name}>
                  <Link
                
                    className="text-gray-400 hover:text-[#D4B595] transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Have a project in mind? Let's create something amazing together.</p>
              <Button
              
                color="primary"
                className="text-background w-full sm:w-auto group"
                endContent={<FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                Start a Project
              </Button>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <MdEmail className="w-4 h-4" />
                contact@codecanvas.dev
              </p>
              <p>San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 text-center sm:flex sm:justify-between sm:text-left"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Code Canvas. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-[#D4B595] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D4B595] transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
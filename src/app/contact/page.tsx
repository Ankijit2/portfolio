"use client"

import React from 'react'
import { motion } from "framer-motion"
import NextImage from 'next/image'
import { Image, Card, CardHeader, CardBody, CardFooter, Button, Input, Textarea } from '@nextui-org/react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

function ContactPage() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            as={NextImage}
            width={800}
            height={600}
            src="/hero-section.svg"
            alt="Contact Us Illustration"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-foreground">
            <CardHeader>
              <h2 className="text-2xl text-primary font-bold">Get in Touch</h2>
            </CardHeader>
            <CardBody>
              <form className="space-y-6">
                <Input

                  placeholder="Enter your name"
                  variant="bordered"
                  isRequired
                  labelPlacement='outside'
                   className='text-primary'
                />
                <Input
              
                  placeholder="Enter your email"
                  labelPlacement='outside'
                  type="email"
                  variant="bordered"
                  isRequired
                   className='text-primary '
                />
                <Textarea
                
                  placeholder="Tell us about your project"
                  variant="bordered"
                  labelPlacement='outside'
                  minRows={4}
                  isRequired
                  className='text-primary'
                />
                <Button color="primary" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardBody>
            <CardFooter>
              <div className="w-full">
                <p className="text-center text-gray-600 mb-4">Or connect with us on:</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="sr-only">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPage
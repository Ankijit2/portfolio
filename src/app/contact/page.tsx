'use client'

import React from 'react'
import { motion } from "framer-motion"
import NextImage from 'next/image'
import { Image, Card, CardHeader, CardBody, CardFooter, Button, Input, Textarea } from '@nextui-org/react'
import { FaLinkedin, FaTwitter, FaInstagram, } from 'react-icons/fa'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import axios from "axios"
import toast from 'react-hot-toast'



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(10, {
    message: "Subject must be at least 10 characters.",
  }).max(100, {
    message: "Subject cannot exceed 100 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
  
    await toast.promise(
        axios.post('/api/email', values),
        {
          loading: 'Sending email...',
          success: 'Email sent successfully',
          error: 'Failed to send email. Please try again.',
        }
      );
      form.reset()
     
    // Handle form submission
  }

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ankijit-roy-642409263/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/AnkijitR26908", label: "Twitter" },
    { icon: FaInstagram, href: "https://www.instagram.com/ankijit_roy/", label: "Instagram" },
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field,fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your name"
                            variant="bordered"
                            labelPlacement="outside"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field,fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                            labelPlacement="outside"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormMessage >{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field,fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Give us your requirement"
    
                            variant="bordered"
                            labelPlacement="outside"
                            className="text-primary"
                          />
                        </FormControl>
                        <FormMessage >{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field,fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Give us the description of your requirement"
                            variant="bordered"
                            labelPlacement="outside"
                            minRows={4}
                            className="text-primary"
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <Button disabled={form.formState.isSubmitting} color="primary" type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
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
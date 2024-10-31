"use client"

import React, { useState } from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react"
import { motion, AnimatePresence } from "framer-motion"

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Work", link: "/work" },
    { name: "Let's Connect", link: "/contact", isButton: true },
  ]

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
  
      <Navbar 
        className="text-primary py-4 font-open-sans overflow-hidden"
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand className="font-bold text-2xl">
          Code Canvas
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {navbarItems.map((item) => (
            <NavbarItem key={item.name}>
              {item.isButton ? (
                <Link href={item.link}>
                  <Button 
                    color="primary" 
                    className="text-background"
                    size="md"
                  >
                    {item.name}
                  </Button>
                </Link>
              ) : (
                <Link 
                  href={item.link}
                  className="text-primary hover:text-primary/80  text-lg transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="relative w-8 h-8"
          >
            <motion.div
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.span
                className="absolute w-5 h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: -4 },
                  open: { rotate: 45, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-5 h-0.5 bg-current"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-5 h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: 4 },
                  open: { rotate: -45, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </NavbarMenuToggle>
        </NavbarContent>

        <AnimatePresence>
          {isMenuOpen && (
            <NavbarMenu
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="pt-6"
            >
              {navbarItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`}>
                  <motion.div
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.isButton ? (
                      <Link
                        href={item.link}
                        className="w-full block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Button 
                          color="primary" 
                          className="text-background"
                          size="lg"
                          
                        >
                          {item.name}
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        href={item.link}
                        className="w-full text-primary hover:text-primary/80 transition-colors text-lg py-2 px-2 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          )}
        </AnimatePresence>
      </Navbar>

  )
}

export default MyNavbar
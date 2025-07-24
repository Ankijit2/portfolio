"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
;
  const pathname = usePathname();

  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Work", link: "/work" },
    { name: "Let's Connect", link: "/contact", isButton: true },
  ];

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
  };

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
  };

  const isActive = (link: string) => {
    if (link === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link);
  };

  return (
    <Navbar
      className="text-primary py-4 font-open-sans overflow-hidden"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="font-bold text-2xl">Code Canvas</NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navbarItems.map((item) => (
          <NavbarItem key={item.name}>
            {item.isButton ? (
              <Link href={item.link}>
                <Button
                  color="primary"
                  className="text-background transition-all duration-300 hover:scale-105 hover:shadow-lg"
                 
                  size="md"
                >
                  {item.name}
                </Button>
              </Link>
            ) : (
              <div className="relative">
                <Link
                  href={item.link}
                  className={`text-lg transition-all duration-300 relative px-3 py-2 rounded-lg ${
                    isActive(item.link)
                      ? "text-primary font-semibold"
                      : "text-primary/70 hover:text-primary"
                  }`}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.name}

                  {/* Active indicator */}
                  {isActive(item.link) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover effect */}
                  {hoveredItem === item.name && !isActive(item.link) && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </div>
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
                    <Link href={item.link}>
                      {" "}
                      <Button
                        color="primary"
                        className="text-background w-full transition-all duration-300 hover:scale-105"
                        size="lg"
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ) : (
                    <div className="relative w-full">
                      <Link
                        href={item.link}
                        className={`w-full transition-all duration-300 text-lg py-3 px-4 block rounded-lg relative ${
                          isActive(item.link)
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-primary/70 hover:text-primary hover:bg-primary/5"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}

                        {/* Active indicator for mobile */}
                        {isActive(item.link) && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </div>
                  )}
                </motion.div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </AnimatePresence>
    </Navbar>
  );
}

export default MyNavbar;

"use client";
import { motion } from "framer-motion";
import FloatingOrbs from "./floating-orb";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      <FloatingOrbs />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-2 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-lora text-white font-bold leading-none text-foreground"
            >
              Crafting
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-lora font-bold leading-none text-primary"
            >
              stunning digital
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl text-white font-lora font-bold leading-none text-foreground"
            >
              experience
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-2 mb-12"
          >
            <p className="text-sm md:text-base lg:text-lg tracking-[0.3em] text-muted-foreground font-inter font-medium uppercase">
              Join us in the
            </p>
            <p className="text-lg md:text-xl lg:text-2xl tracking-[0.4em] text-primary font-inter font-semibold uppercase">
              Revolution
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-inter font-semibold rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            </Link>

            <Link href={"/work"}>
             <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary text-primary font-inter font-semibold rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            >
              View Our Work
            </motion.button>
            
            </Link>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
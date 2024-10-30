"use client"

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { RiHome4Line, RiErrorWarningLine } from "react-icons/ri"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-2xl mx-auto"
      >
        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative"
        >
          <div className="text-[150px] md:text-[200px] font-bold text-gray-800 select-none">
            404
          </div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <RiErrorWarningLine className="w-24 h-24 md:w-32 md:h-32 text-[#D4B595]" />
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            color="primary"
            variant="solid"
            size="lg"
            onClick={() => router.push("/")}
            startContent={<RiHome4Line className="text-xl" />}
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
                y: [-20 * (i + 1), -40 * (i + 1), -20 * (i + 1)],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div
                className="w-1 h-1 rounded-full bg-[#D4B595]"
                style={{
                  filter: "blur(1px)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-sm"
        >
          Error Code: 404 | Page Not Found
        </motion.p>
      </motion.div>
    </div>
  )
}
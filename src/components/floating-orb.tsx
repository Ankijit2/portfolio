import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Primary Orb - Simplified */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute top-20 right-20 w-80 h-80"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/15 to-transparent blur-2xl animate-glow-pulse" />
      </motion.div>

      {/* Secondary Orb */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="absolute top-40 left-20 w-32 h-32"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/25 to-primary/10 blur-lg animate-float" />
      </motion.div>

      {/* Small Accent Orb */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
        className="absolute bottom-32 right-32 w-24 h-24"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-primary/20 to-primary/5 blur-md animate-float-delayed" />
      </motion.div>

      {/* Minimal Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default FloatingOrbs;
"use client"

import { motion } from "framer-motion"

export default function FilmGrainOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Premium film grain texture */}
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23d97706'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Luxury vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/30" />

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 7,
          ease: "easeInOut",
        }}
      />

      {/* Elegant flicker effect */}
      <motion.div
        className="absolute inset-0 bg-gold-100/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.03, 0] }}
        transition={{
          duration: 0.15,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: Math.random() * 15 + 10,
        }}
      />
    </div>
  )
}

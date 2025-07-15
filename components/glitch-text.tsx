"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    const glitchTimeout = setTimeout(() => {
      const glitched = text
        .split("")
        .map((char) => (Math.random() < 0.2 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
        .join("")

      setGlitchText(glitched)

      setTimeout(() => setGlitchText(text), 800)
    }, 1500) // Trigger once after 1.5 seconds

    return () => clearTimeout(glitchTimeout)
  }, [text])

  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main text */}
      <span className="relative z-10">{glitchText}</span>

      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-gold-400 opacity-70"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 0.7, 0.7, 0.7],
        }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: "easeInOut",
        }}
      >
        {glitchText}
      </motion.span>

      <motion.span
        className="absolute inset-0 text-gold-600 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0.7, 0.7],
        }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: "easeInOut",
        }}
      >
        {glitchText}
      </motion.span>
    </motion.h1>
  )
}

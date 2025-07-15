"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import ArchiveGrid from "@/components/archive-grid"
import DirectorsNotes from "@/components/directors-notes"
import NavigationProgress from "@/components/navigation-progress"
import FilmGrainOverlay from "@/components/film-grain-overlay"
import GlitchText from "@/components/glitch-text"

export default function SpeculativeArchive() {
  const [isMuted, setIsMuted] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0.6])

  useEffect(() => {
    // Initialize ambient audio only if file exists
    let ambientAudio: HTMLAudioElement | null = null

    const initAudio = async () => {
      try {
        if (!isMuted) {
          ambientAudio = new Audio("/Brushstrokes.mp3")
          ambientAudio.loop = true
          ambientAudio.volume = 0.1

          // Test if audio can be loaded
          await ambientAudio.play()
        }
      } catch (error) {
        // Silently handle audio loading errors
        console.log("Audio not available - continuing without sound")
        if (ambientAudio) {
          ambientAudio = null
        }
      }
    }

    initAudio()

    return () => {
      if (ambientAudio) {
        ambientAudio.pause()
        ambientAudio = null
      }
    }
  }, [isMuted])

  const sections = [
    { id: "archive", title: "The Archive", component: <ArchiveGrid /> },
    { id: "notes", title: "Director's Notes", component: <DirectorsNotes /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-premium relative overflow-hidden">
      <FilmGrainOverlay />

      {/* Background with parallax */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-950/50 bg-cover bg-center"
        style={{ y: backgroundY, opacity }}
      />

      {/* Luxury texture overlay */}
      <div
        className="fixed inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d97706' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Audio Controls */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-slate-900/80 border-gold-500/30 text-gold-300 hover:bg-slate-800/90 hover:border-gold-400/50 backdrop-blur-md shadow-premium transition-all duration-300"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Progress */}
      <NavigationProgress sections={sections} currentSection={currentSection} />

      {/* Header */}
      <motion.header
        className="relative z-10 pt-28 pb-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Premium badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 bg-slate-900/60 backdrop-blur-xl border border-gold-500/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-gold-300 font-mono text-sm tracking-wider">CLASSIFIED ARCHIVE</span>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <GlitchText
              text="PROJECT ARCHIVE"
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-gold bg-clip-text mb-8 font-mono tracking-wider leading-none"
            />

            {/* Premium divider */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-32"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
              <div className="w-3 h-3 bg-gold-500 rotate-45" />
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-32"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-2xl md:text-3xl text-premium-200 leading-relaxed font-serif">
              <span className="italic text-gold-300 text-3xl md:text-4xl">A recovered collection</span>
              <br />
              <span className="text-premium-300">from the lost production archives</span>
            </p>

            <div className="flex items-center justify-center gap-4 text-premium-400 font-mono text-sm tracking-widest">
              <span>EST. 1987</span>
              <div className="w-1 h-1 bg-gold-500 rounded-full" />
              <span>CLASSIFICATION: RESTRICTED</span>
              <div className="w-1 h-1 bg-gold-500 rounded-full" />
              <span>DEPT. OF LOST MEDIA</span>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="min-h-screen py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setCurrentSection(index)}
          >
            <div className="container mx-auto px-6">
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-gold bg-clip-text mb-16 text-center font-mono tracking-wide"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h2>
              {section.component}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 py-16 text-center border-t border-gold-500/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <p className="text-gold-400 font-mono text-sm tracking-wider">
            END OF ARCHIVE — CLASSIFICATION LEVEL: RESTRICTED
          </p>
          <p className="text-premium-400 text-xs mt-2 opacity-60">
            If found, please return to the Department of Lost Media
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

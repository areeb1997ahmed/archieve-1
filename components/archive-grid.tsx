"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, X, Eye } from "lucide-react"

interface ArchiveItem {
  id: string
  type: "image" | "document" | "polaroid" | "sketch"
  title: string
  description: string
  tags: string[]
  src: string
  metadata: {
    date: string
    location?: string
    classification: string
  }
}

const mockArchiveItems: ArchiveItem[] = [
  {
    id: "001",
    type: "polaroid",
    title: "Location Scout - Abandoned Theater",
    description: "Initial reconnaissance of the Orpheum Theater, later used for Act II climax",
    tags: ["Location", "Behind the Scenes"],
    src: "https://picsum.photos/400/300?random=1",
    metadata: {
      date: "1987.03.15",
      location: "Downtown District",
      classification: "RESTRICTED",
    },
  },
  {
    id: "002",
    type: "sketch",
    title: "Character Design - The Archivist",
    description: "Early concept sketches for the protagonist's final form",
    tags: ["Concept Art", "Character"],
    src: "https://picsum.photos/400/500?random=2",
    metadata: {
      date: "1986.11.22",
      classification: "CONFIDENTIAL",
    },
  },
  {
    id: "003",
    type: "document",
    title: "Script Fragment - Scene 47",
    description: "Handwritten notes on the mirror sequence dialogue",
    tags: ["Script", "Notes"],
    src: "https://picsum.photos/400/600?random=3",
    metadata: {
      date: "1987.01.08",
      classification: "TOP SECRET",
    },
  },
  {
    id: "004",
    type: "image",
    title: "Set Photography - The Memory Room",
    description: "Behind-the-scenes shot of the constructed memory chamber",
    tags: ["Set Design", "Behind the Scenes"],
    src: "https://picsum.photos/500/350?random=4",
    metadata: {
      date: "1987.05.12",
      location: "Studio B",
      classification: "RESTRICTED",
    },
  },
  {
    id: "005",
    type: "polaroid",
    title: "Casting Polaroid - Lead Actress",
    description: "Screen test documentation for the role of Elena",
    tags: ["Casting", "Behind the Scenes"],
    src: "https://picsum.photos/300/400?random=5",
    metadata: {
      date: "1986.09.30",
      classification: "CONFIDENTIAL",
    },
  },
  {
    id: "006",
    type: "sketch",
    title: "Storyboard - Opening Sequence",
    description: "Frame-by-frame breakdown of the film's opening dream sequence",
    tags: ["Storyboard", "Concept Art"],
    src: "https://picsum.photos/500/300?random=6",
    metadata: {
      date: "1986.12.14",
      classification: "RESTRICTED",
    },
  },
  {
    id: "007",
    type: "image",
    title: "Vintage Film Equipment",
    description: "Original camera equipment used during production",
    tags: ["Equipment", "Behind the Scenes"],
    src: "https://picsum.photos/400/350?random=7",
    metadata: {
      date: "1987.02.20",
      location: "Equipment Storage",
      classification: "RESTRICTED",
    },
  },
  {
    id: "008",
    type: "polaroid",
    title: "Art Direction Notes",
    description: "Color palette and mood references for key scenes",
    tags: ["Art Direction", "Concept Art"],
    src: "https://picsum.photos/350/400?random=8",
    metadata: {
      date: "1986.12.05",
      classification: "CONFIDENTIAL",
    },
  },
  {
    id: "009",
    type: "document",
    title: "Production Schedule",
    description: "Original shooting schedule with handwritten modifications",
    tags: ["Production", "Schedule"],
    src: "https://picsum.photos/400/550?random=9",
    metadata: {
      date: "1987.01.15",
      location: "Production Office",
      classification: "RESTRICTED",
    },
  },
  {
    id: "010",
    type: "sketch",
    title: "Costume Design Sketches",
    description: "Original costume designs for the main characters",
    tags: ["Costume", "Design"],
    src: "https://picsum.photos/350/450?random=10",
    metadata: {
      date: "1986.10.30",
      classification: "CONFIDENTIAL",
    },
  },
  {
    id: "011",
    type: "image",
    title: "Behind the Scenes - Lighting Setup",
    description: "Complex lighting arrangement for the climactic scene",
    tags: ["Lighting", "Behind the Scenes"],
    src: "https://picsum.photos/450/300?random=11",
    metadata: {
      date: "1987.04.10",
      location: "Sound Stage A",
      classification: "RESTRICTED",
    },
  },
  {
    id: "012",
    type: "polaroid",
    title: "Makeup Test Shots",
    description: "Special effects makeup trials for transformation scenes",
    tags: ["Makeup", "Special Effects"],
    src: "https://picsum.photos/300/400?random=12",
    metadata: {
      date: "1987.03.25",
      location: "Makeup Department",
      classification: "TOP SECRET",
    },
  },
]

export default function ArchiveGrid() {
  const [items, setItems] = useState<ArchiveItem[]>(mockArchiveItems)
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const allTags = ["All", ...Array.from(new Set(mockArchiveItems.flatMap((item) => item.tags)))]

  const filteredItems = selectedFilter === "All" ? items : items.filter((item) => item.tags.includes(selectedFilter))

  const getItemClassName = (type: string) => {
    const baseClasses =
      "relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
    const typeClasses = {
      polaroid: "transform rotate-1 hover:rotate-0 bg-white p-4",
      sketch: "transform -rotate-1 hover:rotate-0 bg-amber-50 border-2 border-amber-200",
      document: "bg-yellow-50 border border-amber-300 transform rotate-0.5 hover:rotate-0",
      image: "bg-black transform hover:scale-105",
    }
    return `${baseClasses} ${typeClasses[type as keyof typeof typeClasses] || typeClasses.image}`
  }

  return (
    <div className="space-y-8">
      {/* Premium Filter Controls */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gold-300 mb-4 font-mono tracking-wide">ARCHIVE CATEGORIES</h3>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {allTags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={selectedFilter === tag ? "default" : "outline"}
                onClick={() => setSelectedFilter(tag)}
                className={`
                  font-mono text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-300
                  ${
                    selectedFilter === tag
                      ? "bg-gradient-gold text-slate-900 hover:opacity-90 shadow-gold"
                      : "border-gold-400/30 text-gold-300 hover:bg-slate-800/50 hover:border-gold-400/50 backdrop-blur-sm"
                  }
                `}
              >
                <Filter className="w-3 h-3 mr-2" />
                {tag}
                {selectedFilter === tag && (
                  <motion.div
                    className="ml-2 w-2 h-2 bg-slate-900 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Magazine-Style Grid with Enhanced Animations */}
      <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {/* Magazine header with animated elements */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="w-8 h-px bg-gradient-to-r from-transparent via-gold-500 to-gold-500"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Archive Collection</span>
            <motion.div
              className="w-8 h-px bg-gradient-to-r from-gold-500 via-gold-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Magazine-style masonry grid with staggered animations */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 60,
                  rotateX: -15,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  y: -30,
                  rotateX: 15,
                  filter: "blur(5px)",
                  transition: { duration: 0.4 },
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  rotateY: 2,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="break-inside-avoid mb-8 perspective-1000"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {/* Magazine-style article card */}
                <motion.div
                  className="relative group"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(245, 158, 11, 0.2)",
                  }}
                >
                  <Card className={`${getItemClassName(item.type)} magazine-card overflow-hidden`}>
                    <CardContent className="p-0 relative">
                      {/* Magazine corner fold effect */}
                      <motion.div
                        className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gold-400/20 to-transparent z-10 clip-triangle"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredItem === item.id ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Image with magazine-style overlay */}
                      <div className="relative overflow-hidden">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(item.title)}`
                            }}
                          />
                        </motion.div>

                        {/* Magazine-style gradient overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredItem === item.id ? 1 : 0.3 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Animated scan line effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/10 to-transparent h-8"
                          animate={{
                            y: hoveredItem === item.id ? ["-100%", "400%"] : "-100%",
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredItem === item.id ? Number.POSITIVE_INFINITY : 0,
                            ease: "linear",
                          }}
                        />

                        {/* Glitch overlay with magazine aesthetic */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 mix-blend-screen"
                          initial={{ opacity: 0, x: 0 }}
                          animate={{
                            opacity: hoveredItem === item.id ? [0, 1, 0] : 0,
                            x: hoveredItem === item.id ? [0, -5, 5, 0] : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: hoveredItem === item.id ? Number.POSITIVE_INFINITY : 0,
                            repeatDelay: 2,
                          }}
                        />
                      </div>

                      {/* Magazine-style metadata overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white p-6 flex flex-col justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredItem === item.id ? 1 : 0,
                          y: hoveredItem === item.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="space-y-3">
                          {/* Magazine-style header */}
                          <div className="flex items-center justify-between">
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              animate={{
                                x: hoveredItem === item.id ? 0 : -20,
                                opacity: hoveredItem === item.id ? 1 : 0,
                              }}
                              transition={{ delay: 0.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs font-mono bg-gold-500/20 text-gold-300 border-gold-500/30"
                              >
                                ARCHIVE #{item.id}
                              </Badge>
                            </motion.div>
                            <motion.div
                              initial={{ x: 20, opacity: 0 }}
                              animate={{
                                x: hoveredItem === item.id ? 0 : 20,
                                opacity: hoveredItem === item.id ? 1 : 0,
                              }}
                              transition={{ delay: 0.2 }}
                            >
                              <Badge variant="destructive" className="text-xs font-mono bg-red-600/80 backdrop-blur-sm">
                                {item.metadata.classification}
                              </Badge>
                            </motion.div>
                          </div>

                          {/* Magazine-style title */}
                          <motion.h3
                            className="font-bold bg-gradient-gold bg-clip-text text-lg leading-tight text-shadow-sm"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                              y: hoveredItem === item.id ? 0 : 10,
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.title}
                          </motion.h3>

                          {/* Magazine-style description */}
                          <motion.p
                            className="text-sm opacity-90 leading-relaxed font-serif italic"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                              y: hoveredItem === item.id ? 0 : 10,
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.3 }}
                          >
                            {item.description}
                          </motion.p>

                          {/* Magazine-style tags */}
                          <motion.div
                            className="flex flex-wrap gap-2 mt-3"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                              y: hoveredItem === item.id ? 0 : 10,
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.4 }}
                          >
                            {item.tags.map((tag, tagIndex) => (
                              <motion.div
                                key={tag}
                                initial={{ scale: 0 }}
                                animate={{ scale: hoveredItem === item.id ? 1 : 0 }}
                                transition={{ delay: 0.4 + tagIndex * 0.1 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="text-xs border-white/30 text-white/90 bg-white/10 backdrop-blur-sm"
                                >
                                  {tag}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Magazine-style metadata */}
                          <motion.div
                            className="text-xs font-mono opacity-70 mt-3 flex items-center gap-2"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                              y: hoveredItem === item.id ? 0 : 10,
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="w-1 h-1 bg-gold-400 rounded-full" />
                            <span>{item.metadata.date}</span>
                            {item.metadata.location && (
                              <>
                                <div className="w-1 h-1 bg-gold-400 rounded-full" />
                                <span>{item.metadata.location}</span>
                              </>
                            )}
                          </motion.div>

                          {/* Magazine-style examine button */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: hoveredItem === item.id ? 0 : 20,
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.6 }}
                          >
                            <Button
                              size="sm"
                              onClick={() => setSelectedItem(item)}
                              className="mt-4 w-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 border border-gold-500/30 hover:border-gold-400/50 backdrop-blur-sm transition-all duration-300"
                            >
                              <Eye className="w-3 h-3 mr-2" />
                              Examine Archive
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Magazine-style type indicator */}
                      <motion.div
                        className="absolute top-3 left-3"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs font-mono bg-black/70 text-white border-0 backdrop-blur-sm"
                        >
                          {item.type.toUpperCase()}
                        </Badge>
                      </motion.div>

                      {/* Magazine corner accent */}
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-gold-500/20" />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 m-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-slate-900/90 rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gold-600 bg-clip-text  mb-2">{selectedItem.title}</h2>
                    <p className="">{selectedItem.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <Image
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(selectedItem.title)}`
                  }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Classification</h4>
                    <Badge variant="destructive" className="mb-4">
                      {selectedItem.metadata.classification}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Date</h4>
                    <p className="text-gold-200 bg-gold-600/20 border border-gold-500/30 w-32 rounded-xl text-center">{selectedItem.metadata.date}</p>
                  </div>

                  {selectedItem.metadata.location && (
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">Location</h4>
                      <p className="text-gold-200 bg-gold-600/20 border border-gold-500/30 w-32 rounded-xl text-center">{selectedItem.metadata.location}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedItem.tags.map((tag) => (
                        <span className="text-gold-200 bg-gold-600/20 border border-gold-500/30 w-32 rounded-xl text-center">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Pen, Calendar, MapPin } from "lucide-react"

interface Note {
  id: string
  title: string
  content: string
  date: string
  location?: string
  type: "interview" | "memo" | "annotation" | "reflection"
  handwritten?: boolean
}

const directorNotes: Note[] = [
  {
    id: "001",
    type: "reflection",
    title: "On the Nature of Memory",
    content: `The film was never meant to be linear. Memory doesn't work that way—it fragments, distorts, reconstructs itself with each recollection. We wanted the audience to experience this directly, to feel the weight of forgotten moments surfacing like photographs in developer solution.

    The theater location became crucial. There's something about abandoned spaces that holds onto the past more tenaciously than occupied ones. The dust motes in the afternoon light, the way sound echoes differently in empty halls—these weren't just aesthetic choices, they were emotional necessities.`,
    date: "1987.06.15",
    location: "Post-production suite, Studio B",
  },
  {
    id: "002",
    type: "interview",
    title: "Interview with Lead Actress",
    content: `"The character of Elena exists in multiple states simultaneously—she's the woman she was, the woman she is, and the woman she might have been. Playing her required me to hold all these versions in my mind at once, like looking through a kaleidoscope where each turn reveals a different pattern from the same fragments."

    [Director's note: This insight fundamentally changed how we approached the mirror sequences in Act III.]`,
    date: "1987.04.22",
    location: "Makeup trailer",
    handwritten: true,
  },
  {
    id: "003",
    type: "memo",
    title: "Production Memo - The Archive Room",
    content: `TO: Art Department
    FROM: Director
    RE: Archive Room Set Design

    The room should feel like a place where time has stopped, but not peacefully. Think of it as a wound in reality where lost things collect. Every object should tell a story, but never the complete story.

    Reference materials: Cornell boxes, Wunderkammer, the basement of the Smithsonian that tourists never see.

    URGENT: Need samples of aged paper, vintage photograph processing chemicals for authentic smell.`,
    date: "1987.02.08",
  },
  {
    id: "004",
    type: "annotation",
    title: "Script Notes - Scene 23 (The Recognition)",
    content: `Original dialogue felt too explicit. The audience should understand Elena's realization through gesture, through the way light falls across her face, through the sudden stillness that comes with recognition.

    Cut: "I remember now..."
    Add: [Long pause. Elena's hand moves to her throat, fingers tracing a scar that isn't there.]

    The scar exists only in memory. The actress must make the audience see it.`,
    date: "1987.03.30",
    handwritten: true,
  },
]

export default function DirectorsNotes() {
  return (
    <div className="space-y-20">
      {/* Premium section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 backdrop-blur-xl border border-gold-500/20 rounded-full mb-8">
          <Quote className="w-5 h-5 text-gold-400" />
          <span className="text-gold-300 font-mono text-sm tracking-wider">DIRECTOR'S PERSONAL NOTES</span>
          <Pen className="w-5 h-5 text-gold-400" />
        </div>
        <p className="text-premium-300 font-serif text-lg max-w-2xl mx-auto leading-relaxed">
          Recovered fragments from the director's private collection — handwritten observations, production insights,
          and creative revelations from the making of a lost masterpiece.
        </p>
      </motion.div>

      {directorNotes.map((note, index) => (
        <motion.div
          key={note.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`max-w-5xl mx-auto ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
        >
          <Card
            className={`
          relative overflow-hidden shadow-2xl luxury-card
          ${note.handwritten ? "transform rotate-1 hover:rotate-0" : ""}
          ${note.type === "memo" ? "bg-slate-900/70" : "bg-slate-800/70"}
          hover:shadow-3xl transition-all duration-700 backdrop-blur-xl
          border border-gold-500/20 hover:border-gold-400/30
        `}
          >
            <CardContent className="p-12">
              {/* Premium header with enhanced styling */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant={note.type === "interview" ? "default" : "secondary"}
                      className="font-mono text-xs px-4 py-2 bg-gold-500/20 text-gold-300 border-gold-500/30"
                    >
                      {note.type.toUpperCase()}
                    </Badge>
                    {note.handwritten && (
                      <Badge variant="outline" className="text-xs px-4 py-2 border-gold-400/30 text-gold-400">
                        <Pen className="w-3 h-3 mr-2" />
                        HANDWRITTEN ORIGINAL
                      </Badge>
                    )}
                  </div>

                  <h3
                    className={`
                  text-3xl md:text-4xl font-bold mb-6 leading-tight
                  ${note.handwritten ? "font-serif text-gold-200" : "font-mono text-premium-100"}
                `}
                  >
                    {note.title}
                  </h3>
                </div>

                {note.type === "interview" && (
                  <div className="ml-8">
                    <Quote className="w-12 h-12 text-gold-400/30" />
                  </div>
                )}
              </div>

              {/* Enhanced content styling */}
              <div
                className={`
              prose prose-lg max-w-none mb-8 leading-relaxed
              ${note.handwritten ? "font-serif text-premium-200" : "font-sans text-premium-100"}
              ${note.type === "memo" ? "font-mono text-premium-200" : ""}
            `}
              >
                {note.content.split("\n\n").map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6 text-lg leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Premium footer */}
              <div className="flex items-center justify-between text-sm border-t border-gold-500/20 pt-6">
                <div className="flex items-center gap-6 text-premium-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span className="font-mono tracking-wide">{note.date}</span>
                  </div>
                  {note.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      <span className="italic">{note.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs text-gold-400 tracking-wider">ARCHIVE #{note.id}</div>
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                </div>
              </div>

              {/* Enhanced decorative elements */}
              {note.handwritten && (
                <>
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 border-2 border-gold-400/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <div className="absolute bottom-6 left-6 w-20 h-1 bg-gradient-to-r from-gold-400/30 to-transparent transform -rotate-12" />
                </>
              )}

              {note.type === "memo" && (
                <div className="absolute top-12 right-12 transform rotate-12">
                  <div className="border-2 border-red-500/60 text-red-400 px-4 py-2 font-mono text-xs font-bold backdrop-blur-sm bg-slate-900/50">
                    CONFIDENTIAL
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

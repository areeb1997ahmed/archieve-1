"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Heart, Sparkles } from "lucide-react"
import { PixelImage } from "@/components/magicui/pixel-image";
export default function MyStory() {
    return (
        <div className="relative">
            {/* Premium section background */}
            <div className="absolute inset-0 bg-gradient-to-br via-slate-800/60 to-slate-950/80 backdrop-blur-sm" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-400/3 rounded-full blur-3xl" />

            <div className="relative z-10 container mx-auto px-8 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 backdrop-blur-xl border border-gold-500/20 rounded-full mb-8">
                        <Heart className="w-5 h-5 text-gold-400" />
                        <span className="text-gold-300 font-mono text-sm tracking-wider">PERSONAL NARRATIVE</span>
                        <Sparkles className="w-5 h-5 text-gold-400" />
                    </div>



                    <div className="flex items-center justify-center gap-8 mb-8">
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-32"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1.2 }}
                            viewport={{ once: true }}
                        />
                        <div className="w-3 h-3 bg-gold-500 rotate-45" />
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent flex-1 max-w-32"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                {/* Story content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Portrait section */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Card className="luxury-card overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-700">
                            <CardContent className="p-8">
                                <div className="relative">
                                    {/* Vintage photo frame effect */}
                                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-inner">

                                        <Image
                                            src="https://picsum.photos/400/500?random=portrait"
                                            alt="Young artist portrait"
                                            width={400}
                                            height={500}
                                            className="w-full h-auto rounded-md sepia-[0.3] contrast-[1.1] brightness-[0.95]"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.src = "/placeholder.svg?height=500&width=400&text=Young Artist Portrait"
                                            }}
                                        />

                                        {/* Vintage photo caption */}
                                        <div className="mt-4 text-center">
                                            <p className="font-serif italic text-amber-800 text-sm">"The Artist as a Young Dreamer"</p>
                                            <p className="font-mono text-xs text-amber-600 mt-1">Circa 1985 - Age 8</p>
                                        </div>
                                    </div>

                                    {/* Decorative corner elements */}
                                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-gold-400/30" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-gold-400/30" />
                                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-gold-400/30" />
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-gold-400/30" />
                                </div>

                                {/* Artist's signature */}
                                <div className="mt-6 text-center">
                                    <Badge variant="outline" className="border-gold-400/30 text-gold-300 bg-gold-500/10">
                                        <Palette className="w-3 h-3 mr-2" />
                                        The Young Visionary
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Floating art elements */}
                        <motion.div
                            className="absolute -top-8 -right-8 w-16 h-16 bg-gold-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-500/20"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                            }}
                        >
                            <Palette className="w-8 h-8 text-gold-400" />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 -left-6 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-400/20"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <Eye className="w-6 h-6 text-gold-400" />
                        </motion.div>
                    </motion.div>

                    {/* Story text section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-gold-200 mb-4 font-serif">Through the Eyes of Wonder</h3>
                                <p className="text-lg text-premium-200 leading-relaxed font-serif">
                                    At eight years old, the world wasn't just something to observe—it was a living canvas waiting to be
                                    discovered. Every shadow cast by afternoon sunlight, every reflection in a puddle after rain, every
                                    face that passed by on the street held secrets that only a paintbrush could unlock.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-premium-300 leading-relaxed font-serif">
                                    The canvas became my translator, my voice when words felt too small for the enormity of what I saw.
                                    Colors weren't just red or blue—they were the warmth of my grandmother's laugh, the melancholy of
                                    empty playgrounds, the electric excitement of thunderstorms approaching.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-premium-300 leading-relaxed font-serif">
                                    Each brushstroke was a question:{" "}
                                    <em className="text-gold-300">
                                        "What if the sky could taste like honey? What if trees could dance? What if the space between
                                        raindrops held entire universes?"
                                    </em>
                                    Art wasn't just what I did—it was how I breathed, how I made sense of a world that seemed both
                                    infinite and intimate.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-slate-800/50 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 italic">
                                    <p className="text-gold-200 font-serif text-xl leading-relaxed">
                                        "In every painting, I wasn't just capturing what I saw—I was preserving the feeling of seeing it for
                                        the first time, over and over again. The world through my canvas wasn't just beautiful; it was
                                        alive, breathing, waiting to tell its story to anyone willing to listen with their eyes."
                                    </p>
                                    <div className="mt-4 text-right">
                                        <span className="text-premium-400 font-mono text-sm">— From the Artist's Journal, 1985</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-premium-300 leading-relaxed font-serif">
                                    Years later, when I discovered this lost archive, I realized that same wonder—that same desperate need
                                    to capture the uncapturable—lived in every frame, every sketch, every forgotten reel of film. Art
                                    isn't just about creating; it's about remembering how to see magic in the mundane, and preserving it
                                    for those who might have forgotten how to look.
                                </p>
                            </motion.div>
                        </div>

                        {/* Decorative quote marks */}
                        <div className="flex justify-between items-center mt-12 opacity-30">
                            <div className="text-6xl font-serif text-gold-400">"</div>
                            <div className="text-6xl font-serif text-gold-400 transform rotate-180">"</div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="flex items-center justify-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-gold-500 to-gold-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            viewport={{ once: true }}
                        />
                        <div className="w-2 h-2 bg-gold-500 rounded-full" />
                        <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">End of Chapter One</span>
                        <div className="w-2 h-2 bg-gold-500 rounded-full" />
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-gold-500 via-gold-500 to-transparent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

"use client"

import { useEffect, useState } from "react"

interface PageLoaderProps {
  isLoading: boolean
  duration?: number
}

export function PageLoader({ isLoading, duration = 2000 }: PageLoaderProps) {
  const [shouldRender, setShouldRender] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true)
    } else {
      const timer = setTimeout(() => setShouldRender(false), duration)
      return () => clearTimeout(timer)
    }
  }, [isLoading, duration])

  if (!shouldRender) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Main loader overlay with blur fade */}
      <div
        className={`absolute inset-0 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 transition-all ease-in-out ${
          isLoading ? "opacity-100 scale-100 backdrop-blur-sm" : "opacity-0 scale-110 backdrop-blur-none"
        }`}
        style={{
          transitionDuration: `${duration}ms`,
          transformOrigin: "top right",
        }}
      />

      {/* Animated diagonal sweep with blur */}
      <div
        className={`absolute inset-0 transition-all ease-in-out ${
          isLoading
            ? "opacity-100 translate-x-0 translate-y-0 backdrop-blur-md"
            : "opacity-0 -translate-x-full translate-y-full backdrop-blur-none"
        }`}
        style={{
          transitionDuration: `${duration}ms`,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
          transformOrigin: "top right",
        }}
      />

      {/* Additional blur layer for enhanced effect */}
      <div
        className={`absolute inset-0 transition-all ease-in-out ${
          isLoading ? "opacity-60 blur-sm" : "opacity-0 blur-none"
        }`}
        style={{
          transitionDuration: `${duration * 0.8}ms`,
          background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Loading content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center transition-all duration-500 ${
            isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Spinning loader */}
          <div className="relative mb-4">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
          </div>

          {/* Loading text */}
          <p className="text-white text-lg font-medium tracking-wide">Loading...</p>

          {/* Progress dots */}
          <div className="flex justify-center space-x-1 mt-3">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>

      {/* Enter text at bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className={`text-center transition-all duration-700 ${
            isLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/80 text-sm font-medium tracking-wide mb-2">
            Press <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">ENTER</span> to continue
          </p>
          <div className="w-8 h-0.5 bg-white/40 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  )
}

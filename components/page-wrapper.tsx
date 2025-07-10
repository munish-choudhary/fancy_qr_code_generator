"use client"

import type React from "react"
import { InteractiveBackground } from "./interactive-background"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  showInteractiveBackground?: boolean
}

export function PageWrapper({ children, className = "", showInteractiveBackground = true }: PageWrapperProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Interactive Background */}
      {showInteractiveBackground && <InteractiveBackground />}

      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4wMiI+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30 dark:opacity-100"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

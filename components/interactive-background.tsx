"use client"

import { useEffect, useRef, useState } from "react"

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  opacity: number
  color: string
}

interface InteractiveBackgroundProps {
  dotCount?: number
  maxDistance?: number
  animationSpeed?: number
  className?: string
}

export function InteractiveBackground({
  dotCount = 50,
  maxDistance = 150,
  animationSpeed = 0.02,
  className = "",
}: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize dots
    const initDots = () => {
      dotsRef.current = []
      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        dotsRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6", // blue or purple
        })
      }
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - dot.baseX
        const dy = mouseRef.current.y - dot.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move dot based on mouse proximity
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 30
          const moveY = Math.sin(angle) * force * 30

          dot.x = dot.baseX + moveX
          dot.y = dot.baseY + moveY
          dot.opacity = Math.min(0.8, dot.opacity + force * 0.3)
        } else {
          // Return to base position
          dot.x += (dot.baseX - dot.x) * animationSpeed
          dot.y += (dot.baseY - dot.y) * animationSpeed
          dot.opacity = Math.max(0.1, dot.opacity - 0.01)
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `${dot.color}${Math.floor(dot.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Draw connections to nearby dots
        dotsRef.current.forEach((otherDot) => {
          const dx = dot.x - otherDot.x
          const dy = dot.y - otherDot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = ((100 - distance) / 100) * 0.2
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initDots()
    animate()

    // Event listeners
    window.addEventListener("resize", () => {
      resizeCanvas()
      initDots()
    })
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, dotCount, maxDistance, animationSpeed])

  if (!mounted) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: "transparent" }}
    />
  )
}

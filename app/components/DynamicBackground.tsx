"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const DynamicBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const width = window.innerWidth
    const height = window.innerHeight

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

    const paths: SVGPathElement[] = []
    const numPaths = 5
    const colors = ["#8B5CF6", "#6D28D9", "#4C1D95", "#7C3AED", "#5B21B6"]

    for (let i = 0; i < numPaths; i++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("fill", "none")
      path.setAttribute("stroke", colors[i])
      path.setAttribute("stroke-width", "2")
      path.setAttribute("opacity", "0.5")
      svg.appendChild(path)
      paths.push(path)
    }

    const animate = (mouseX: number = width / 2, mouseY: number = height / 2) => {
      paths.forEach((path, index) => {
        const t = Date.now() / 2000 + index * 1000
        const points = []
        for (let i = 0; i <= 100; i++) {
          const x = i * (width / 100)
          const y =
            height / 2 +
            Math.sin(i / 10 + t) * 50 +
            Math.cos(i / 20 + t) * 50 +
            ((mouseY - height / 2) / height) * 100 * Math.sin(i / 20)
          points.push(`${x},${y}`)
        }
        path.setAttribute("d", `M${points.join(" L")}`)
      })

      requestAnimationFrame(() => animate(mouseX, mouseY))
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      animate(event.clientX, event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <svg ref={svgRef} className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" />
}

export default DynamicBackground


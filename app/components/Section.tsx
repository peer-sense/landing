"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionProps {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
}

export function Section({ title, description, icon, children }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">{icon}</div>
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{description}</p>
        {children}
      </div>
    </motion.section>
  )
}
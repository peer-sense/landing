"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { LineChart } from "lucide-react"

export default function ProductivityInsights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const progress = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (isInView) {
      progress.set(100)
    }
  }, [isInView, progress])

  const height = useTransform(progress, [0, 100], ["0%", "100%"])

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <LineChart className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Productivity Insights</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Gain valuable insights into your work patterns and boost your efficiency
        </p>
        <motion.div
          ref={ref}
          className="relative h-64 bg-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="absolute bottom-0 left-0 w-full bg-primary" style={{ height }} />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            +30% Productivity
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


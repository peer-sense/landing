"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { LineChart as LucideLineChart } from "lucide-react"
import { Section } from "./Section"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { addDays, format } from "date-fns"

const generateData = () => {
  const startDate = new Date()
  return Array.from({ length: 7 }, (_, i) => ({
    date: format(addDays(startDate, i), "MMM dd"),
    productivity: Math.floor(Math.random() * 30) + 60,
    focus: Math.floor(Math.random() * 20) + 40,
    meetings: Math.floor(Math.random() * 15) + 30,
  }))
}

export function ProductivityInsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [data, setData] = useState(generateData())
  const chartProgress = useSpring(0, { stiffness: 50, damping: 20 })
  const statsProgress = useSpring(0, { stiffness: 60, damping: 15 })

  const productivityScore = useTransform(statsProgress, (p) => `${Math.round(p * 0.85)}%`)
  const focusTime = useTransform(statsProgress, (p) => `${Math.round(p * 0.72)}%`)
  const meetingEfficiency = useTransform(statsProgress, (p) => `${Math.round(p * 0.93)}%`)

  useEffect(() => {
    if (isInView) {
      chartProgress.set(100)
      statsProgress.set(100)
    }
  }, [isInView, chartProgress, statsProgress])

  return (
    <Section
      title="Productivity Insights"
      description="Gain valuable insights into your work patterns and boost your efficiency"
      icon={<LucideLineChart className="w-12 h-12 text-primary" />}
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div
          className="lg:col-span-2 bg-black/20 rounded-xl p-6"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-6">Weekly Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="focusGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="productivity"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#productivityGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="focus"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#focusGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div className="space-y-6">
          {[{ title: "Productivity Score", value: productivityScore, color: "bg-primary" },
            { title: "Focus Time", value: focusTime, color: "bg-primary" },
            { title: "Meeting Efficiency", value: meetingEfficiency, color: "bg-green-500" }].map(
            ({ title, value, color }, index) => (
              <div key={index} className="bg-black/20 rounded-xl p-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">{title}</h4>
                <div className="text-3xl font-bold">
                  <motion.span>{value}</motion.span>
                </div>
                <div className="h-2 bg-muted mt-2 rounded-full overflow-hidden">
                  <motion.div className={`h-full ${color}`} style={{ width: value }} />
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </Section>
  )
}

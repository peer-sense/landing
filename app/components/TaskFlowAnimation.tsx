import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const tasks = [
  { id: 1, color: "bg-blue-500/20 dark:bg-blue-500/30" },
  { id: 2, color: "bg-purple-500/20 dark:bg-purple-500/30" },
  { id: 3, color: "bg-green-500/20 dark:bg-green-500/30" },
  { id: 4, color: "bg-orange-500/20 dark:bg-orange-500/30" },
  { id: 5, color: "bg-pink-500/20 dark:bg-pink-500/30" },
  { id: 6, color: "bg-cyan-500/20 dark:bg-cyan-500/30" },
]

export function TaskFlowAnimation() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      {tasks.map((task, index) => (
        <motion.div
          key={task.id}
          initial={{ 
            opacity: 0,
            y: 100,
            x: -100,
            scale: 0.8
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            y: [-20, 20, -20],
            x: [-20, 20, -20],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className="absolute"
          style={{
            left: `${(index * 20) + 10}%`,
            top: `${(index * 15) + 20}%`,
          }}
        >
          <Card className={`w-40 h-20 ${task.color} border-none shadow-2xl backdrop-blur-md`}>
            <div className="h-full w-full p-4">
              <div className="h-2 w-1/2 bg-current opacity-20 rounded mb-2" />
              <div className="h-2 w-3/4 bg-current opacity-20 rounded" />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
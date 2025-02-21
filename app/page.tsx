"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const heroTextY = useTransform(scrollY, [0, 300], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md" : ""}`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">PEER SENSE AI</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary">
            Home
          </Link>
          <Link href="/events" className="text-sm hover:text-primary">
            Events
          </Link>
          <Link href="/docs" className="text-sm hover:text-primary">
            Docs
          </Link>
          <Button variant="ghost" className="text-sm">
            Login
          </Button>
          <Button className="text-sm">Register</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-24 text-center space-y-6 min-h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            AI-Powered Task Management
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experience the future of productivity with PeerSense AI. Our intelligent system adapts to your work style,
            making task management effortless and intuitive.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Intelligent Features</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Experience the next generation of scheduling with our AI-powered features
        </p>
        <div className="grid gap-6 max-w-5xl mx-auto">
          <FeatureCard
            title="Personalized Scheduling"
            highlight="Unlock your true productivity potential with schedules tailored to your personality and energy levels."
            description="PeerSense AI customizes schedules based on your unique personality and work preferences."
          />
          <FeatureCard
            title="Smart Mood & Energy Tracking"
            highlight="Let your mood and energy guide your schedule, ensuring you tackle tasks when you're most capable."
            description="The AI analyzes your mood and energy throughout the day, adjusting your tasks to match your current state for better performance."
          />
          <FeatureCard
            title="Google Calendar Integration"
            highlight="Effortlessly syncs with your Google Calendar to transform how you organize your day—no setup required."
            description="PeerSense AI integrates with your existing Google Calendar to provide an effortless experience."
          />
          <FeatureCard
            title="Optimized Group Scheduling"
            highlight="Enhance teamwork with AI-driven scheduling that accounts for peer dynamics and group productivity."
            description="PeerSense AI ensures that group activities align with everyone's optimal work patterns."
          />
          <FeatureCard
            title="Smart Travel Planning"
            highlight="Plan your travel and appointments with ease—let the AI handle the logistics for stress-free scheduling."
            description="PeerSense AI assists in planning travel and managing appointments, optimizing timing based on location and traffic."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Calendar AI work?</AccordionTrigger>
              <AccordionContent>
                Calendar AI uses advanced machine learning algorithms to analyze your behavior, preferences, and energy
                patterns throughout the day. It integrates seamlessly with your existing calendar (like Google Calendar)
                and dynamically adapts your schedule. Based on your productivity and mood, it recommends optimal times
                for tasks, meetings, and breaks, ensuring you work smarter, not harder.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>When will the product be available?</AccordionTrigger>
              <AccordionContent>
                PeerSense AI is currently in the beta phase, and we're actively refining the product based on user
                feedback. We plan to officially launch the full version in Q2 2025. Stay tuned for updates, and feel
                free to join the waitlist for early access!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my calendar data secure?</AccordionTrigger>
              <AccordionContent>
                We take your privacy and security seriously. PeerSense AI uses end-to-end encryption to protect your
                calendar data. We also follow best practices in data security to ensure that your personal information
                remains private. Additionally, we never access or share your data without your explicit permission
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What calendar platforms are supported?</AccordionTrigger>
              <AccordionContent>
                Currently, PeerSense AI supports Google Calendar for seamless integration, with plans to expand to other
                platforms like Microsoft Outlook and Apple Calendar in the near future. Stay updated as we add more
                calendar platforms to make scheduling even easier for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How does personality-based scheduling work?</AccordionTrigger>
              <AccordionContent>
                When you sign up, PeerSense AI asks you a series of questions about your work habits, focus patterns,
                and collaboration style. Using this data, AI assigns a personalized scheduling profile and continuously
                refines it over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I change my personality type manually?</AccordionTrigger>
              <AccordionContent>
                No, but the AI *adjusts dynamically* based on your work patterns. If your schedule feels incorrect, go
                to *Settings - Work Preferences* and adjust your scheduling needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Does PeerSense AI support team-wide scheduling?</AccordionTrigger>
              <AccordionContent>
                Yes! It syncs with your teams Google Calendars to *optimize meeting times* and collaboration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary">
            <Mail className="w-4 h-4 mr-2" />
            Email Us
          </Button>
          <Button variant="secondary">
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          <Button variant="secondary">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  title,
  highlight,
  description,
}: {
  title: string
  highlight: string
  description: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="bg-black border-gray-800 transition-all duration-300 hover:border-primary/50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-primary mb-2">{highlight}</p>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}


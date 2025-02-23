"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import ProductivityInsights from "./components/ProductivityInsights"
import {
  Github,
  Mail,
  Twitter,
  Briefcase,
  User,
  Users,
  BarChart,
  Brain,
  Sliders,
  Rocket,
  LineChart,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// ... (rest of the imports and component definitions remain the same)

export default function Home() {
  // ... (previous state and refs remain the same)
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
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
      </motion.nav>

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

      {/* AI Integration Showcase */}
      <AIIntegrationShowcase />

      {/* Productivity Insights */}
      <ProductivityInsights />

      {/* Customization Options */}
      <CustomizationOptions />

      {/* Getting Started Steps */}
      <GettingStartedSteps />

      {/* For Individuals Section */}
      <Section
        title="Personalized Scheduling for Individuals"
        description="Optimize your daily routine and boost productivity with AI-driven personal scheduling."
        icon={<User className="w-12 h-12 text-primary" />}
      >
        <FeatureList
          features={[
            "Smart task prioritization based on your energy levels",
            "Personalized work-life balance recommendations",
            "Adaptive scheduling that learns from your habits",
          ]}
        />
      </Section>

      {/* For Corporations Section */}
      <Section
        title="Enterprise-Grade Scheduling Solutions"
        description="Streamline your organization's workflow with our corporate scheduling AI."
        icon={<Briefcase className="w-12 h-12 text-primary" />}
      >
        <FeatureList
          features={[
            "Efficient team coordination and resource allocation",
            "Automated meeting scheduling across departments",
            "Data-driven insights for optimizing corporate productivity",
          ]}
        />
      </Section>

      {/* Team Collaboration Section */}
      <Section
        title="Enhance Team Collaboration"
        description="Foster seamless teamwork with AI-powered group scheduling and task management."
        icon={<Users className="w-12 h-12 text-primary" />}
      >
        <FeatureList
          features={[
            "Intelligent meeting time suggestions for optimal attendance",
            "Collaborative task boards with AI-assisted assignments",
            "Real-time updates and notifications for team members",
          ]}
        />
      </Section>

      {/* Analytics Dashboard Section */}
      <Section
        title="Insightful Analytics Dashboard"
        description="Gain valuable insights into your productivity and team performance."
        icon={<BarChart className="w-12 h-12 text-primary" />}
      >
        <FeatureList
          features={[
            "Comprehensive productivity reports and trends",
            "Time allocation analysis for individuals and teams",
            "AI-generated recommendations for efficiency improvements",
          ]}
        />
      </Section>

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

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="PeerSense AI has revolutionized how I manage my time. It's like having a personal assistant that truly understands my work style."
            author="Sarah J., Freelance Designer"
          />
          <TestimonialCard
            quote="As a CEO, time is my most valuable asset. PeerSense AI has helped me optimize my schedule and boost my team's productivity significantly."
            author="Michael R., Tech Startup CEO"
          />
          <TestimonialCard
            quote="The team collaboration features are game-changing. We've seen a 30% increase in meeting efficiency since adopting PeerSense AI."
            author="Emily L., Project Manager"
          />
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

// ... (rest of the component definitions remain the same)

function AIIntegrationShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <Section
      title="AI Integration Showcase"
      description="Experience the power of AI in every aspect of your scheduling"
      icon={<Brain className="w-12 h-12 text-primary" />}
    >
      <motion.div
        ref={ref}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[
          {
            title: "Natural Language Processing",
            description: "Understand and process your scheduling requests in plain English",
          },
          {
            title: "Predictive Analytics",
            description: "Forecast your future scheduling needs based on past patterns",
          },
          {
            title: "Machine Learning Optimization",
            description: "Continuously improve scheduling suggestions as you use the app",
          },
          {
            title: "Sentiment Analysis",
            description: "Detect your mood from communication and adjust schedules accordingly",
          },
          {
            title: "Anomaly Detection",
            description: "Identify unusual patterns in your schedule and suggest improvements",
          },
          {
            title: "Reinforcement Learning",
            description: "Adapt to your preferences over time for personalized scheduling",
          },
        ].map((item, index) => (
          <motion.div key={index} variants={cardVariants} transition={{ duration: 0.5 }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function ProductivityInsights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const progress = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (isInView) {
      progress.set(100)
    }
  }, [isInView, progress])

  return (
    <Section
      title="Productivity Insights"
      description="Gain valuable insights into your work patterns and boost your efficiency"
      icon={<LineChart className="w-12 h-12 text-primary" />}
    >
      <motion.div
        ref={ref}
        className="relative h-64 bg-gray-800 rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="absolute bottom-0 left-0 w-full bg-primary" style={{ height: progress }} />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          +30% Productivity
        </motion.div>
      </motion.div>
    </Section>
  )
}

function CustomizationOptions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <Section
      title="Customization Options"
      description="Tailor PeerSense AI to fit your unique workflow and preferences"
      icon={<Sliders className="w-12 h-12 text-primary" />}
    >
      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        {[
          "Personalized UI themes",
          "Custom notification settings",
          "Flexible scheduling rules",
          "Integration with your favorite tools",
          "Customizable AI behavior",
          "Tailored reporting and analytics",
        ].map((option, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-4"
          >
            <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{option}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function GettingStartedSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const steps = [
    { title: "Sign Up", description: "Create your PeerSense AI account" },
    { title: "Connect Calendar", description: "Integrate with your existing calendar" },
    { title: "Set Preferences", description: "Customize AI to match your work style" },
    { title: "Start Scheduling", description: "Let AI optimize your daily routine" },
  ]

  return (
    <Section
      title="Getting Started is Easy"
      description="Follow these simple steps to revolutionize your scheduling"
      icon={<Rocket className="w-12 h-12 text-primary" />}
    >
      <motion.div
        ref={ref}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariants} transition={{ duration: 0.5 }} className="text-center">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-2xl font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index + 1}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
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

function Section({ title, description, icon, children }) {
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

function FeatureList({ features }) {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function TestimonialCard({ quote, author }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <p className="text-lg mb-4">"{quote}"</p>
      <p className="text-sm text-muted-foreground">- {author}</p>
    </motion.div>
  )
}


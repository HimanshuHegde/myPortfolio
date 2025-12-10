"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Binary,
} from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiSupabase,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiUipath,
  SiNextdotjs,
  SiSocketdotio,
  SiAuth0,
  SiExpress,
  SiPrisma,
  SiStorybook,
  SiTailwindcss,
  SiVscodium,
  SiReact,
  SiCoffeescript,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc";

interface BannerState {
  show: boolean
  message: string
  type: "success" | "error"
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [banner, setBanner] = useState<BannerState>({
    show: false,
    message: "",
    type: "success",
  })

  // Track mouse position for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-dismiss banner after 2 seconds
  useEffect(() => {
    if (banner.show) {
      const timer = setTimeout(() => {
        setBanner((prev) => ({ ...prev, show: false }))
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [banner.show])

  const showBanner = (message: string, type: "success" | "error") => {
    setBanner({ show: true, message, type })
  }

  const projects = [
    {
      title: "VidSync",
      description:
        " VidSync — Real-time video syncing platform using Next.js and Socket.IO. Enables synchronized playback for group viewing across devices.",
      techStack: ["React", "Next.js", "WebSocket", "Socket.io", "YouTube Api", "Tailwind", "Node js"],
      githubUrl: "https://github.com/HimanshuHegde/vidsync",
      liveUrl: "https://vidsync-green.vercel.app",
    },
    {
      title: "React Epic Trails DS",
      description:
        "React design system using Storybook for scalable, consistent, and accessible UI components for development. Built for reusable, component-based web apps.",
      techStack: ["Next.js", "React", "Tailwind", "StoryBook", "Node js", "npm"],
      githubUrl: "https://github.com/HimanshuHegde/react-epic-trails-ds",
      liveUrl: "https://react-epic-trails-ds.vercel.app/",
    },
    {
      title: "Email Aggregator ",
      description:
        "Developed a real-time email management system with IMAP sync, Elasticsearch-powered search, email sending, and AI-based categorization integrated with Slack/webhooks. ",
      techStack: ["React", "Prisma ORM", "Tailwind", "PostgreSQL", "Node js", "Express js", "Socket.io", "gemini api", "IMAP connections", "Nodemailer", "Slack notifications", "Webhooks", "Docker"],
      githubUrl: "https://github.com/HimanshuHegde/Email-Aggregator",
      liveUrl: "https://email-aggregator-ten.vercel.app/",
    },
    {
      title: "Character Info App ",
      description:
        " User-driven anime character database with edit history, admin approval, and role-based access. Built for adding and managing character details.",
      techStack: ["React", "Next.js", "Prisma ORM", "Tailwind", "Auth js", "MongoDB", "Node js"],
      githubUrl: "https://github.com/HimanshuHegde/character_info_app",
      liveUrl: "https://character-info-app.vercel.app",
    },
    {
      title: "CPRM-Prototype",
      description:
        "Built a complete hospital management system prototype for UDAL that helps hospitalsmanage patients, resources, and emergencies in real-time.",
      techStack: ["React", "Express.js", "Tailwind", "node js", "PostgreSQL", "Prisma ORM"],
      githubUrl: "https://github.com/HimanshuHegde/CPRM-Prototype",
      liveUrl: "https://centralized-patient-resource-manage.vercel.app/",
    },
  ]

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "C/C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: SiCoffeescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "SQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Postman", icon: SiPostman },
    { name: "Supabase", icon: SiSupabase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "UiPath", icon: SiUipath },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "Auth.js", icon: SiAuth0 },
    { name: "Express.js", icon: SiExpress },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "Storybook", icon: SiStorybook },
    { name: "React Native", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "ProtoBuf", icon: Binary },
  ]

  const workExperience = [
    {
      company: "UDAL DC FELLOWSHIP",
      position: "Software Developer Intern",
      duration: "Aug 2025 - Nov 2025",
      location: "Mangaluru",
      description: "Built a system that powers 72 hospital screens with real-time updates for the blood bank, OT and pharmacy.",
      achievements: [
        "Successfully deployed centralized real-time data management system at Wenlock Hospital",
        "Automated Blood Bank inventory updates from Excel to digital displays",
        "Automated Pharmacy stock updates with real-time synchronization",
        "Implemented Kannada transliteration for improved accessibility",
        "Established modular microservice-based architecture for scalability",
        "Integrated multiple hospital department modules under one centralized app",
        "Achieved seamless local network deployment with firewall issue resolution",
        "Reduced manual operational work and increased transparency and accessibility"
      ]
    }, {
      company: "Kreekarvat Technologies",
      position: "Freelance Web Developer",
      duration: "Nov 2024 - Mar 2025",
      location: "Mangaluru",
      description:
        "Built responsive, high-quality UIs using React, Next.js, and Tailwind CSS. Collaborated with freelancers to deliver web projects on time and ensure client satisfaction.",
      achievements: [
        "Developed responsive and user-friendly web interfaces",
        "Delivered multiple web projects on time with high client satisfaction",
        "Collaborated effectively with freelance teams and clients",
        "Implemented modern UI/UX best practices using Tailwind CSS",
        "Optimized web applications for performance and accessibility",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      company: "A J Institute of Medical Sciences and Research Center",
      position: "Full Stack Developer Intern",
      duration: "Sept 2023 - Aug 2024",
      location: "Mangaluru",
      description:
        "Developed responsive, user-friendly interfaces using React, Next.js, and Tailwind CSS. Collaborated with freelancers and clients to deliver high-quality projects on time.",
      achievements: [
        "Built responsive web applications for healthcare management",
        "Collaborated with cross-functional teams to deliver projects on schedule",
        "Implemented modern frontend technologies for improved user experience",
        "Worked closely with clients to understand requirements and deliver solutions",
        "Gained hands-on experience in full-stack development practices",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Node.js", "HTML", "CSS"],
    },
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    const result = await res.json()
    if (res.ok) {
      showBanner("Email sent successfully!", "success")
    } else {
      showBanner(`Error: ${result.message}`, "error")
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Himanshu Hegde.pdf"
    link.download = "/Himanshu Hegde.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Banner Notification */}
      <div
        className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl transform transition-all duration-500 ease-in-out ${banner.show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div
          className={`mx-4 mt-4 p-4 rounded-lg shadow-2xl border ${banner.type === "success"
              ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-100"
              : "bg-red-500/20 border-red-400/50 text-red-100"
            }`}
        >
          <div className="flex items-center gap-3 max-w-fit mx-auto">
            {banner.type === "success" ? (
              <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
            ) : (
              <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
            )}
            <span className="font-medium">{banner.message}</span>

          </div>
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 animate-gradient-shift"></div>
      {/* Subtle animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-violet-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-float opacity-35"></div>

      </div>

      {/* Mouse follower gradient */}
      <div
        className="fixed pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.5), transparent 40%)`,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Himanshu Hegde
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  Experience
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a
                  href="#contact"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-800/50 animate-fade-in">
                <div className="flex flex-col space-y-4">
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Experience
                  </a>

                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 h-[100vh]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-12">
                <div className="relative inline-block mb-8">
                  <img
                    src="/Himanshu_Hegde.jpeg"
                    alt="Profile"
                    className="w-40 h-40 rounded-full mx-auto border-2 border-emerald-400/30 shadow-2xl shadow-emerald-400/20 animate-float"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 animate-pulse-slow"></div>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-4 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Himanshu Hegde
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl mb-8 font-medium animate-fade-in-up animation-delay-200">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                  A tech enthusiast with a strong interest in both frontend and backend development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up animation-delay-600">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700/50 hover:border-emerald-400/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="text-gray-300 hover:text-emerald-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/himanshuhegde797/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} className="text-gray-300 hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="mailto:himanshuhegde797@gmail.com"
                    className="p-3 bg-gray-800/50 border border-gray-700/50 hover:border-violet-400/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} className="text-gray-300 hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-gray-400 animate-fade-in-up animation-delay-200">Get to know me better</p>
            </div>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6 animate-fade-in-up animation-delay-400">
              <p className="text-center">
                Hi! I'm Himanshu Hegde, I am a tech enthusiast with a strong interest in both frontend and backend development. I enjoy building
                intuitive user interfaces as much as I enjoy working on the logic and architecture behind them. I'm
                always eager to learn new technologies and deeply curious about how things work under the hood.
                Currently pursuing a B.E degree at AJIET (expected 2026), I combine academic learning with hands-on
                practice, aiming to build well-rounded, scalable, and maintainable applications.
              </p>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                A collection of projects that showcase my skills and passion for development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border border-gray-700/50 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-500 group backdrop-blur-sm animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white group-hover:text-emerald-400 transition-colors text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-700/50 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-300 border-0 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-lg text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 backdrop-blur-sm animate-fade-in-up hover:scale-110 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Work Experience
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                My professional journey and key contributions
              </p>
            </div>

            <div className="space-y-8">
              {workExperience.map((experience, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border border-gray-700/50 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-400/10 transition-all duration-500 group backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-white group-hover:text-violet-400 transition-colors text-xl mb-2">
                          {experience.position}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <span className="font-medium text-emerald-400">{experience.company}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="secondary"
                          className="bg-violet-500/20 text-violet-300 border-violet-400/30 hover:bg-violet-500/30 transition-colors"
                        >
                          {experience.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed mt-4">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {experience.achievements && <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements?.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    }
                    {experience.technologies && <div>
                      <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies?.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-700/50 text-gray-300 hover:bg-violet-500/20 hover:text-violet-300 border-0 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-gray-400 animate-fade-in-up animation-delay-200">
                Let's discuss opportunities and ideas
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in-up animation-delay-400">
                <h3 className="text-xl font-semibold mb-6 text-emerald-400">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <Mail className="text-gray-400 group-hover:text-emerald-400 transition-colors" size={18} />
                    </div>
                    <span className="text-gray-300">himanshuhegde797@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Phone className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={18} />
                    </div>
                    <span className="text-gray-300">+91 7975082596</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                      <MapPin className="text-gray-400 group-hover:text-violet-400 transition-colors" size={18} />
                    </div>
                    <span className="text-gray-300">Mangalore,India</span>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <Card className="bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm animate-fade-in-up animation-delay-600">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/50"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/50"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/50 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white transition-all duration-300 shadow-lg shadow-emerald-500/25"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500">© 2024 Himanshu Hegde. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer> */}
      </div>
    </div>
  )
}

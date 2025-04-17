import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Sample projects - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for financial portfolio tracking",
      tags: ["TypeScript", "Chart.js", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking",
      tags: ["React Native", "Redux", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hello, I'm <span className="text-gray-300">Your Name</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Full-stack developer specializing in creating elegant, functional, and user-friendly applications.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#projects">
                <Button
                  variant="default"
                  className="bg-nigerian hover:bg-nigerian-dark text-white transition-all duration-300"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-nigerian text-nigerian hover:bg-nigerian hover:text-white transition-all duration-300"
                >
                  Read My Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 md:text-xl">
                I'm a passionate developer with expertise in building modern web applications. With a strong foundation
                in both frontend and backend technologies, I create seamless user experiences that solve real-world
                problems.
              </p>
              <p className="text-gray-500 md:text-xl">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or writing about my experiences on my blog.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-black">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile"
                  className="object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-nigerian hover:border-nigerian hover:text-white transition-all duration-300"
              >
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <a
                href="mailto:your.email@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-black text-black hover:bg-nigerian hover:border-nigerian hover:text-white transition-all duration-300 rounded-md"
                aria-label="Email me"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-black text-black hover:bg-nigerian hover:border-nigerian hover:text-white transition-all duration-300 rounded-md"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-black text-black hover:bg-nigerian hover:border-nigerian hover:text-white transition-all duration-300 rounded-md"
                aria-label="GitHub profile"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

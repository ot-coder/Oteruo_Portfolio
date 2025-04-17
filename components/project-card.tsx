"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-nigerian bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <ArrowUpRight className="text-white h-10 w-10" />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-500 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium bg-nigerian/10 text-nigerian rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

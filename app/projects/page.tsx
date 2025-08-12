import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AllProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black text-white">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                Explore all of my projects. Click a card to open the live demo, or use the buttons for the repo and demo.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-nigerian hover:border-nigerian hover:text-white transition-all duration-300"
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

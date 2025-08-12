import type { Project } from "../types"

export const projects: Project[] = [
    {
        id: 1,
        title: "Interactive Rap Page",
        description: "A simple chat page which upcoming producers or lyricists can make use of Open AI to generate lyrics",
        tags: ["Typescript", "Node.js"],
        image: "/rap-page.png?height=400&width=600",
        repoUrl: "https://github.com/ot-coder/rap-page",
        liveUrl: "https://rap-page.vercel.app",
    },
    {
        id: 2,
        title: "Dino Game",
        description: "Personal attempt at the famous interactive dinosaur game",
        tags: ["Java"],
        image: "/dino-app.png?height=400&width=600",
        repoUrl: "https://github.com/ot-coder/DinoApp",
        liveUrl: "https://github.com/ot-coder/DinoApp",
    },
    {
        id: 3,
        title: "Footie For Life",
        description: "Ticketing and research help for football fans everywhere",
        tags: ["TypeScript", "CSS", "JavaScript", "FireBase"],
        image: "/footie.png?height=400&width=600",
        repoUrl: "https://github.com/ot-coder/FootieForLife",
        liveUrl: "https://footie-for-life.vercel.app",
    },
    {
        id: 4,
        title: "Job Tracker",
        description: "Simple Site built to automatically keep track of Job applications",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Google Cloud"],
        image: "/job_tracker.png?height=400&width=600",
        repoUrl: "https://github.com/ot-coder/job-tracker",
        liveUrl: "",
    },
]
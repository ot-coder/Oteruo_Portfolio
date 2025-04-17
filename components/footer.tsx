import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold">Oteruo Ogbo</h3>
            <p className="text-sm text-gray-400">Software Developer</p>
            <p className="text-sm text-gray-400">Shaping the digital future.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href="/" className="text-sm text-gray-400 hover:text-nigerian transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm text-gray-400 hover:text-nigerian transition-colors">
              About
            </Link>
            <Link href="/#projects" className="text-sm text-gray-400 hover:text-nigerian transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-nigerian transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm text-gray-400 hover:text-nigerian transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:ogboanthony315@gmail.com"
                className="text-gray-400 hover:text-nigerian transition-colors"
                aria-label="Email me"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/oteruo-ogbo-0174031a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nigerian transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ot-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nigerian transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Ogbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

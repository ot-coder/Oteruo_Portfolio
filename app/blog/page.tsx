import Link from "next/link"
import { getAllPosts } from "@/lib/blog-utils"

export default function BlogPage() {
  // In a real application, you would fetch this data from a CMS or database
  const posts = getAllPosts()

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">My Blog</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Thoughts, ideas, and learnings from my journey as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="space-y-4 overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={post.coverImage || "/placeholder.svg?height=300&width=500"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <time dateTime={post.date} className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="mt-2 text-2xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-gray-500 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-nigerian">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

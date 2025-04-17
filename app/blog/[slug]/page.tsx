import { getPostBySlug, getAllPosts } from "@/lib/blog-utils"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <article className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-nigerian mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <div className="mx-auto max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <time className="text-sm text-muted-foreground" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {post.coverImage && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full object-cover"
                width={1000}
                height={500}
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </main>
  )
}

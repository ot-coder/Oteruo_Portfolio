"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// In a real application, this would be connected to a backend API
// This is a simplified example for demonstration purposes
export default function CreateBlogPost() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend API
      console.log({
        title,
        excerpt,
        content,
        coverImage,
        date: new Date().toISOString(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to blog page after successful submission
      router.push("/blog")
      router.refresh()
    } catch (error) {
      console.error("Error creating blog post:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter post title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
                placeholder="Brief summary of your post"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image URL (optional)</Label>
              <Input
                id="coverImage"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content (HTML)</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="<p>Your blog post content in HTML format</p>"
                rows={10}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-nigerian hover:bg-nigerian-dark">
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

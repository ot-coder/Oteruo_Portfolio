// This is a simple in-memory blog post storage
// In a real application, you would fetch this data from a CMS, database, or file system

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
}

// Sample blog posts
const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-01-15",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
      <p>Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.</p>
      <h2>Why Next.js?</h2>
      <p>Next.js provides a solution to many of the common challenges when building React applications:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>Automatic code splitting</li>
        <li>Client-side routing</li>
        <li>API routes</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      <p>Getting started with Next.js is straightforward. You can create a new project using:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      <p>This sets up everything automatically for you. After the installation is complete, you can navigate to your project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      <p>Your application will be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
    `,
    coverImage: "/placeholder.svg?height=500&width=1000",
  },
  {
    slug: "mastering-css-grid-layout",
    title: "Mastering CSS Grid Layout",
    date: "2023-02-22",
    excerpt: "A comprehensive guide to using CSS Grid Layout for creating complex web layouts with ease.",
    content: `
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns, and has many features that make building complex layouts straightforward.</p>
      <h2>Basic Concepts</h2>
      <p>To get started with CSS Grid, you need to understand a few key concepts:</p>
      <h3>Grid Container</h3>
      <p>The element on which <code>display: grid</code> is applied. It's the direct parent of all the grid items.</p>
      <pre><code>.container {
  display: grid;
}</code></pre>
      <h3>Grid Items</h3>
      <p>The children of the grid container.</p>
      <h3>Grid Lines</h3>
      <p>The dividing lines that make up the structure of the grid. They can be vertical ("column grid lines") or horizontal ("row grid lines").</p>
      <h2>Creating a Simple Grid</h2>
      <p>Here's how to create a simple 3x3 grid:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}</code></pre>
      <p>This creates a grid with 3 columns of equal width and 3 rows of 100px height, with a 10px gap between grid items.</p>
    `,
    coverImage: "/placeholder.svg?height=500&width=1000",
  },
  {
    slug: "introduction-to-typescript",
    title: "Introduction to TypeScript",
    date: "2023-03-10",
    excerpt: "Discover how TypeScript can enhance your JavaScript development with static type checking.",
    content: `
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.</p>
      <p>TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.</p>
      <h2>Getting Started</h2>
      <p>To install TypeScript globally:</p>
      <pre><code>npm install -g typescript</code></pre>
      <p>Create a simple TypeScript file (e.g., hello.ts):</p>
      <pre><code>function greet(person: string, date: Date) {
  console.log(\`Hello \${person}, today is \${date.toDateString()}!\`);
}

greet("Maddison", new Date());</code></pre>
      <p>Compile it to JavaScript:</p>
      <pre><code>tsc hello.ts</code></pre>
      <p>This will generate a hello.js file that you can run with Node.js.</p>
      <h2>Basic Types</h2>
      <p>TypeScript supports several types:</p>
      <ul>
        <li>Boolean: <code>let isDone: boolean = false;</code></li>
        <li>Number: <code>let decimal: number = 6;</code></li>
        <li>String: <code>let color: string = "blue";</code></li>
        <li>Array: <code>let list: number[] = [1, 2, 3];</code></li>
        <li>Tuple: <code>let x: [string, number] = ["hello", 10];</code></li>
        <li>Enum: <code>enum Color {Red, Green, Blue}; let c: Color = Color.Green;</code></li>
        <li>Any: <code>let notSure: any = 4;</code></li>
        <li>Void: <code>function warnUser(): void { console.log("Warning"); }</code></li>
      </ul>
    `,
    coverImage: "/placeholder.svg?height=500&width=1000",
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

// In a real application, you would implement functions to create and update posts
export function createPost(post: Omit<Post, "slug">): Post {
  const slug = post.title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")

  const newPost = {
    ...post,
    slug,
  }

  posts.push(newPost)
  return newPost
}

export function updatePost(slug: string, updatedPost: Partial<Post>): Post | undefined {
  const index = posts.findIndex((post) => post.slug === slug)
  \
    Post | undefined {
  const index = posts.findIndex((post) => post.slug === slug)
  
  if (index === -1) {
    return undefined
  }
  
  posts[index] = {
    ...posts[index],
    ...updatedPost,
  }
  
  return posts[index]
}

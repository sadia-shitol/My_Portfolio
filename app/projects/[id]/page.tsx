import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or CMS
const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, user authentication, and inventory management.",
    longDescription:
      "This e-commerce platform provides a complete solution for online retailers. It features a responsive design, secure payment processing through Stripe, user authentication with JWT, and a comprehensive inventory management system. The admin dashboard allows store owners to track sales, manage products, and handle customer inquiries.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB", "Redux"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Creating a responsive design for all devices",
      "Optimizing database queries for performance",
      "Building a comprehensive admin dashboard",
      "Ensuring data security and privacy",
    ],
    solutions: [
      "Integrated Stripe API with custom hooks for payment processing",
      "Used Tailwind CSS with custom breakpoints for responsive design",
      "Implemented database indexing and query optimization",
      "Created a modular dashboard with role-based access control",
      "Applied encryption and secure authentication practices",
    ],
  },
  {
    id: "taskmanager",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
    longDescription:
      "This task management application helps teams organize their work efficiently. It features a drag-and-drop interface for easy task prioritization, real-time updates using Firebase, and comprehensive team collaboration tools. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Redux", "Material UI", "React DnD", "Jest"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Drag-and-drop task management",
      "Real-time updates and notifications",
      "Team collaboration tools",
      "Project and task filtering",
      "Deadline tracking and reminders",
      "Detailed reporting and analytics",
    ],
    challenges: [
      "Implementing real-time updates across devices",
      "Creating an intuitive drag-and-drop interface",
      "Managing complex state across the application",
      "Ensuring data consistency with multiple users",
      "Building a responsive and accessible UI",
    ],
    solutions: [
      "Used Firebase Realtime Database for instant updates",
      "Implemented React DnD for intuitive drag-and-drop",
      "Applied Redux for centralized state management",
      "Created custom middleware for data synchronization",
      "Built with Material UI components for accessibility",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    longDescription:
      "This portfolio website showcases professional work and skills with a clean, modern design. Built with Next.js and Tailwind CSS, it features smooth animations, responsive layouts for all devices, and optimized performance. The site includes sections for projects, skills, about information, and contact details.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Responsive design for all devices",
      "Animated page transitions",
      "Dark/light mode toggle",
      "Project showcase with filtering",
      "Contact form with validation",
      "Performance optimized with Next.js",
    ],
    challenges: [
      "Creating smooth animations without affecting performance",
      "Implementing a responsive design for all screen sizes",
      "Building an accessible and SEO-friendly site",
      "Optimizing image loading and performance",
      "Designing an intuitive and engaging user experience",
    ],
    solutions: [
      "Used Framer Motion for optimized animations",
      "Applied Tailwind CSS with custom responsive design system",
      "Implemented semantic HTML and Next.js best practices for SEO",
      "Utilized Next.js Image component for optimized images",
      "Created a clean, intuitive UI with user testing feedback",
    ],
  },
  {
    id: "weatherapp",
    title: "Weather Forecast App",
    description:
      "A weather application providing real-time forecasts, location-based weather data, and interactive maps.",
    longDescription:
      "This weather application delivers accurate, real-time weather forecasts for locations worldwide. It integrates with the OpenWeatherMap API to provide current conditions, hourly forecasts, and 7-day predictions. The app features interactive maps, location-based services, and customizable alerts for severe weather conditions.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Redux", "OpenWeatherMap API", "Geolocation", "Expo"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Real-time weather updates",
      "Location-based forecasts",
      "Interactive weather maps",
      "7-day and hourly predictions",
      "Weather alerts and notifications",
      "Offline mode with cached data",
    ],
    challenges: [
      "Integrating multiple weather data sources",
      "Implementing accurate geolocation services",
      "Creating interactive and responsive maps",
      "Building an offline-first experience",
      "Optimizing battery usage with background updates",
    ],
    solutions: [
      "Created a unified API service for multiple weather sources",
      "Used native geolocation with permission handling",
      "Implemented interactive maps with custom weather overlays",
      "Applied caching strategies for offline data access",
      "Optimized background processes for minimal battery impact",
    ],
  },
  {
    id: "blogplatform",
    title: "Blog Platform",
    description: "A full-featured blogging platform with markdown support, comments, and user profiles.",
    longDescription:
      "This blogging platform provides writers with a powerful yet intuitive interface for creating and sharing content. It supports markdown for easy formatting, has a robust commenting system, and allows users to create detailed profiles. The platform includes features like categories, tags, search functionality, and social sharing options.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "React", "Redux", "AWS"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Markdown editor with preview",
      "User authentication and profiles",
      "Commenting system with moderation",
      "Categories and tags for organization",
      "Search functionality",
      "Social media integration",
    ],
    challenges: [
      "Building a rich text editor with markdown support",
      "Creating a scalable comment system with moderation",
      "Implementing efficient search functionality",
      "Designing a responsive and accessible interface",
      "Optimizing performance for content-heavy pages",
    ],
    solutions: [
      "Developed a custom markdown editor with real-time preview",
      "Created a threaded comment system with moderation tools",
      "Implemented text indexing for efficient search",
      "Applied responsive design principles with accessibility in mind",
      "Used server-side rendering and caching for performance",
    ],
  },
  {
    id: "fitnessapp",
    title: "Fitness Tracking App",
    description: "A comprehensive fitness application for tracking workouts, nutrition, and progress over time.",
    longDescription:
      "This fitness tracking application helps users achieve their health goals by monitoring workouts, nutrition, and overall progress. It provides customizable workout plans, nutrition tracking with a food database, and visual representations of progress over time. The app includes features like workout timers, exercise demonstrations, and social sharing for accountability.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Chart.js", "Nutritionix API"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Workout tracking and planning",
      "Nutrition logging and analysis",
      "Progress visualization with charts",
      "Exercise library with demonstrations",
      "Goal setting and achievement tracking",
      "Social sharing and challenges",
    ],
    challenges: [
      "Creating an extensive exercise and nutrition database",
      "Building intuitive data visualization for progress tracking",
      "Implementing personalized workout recommendations",
      "Designing an engaging user experience for regular use",
      "Ensuring data accuracy for health metrics",
    ],
    solutions: [
      "Integrated with Nutritionix API for comprehensive food database",
      "Used Chart.js for customizable progress visualization",
      "Implemented machine learning for personalized recommendations",
      "Applied gamification elements for user engagement",
      "Created validation systems for accurate health data entry",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link href="/projects" className="mr-4">
              <Button variant="ghost" size="icon" className="text-forest-900 hover:bg-forest-900/10">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-forest-900">Project Not Found</h1>
          </div>
          <p className="text-forest-900/80">The project you're looking for doesn't exist or has been removed.</p>
          <div className="mt-8">
            <Link href="/projects">
              <Button className="bg-forest-900 hover:bg-forest-800 text-white">Back to Projects</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Link href="/projects" className="mr-4">
            <Button variant="ghost" size="icon" className="text-forest-900 hover:bg-forest-900/10">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900">{project.title}</h1>
        </div>

        <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-100 mb-8">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-forest-900 border-forest-200">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10" asChild>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              View Code
            </a>
          </Button>
          <Button className="gap-2 bg-forest-900 hover:bg-forest-800 text-white" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        </div>

        <div className="prose max-w-none text-forest-900/90 mb-10">
          <h2 className="text-2xl font-bold text-forest-900 mb-4">Project Overview</h2>
          <p className="mb-6">{project.longDescription}</p>

          <h2 className="text-2xl font-bold text-forest-900 mb-4">Key Features</h2>
          <ul className="space-y-2 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-forest-700 mt-2 mr-2"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-forest-900 mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-forest-700 mt-2 mr-2"></span>
                      <span className="text-forest-900/80">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-forest-900 mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-forest-700 mt-2 mr-2"></span>
                      <span className="text-forest-900/80">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
          <Link href="/projects">
            <Button variant="outline" className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10">
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </Link>

          <Link href="/#contact">
            <Button className="gap-2 bg-forest-900 hover:bg-forest-800 text-white">Discuss This Project</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

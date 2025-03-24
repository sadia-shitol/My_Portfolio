import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or CMS
const projects = [
  {
    id: "greenSolution",
    title: "The Green Solution",
    description: " A QnA-based web application for farmers and agronomists, where farmers can ask questions and agronomists can post the answers to those questions.",
    image: "../images/TheGreenSolution.png",
    tags: ["React", "ExpressJS", "MongoDB", "Tensorflow.js"],
    demoUrl: "https://thegreensolution.netlify.app/",
    codeUrl: "https://github.com/sadia-shitol/The-Green-Solution",
    
    detailsUrl: "projects/greenSolution",
    longDescription:
    "This e-commerce platform provides a complete solution for online retailers. It features a responsive design, secure payment processing through Stripe, user authentication with JWT, and a comprehensive inventory management system. The admin dashboard allows store owners to track sales, manage products, and handle customer inquiries.",
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
    id:"ekhonni",
    title: "Ekhonni",
    detailsUrl: "projects/ekhonni",
    description:
      "An e-commerce platform where sellers can post ads of their products and buyers compete in Auctions through online bidding.",
    image: "../images/Ekhonni.jpg",
    tags: ["SpringBoot", "NextJS", "Tailwind CSS","PostGreSQL"],
    demoUrl: "https://drive.google.com/file/d/1jMoBRS2WIZR7uoH9tmdsuD9gJb5eYX-d/view?t=1",
    codeUrl: "https://github.com/sadia-shitol/ekhonni-MIST",
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
    id:"furnihaven",
    title: "FurniHaven",
    description: "A mobile app that connects consumers and sellers in the furniture industry, integrating AR technology and AI recommendation system.",
    image: "../images/FurniHaven.jpg",
    tags: ["Flutter", "Firebase"],
    demoUrl: "https://youtu.be/PvLx2j3GaVg?si=oxGg3s3S38MoiFDe",
    codeUrl: "https://github.com/sadia-shitol/FurniHaven_SDP-II",
    detailsUrl: "projects/furnihaven",
    longDescription:
      "This portfolio website showcases professional work and skills with a clean, modern design. Built with Next.js and Tailwind CSS, it features smooth animations, responsive layouts for all devices, and optimized performance. The site includes sections for projects, skills, about information, and contact details.",
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
    id:"gym",
    title: "Multi-Gym Management System",
    description:
      "A website to manage multiple gyms across a country or city, allowing users to select gyms based on their location and pricing.",
    image: "../images/Gym.jpg?height=400&width=600",
    tags: ["HTML", "CSS", "Oracle", "PHP"],
    detailsUrl: "projects/gym",
    demoUrl: "#",
    codeUrl: "https://github.com/sadia-shitol/Multi-Gym-Management-System",
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
    id:"rythmofLife",
    title: "Through The Rythm of Life!",
    description: "The journey of a programmer who once dreamed of becoming an artist but chose the path of a software engineer instead. The project explores her daily life as a programmer while reminiscing about the creative life she left behind for the sake of reality.",
    image: "../images/Blender.jpg?height=400&width=600",
    tags: ["Blender"],
    detailsUrl: "projects/rythmofLife",
    demoUrl: "https://drive.google.com/file/d/1wlNPVvP07GkZYxjPVpezDsw8X3lGjfV1/view?t=1",
    codeUrl: "https://github.com/sadia-shitol/Through-The-Rythm-of-Life",
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

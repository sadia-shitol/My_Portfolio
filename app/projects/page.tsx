import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// This would typically come from a database or CMS
const projects = [
  {
    //id: "./Project Demo Videos/The Green Solution.mp4",
    title: "The Green Solution",
    description: " A QnA-based web application for farmers and agronomists, where farmers can ask questions and agronomists can post the answers to those questions.",
    image: "./images/TheGreenSolution.png",
    tags: ["React", "ExpressJS", "MongoDB", "Tensorflow.js"],
    demoUrl: "https://thegreensolution.netlify.app/",
    codeUrl: "https://github.com/sadia-shitol/The-Green-Solution",
  
    //longDescription:
      //"This e-commerce platform provides a complete solution for online retailers. It features a responsive design, secure payment processing through Stripe, user authentication with JWT, and a comprehensive inventory management system. The admin dashboard allows store owners to track sales, manage products, and handle customer inquiries.",
    
    // features: [
    //   "User authentication and authorization",
    //   "Product search and filtering",
    //   "Shopping cart and checkout process",
    //   "Payment processing with Stripe",
    //   "Order tracking and history",
    //   "Admin dashboard for inventory management",
    //],
  },
  {
    title: "Ekhonni",
    description:
      "An e-commerce platform where sellers can post ads of their products and buyers compete in Auctions through online bidding.",
    image: "./images/Ekhonni.jpg",
    tags: ["SpringBoot", "NextJS", "Tailwind CSS","PostGreSQL"],
    demoUrl: "./Project Demo Videos/Ekhonni_Demo.mp4",
    codeUrl: "https://github.com/sadia-shitol/ekhonni-MIST",
  
   // id: "taskmanager",
    //longDescription:
     // "This task management application helps teams organize their work efficiently. It features a drag-and-drop interface for easy task prioritization, real-time updates using Firebase, and comprehensive team collaboration tools. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive dashboard.",
    // features: [
    //   "Drag-and-drop task management",
    //   "Real-time updates and notifications",
    //   "Team collaboration tools",
    //   "Project and task filtering",
    //   "Deadline tracking and reminders",
    //   "Detailed reporting and analytics",
    // ],
  },
  {
    title: "FurniHaven",
    description: "A mobile app that connects consumers and sellers in the furniture industry, integrating AR technology and AI recommendation system.",
    image: "./images/FurniHaven.jpg",
    tags: ["Flutter", "Firebase"],
    demoUrl: "https://youtu.be/PvLx2j3GaVg?si=oxGg3s3S38MoiFDe",
    codeUrl: "https://github.com/sadia-shitol/FurniHaven_SDP-II",
    //id: "portfolio",
    //title: "Portfolio Website",
    //description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    //longDescription:
 //     "This portfolio website showcases professional work and skills with a clean, modern design. Built with Next.js and Tailwind CSS, it features smooth animations, responsive layouts for all devices, and optimized performance. The site includes sections for projects, skills, about information, and contact details.",
    //image: "/placeholder.svg?height=400&width=600",
   // tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    //demoUrl: "#",
    //codeUrl: "#",
    // features: [
    //   "Responsive design for all devices",
    //   "Animated page transitions",
    //   "Dark/light mode toggle",
    //   "Project showcase with filtering",
    //   "Contact form with validation",
    //   "Performance optimized with Next.js",
    // ],
  },
  {
    //id: "weatherapp",
    title: "Multi-Gym Management System",
    description:
      "A website to manage multiple gyms across a country or city, allowing users to select gyms based on their location and pricing.",
    //longDescription:
     // "This weather application delivers accurate, real-time weather forecasts for locations worldwide. It integrates with the OpenWeatherMap API to provide current conditions, hourly forecasts, and 7-day predictions. The app features interactive maps, location-based services, and customizable alerts for severe weather conditions.",
    image: "./images/Gym.jpg?height=400&width=600",
    tags: ["HTML", "CSS", "Oracle", "PHP"],
    demoUrl: "#",
    codeUrl: "https://github.com/sadia-shitol/Multi-Gym-Management-System",
    // features: [
    //   "Real-time weather updates",
    //   "Location-based forecasts",
    //   "Interactive weather maps",
    //   "7-day and hourly predictions",
    //   "Weather alerts and notifications",
    //   "Offline mode with cached data",
    // ],
  },
  {
    //id: "blogplatform",
    title: "Through The Rythm of Life!",
    description: "The journey of a programmer who once dreamed of becoming an artist but chose the path of a software engineer instead. The project explores her daily life as a programmer, where she navigates the structured world of coding while reminiscing about the creative life she left behind for the sake of reality.",
    //longDescription:
    //  "This blogging platform provides writers with a powerful yet intuitive interface for creating and sharing content. It supports markdown for easy formatting, has a robust commenting system, and allows users to create detailed profiles. The platform includes features like categories, tags, search functionality, and social sharing options.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "React", "Redux", "AWS"],
    demoUrl: "./Project Demo Videos/Blender_B1.mp4",
    codeUrl: "https://github.com/sadia-shitol/Through-The-Rythm-of-Life",
    // features: [
    //   "Markdown editor with preview",
    //   "User authentication and profiles",
    //   "Commenting system with moderation",
    //   "Categories and tags for organization",
    //   "Search functionality",
    //   "Social media integration",
    // ],
  },
  {
   // id: "fitnessapp",
    title: "Fitness Tracking App",
    description: "A comprehensive fitness application for tracking workouts, nutrition, and progress over time.",
    //longDescription:
    //  "This fitness tracking application helps users achieve their health goals by monitoring workouts, nutrition, and overall progress. It provides customizable workout plans, nutrition tracking with a food database, and visual representations of progress over time. The app includes features like workout timers, exercise demonstrations, and social sharing for accountability.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Chart.js", "Nutritionix API"],
    demoUrl: "#",
    codeUrl: "#",
    // features: [
    //   "Workout tracking and planning",
    //   "Nutrition logging and analysis",
    //   "Progress visualization with charts",
    //   "Exercise library with demonstrations",
    //   "Goal setting and achievement tracking",
    //   "Social sharing and challenges",
    // ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-hc-screen bg-background">

    <Navbar/>
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon" className="text-forest-900 hover:bg-forest-900/10">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900">All Projects</h1>
        </div>

        <p className="text-forest-900/80 max-w-3xl mb-12">
          Here's a comprehensive collection of my projects. Each one represents a unique challenge and showcases
          different skills and technologies I've worked with.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id}>
              {index > 0 && <Separator className="mb-12" />}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-full">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden border border-gray-100">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h2 className="text-2xl font-bold text-forest-900 mb-2">{project.title}</h2>
                  <p className="text-forest-900/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-forest-900 border-forest-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button className="gap-2 bg-forest-900 hover:bg-forest-800 text-white" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      className="gap-2 bg-forest-100 hover:bg-forest-200 text-forest-900"
                      asChild
                    >
                      <Link href={`/projects/${project.id}`}>
                        <Info size={16} />
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-forest-900/80 mb-6">
            Interested in working together? It's always a pleasure to discuss about new projects and opportunities.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-forest-900 hover:bg-forest-800 text-white">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  )
}


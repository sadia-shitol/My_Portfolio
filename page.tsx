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
    title: "The Green Solution",
    description: " A QnA-based web application for farmers and agronomists, where farmers can ask questions and agronomists can post the answers to those questions.",
    image: "./images/TheGreenSolution.png",
    tags: ["React", "ExpressJS", "MongoDB", "Tensorflow.js"],
    demoUrl: "https://thegreensolution.netlify.app/",
    codeUrl: "https://github.com/sadia-shitol/The-Green-Solution",
  },
  {
    title: "Ekhonni",
    description:
      "An e-commerce platform where sellers can post ads of their products and buyers compete in Auctions through online bidding.",
    image: "./images/Ekhonni.jpg",
    tags: ["SpringBoot", "NextJS", "Tailwind CSS","PostGreSQL"],
    demoUrl: "#",
    codeUrl: "https://github.com/sadia-shitol/ekhonni-MIST",
  
  },
  {
    title: "FurniHaven",
    description: "A mobile app that connects consumers and sellers in the furniture industry, integrating AR technology and AI recommendation system.",
    image: "./images/FurniHaven.jpg",
    tags: ["Flutter", "Firebase"],
    demoUrl: "https://youtu.be/PvLx2j3GaVg?si=oxGg3s3S38MoiFDe",
    codeUrl: "https://github.com/sadia-shitol/FurniHaven_SDP-II",
   
  },
  {
    title: "Multi-Gym Management System",
    description:
      "A website to manage multiple gyms across a country or city, allowing users to select gyms based on their location and pricing.",
    image: "./images/Gym.jpg?height=400&width=600",
    tags: ["HTML", "CSS", "Oracle", "PHP"],
    demoUrl: "#",
    codeUrl: "https://github.com/sadia-shitol/Multi-Gym-Management-System"

  },
  {
    title: "Through The Rythm of Life!",
    description: "The journey of a programmer who once dreamed of becoming an artist but chose the path of a software engineer instead. The project explores her daily life as a programmer, where she navigates the structured world of coding while reminiscing about the creative life she left behind for the sake of reality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "React", "Redux", "AWS"],
    demoUrl: "./Project Demo Videos/Blender_B1.mp4",
    codeUrl: "https://github.com/sadia-shitol/Through-The-Rythm-of-Life",
  
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness application for tracking workouts, nutrition, and progress over time.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Chart.js", "Nutritionix API"],
    demoUrl: "#",
    codeUrl: "#",
    
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
            <div>
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
                      <Link href={`/projects/`}>
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


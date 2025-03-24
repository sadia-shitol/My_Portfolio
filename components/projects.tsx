import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          My <span className="text-forest-700">Projects</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new
          technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-forest-900">{project.title}</CardTitle>
                <CardDescription className="text-forest-900/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-forest-900 border-forest-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button className="flex-1 gap-2 bg-forest-900 hover:bg-forest-800 text-white" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
       
        <Button
            variant="outline"
            size="lg"
            className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
            asChild
          >
            <Link href="./projects">View All Projects</Link>
          </Button>
        
          
        </div>
      </div>
    </section>
  )
}


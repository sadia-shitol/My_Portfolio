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
    image: "../images/TheGreenSolution.png",
    tags: ["React", "ExpressJS", "MongoDB", "Tensorflow.js"],
    demoUrl: "https://thegreensolution.netlify.app/",
    codeUrl: "https://github.com/sadia-shitol/The-Green-Solution",
    
    detailsUrl: "projects/greenSolution",
    longDescription:
   " The Green Solution is a QnA based web application which bridges the gap between farmers and agronomists. On this platform, farmers will be able to ask questions about the problems they face daily during crop production and get solutions from agronomists directly. Farmers of our country are not up-to-date with the latest agriculture related research and studies. As such, they face difficulties in maximizing their yield. Furthermore, no such platform exists where farmers can get tailored answers to their problems. It is imperative that farmers get access to the latest agricultural information and techniques, and are able to find solutions to their problems. This web application acts as an online platform for the agricultural community and bridge the gap between farmers and agronomists, ensuring that farmers get personalized help from experts to solve their problems. It was a team project of our software development course and I worked as Frontend Engineer in this project. Thanks to my teammates Shadman Shafeen Khan and Muntasir Hasan Porag who worked as the Backend Engineer in this project.",

   features: [
      "Account Creation, Login and Authentication : Enabling users to create and login to their accounts, and tracking type of user (farmer or agronomist).",
      "Question and Answer Submission : Submission of questions from farmers and answers from agronomists into database.",
      "Question and Answer Fetching : Fetching questions and answers from database for viewing.",
      "Voice to Text : Enabling users to ask questions using voice in their native language (Bangla).",
      "Native Language Support : Translation of web content from English to Bangla and vice versa.",
      "Answer Rating : Enabling users to rate answers of agronomists.",
      "Answer Editing : Enabling agronomists to update their answers",
      "Relevant Question Finding (using NLP) : Using Natural Language Processing to find questions relevant to currently entered question."
    ],
    challenges: [
      "SMS Notification for Farmers has not been integrated",
      "Version History has not been implemented for Answer Editing",
      "No Mobile App implementation"
    ],
    solutions: [
      "Addition of SMS Notification",
      "AI generated solutions",
      "Development of mobile app",
      "Answer Editing with Version History"
    ],
  },
  {
    id:"ekhonni",
    title: "Ekhonni",
    image: "../images/Ekhonni.jpg",
    tags: ["SpringBoot", "NextJS", "Tailwind CSS","PostGreSQL"],
    demoUrl: "https://drive.google.com/file/d/1jMoBRS2WIZR7uoH9tmdsuD9gJb5eYX-d/view?t=1",
    codeUrl: "https://github.com/sadia-shitol/ekhonni-MIST",
    detailsUrl: "projects/ekhonni",
    longDescription:
      " Ekhonni is an online eCommerce auction platform where users can advertise their products for sale and other users can compete in an online auction to buy those products. The seller can choose a buyer whom he will sell his product to. Ekhonni provides the seller with the choice to control the visibility of bidding, along with the ability to revert and choose a different buyer. This platform provides an interactive experience for buying and selling their products with the integration of a payment gateway service, along with robust product filtering, sorting, and dynamic searching. Integration of tools such as SWR allows users to view bidding operations and search products dynamically with changes made to the database reflected in the user interface instantaneously. Ekhonni functions as an online marketplace that prioritizes security and ease of use for both buyers and sellers, providing an interactive and dynamic platform for bidding. It was our team project on internship at Dynamic Solution Innovators",
    
    features: [
      "Authorization and Authentication with SpringBoot Security and NextAuth",
      "Filtering and dynamic searching and sorting",
      "Bidding Integrated with SWR",
      "SSLCOMMERZ payment gateway",
      "Docker Scripting",
      "Cypress Testing",
      "Liquibase integration"
    ],
    challenges: [
      "Can not make predictions from product databases",
      "Can not interpret and understand the semantics of search queries",
      "No relevant search result",
      "No user information edit permission"
    ],
    solutions: [
      "Improving product search using Deep Learning",
      "Hosting and Deployment",
      "Multiple Image Storage ",
      "Update Product Details",
      "Mobile App Implementation",
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
"The demand for diverse furniture options has grown significantly, yet many consumers struggle to find pieces that suit their style and space. At the same time, sellers face challenges in reaching a broader audience due to limited visibility and competition in the online marketplace. Despite the rapid growth of online shopping, a major market gap remains—buyers often hesitate to purchase furniture without seeing how it fits in their home.  FurniHaven bridges this gap by offering a wide variety of furniture, empowering sellers to expand their reach, and integrating AR technology to help customers visualize products in real-time. By combining technology with a user-centric approach, we are revolutionizing the furniture shopping experience, making it more accessible, engaging, and seamless for everyone. It was a team project of my academic life, where I worked as a Flutter developer. ",
          features: [
      "Secure Registration & Profile Management:  Ensures a safe sign-up process and allows users to manage their personal information effortlessly.",
      "Multilingual Support: Seamless Furniture Browsing & Purchasing – Simplifies the shopping experience with intuitive navigation, easy selection, and a smooth checkout process can easily be done using both English and Bangla language.",
      "AR-Based Visualization: Augmented reality technology was used to visualize the placement of a furniture and 360 degree view of products.",
      "Project showcase with filtering: Personalized recommendations was implemented using AI and search result can be filtered based on price, brand and cost.",
      "Messaging Systems: Sellers and customers can easily communicate with each other.",
    ],
    challenges: [
      "Creating smooth animations without affecting performance",
      "Implementing a responsive design for all screen sizes",
      "Building an accessible and SEO-friendly site",
      "Optimizing image loading and performance",
      "Designing an intuitive and engaging user experience",
    ],
    solutions: [
      "VAriations in Response Times on different functionalities",
      "Seller Operation Efficiency",
      "AR Rendering Performance",
      "Device dependency",
      "Network sensitivity"
    ],
  },
  {
    id:"gym",
    title: "Multi-Gym Management System",
    longDescription:
      "With the expansion of the fitness industry and the growing interest of the general public to become more healthy, gyms have become a flourishing business with a massive increase of client base. Clients who seek to join a gym, must go through a tedious process of searching for gyms which meets their preferences. The goal of this project is to implement a well-structured database management system, and web-based application that will aid in the daily operations of gyms. Many gyms have a large client base but do not have the required managerial tools to manage the data of the members. The aim of this project is to implement a database management system to ensure that users are able to select their preferred gym, and that every gym can keep track of their clients, trainers, nutritionists, equipments and packages. It was a group project of my academic life for the Database management sessional. I was frontend developer of the project.",
    image: "../images/Gym.jpg?height=400&width=600",
    tags: ["HTML", "CSS", "Oracle", "PHP"],
    detailsUrl: "projects/gym",
    demoUrl: "#",
    codeUrl: "https://github.com/sadia-shitol/Multi-Gym-Management-System",
    features: [
      "Login: Users (Owner, Trainer, Nutritionist, Client) are able to login and access features available to them",
      "Views: Clients, Trainers, Nutritionists and Owners will see views assigned to them where they will be able to see and edit their basic information.",
      "Assignment: Connection between trainers and nutritionists will be given by their owners when they are assigned to clients"
    ],
    challenges: [
      "Billing System: Billing system for clients is not developed.",
      "Package Finish Confirmation: No system developed to alert clients when their package duration ends.",
      "Manual Trainer and Nutritionist Assignment: Trainers and nutritionists must be manually assigned by owners",
      "Rudimentary User Interface: The webpage designed with php, html and css is basic and needs to be developed further."
    ],
    solutions: [
      "Automated Billing System",
      "AI based Search",
      "Automatic Trainer and Nutritionist Assignment",
      "Messaging System",
    ],
  },
  {
    id:"rythmofLife",
    title: "Through The Rythm of Life!",
    longDescription: "This project depicts the journey of a programmer who once dreamed of becoming an artist but chose the path of a software engineer instead. Growing up, she aspired to express herself through art, yet reality led her to a career in technology. The project explores her daily life as a programmer, where she navigates the structured world of coding while reminiscing about the creative life she left behind for the sake of reality. Yet, she continues moving forward through the rhythm of life. It was a the last group project of B.Sc life. Thanks to my teammates Shadman and Porag.",
    image: "../images/Blender.jpg?height=400&width=600",
    tags: ["Blender","3D Graphics"],
    detailsUrl: "projects/rythmofLife",
    demoUrl: "https://drive.google.com/file/d/1wlNPVvP07GkZYxjPVpezDsw8X3lGjfV1/view?t=1",
    codeUrl: "https://github.com/sadia-shitol/Through-The-Rythm-of-Life",
    features: [
      "Basically a demonstration of 3D graphics and animation through object Modeling, Rigging and Rendering ",
      
    ],
    challenges: [
      "There were no limitations regrarding the project"
    ],
    solutions: [
      "Can gain more knowledge about 3D computer Graphics and animation"
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
    <main className="min-h-screen bg-white pt-12 pb-16">
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
          <Button variant="outline" className="gap-2  border-forest-200 text-forest-900 hover:bg-forest-900 hover:text-white" asChild>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              View Code
            </a>
          </Button>
          <Button className="gap-2 border-[0.02px] bg-forest-900 hover:bg-white hover:border-forest-950 hover:text-black text-white" asChild>
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
              {/* challenges variable used for Limitations  */}
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-forest-900 mb-4">Limitations</h3>
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
                {/* Solution variable used for Future Scope */}
                <h3 className="text-xl font-bold text-forest-900 mb-4">Future Scope</h3>
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
            <Button variant="outline" className="gap-2  border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white">
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </Link>

          <Link href="/#contact">
            <Button className="gap-2 border-[0.02px] bg-forest-900 hover:bg-white hover:border-forest-950 hover:text-black text-white">Discuss This Project</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

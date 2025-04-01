import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getAllExperiences } from "@/data/experience"

export default function ExperiencePage() {
  const experiences = getAllExperiences()

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Button variant="ghost" size="icon" className="text-forest-900 hover:bg-forest-900/10">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-forest-900">Professional Experience</h1>
          </div>

          <Button className="gap-2 bg-forest-900 hover:bg-forest-800 text-white" asChild>
            <a href="https://drive.google.com/file/d/1aD6sw_FbHAZlHOtGgopJekMX4Bk13l7F/view" download="Sadia_Bintay_Mostafiz_CV.pdf"  className=" flex items-center gap-2">
            Download CV
               </a>
          </Button>
        </div>

        <p className="text-forest-900/80 max-w-3xl mb-12">
          My professional journey spans various roles where I've contributed to impactful projects and developed a
          diverse skill set.
        </p>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} id={experience.id}>
              {index > 0 && <Separator className="mb-12" />}

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  {experience.logo ? (
                    <div className="w-20 h-20 relative">
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={experience.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-forest-100 rounded-md flex items-center justify-center">
                      <span className="text-forest-900 font-bold text-xl">
                        {experience.company.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 space-y-1">
                    <div className="flex items-center text-sm text-forest-900/70">
                      <Calendar className="mr-2 h-4 w-4" />
                      <div>
                        <div>{experience.startDate}</div>
                        <div>{experience.endDate || "Present"}</div>
                      </div>
                    </div>

                    {experience.location && (
                      <div className="flex items-center text-sm text-forest-900/70">
                        <MapPin className="mr-2 h-4 w-4" />
                        {experience.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold text-forest-900">{experience.title}</h2>
                  <h3 className="text-xl text-forest-700 mb-4">{experience.company}</h3>

                  <p className="text-forest-900/80 mb-6">{experience.description}</p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium text-forest-900">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-forest-900/80">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-forest-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-forest-900 border-forest-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-forest-900/80 mb-6">
            Interested in my qualifications? Check out my achievements and certifications.
          </p>
          <Link href="/Achievements">
            <Button size="lg" className="border-[0.02px]  border-forest-100 bg-forest-900 text-white hover:bg-white hover:text-forest-900 hover:border-forest-900">
              View Achievements
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}


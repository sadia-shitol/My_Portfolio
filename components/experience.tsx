import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllExperiences } from "@/data/experience"

export function Experience() {
  const allExperiences = getAllExperiences()
  // Show only the most recent 3 experiences on the homepage
  const experiences = allExperiences.slice(0, 3)

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          Work <span className="text-forest-700">Experience</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          My professional journey includes working with diverse teams and technologies to deliver impactful solutions.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <Card key={experience.id} className="border border-gray-100">
              <CardHeader className="flex flex-col md:flex-row gap-4 md:items-center">
                {experience.logo && (
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={experience.logo || "/placeholder.svg"}
                      alt={experience.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <CardTitle className="text-forest-900">{experience.title}</CardTitle>
                  <CardDescription className="text-forest-900/70">
                    <span className="font-medium">{experience.company}</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <div className="flex items-center text-sm text-forest-900/60">
                        <Calendar className="mr-1 h-3 w-3" />
                        {experience.startDate} - {experience.endDate || "Present"}
                      </div>
                      {experience.location && (
                        <div className="flex items-center text-sm text-forest-900/60">
                          <MapPin className="mr-1 h-3 w-3" />
                          {experience.location}
                        </div>
                      )}
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-forest-900/80 mb-4">{experience.description}</p>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-forest-900">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-forest-900/80">
                    {experience.responsibilities.slice(0, 3).map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                    {experience.responsibilities.length > 3 && (
                      <li>
                        <Link href={`/experience#${experience.id}`} className="text-forest-700 hover:underline">
                          View more...
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-forest-900 border-forest-200">
                      {tech}
                    </Badge>
                  ))}
                  {experience.technologies.length > 5 && (
                    <Badge variant="outline" className="text-forest-900 border-forest-200">
                      +{experience.technologies.length - 5}
                    </Badge>
                  )}
                </div>
              </CardContent>
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
            <Link href="/experience">View Details</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


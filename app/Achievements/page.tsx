"use client"
import Link from "next/link"
import { ArrowLeft, Award, Calendar, ExternalLink, GraduationCap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllAchievements, getAchievementsByCategory } from "@/data/achievements"

export default function AchievementsPage() {
  const allAchievements = getAllAchievements()
  const certifications = getAchievementsByCategory("certification")
  const awards = getAchievementsByCategory("award")
  const education = getAchievementsByCategory("education")
  const publications = getAchievementsByCategory("publication")

  // Get icon based on category
  const getIcon = (category: string) => {
    switch (category) {
      case "award":
        return <Award className="h-5 w-5 text-forest-700" />
      case "certification":
        return <FileText className="h-5 w-5 text-forest-700" />
      case "education":
        return <GraduationCap className="h-5 w-5 text-forest-700" />
      case "publication":
        return <FileText className="h-5 w-5 text-forest-700" />
      default:
        return <Award className="h-5 w-5 text-forest-700" />
    }
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon" className="text-forest-900 hover:bg-forest-900/10">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900">Achievements & Certifications</h1>
        </div>

        <p className="text-forest-900/80 max-w-3xl mb-12">
          A collection of my professional achievements, certifications, educational background, and publications.
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allAchievements.map((achievement) => (
              <Card key={achievement.id} className="border border-gray-100">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-forest-100 p-2 rounded-full">{getIcon(achievement.category)}</div>
                  <div>
                    <CardTitle className="text-forest-900">{achievement.title}</CardTitle>
                    <div className="text-sm text-forest-900/70 mt-1">
                      <span className="font-medium">{achievement.organization}</span>
                      <div className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-900/80">{achievement.description}</p>

                  {achievement.url && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                        asChild
                      >
                        <a href={achievement.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification) => (
              <Card key={certification.id} className="border border-gray-100">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-forest-100 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <CardTitle className="text-forest-900">{certification.title}</CardTitle>
                    <div className="text-sm text-forest-900/70 mt-1">
                      <span className="font-medium">{certification.organization}</span>
                      <div className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{certification.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-900/80">{certification.description}</p>

                  {certification.url && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                        asChild
                      >
                        <a href={certification.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="awards" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <Card key={award.id} className="border border-gray-100">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-forest-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <CardTitle className="text-forest-900">{award.title}</CardTitle>
                    <div className="text-sm text-forest-900/70 mt-1">
                      <span className="font-medium">{award.organization}</span>
                      <div className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{award.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-900/80">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} className="border border-gray-100">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-forest-100 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <CardTitle className="text-forest-900">{edu.title}</CardTitle>
                    <div className="text-sm text-forest-900/70 mt-1">
                      <span className="font-medium">{edu.organization}</span>
                      <div className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{edu.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-900/80">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="publications" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((publication) => (
              <Card key={publication.id} className="border border-gray-100">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 bg-forest-100 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <CardTitle className="text-forest-900">{publication.title}</CardTitle>
                    <div className="text-sm text-forest-900/70 mt-1">
                      <span className="font-medium">{publication.organization}</span>
                      <div className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{publication.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-900/80">{publication.description}</p>

                  {publication.url && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                        asChild
                      >
                        <a href={publication.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          View Publication
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-forest-900/80 mb-6">Want to learn more about my professional experience?</p>
          <Link href="/experience">
            <Button size="lg" className="bg-forest-900 hover:bg-forest-800 text-white">
              View Work Experience
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}


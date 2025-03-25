import Link from "next/link"
import { Award, Calendar, ExternalLink, GraduationCap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllAchievements } from "@/data/achievements"

export function Achievements() {
  const allAchievements = getAllAchievements()
  // Show only the most recent 4 achievements on the homepage
  const achievements = allAchievements.slice(0, 4)

  // Get icon based on category
  const getIcon = (category: string) => {
    switch (category) {
      case "award":
        return <Award className="h-5 w-5 text-forest-700" />
      case "certification":
        return <FileText className="h-5 w-5 text-forest-700" />
      case "education":
        return <GraduationCap className="h-5 w-5 text-forest-700" />
      default:
        return <Award className="h-5 w-5 text-forest-700" />
    }
  }

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          My <span className="text-forest-700">Achievements</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          Recognitions, certifications, and milestones that have shaped my professional journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
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
                <p className="text-forest-900/80 text-sm">{achievement.description}</p>

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
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
            asChild
          >
            <Link href="/achievements">View All Achievements</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


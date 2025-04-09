"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Award, Calendar, GraduationCap, FileText, ImageIcon, ExternalLink, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllAchievements, getAchievementsByCategory } from "@/data/achievements"
import { CertificateModal } from "@/components/certificate-modal"

export default function AchievementsPage() {
  const allAchievements = getAllAchievements()
  const certifications = getAchievementsByCategory("certification")
  const awards = getAchievementsByCategory("award")
  const education = getAchievementsByCategory("education")
   //FUTURE IMPLEMENTATION INN SHAA ALLAH
  // const publications = getAchievementsByCategory("publication")

  const [selectedImage, setSelectedImage] = useState<{
    title: string
    imageSrc: string
  } | null>(null)

  // Get icon based on category
  const getIcon = (category: string) => {
    switch (category) {
      case "award":
        return <Award className="h-5 w-5 text-forest-700" />
      case "certification":
        return <FileText className="h-5 w-5 text-forest-700" />
      case "education":
        return <GraduationCap className="h-5 w-5 text-forest-700" />
      //Future Implementation INN SHAA ALLAH
      //case "publication":
     //return <FileText className="h-5 w-5 text-forest-700" />      
        default:
        return <Award className="h-5 w-5 text-forest-700" />
    }
  }

  const openImage = (title: string, imageSrc: string) => {
    setSelectedImage({ title, imageSrc })
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const renderAchievementCard = (achievement: any) => (
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

        <div className="flex flex-wrap gap-2 mt-4">
          {achievement.certificateImage && achievement.category === "certification" && (
            <Button
              variant="outline"
              size="sm"
              className=" bg-forest-100 border-forest-200 text-forest-900 hover:bg-forest-900/10 hover:text-forest-900"
              onClick={() => openImage(achievement.title, achievement.certificateImage!)}
            >
              <ImageIcon size={14} />
              View Certificate
            </Button>
          )}

          {achievement.pictureImage && achievement.category === "award" && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-forest-100 border-forest-200 text-forest-900 hover:bg-forest-900/10 hover:text-forest-900"
              onClick={() => openImage(achievement.title, achievement.pictureImage!)}
            >
              <Image size={14} />
              Picture
            </Button>
          )}
            {/* Future implementation inn Shaa Allah */}
          {/* {achievement.url && achievement.category === "publication" && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
              asChild
            >
              <a href={achievement.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                View Details
              </a>
            </Button>
          )} */}
        </div>
      </CardContent>
    </Card>
  )

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
          A collection of my professional achievements, certifications, educational background, and awards.
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
             {/* FUTUTRE IMPLEMENTATION INN SHAA ALLAH */}
           {/* <TabsTrigger value="publications">Publications</TabsTrigger> */}
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allAchievements.map(renderAchievementCard)}
          </TabsContent>

          <TabsContent value="certifications" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map(renderAchievementCard)}
          </TabsContent>

          <TabsContent value="awards" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map(renderAchievementCard)}
          </TabsContent>

          <TabsContent value="education" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map(renderAchievementCard)}
          </TabsContent>
          {/* </TabsContent> */}
      {/* FUTUTRE IMPLEMENTATION INN SHAA ALLAH */}
               {/* <TabsContent value="publications" className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {publications.map(renderAchievementCard)}
//           </TabsContent> */}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-forest-900/80 mb-6">Want to learn more about my professional experience?</p>
          <Link href="/experience">
            <Button size="lg" className="transform transition-all border-[0.02px] hover:border-forest-900 hover:bg-white hover:text-forest-900 bg-forest-950 text-white duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg">
              View Work Experience
            </Button>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <CertificateModal
          title={selectedImage.title}
          imageSrc={selectedImage.imageSrc}
          isOpen={!!selectedImage}
          onClose={closeImage}
        />
      )}
    </main>
  )
}



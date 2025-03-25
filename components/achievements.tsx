// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Award, Calendar, GraduationCap, FileText, ImageIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { getAllAchievements } from "@/data/achievements"
// import { CertificateModal } from "@/components/certificate-modal"

// export function Achievements() {
//   const allAchievements = getAllAchievements()
//   // Show only the most recent 4 achievements on the homepage
//   const achievements = allAchievements.slice(0, 4)

//   const [selectedCertificate, setSelectedCertificate] = useState<{
//     title: string
//     imageSrc: string
//   } | null>(null)

//   // Get icon based on category
//   const getIcon = (category: string) => {
//     switch (category) {
//       case "award":
//         return <Award className="h-5 w-5 text-forest-700" />
//       case "certification":
//         return <FileText className="h-5 w-5 text-forest-700" />
//       case "education":
//         return <GraduationCap className="h-5 w-5 text-forest-700" />
//       default:
//         return <Award className="h-5 w-5 text-forest-700" />
//     }
//   }

//   const openCertificate = (title: string, imageSrc: string) => {
//     setSelectedCertificate({ title, imageSrc })
//   }

//   const closeCertificate = () => {
//     setSelectedCertificate(null)
//   }

//   return (
//     <section id="achievements" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
//           My <span className="text-forest-700">Achievements</span>
//         </h2>
//         <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
//           Recognitions, certifications, and milestones that have shaped my professional journey.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {achievements.map((achievement) => (
//             <Card key={achievement.id} className="border border-gray-100">
//               <CardHeader className="flex flex-row items-start gap-4 pb-2">
//                 <div className="mt-1 bg-forest-100 p-2 rounded-full">{getIcon(achievement.category)}</div>
//                 <div>
//                   <CardTitle className="text-forest-900">{achievement.title}</CardTitle>
//                   <div className="text-sm text-forest-900/70 mt-1">
//                     <span className="font-medium">{achievement.organization}</span>
//                     <div className="flex items-center mt-1">
//                       <Calendar className="mr-1 h-3 w-3" />
//                       <span>{achievement.date}</span>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-forest-900/80 text-sm">{achievement.description}</p>

//                 {achievement.certificateImage && (
//                   <div className="mt-4">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
//                       onClick={() => openCertificate(achievement.title, achievement.certificateImage!)}
//                     >
//                       <ImageIcon size={14} />
//                       View Certificate
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
//             asChild
//           >
//             <Link href="/Achievements">View All Achievements</Link>
//           </Button>
//         </div>
//       </div>

//       {selectedCertificate && (
//         <CertificateModal
//           title={selectedCertificate.title}
//           imageSrc={selectedCertificate.imageSrc}
//           isOpen={!!selectedCertificate}
//           onClose={closeCertificate}
//         />
//       )}
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import Link from "next/link"
import { Award, Calendar, GraduationCap, FileText, ImageIcon, ExternalLink, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllAchievements } from "@/data/achievements"
import { CertificateModal } from "@/components/certificate-modal"

export function Achievements() {
  const allAchievements = getAllAchievements()
  // Show only the most recent 4 achievements on the homepage
  const achievements = allAchievements.slice(0, 4)

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
      case "publication":
        return <FileText className="h-5 w-5 text-forest-700" />
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

                <div className="flex flex-wrap gap-2 mt-4">
                  {achievement.certificateImage && achievement.category === "certification" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
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
                      className="gap-2 border-forest-200 text-forest-900 hover:bg-forest-900/10"
                      onClick={() => openImage(achievement.title, achievement.pictureImage!)}
                    >
                      <Image size={14} />
                      View Pictures
                    </Button>
                  )}

                  {achievement.url && achievement.category === "publication" && (
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
            <Link href="/Achievements">View All Achievements</Link>
          </Button>
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
    </section>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, GraduationCap, Calendar, MapPin, Camera, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getEducation, getHobbies } from "@/data/about"
import { PhotoAlbumModal } from "@/components/photo-album-modal"

export default function AboutPage() {
  const education = getEducation()
  const hobbies = getHobbies()

  const [selectedHobby, setSelectedHobby] = useState<{
    title: string
    images: any[]
    initialImageIndex: number
  } | null>(null)

  const openPhotoAlbum = (hobbyId: string, imageIndex = 0) => {
    const hobby = hobbies.find((h) => h.id === hobbyId)
    if (hobby) {
      setSelectedHobby({
        title: hobby.title,
        images: hobby.images,
        initialImageIndex: imageIndex,
      })
    }
  }

  const closePhotoAlbum = () => {
    setSelectedHobby(null)
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
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900">About Me</h1>
        </div>

        {/* Profile Summary */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-forest-100 flex-shrink-0">
            <Image  src="/images/portfolio.jpg"  alt="Sadia Bintay Mostafiz"
            fill
            className="object-cover"
            priority/>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-forest-900 mb-4">Sadia Bintay Mostafiz</h2>
              <p className="text-forest-900/80 mb-4">
                Aspiring Web Developer with strong academic foundation and practical project experience, adept in
                transforming creative concepts into visually attractive interfaces. Interested in contributing
                innovative solutions and making a meaningful impact in the dynamic Web Development world.
              </p>
              <p className="text-forest-900/80 mb-4">
                Beyond my professional pursuits, I'm passionate about photography and painting, which allow me to
                express my creativity in different mediums. I believe that my artistic background enhances my approach
                to web development, particularly in UI/UX design.
              </p>
              <p className="text-forest-900/80">
              Currently I am a student and pursuing my undergraduate degree in Coputer Science and Engineering at Military Institute of Science and Technology.
                I'm constantly learning and exploring new technologies, with a particular interest in accessible design
                and sustainable web development practices. My goal is to create digital experiences that are not only
                visually appealing but also inclusive and environmentally conscious.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-3 h-6 w-6 text-forest-700" />
            <h2 className="text-2xl font-bold text-forest-900">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <Card key={edu.id} className="border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-forest-900">{edu.institution}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-forest-900/70 mt-1">
                    <div className="flex items-center">
                      <GraduationCap className="mr-1 h-4 w-4" />
                      <span>
                        {edu.degree} in {edu.field}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>
                        {edu.startYear} - {edu.endYear}
                      </span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.description && <p className="text-forest-900/80 mb-4">{edu.description}</p>}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-medium text-forest-900 mb-2">Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-forest-900/80">
                        {edu.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Hobbies */}
        <section>
          <h2 className="text-2xl font-bold text-forest-900 mb-8">Hobbies & Interests</h2>

          <div className="space-y-16">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="space-y-6">
                <div className="flex items-center">
                  {hobby.id === "photography" ? (
                    <Camera className="mr-3 h-6 w-6 text-forest-700" />
                  ) : (
                    <Paintbrush className="mr-3 h-6 w-6 text-forest-700" />
                  )}
                  <h3 className="text-xl font-bold text-forest-900">{hobby.title}</h3>
                </div>

                <p className="text-forest-900/80">{hobby.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {hobby.images.slice(0, 4).map((image, index) => (
                    <div
                      key={image.id}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer transition-all hover:opacity-90 hover:shadow-md"
                      onClick={() => openPhotoAlbum(hobby.id, index)}
                    >
                      <Image
                        src={image.thumbnailSrc || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                        <p className="text-white text-sm font-medium">{image.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
                    onClick={() => openPhotoAlbum(hobby.id)}
                  >
                    View All {hobby.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedHobby && (
        <PhotoAlbumModal
          title={selectedHobby.title}
          images={selectedHobby.images}
          isOpen={!!selectedHobby}
          onClose={closePhotoAlbum}
          initialImageIndex={selectedHobby.initialImageIndex}
        />
      )}
    </main>
  )
}

//  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4  border-forest-200 transform translate-x-2">

{/* <Image  src="/images/portfolio.jpg"  alt="Sadia Bintay Mostafiz"
fill
className="object-cover"
priority/>
</div> */}
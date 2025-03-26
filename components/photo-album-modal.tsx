"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { HobbyImage } from "@/data/about"

interface PhotoAlbumModalProps {
  title: string
  images: HobbyImage[]
  isOpen: boolean
  onClose: () => void
  initialImageIndex?: number
}

export function PhotoAlbumModal({ title, images, isOpen, onClose, initialImageIndex = 0 }: PhotoAlbumModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex)
  const currentImage = images[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-forest-900">
            {title} - {currentImage.title}
          </DialogTitle>
          
        </DialogHeader>

        <div className="relative flex-grow flex flex-col items-center justify-center my-4 overflow-hidden">
          <div className="relative w-full h-[60vh]">
            <Image
              src={currentImage.fullSrc || "/placeholder.svg"}
              alt={currentImage.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-x-0 top-1/2 flex justify-between transform -translate-y-1/2 px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="bg-white/80 hover:bg-white text-forest-900 rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="bg-white/80 hover:bg-white text-forest-900 rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="font-medium text-forest-900">{currentImage.title}</h3>
          {currentImage.description && <p className="text-forest-900/70 text-sm mt-1">{currentImage.description}</p>}
          <div className="text-forest-900/60 text-sm mt-2">
            {currentIndex + 1} of {images.length}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden transition-all ${
                  index === currentIndex ? "ring-2 ring-forest-700" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={image.thumbnailSrc || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


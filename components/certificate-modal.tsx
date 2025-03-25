"use client"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface CertificateModalProps {
  title: string
  imageSrc: string
  isOpen: boolean
  onClose: () => void
}

export function CertificateModal({ title, imageSrc, isOpen, onClose }: CertificateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-forest-900">{title}</DialogTitle>
          {/* <Button variant="ghost" size="icon" onClick={onClose} className="text-forest-900 hover:bg-forest-900/10">
            <X size={20} />
          </Button> */}
        </DialogHeader>
        <div className="relative w-full h-[60vh] mt-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`${title} Certificate`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}


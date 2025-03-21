"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Developer. Designer. Creator."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-white text-forest-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-forest-900">
          Hello, I'm <span className="text-forest-700">Sadia Bintay Mostafiz</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-forest-900 mb-8 h-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToAbout} className="bg-forest-900 hover:bg-forest-800 text-white">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="border-forest-900 text-forest-900 hover:bg-forest-900/10">
            Contact Me
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          aria-label="Scroll down"
          className="text-forest-900 hover:bg-forest-900/10"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  )
}


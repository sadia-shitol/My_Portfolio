"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-forest-100",
        scrolled ? "bg-border-forest-100/90 bg-forest-50/50 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-forest-900">
          Sadia Shitol
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["about", "experience", "projects", "skills", "achievements", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-forest-900 capitalize transform transition-all duration-300 hover:scale-105"
            >
              {item}
            </button>
          ))}

          <a href="https://drive.google.com/file/d/1aD6sw_FbHAZlHOtGgopJekMX4Bk13l7F/view" download="Sadia_Bintay_Mostafiz_CV.pdf"  className=" flex items-center gap-2">
           <Button className="w-full bg-forest-900 shadow-md hover:bg-white text-white transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:text-forest-900">
            Resume</Button>
               </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-forest-900 hover:bg-forest-900/10"
          onClick={toggleMenu}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-[0.2px] border-black/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["about", "experience", "projects", "skills", "achievements", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-forest-900/80 hover:text-forest-900 py-2  border hover:bg-forest-200 shadow-sm capitalize transition-colors"
              >
                {item}
              </button>
            ))}
             <a href="https://drive.google.com/file/d/1aD6sw_FbHAZlHOtGgopJekMX4Bk13l7F/view" className=" flex items-center gap-2">
          <Button className="w-full bg-forest-900 hover:bg-forest-800 text-white">
             Resume</Button>
             </a>
          </div>
        </div>
      )}
    </header>
  )
}



import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import AnimatedBackground from "@/components/animated-background"
import './globals.css'
export default function Home() {
  return (
    <div className="min-hc-sreen">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Projects />
        <Skills />
        <Contact />
        <AnimatedBackground/>
        
      </main>
      <Footer />
    </div>
  )
}


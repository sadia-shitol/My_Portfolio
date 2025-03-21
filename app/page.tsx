import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import './globals.css'
export default function Home() {
  return (
    <div className="min-hc-sreen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="left-0 mx-0">
        <About/>
        </div>
        
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


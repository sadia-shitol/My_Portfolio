import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white flex justify-center">
      <div className="ml-[-230px]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-forest-900">
          About <span className="text-forest-700">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-[-170px]">
          <div className="flex justify-center md:justify-end ml-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4  border-forest-200 transform translate-x-2">

              <Image  src="/images/portfolio.jpg"  alt="Sadia Bintay Mostafiz"
                fill
                className="object-cover"
                priority/>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-forest-900">Sadia Bintay Mostafiz</h3>
            <h4 className="">A Computer Science and EngineeringUndergraduate Student at Military Institute of Science and tecchnology </h4>
            <p className="text-forest-900/80 mb-6">
              Aspiring Web Developer with strong academic foundation and practical project experience, adept in
              transforming creative concepts into visually attractive interfaces. Interested in contributing innovative
              solutions and making a meaningful impact in the dynamic Web Development world.
              <br />
              <b>I focus on creating accessible, user-friendly applications that solve real-world problems.</b>
            </p>
            <p className="text-forest-900/80 mb-6">
              My expertise includes front-end frameworks like React and Next.js, as well as back-end technologies
              including Node.js and databases like MongoDB and Oracle.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS","TypeScript"].map((skill) => (
                <Card key={skill} className="bg-white border border-forest-100">
                  <CardContent className="py-2 px-1 text-forest-900">{skill}</CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 bg-forest-900 hover:bg-forest-800 text-white" >
              <a href="https://drive.google.com/file/d/1E0XCgH2wUtZrAFCJ3cTXcF_0M1eNUUNC/view" download="Sadia_Bintay_Mostafiz_CV.pdf" className=" flex items-center gap-2">
                <Download size={16} />
                Download CV
              </a>
              </Button>

              <div className="flex gap-2">
                {[
                  { icon: <Github size={20} />, label: "GitHub" ,url:"https://github.com/sadia-shitol"},
                  { icon: <Linkedin size={20} />, label: "LinkedIn", url:"https://www.linkedin.com/in/sadia-bintay-mostafiz-b4177a267" },
                  { icon: <Instagram size={20} />, label: "Instagram" ,url:"https://www.instagram.com/_shitol_sadia/"},
                  { icon: <Mail size={20} />, label: "Email", url: "mailto:shitol3080@gmail.com" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    aria-label={social.label}
                    className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
                  >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                    
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </section>
  )
}


import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-10 w-10 text-forest-700" />,
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10 text-forest-700" />,
    skills: ["Node.js", "Express", "PHP"],
  },
  {
    title: "Database",
    icon: <Database className="h-10 w-10 text-forest-700" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-10 w-10 text-forest-700" />,
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    title: "Other Skills",
    icon: <Globe className="h-10 w-10 text-forest-700" />,
    skills: [
      "SEO",
      "Git",
      "GitHub",
      "Agile Methodology",
      "Technical Writing",
      "Team Collaboration",
      "Project Management"
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          My <span className="text-forest-700">Skills</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          I've worked with a variety of technologies and tools throughout my career. Here's a comprehensive list of my
          technical skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full border border-gray-100">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <div>
                  <CardTitle className="text-forest-900">{category.title}</CardTitle>
                  <CardDescription className="text-forest-900/70">{category.skills.length} skills</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white rounded-full px-3 py-1 text-sm border border-forest-100 text-forest-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


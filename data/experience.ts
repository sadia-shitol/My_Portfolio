export type Experience = {
    id: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string | null // null means "Present"
    description: string
    responsibilities: string[]
    technologies: string[]
    logo?: string
    order?: number
  }
  
  export const experiences: Experience[] = [
    {
      id: "senior-developer",
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: null,
      description:
        "Leading the development of enterprise web applications using modern JavaScript frameworks and cloud technologies.",
      responsibilities: [
        "Architected and implemented scalable front-end solutions using React and Next.js",
        "Led a team of 5 developers, providing mentorship and code reviews",
        "Implemented CI/CD pipelines using GitHub Actions and AWS",
        "Optimized application performance, achieving 40% improvement in load times",
        "Collaborated with UX designers to implement responsive, accessible interfaces",
        "Integrated third-party APIs and services to enhance application functionality",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "MongoDB", "GraphQL", "Docker"],
      logo: "/placeholder.svg?height=200&width=200",
      order: 1,
    },
    {
      id: "web-developer",
      title: "Web Developer",
      company: "Digital Solutions LLC",
      location: "Boston, MA",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed and maintained client websites and web applications, focusing on responsive design and performance optimization.",
      responsibilities: [
        "Built responsive websites and web applications for clients across various industries",
        "Implemented front-end interfaces using React and Vue.js",
        "Developed RESTful APIs using Node.js and Express",
        "Optimized website performance and SEO",
        "Collaborated with designers to implement UI/UX improvements",
        "Maintained and updated existing client websites",
      ],
      technologies: ["JavaScript", "React", "Vue.js", "Node.js", "Express", "MySQL", "CSS/SASS", "Webpack"],
      logo: "/placeholder.svg?height=200&width=200",
      order: 2,
    },
    {
      id: "junior-developer",
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      location: "Chicago, IL",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description:
        "Started as an intern and quickly progressed to a full-time role, working on various web development projects.",
      responsibilities: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Assisted senior developers with larger projects and feature implementations",
        "Created responsive layouts and implemented cross-browser compatibility",
        "Built custom WordPress themes and plugins",
        "Participated in client meetings and requirement gathering",
        "Documented code and created technical specifications",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "WordPress", "Bootstrap", "Git"],
      logo: "/placeholder.svg?height=200&width=200",
      order: 3,
    },
  ]
  
  export function getAllExperiences(): Experience[] {
    return experiences
  }
  
  export function getExperienceById(id: string): Experience | undefined {
    return experiences.find((experience) => experience.id === id)
  }
  
  
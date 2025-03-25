export type Achievement = {
    id: string
    title: string
    organization: string
    date: string
    description: string
    category: "award" | "certification" | "education" | "publication" | "other"
    image?: string
    url?: string
    order?: number
  }
  
  export const achievements: Achievement[] = [
    {
      id: "aws-certification",
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "Dec 2022",
      description:
        "Earned the AWS Certified Solutions Architect - Associate certification, demonstrating expertise in designing distributed systems on AWS.",
      category: "certification",
      url: "#",
      order: 1,
    },
    {
      id: "react-certification",
      title: "React Developer Certification",
      organization: "Meta",
      date: "Aug 2022",
      description:
        "Completed Meta's React Developer certification program, covering advanced React concepts, state management, and performance optimization.",
      category: "certification",
      url: "#",
      order: 2,
    },
    {
      id: "masters-degree",
      title: "Master of Science in Computer Science",
      organization: "University of Technology",
      date: "May 2016",
      description:
        "Graduated with honors, specializing in Web Technologies and Distributed Systems. Thesis focused on scalable web architecture patterns.",
      category: "education",
      order: 3,
    },
    {
      id: "bachelors-degree",
      title: "Bachelor of Science in Computer Science",
      organization: "State University",
      date: "May 2014",
      description: "Graduated cum laude with a focus on software development and database systems.",
      category: "education",
      order: 4,
    },
    {
      id: "developer-award",
      title: "Outstanding Developer Award",
      organization: "Tech Innovations Inc.",
      date: "Nov 2022",
      description:
        "Recognized for exceptional contributions to the company's flagship product, implementing key features that increased user engagement by 35%.",
      category: "award",
      order: 5,
    },
    {
      id: "hackathon-winner",
      title: "First Place - Regional Hackathon",
      organization: "TechFest 2021",
      date: "Oct 2021",
      description:
        "Led a team of 4 developers to create an innovative accessibility solution for visually impaired users, winning first place among 50 competing teams.",
      category: "award",
      order: 6,
    },
    {
      id: "research-paper",
      title: "Modern Web Architecture Patterns",
      organization: "International Journal of Web Engineering",
      date: "Mar 2020",
      description:
        "Published research paper on scalable web architecture patterns, focusing on microservices and serverless computing.",
      category: "publication",
      url: "#",
      order: 7,
    },
    {
      id: "tech-blog",
      title: "Contributing Author",
      organization: "TechBytes Blog",
      date: "2019 - Present",
      description:
        "Regular contributor to a popular tech blog, writing articles on web development best practices, JavaScript frameworks, and performance optimization.",
      category: "publication",
      url: "#",
      order: 8,
    },
  ]
  
  export function getAllAchievements(): Achievement[] {
    return achievements
  }
  
  export function getAchievementsByCategory(category: string): Achievement[] {
    return achievements.filter((achievement) => achievement.category === category)
  }
  
  export function getAchievementById(id: string): Achievement | undefined {
    return achievements.find((achievement) => achievement.id === id)
  }
  
  
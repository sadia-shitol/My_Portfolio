export type Achievement = {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: "award" | "certification" | "education" | "publication" | "other"
  image?: string
  url?: string
  certificateImage?: string // For certifications
  pictureImage?: string // For awards
  order?: number
}

export const achievements: Achievement[] = [
    //Will add someday INN SHAA ALLAH
  // {
  //   id: "masters-degree",
  //   title: "Master of Science in Computer Science",
  //   organization: "University of Technology",
  //   date: "May 2016",
  //   description:
  //     "Graduated with honors, specializing in Web Technologies and Distributed Systems. Thesis focused on scalable web architecture patterns.",
  //   category: "education",
  //   order: 3,
  // },
  
  {
    id: "bachelors-degree",
    title: "Bachelor of Science in Computer Science",
    organization: "Military Institute of Science and Technology",
    date: "April 2021- Present",
    description: "Currently Pursuing Undergraduate in Computer Science and Engineering. Thesis focused on Image Alternate Bangla Text generation using Generative AI",
    category: "education",
    order: 1,
  },
  {
    id: "python-certification",
    title: "Python Fundamentals ",
    organization: "Kiron, Ascend International Limited",
    date: "14 July 2021",
    description:
      "Basic data manipulation and analysis using Python.",
    category: "certification",
    //url: "#",
    certificateImage: "./images/achievements_Pictures/Python.jpg?height=800&width=600&text=AWS+Certificate",
    order: 2,
  },
 
    {
    id: "IDPC-certification",
    title: "Certificate of Volunteering on Independence Day Programming Contest 2023.",
    organization: "Department of Computer Science and Engineering, MIST",
    date: "1st April 2023",
    description:
      "Volunteering at the event, managing logistics and coordination. Demonstrated leadership, organization, and management skills to ensure smooth event execution.",
    category: "certification",
   // url: "#",
    certificateImage: "./images/achievements_Pictures/IDPC.jpg?height=800&width=600&text=React+Certificate",
    order: 3,
  },
  
  {
    id: "leetcon-certification",
    title: "Certificate of Volunteering on MIST LeetCon 2023: HackMeIfYouCan.",
    organization: "Department of Computer Science and Engineering, MIST",
    date: "1st April 2023",
    description:
              "Assisting in event coordination, logistics, and participant management. Played a key role in ensuring a well-organized and engaging competition environment while demonstrating leadership, organization, and management skills.",
    category: "certification",
   // url: "#",
    certificateImage: "./images/achievements_Pictures/leetcon.jpg?height=800&width=600&text=React+Certificate",
    order: 4,
  },
 
  {
    id: "art-winner",
    title: "Best Artist on S Talent-2022",
    organization: "Research and Dialogue Internation,Bangladesh Shilpokala Academy",
    date: "Oct 2021",
    description:
      " ",
    category: "award",
    pictureImage: "./images/achievements_Pictures/art.jpg?height=800&width=600&text=Hackathon+Award", // Added picture image
    order: 5,
  },
    {
    id: "essay-winner",
    title: "3rd Prize in Chattogram Metro Sub-region",
    organization: "Narcotics Control Department,Chattogram",
    date: "26th June 2019",
    description:
      " Essay Competition for children and the adolescents on the International Day against Drug Abuse and Illicit Trafficking",
    category: "award",
    pictureImage: "./images/achievements_Pictures/3rdPrize.jpg?height=800&width=600&text=Hackathon+Award", // Added picture image
    order: 6,
  },
  {
    id: "essayICT-winner",
    title: "2nd Prize from District  Administration Chattogram",
    organization: "Department of Posts and Telecommunications, Chattogram ",
    date: "18th May 2019",
    description:
      " Essay Competition on the World Telecmmunication and Information Society Day",
    category: "award",
    pictureImage: "./images/achievements_Pictures/Telecommunication.jpg?height=800&width=600&text=Hackathon+Award", // Added picture image
    order: 7,
  },
  {
    id: "aust-soccer-certification",
    title: "Certificate of Appreciation on AUST Rover Challenge 2022",
    organization: "AUST Inter University Robotics Carnival",
    date: "September 2022",
    description:
          "",
    category: "certification",
   // url: "#",
    certificateImage: "./images/achievements_Pictures/AUST Rover.jpg?height=800&width=600&text=React+Certificate",
    order: 8,
  },
  {
    id: "ignition-certification",
    title: "Certificate of Participation on Ignition 2023",
    organization: "National Mechanical Festival 2023",
    date: "14th October 2023",
    description:
          "",
    category: "certification",
   // url: "#",
    certificateImage: "./images/achievements_Pictures/Ignition.jpg?height=800&width=600&text=React+Certificate",
    order: 9,
  },
//In future inn Shaa Allah
  // {
  //   id: "research-paper",
  //   title: "Modern Web Architecture Patterns",
  //   organization: "International Journal of Web Engineering",
  //   date: "Mar 2020",
  //   description:
  //     "Published research paper on scalable web architecture patterns, focusing on microservices and serverless computing.",
  //   category: "publication",
  //   url: "#", // URL for publication details
  //   order: 7,
  // },
  
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


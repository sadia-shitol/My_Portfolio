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
    id: 'softwareeEngineerIntern',
    title: 'Software Engineer Intern',
    company: 'Dynamic Solution Innovators',
    location: 'Mohakhali, Dhaka',
    startDate: 'February 2024',
    endDate: 'March 2024',
    description:
      'Acquired in-depth knowledge on industry-level software development and management. Software Development Life Cycle, Parallel Learning and Application, Industry-relevant topics as well as adaptability on software development.',
    responsibilities: [
      'UI/UX Designing using Figma and Frontend Engineering',
      'Developed an on-line bidding e-Commerce platform named Ekhonni, using Springboot, an open source Java-based backend framework, and Next.js, an open-source React-based frontend framework.',
    ],
    technologies: ['JavaScript', 'React', 'Nextjs', 'Tailwind CSS', 'Figma'],
    logo: './images/DSi.jpeg?height=350&width=350',
    order: 2,
  },
  {
    id: 'uiuxIntern',
    title: 'UI/UX Designer Intern',
    company: 'Nebulae Soft',
    location: 'New Bailey Road, Dhaka',
    startDate: 'December 2024',
    endDate: 'March 2025',
    description:
      'Designed responsive web and mobile interfaces while conducting user research, wireframing, prototyping, and usability testing to enhance the overall user experience. Focused on creating intuitive and visually appealing designs based on user needs, ensuring seamless interactions across different devices.',
    responsibilities: [
      'Designing responsive interfaces',
      'Conducting user research, wireframing and prototyping.',
      'Usability testing to enhance User Experience.',
      'Performing competitor analysis, card sorting.',
      'Refining design strategies for improved usability.',
    ],
    technologies: [
      'Figma',
      'Wireframing',
      'Prototyping',
      'User Research',
      'Accessibility',
      'Design Systems',
    ],
    logo: './images/Nebulae-Soft.jpeg?height=350&width=350',
    order: 3,
  },

  // lets
  {
    id: 'juniorFrontendDeveloper',
    title: 'Junior Frontend Developer',
    company: 'CSM Bangladesh Ltd',
    location: 'Uttara, Dhaka',
    startDate: 'May 2025',
    endDate: 'Present',
    description:
      'Designing and development of different websites using HTML, CSS, JavaScript, and Bootstrap.',
    responsibilities: [
      'Comprehensive Frontend Development',
      'CMS handling and coordination',
      'Ensuring the best quality of websites with responsiveness',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Quality Control of Websites',
      'Web Application Development',
    ],
    logo: './images/csm-bangladesh-ltd-logo.jpg?height=350&width=350',
    order: 1,
  },
]

export function getAllExperiences(): Experience[] {
  return experiences
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id)
}

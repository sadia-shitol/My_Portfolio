export type Education = {
    id: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear: string
    location: string
    description?: string
    achievements?: string[]
  }
  
  export type HobbyImage = {
    id: string
    title: string
    description?: string
    thumbnailSrc: string
    fullSrc: string
  }
  
  export type Hobby = {
    id: string
    title: string
    description: string
    images: HobbyImage[]
  }
  
  export const education: Education[] = [
    {
      id: "university",
      institution: "Military Institute of Science and Technology",
      degree: "Bachelor of Science",
      field: "Computer Science and Engineering",
      startYear: "2021",
      endYear: "Present",
      location: "Mirpur, Dhaka",
      description: "",
      achievements: [
        " Currently achieving my degree!"
      ],
    },
    {
      id: "highschool",
      institution: "Bangladesh Navy School and College Chittagong",
      degree: "Higher Secondary Certificate and Secondary School Certificate",
      field: "Science",
      startYear: "2014",
      endYear: "2020",
      location: "Potenga, Chittagong",
      description: " ",
      achievements: ["Punctuality", "Descipline","Deputy College Captaincy","President of Honesty Club","Lots of good memories"],
    },
  ]
  
  export const hobbies: Hobby[] = [
    {
      id: "photography",
      title: "Photography",
      description:
        "I've been passionate about photography for over 5 years, focusing on random things. I enjoy capturing moments that tell stories and evoke emotions.",
      images: [
        {
          id: "photo1",
          title: "Mountain Sunrise",
          description: "Captured during a hiking trip in the Rockies",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Mountain+Sunrise",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Mountain+Sunrise",
        },
        {
          id: "photo2",
          title: "Urban Life",
          description: "Street photography in downtown San Francisco",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Urban+Life",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Urban+Life",
        },
        {
          id: "photo3",
          title: "Ocean Sunset",
          description: "Pacific coast at dusk",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Ocean+Sunset",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Ocean+Sunset",
        },
        {
          id: "photo4",
          title: "Wildlife",
          description: "Birds in their natural habitat",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Wildlife",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Wildlife",
        },
        {
          id: "photo5",
          title: "Architectural Details",
          description: "Exploring patterns in modern architecture",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Architecture",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Architecture",
        },
        // Additional photos that will only be visible in the modal
        {
          id: "photo6",
          title: "Foggy Morning",
          description: "Mist over the valley",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=Foggy+Morning",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=Foggy+Morning",
        },
        {
          id: "photo7",
          title: "City Lights",
          description: "Night photography of the city skyline",
          thumbnailSrc: "/placeholder.svg?height=300&width=400&text=City+Lights",
          fullSrc: "/placeholder.svg?height=800&width=1200&text=City+Lights",
        },
      ],
    },
    {
      id: "painting",
      title: "Painting",
      description:
        "Painting has been my creative outlet since childhood. I primarily work with acrylics and watercolors, creating abstract and landscape pieces that express emotions and perspectives.",
      images: [
        {
            id: "painting1",
            title: "অভিমান",
            description: " সেই মেঘবালিকার গল্প হোক, শহরজুড়ে বৃষ্টি হোক",
            thumbnailSrc: "./images/Hobby_paintings/peaceaAndu.jpg?height=300&width=400&text=Seascape",
            fullSrc: "./images/Hobby_paintings/peaceaAndu.jpg?height=800&width=1200&text=Seascape",
          },
          {
            id: "painting2",
            title: "Home",
            description: "A place where all happiness lies in",
            thumbnailSrc: "./images/Hobby_paintings/Home.jpg?height=300&width=400&text=Watercolor+Landscape",
            fullSrc: "./images/Hobby_paintings/Home.jpg?height=800&width=1200&text=Watercolor+Landscape",
          },
       
        {
            id: "painting3",
            title: "Friendship",
            description: "Story of best friends",
            thumbnailSrc: "./images/Hobby_paintings/friendship.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/friendship.jpg?height=800&width=1200&text=Still+Life",
          },
        {
          id: "painting4",
          title: "Hope",
          description: "Light and Hope",
          thumbnailSrc: "./images/Hobby_paintings/lamppost.jpg?height=300&width=400&text=Portrait+Study",
          fullSrc: "./images/Hobby_paintings/lamppost.jpg?height=800&width=1200&text=Portrait+Study",
        },
        // Additional paintings that will only be visible in the modal
        {
            id: "painting5",
            title: "Rythm of Life",
            description: "A girl who has chosen Reality over her Dreams",
            thumbnailSrc: "./images/Hobby_paintings/Monotonouslife.jpg?height=300&width=400&text=Watercolor+Landscape",
            fullSrc: "./images/Hobby_paintings/Monotonouslife.jpg?height=800&width=1200&text=Watercolor+Landscape",
          },
       
        {
            id: "painting6",
            title: "After Rain",
            description: "Poster Color on Paper",
            thumbnailSrc: "./images/Hobby_paintings/afterRain.jpg?height=300&width=400&text=Abstract+Emotions",
            fullSrc: "./images/Hobby_paintings/afterRain.jpg?height=800&width=1200&text=Abstract+Emotions",
          },
          {
            id: "painting7",
            title: "The Art Palette",
            description: "Sketch",
            thumbnailSrc: "./images/Hobby_paintings/TheArtPalette.jpg?height=300&width=400&text=Urban+Sketch",
            fullSrc: "./images/Hobby_paintings/TheArtPalette.jpg?height=800&width=1200&text=Urban+Sketch",
          },
        {
          id: "painting8",
          title: "meow",
          description: "just a happy cat!",
          thumbnailSrc: "./images/Hobby_paintings/meow.jpg?height=300&width=400&text=Still+Life",
          fullSrc: "./images/Hobby_paintings/meow.jpg?height=800&width=1200&text=Still+Life",
        },
        {
            id: "painting9",
            title: "The neverending War",
            description: "It's always your heart vs your brain",
            thumbnailSrc: "./images/Hobby_paintings/war.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/war.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting10",
            title: "Frustrated Heart",
            description: "Fix your heart ,Listen to your brain",
            thumbnailSrc: "./images/Hobby_paintings/fixYourself.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/fixYourself.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting11",
            title: "Tired Brain",
            description: "I can't brear anymore",
            thumbnailSrc: "./images/Hobby_paintings/hopeless.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/hopeless.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting12",
            title: "Love can fix",
            description: "Love yourself even if no one else does",
            thumbnailSrc: "./images/Hobby_paintings/loveYourself.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/loveYourself.jpg?height=800&width=1200&text=Still+Life",
          },
      ],
    },
  ]
  
  export function getEducation(): Education[] {
    return education
  }
  
  export function getHobbies(): Hobby[] {
    return hobbies
  }
  
  export function getHobbyById(id: string): Hobby | undefined {
    return hobbies.find((hobby) => hobby.id === id)
  }
  
  
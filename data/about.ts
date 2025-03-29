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
      achievements: [ "Deputy College Captaincy","President of Honesty Club","Lots of good memories"],
    },
  ]
  
  export const hobbies: Hobby[] = [
    {
      id: "photography",
      title: "Photography",
      description:
        "I've been passionate about photography since 2018, focusing on random things. I enjoy capturing moments that tell stories and evoke emotions. I see, I stop and I click.",
      images: [
        {
          id: "photo1",
          title: "Mountain ",
          description: " And the mountains He has fixed firmly -(an-Naazi‘aat 79:32)",
          thumbnailSrc: "./images/Hobby_Photography/mountain.jpg?height=300&width=400&text=Mountain+Sunrise",
          fullSrc: "/./images/Hobby_Photography/mountain.jpg?height=800&width=1200&text=Mountain+Sunrise",
        },
        {
          id: "photo2",
          title: "অপরাজিতা!🤍",
          description: "তুমি কি সত্যি-ই অপরাজিত?",
          thumbnailSrc: "./images/Hobby_Photography/oporajita.jpg?height=300&width=400&text=Urban+Life",
          fullSrc: "./images/Hobby_Photography/oporajita.jpg?height=800&width=1200&text=Urban+Life",
        },
       
        {
          id: "photo3",
          title: "A penholder with its untold stories",
          description: "অতি মুল্যবান শখ!",
          thumbnailSrc: "./images/Hobby_Photography/fav.jpg?height=300&width=400&text=Wildlife",
          fullSrc: "./images/Hobby_Photography/fav.jpg?height=800&width=1200&text=Wildlife",
        },
        {
            id: "photo4",
            title: "Color",
            description: "তবু্ও নানান রঙের স্বপ্নের বিচরণ তোমাদের যান্ত্রিকতার এই শহরে.....",
            thumbnailSrc: "./images/Hobby_Photography/color.jpg?height=300&width=400&text=Foggy+Morning",
            fullSrc: "./images/Hobby_Photography/color.jpg?height=800&width=1200&text=Foggy+Morning",
          },
        {
          id: "photo5",
          title: "From my corner",
          description: "এই জগতের অদ্ভুত কাণ্ডকারখানা বোঝার চেষ্টা খুব বেশি করতে নেই! জগৎ চলছে,সূর্য উঠছে-ডুবছে, পূর্ণিমা-অমাবস্যা হচ্ছে তেমনি অদ্ভুত কাণ্ডকারখানাও ঘটছে! ঘটতে থাকুক না,সব বোঝার দরকার কী?",
          thumbnailSrc: "./images/Hobby_Photography/myCorner.jpg?height=300&width=400&text=Architecture",
          fullSrc: "./images/Hobby_Photography/myCorner.jpg?height=800&width=1200&text=Architecture",
        },
        // Additional photos that will only be visible in the modal
        {
            id: "photo6",
            title: "Dreamy",
            description: "সিলেটে বেলা ফুরাবার আগে",
            thumbnailSrc: "/images/Hobby_Photography/Sylhet.jpg?height=300&width=400&text=Ocean+Sunset",
            fullSrc: "/images/Hobby_Photography/sylhet.jpg?height=800&width=1200&text=Ocean+Sunset",
          },
        {
          id: "photo7",
          title: "Foggy Morning",
          description: "Mist over the valley",
          thumbnailSrc: "./images/Hobby_Photography/shishir.jpg?height=300&width=400&text=Foggy+Morning",
          fullSrc: "./images/Hobby_Photography/shishir.jpg?height=800&width=1200&text=Foggy+Morning",
        },
        {
          id: "photo8",
          title: "The Ray",
          description: "Smell the sea & feel the sky,Let your soul & spirit fly.",
          thumbnailSrc: "./images/Hobby_Photography/ray.jpg?height=300&width=400&text=City+Lights",
          fullSrc: "./images/Hobby_Photography/ray.jpg?height=800&width=1200&text=City+Lights",
        },

        {
            id: "photo99",
            title: "SighLights",
            description: "এ আঁধারে মায়া বাড়ে পারো যদি করো ক্ষমা, আশা রাখি দেখা হবে,শুভ রাত্রি প্রিয়তমা",
            thumbnailSrc: "./images/Hobby_Photography/sighlight.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/sighlight.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo10",
            title: "Drizzle",
            description: "অত:পর মেঘের গর্জন ছাড়াই এক পশলা বৃষ্টি...",
            thumbnailSrc: "./images/Hobby_Photography/drizzle.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/drizzle.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo11",
            title: "Dear Fear",
            description: "That feeling of losing favourite things repeatedly...",
            thumbnailSrc: "./images/Hobby_Photography/afraid.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/afraid.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo13",
            title: "Sad I was, still clicked",
            description: "And of His signs is [that] He shows you the lightening [causing] fear and aspiration,and He sends down rain from the sky by which He brings to life the earth after its lifelessness. Indeed in that are signs for a people who use reason-Al Quran 30:24",
            thumbnailSrc: "./images/Hobby_Photography/sadness.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/sadness.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo14",
            title: "বাতায়ন",
            description: "If you are having trouble getting started,look out of the window. The whole world is a story,and every moment is a miracle",
            thumbnailSrc: "./images/Hobby_Photography/batayon.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/batayon.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo15",
            title: "Candle",
            description: "If you are having trouble getting started,look out of the window. The whole world is a story,and every moment is a miracle",
            thumbnailSrc: "./images/Hobby_Photography/candleM.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/candleM.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo16",
            title: "সখা",
            description: "আয় আরেকটি বার আয়রে সখা, প্রাণের মাঝে আয় ; মোরা সুখের দুঃখের কথা কব, প্রাণ জুড়াবে তায়.......",
            thumbnailSrc: "./images/Hobby_Photography/beach.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/beach.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo17",
            title: "Returning.......",
            description: "we will have to return. To where?",
            thumbnailSrc: "./images/Hobby_Photography/return.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/return.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo18",
            title: "মেঘ",
            description: "তবু আমার মেঘ বৃষ্টি আলোছায়ায় হারিয়ে যাওয়া ইচ্ছে বুড়ি ঘুড়ির মতো মাথাচাড়া দিয়ে ওঠে।",
            thumbnailSrc: "./images/Hobby_Photography/megh.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/megh.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo20",
            title: "never return to me",
            description: "He who is presented with a flower should not reject it, for it is light to carry and pleasant in odor.-Sahih Muslim",
            thumbnailSrc: "./images/Hobby_Photography/street.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/street.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo21",
            title: "Campus",
            description: "Satisfied??",
            thumbnailSrc: "./images/Hobby_Photography/MIST.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/MIST.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo22",
            title: "Busy City, Busy People",
            description: "বেলা ফুরাবার আগে!!!",
            thumbnailSrc: "./images/Hobby_Photography/busyLife.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/busyLife.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo23",
            title: "অবশেষে......",
            description: "At the end?",
            thumbnailSrc: "./images/Hobby_Photography/obosheshe.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/obosheshe.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo24",
            title: "সব পাখি ঘরে ফেরে",
            description: "ফুরিয়ে এসেছে বেলা,নীড়ে ফেরার পালা!!!",
            thumbnailSrc: "./images/Hobby_Photography/returning.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/returning.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo25",
            title: "বৃষ্টিস্নাত",
            description: " All praise is due to Allah, Who created the heavens and the earth and made the darkness and the light; yet those who disbelieve set up equals with their Lord.― Quran 6:1",
            thumbnailSrc: "./images/Hobby_Photography/brishtisnato.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/brishtisnato.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo27",
            title: "ঝরাপাতা",
            description: " ঝরাপাতা ঝরে যায়_Leaves will leave",
            thumbnailSrc: "./images/Hobby_Photography/leaves.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/leaves.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo28",
            title: "বিলাসী",
            description: " A garden of purple is always in bloom!",
            thumbnailSrc: "./images/Hobby_Photography/bougenvillae.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/bougenvillae.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo29",
            title: "সমুদ্র",
            description: " A garden of purple is always in bloom!",
            thumbnailSrc: "./images/Hobby_Photography/seabeach.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/seabeach.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo30",
            title: "Insignificant",
            description: " My troubles and difficulties just shrivel up. I like being insignificant!",
            thumbnailSrc: "./images/Hobby_Photography/winter.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/winter.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo31",
            title: "Optimistic Odds",
            description: " & sometimes,against all odds, against all logics, we still hope....",
            thumbnailSrc: "./images/Hobby_Photography/chairs.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/chairs.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo32",
            title: "Cursed Dark",
            description: " Sometimes, it's better to shine a dimming light than cursing the darkness",
            thumbnailSrc: "./images/Hobby_Photography/dimmlight.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/dimmlight.jpg?height=800&width=1200&text=City+Lights",
          },
          // {
          //   id: "photo33",
          //   title: "Fairness",
          //   description: "Be like the flower that gives its fragrance to even the hand that crushes it- Ali (RA)",
          //   thumbnailSrc: "./images/Hobby_Photography/Flowedaliaa.jpg?height=300&width=400&text=City+Lights",
          //   fullSrc: "./images/Hobby_Photography/Flowedaliaa.jpg?height=800&width=1200&text=City+Lights",
          // },
          {
            id: "photo34",
            title: "সাদাকালো",
            description: " Colorless or Lifeless?",
            thumbnailSrc: "./images/Hobby_Photography/blackandwhite.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/blackandwhite.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo35",
            title: "the boy and the horse",
            description: " সন্ধ্যে হল,সূর্য নামে পাটে...",
            thumbnailSrc: "./images/Hobby_Photography/sunset.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/sunset.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo36",
            title: "জীবনতরী......",
            description: " Put up your caravan just for one day.",
            thumbnailSrc: "./images/Hobby_Photography/jibontori.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/jibontori.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo37",
            title: "Livelihood",
            description: " কোথায় সমাপ্তি তোমার?",
            thumbnailSrc: "./images/Hobby_Photography/horseman.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/horseman.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo38",
            title: "Broken",
            description: " এই শহরের আঁধারে কেউ নিজের স্বপ্ন খুঁজে পোড়ায়.....",
            thumbnailSrc: "./images/Hobby_Photography/broken.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/broken.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo39",
            title: "বদল",
            description: " জায়গাটা একই আছে,হয়ত কিছুটা বদলে গিয়েছে..কিন্তু মানুষগুলো আজ সারা দেশে ছড়িয়ে ছিটিয়ে....",
            thumbnailSrc: "./images/Hobby_Photography/childhood.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/childhood.jpg?height=800&width=1200&text=City+Lights",
          },
          {
            id: "photo40",
            title: "the last counts...",
            description: " have to return..but with what??",
            thumbnailSrc: "./images/Hobby_Photography/belasheshe.jpg?height=300&width=400&text=City+Lights",
            fullSrc: "./images/Hobby_Photography/belasheshe.jpg?height=800&width=1200&text=City+Lights",
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
          // {
          //   id: "painting2",
          //   title: "Home",
          //   description: "A place where all happiness lies in",
          //   thumbnailSrc: "./images/Hobby_paintings/Home.jpg?height=300&width=400&text=Watercolor+Landscape",
          //   fullSrc: "./images/Hobby_paintings/Home.jpg?height=800&width=1200&text=Watercolor+Landscape",
          // },
       
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
        // {
        //   id: "painting8",
        //   title: "meow",
        //   description: "just a happy cat!",
        //   thumbnailSrc: "./images/Hobby_paintings/meow.jpg?height=300&width=400&text=Still+Life",
        //   fullSrc: "./images/Hobby_paintings/meow.jpg?height=800&width=1200&text=Still+Life",
        // },
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
          {
            id: "painting13",
            title: "Hehe",
            description: "Mickey",
            thumbnailSrc: "./images/Hobby_paintings/mickey.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/mickey.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting14",
            title: "Raindrops",
            description: "Raaindrops on leaves",
            thumbnailSrc: "./images/Hobby_paintings/raindrops.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/raindrops.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting15",
            title: "Dreamy Path",
            description: "A serene path",
            thumbnailSrc: "./images/Hobby_paintings/canvas.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/canvas.jpg?height=800&width=1200&text=Still+Life",
          },
          // {
          //   id: "painting16",
          //   title: "Cactus",
          //   description: "hopeless cactus",
          //   thumbnailSrc: "./images/Hobby_paintings/caactus.jpg?height=300&width=400&text=Still+Life",
          //   fullSrc: "./images/Hobby_paintings/caactus.jpg?height=800&width=1200&text=Still+Life",
          // },
          {
            id: "painting17",
            title: "my type",
            description: "A dreamy corner",
            thumbnailSrc: "./images/Hobby_paintings/peace.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/peace.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting18",
            title: "childhood",
            description: "no way to go back...",
            thumbnailSrc: "./images/Hobby_paintings/childhood.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/childhood.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting19",
            title: "Autumn",
            description: "cycling in garden...",
            thumbnailSrc: "./images/Hobby_paintings/cycle.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/cycle.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting20",
            title: "Alone",
            description: "A boy and his cycling hobby...",
            thumbnailSrc: "./images/Hobby_paintings/alone.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/alone.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting22",
            title: "A girl lost her way back...",
            description: "It's you and your destination...",
            thumbnailSrc: "./images/Hobby_paintings/noRush.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/noRush.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting24",
            title: "Ending...",
            description: "Endings are often be beautiful too...",
            thumbnailSrc: "./images/Hobby_paintings/canvasSunset.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/canvasSunset.jpg?height=800&width=1200&text=Still+Life",
          },
          // {
          //   id: "painting25",
          //   title: "ScarryStarry",
          //   description: "Vangoghs starry night...",
          //   thumbnailSrc: "./images/Hobby_paintings/Starry.jpg?height=300&width=400&text=Still+Life",
          //   fullSrc: "./images/Hobby_paintings/Starry.jpg?height=800&width=1200&text=Still+Life",
          // },
          {
            id: "painting26",
            title: "Orange",
            description: "Tok komlalebu",
            thumbnailSrc: "./images/Hobby_paintings/komola.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/komola.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting27",
            title: "Ending are neverending...",
            description: "Endings are reality...",
            thumbnailSrc: "./images/Hobby_paintings/Sun.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/Sun.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting28",
            title: "TwinStarry",
            description: "Two shades of starry night...",
            thumbnailSrc: "./images/Hobby_paintings/twinstarry.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/twinstarry.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting29",
            title: "Lemon",
            description: "Lebulotika",
            thumbnailSrc: "./images/Hobby_paintings/lebu.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/lebu.jpg?height=800&width=1200&text=Still+Life",
          },
          {
            id: "painting30",
            title: "void",
            description: "no return possible...",
            thumbnailSrc: "./images/Hobby_paintings/void.jpg?height=300&width=400&text=Still+Life",
            fullSrc: "./images/Hobby_paintings/void.jpg?height=800&width=1200&text=Still+Life",
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
  
  
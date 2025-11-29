'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Junior Frontend Developer at CSM Bangladesh Limited'
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const aboutSection = document.getElementById('projects')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToContact = () => {
    const aboutSection = document.getElementById('contact')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='relative h-screen flex items-center justify-center bg-white text-forest-500'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-forest-700'>
          Hello, I'm{' '}
          <span className='text-forest-900'>Sadia Bintay Mostafiz</span>
        </h1>
        <h2 className='text-xl md:text-2xl lg:text-3xl text-forest-900 mb-8 h-8'>
          {typedText}
          <span className='animate-pulse'>|</span>
        </h2>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            size='lg'
            onClick={scrollToProjects}
            className='bg-forest-900 shadow-md hover:bg-forest-100 text-white hover:text-forest-900 transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700'
          >
            View My Works
          </Button>
          <Button
            size='lg'
            onClick={scrollToContact}
            variant='outline'
            className='border-forest-900 shadow-lg text-forest-900 hover:bg-forest-900 hover:text-forest-100 transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700'
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div
          className={`w-14 h-14 flex items-center justify-center transition-all duration-300 rounded-full ${
            isClicked
              ? 'bg-forest-900 text-white'
              : 'bg-white border-2 border-forest-900 text-forest-900 hover:bg-forest-900/10'
          }`}
        >
          <Button
            variant='ghost'
            size='icon'
            onClick={scrollToAbout}
            aria-label='Scroll down'
            className={`w-14 h-14 rounded-full ${
              isClicked ? 'text-white' : 'text-forest-900'
            }`}
          >
            <ArrowDown
              className={`w-6 h-6 transition-colors duration-300 ${
                isClicked ? 'text-white' : 'text-forest-900'
              }`}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}

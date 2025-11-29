import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react'

export function About() {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-forest-900'>
          About <span className='text-forest-700'>Me</span>
        </h2>

        <div className='max-w-3xl mx-auto'>
          <h3 className='text-2xl font-semibold mb-4 text-forest-900'>
            I'm Sadia Bintay Mostafiz
          </h3>
          <p className='text-forest-900 mb-6'>
            Aspiring Web Developer with strong academic foundation and practical
            project experience, adept in transforming creative concepts into
            visually attractive interfaces. Interested in contributing
            innovative solutions and making a meaningful impact in the dynamic
            Web Development world.
            <br />
            <b>
              I focus on creating accessible, user-friendly applications that
              solve real-world problems.
            </b>
          </p>
          <p className='text-forest-900/90 mb-6'>
            My expertise includes front-end frameworks like React and Next.js,
            as well as back-end technologies including Node.js and databases
            like MongoDB and Oracle.
          </p>

          <div className='flex flex-wrap gap-3 mb-8'>
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map(
              (skill) => (
                <Card key={skill} className='bg-white border border-forest-300'>
                  <CardContent className='py-2 px-3 text-forest-900'>
                    {skill}
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className='flex flex-wrap gap-4'>
            <Button
              className='gap-2 bg-forest-900 shadow-md hover:bg-forest-800 text-white'
              asChild
            >
              <a
                href='https://drive.google.com/file/d/1FZkhnhimr8LykM3F34q2ZWUO7M8AH0qp/view'
                download='Sadia_Bintay_Mostafiz_Shitols_CV.pdf'
                className=' flex items-center gap-2'
              >
                <Download size={16} />
                Download CV
              </a>
            </Button>

            <div className='flex gap-2'>
              {[
                {
                  icon: <Github size={20} />,
                  label: 'GitHub',
                  url: 'https://github.com/sadia-shitol',
                },
                {
                  icon: <Linkedin size={20} />,
                  label: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/sadia-bintay-mostafiz-b4177a267',
                },
                {
                  icon: <Instagram size={20} />,
                  label: 'LinkedIn',
                  url: 'https://www.instagram.com/_shitol_sadia/',
                },
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  url: 'mailto:shitol3080@gmail.com',
                },
              ].map((social, index) => (
                <Button
                  key={index}
                  size='icon'
                  variant='outline'
                  aria-label={social.label}
                  className='border-forest-900 text-forest-900 hover:bg-forest-900/10 hover:bg-forest-900'
                >
                  <a
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className='mt-4'>
            <Button
              variant='outline'
              className='border-forest-900 text-forest-900 transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700'
              asChild
            >
              <Link href='/AboutMe'>Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

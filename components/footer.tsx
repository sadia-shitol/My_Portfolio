import Link from 'next/link'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-forest-300 text-forest-900 py-8 border-t border-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold'>Sadia Bintay Mostafiz</h2>
            <p className='text-forest-900/80 mt-2 max-w-md'>
              Building digital experiences that make a difference. Let's work
              together on your next project.
            </p>
          </div>
          <p className='text-forest-900/80 text-sm mb-4 md:mb-0'>
            © {currentYear} Sadia Bintay Mostafiz. All rights reserved.
          </p>

          <div className='flex gap-3'>
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
                label: 'Instagram',
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
                className='border-forest-100 text-forest-900 hover:bg-forest-900/10'
              >
                <a href={social.url} target='_blank' rel='noopener noreferrer'>
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

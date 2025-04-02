import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import './globals.css'
import { Poppins } from 'next/font/google' // Change to your preferred font

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: 'Sadia Shitol',
  description: 'Portfolio of Sadia Shitol'
}

export default function RootLayout({
  children,
  
  
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-serif">   
         {children}

      </body>
      {/* <body className={`${poppins.className} ${poppins.variable}`}>
        {children}
      </body> */}
    </html>
  )
}



import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import './globals.css'

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
      <body className="inter.className">   
         {children}

      </body>
    </html>
  )
}


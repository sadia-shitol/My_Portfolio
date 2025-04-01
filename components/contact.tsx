"use client"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-white">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          Get In <span className="text-forest-700">Touch</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my
          contact information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border border-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700">
         <CardContent className="p-6 flex items-center gap-4 " >
           <a href="https://www.linkedin.com/in/sadia-bintay-mostafiz-b4177a267/" className="bg-forest-900/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-forest-900" />
            </a>
             <div>
        <h3 className="font-medium text-forest-900">Linkedin</h3>
        <p className="text-sm text-forest-900/90">Sadia Bintay Mostafiz</p>
      </div>
        </CardContent>
  </Card>
  
  <Card className="border border-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700">
    <CardContent className="p-6 flex items-center gap-4 " >
      <a href="mailto:shitol3080@gmail.com" className="bg-forest-900/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-forest-900" />
              </a>
      <div>
        <h3 className="font-medium text-forest-900">Email</h3>
        <p className="text-sm text-forest-900/90">shitol3080@gmail.com</p>
      </div>
    </CardContent>
  </Card>

  <Card className="border border-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:border-forest-700">
    <CardContent className="p-6 flex items-center gap-4">
      <div className="bg-forest-900/10 p-3 rounded-full">
        <Phone className="h-6 w-6 text-forest-900" />
      </div>
      <div>
        <h3 className="font-medium text-forest-900">Phone</h3>
        <p className="text-sm text-forest-900/90">+88 01992-131208</p>
      </div>
    </CardContent>
  </Card>

  <Card className="border border-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg  hover:border-forest-700">
    <CardContent className="p-6 flex items-center gap-4">
      <div className="bg-forest-900/10 p-3 rounded-full">
        <MapPin className="h-6 w-6 text-forest-900" />
      </div>
      <div>
        <h3 className="font-medium text-forest-900">Location</h3>
        <p className="text-sm text-forest-900/90">84/8-1, Uttor Bhashantek, Mirpur-14, Dhaka -1206</p>
      </div>
    </CardContent>
  </Card>
  </div>
      </div>
    </section>
  )
}


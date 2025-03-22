"use client"

import type React from "react"
import AnimatedBackground from "./animated-background"
import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <AnimatedBackground/>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-900">
          Get In <span className="text-forest-700">Touch</span>
        </h2>
        <p className="text-forest-900/80 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my
          contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-gray-100">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-forest-900/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-forest-900" />
                </div>
                <div>
                  <h3 className="font-medium text-forest-900">Email</h3>
                  <p className="text-sm text-forest-900/80">shitol3080@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-forest-900/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-forest-900" />
                </div>
                <div>
                  <h3 className="font-medium text-forest-900">Phone</h3>
                  <p className="text-sm text-forest-900/80">+88 01992-131208</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-forest-900/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-forest-900" />
                </div>
                <div>
                  <h3 className="font-medium text-forest-900">Location</h3>
                  <p className="text-sm text-forest-900/80">84/8-1, Uttor Bhashantek, Mirpur-14, Dhaka -1206</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border border-gray-100">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-forest-900">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-forest-900 focus:ring-forest-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-forest-900">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-forest-900 focus:ring-forest-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-forest-900">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:border-forest-900 focus:ring-forest-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-forest-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:border-forest-900 focus:ring-forest-900"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-forest-900 hover:bg-forest-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-forest-900 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-forest-900/80 mt-2 max-w-md">
              Building digital experiences that make a difference. Let's work together on your next project.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Github size={20} />, label: "GitHub" },
              { icon: <Linkedin size={20} />, label: "LinkedIn" },
              { icon: <Twitter size={20} />, label: "Twitter" },
              { icon: <Mail size={20} />, label: "Email" },
            ].map((social, index) => (
              <Button
                key={index}
                size="icon"
                variant="outline"
                aria-label={social.label}
                className="border-forest-200 text-forest-900 hover:bg-forest-900/10"
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-900/80 text-sm mb-4 md:mb-0">© {currentYear} John Doe. All rights reserved.</p>

          <nav className="flex gap-6 text-sm">
            <Link href="#" className="text-forest-900/80 hover:text-forest-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-forest-900/80 hover:text-forest-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-forest-900/80 hover:text-forest-900 transition-colors">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}


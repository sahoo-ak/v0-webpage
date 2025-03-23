"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { personalInfo } from "@/data/personal-info"

export function SiteHeader({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for header styling
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]

      const currentSection = sections.reduce(
        (closest, section) => {
          const sectionTop = section.offsetTop
          const scrollPosition = window.scrollY + 100 // Offset to trigger slightly before reaching section

          if (scrollPosition >= sectionTop && (!closest || sectionTop > closest.offsetTop)) {
            return section
          }
          return closest
        },
        null as HTMLElement | null,
      )

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-all ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#home"
          className="font-semibold text-lg"
          onClick={(e) => {
            e.preventDefault()
            onNavigate("home")
          }}
        >
          {personalInfo.name}
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium ${
                activeSection === item.id ? "underline" : "hover:underline"
              } underline-offset-4 cursor-pointer`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <MobileNav
          navItems={navItems.map((item) => ({ path: `#${item.id}`, label: item.label }))}
          currentPath={`#${activeSection}`}
          onNavigate={onNavigate}
        />
      </div>
    </header>
  )
}


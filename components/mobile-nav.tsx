"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { personalInfo } from "@/data/personal-info"

type NavItem = {
  path: string
  label: string
}

export function MobileNav({
  navItems,
  currentPath,
  onNavigate,
}: {
  navItems: NavItem[]
  currentPath: string
  onNavigate: (id: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 px-2 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="font-semibold"
              onClick={(e) => {
                e.preventDefault()
                onNavigate("home")
                setOpen(false)
              }}
            >
              {personalInfo.name}
            </a>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-medium ${
                  currentPath === item.path ? "underline" : "hover:underline"
                } underline-offset-4`}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(item.path.replace("#", ""))
                  setOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}


import Link from "next/link"
import { personalInfo } from "@/data/personal-info"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {personalInfo.socialLinks.googleScholar && (
            <Link
              href={personalInfo.socialLinks.googleScholar}
              className="text-sm text-muted-foreground hover:underline"
            >
              Google Scholar
            </Link>
          )}
          {personalInfo.socialLinks.linkedin && (
            <Link href={personalInfo.socialLinks.linkedin} className="text-sm text-muted-foreground hover:underline">
              LinkedIn
            </Link>
          )}
          {personalInfo.socialLinks.twitter && (
            <Link href={personalInfo.socialLinks.twitter} className="text-sm text-muted-foreground hover:underline">
              Twitter
            </Link>
          )}
          {personalInfo.socialLinks.github && (
            <Link href={personalInfo.socialLinks.github} className="text-sm text-muted-foreground hover:underline">
              GitHub
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}


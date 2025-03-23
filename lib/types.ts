export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  officeAddress: {
    department: string
    university: string
    street: string
    city: string
    zipCode: string
  }
  socialLinks: {
    googleScholar?: string
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface ResearchArea {
  id: string
  title: string
  description: string
  projects: string[]
  image: string
}

export interface ResearchFunding {
  organization: string
  period: string
  title: string
  role: string
  amount: string
}

export interface Publication {
  id: string
  title: string
  authors: string
  journal: string
  year: number
  description: string
  tags: string[]
  url?: string
  doi?: string
  pdfUrl?: string
}

export interface ConferencePaper {
  id: string
  title: string
  authors: string
  conference: string
  year: number
  description: string
  tags: string[]
  url?: string
  doi?: string
  pdfUrl?: string
}

export interface BookChapter {
  id: string
  title: string
  authors: string
  book: string
  publisher: string
  year: number
  description: string
  tags: string[]
  url?: string
  doi?: string
  pdfUrl?: string
}

export interface CitationMetrics {
  publications: number
  citations: number
  hIndex: number
}

export interface Position {
  title: string
  organization: string
  department: string
  period: string
  description: string
  achievements: string[]
}

export interface Degree {
  title: string
  institution: string
  department: string
  period: string
  thesis?: string
  advisor?: string
  achievements: string[]
}

export interface Certification {
  title: string
  organization: string
  year: string
  description: string
}

export interface Award {
  title: string
  organization: string
  year: string
  description: string
}


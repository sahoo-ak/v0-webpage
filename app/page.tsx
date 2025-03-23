"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { personalInfo } from "@/data/personal-info"
import { researchAreas, researchFunding } from "@/data/research"
import { journalArticles, conferencePapers, bookChapters, citationMetrics } from "@/data/publications"
import { academicPositions, researchExperience, industryExperience } from "@/data/experience"
import { degrees, certifications, awards } from "@/data/education"
import { useState } from "react"

export default function Home() {
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
      title: "Message sent",
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader onNavigate={scrollToSection} />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {personalInfo.name.replace("Dr. ", "")}
              </h1>
              <h2 className="text-xl text-muted-foreground">{personalInfo.title}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button onClick={() => scrollToSection("research")}>
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")}>
                  Contact Me
                </Button>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={personalInfo.name}
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover border-4 border-muted"
                priority
              />
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My research focuses on developing computational methods for analyzing genomic data and applying
                  machine learning to solve complex biological problems.
                </p>
              </div>
            </div>
            <div className="grid gap-12 py-12">
              {researchAreas.map((area, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={area.id}
                    id={area.id}
                    className={`grid gap-6 ${
                      isEven ? "lg:grid-cols-[1fr_400px]" : "lg:grid-cols-[400px_1fr]"
                    } lg:gap-12`}
                  >
                    {!isEven && (
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover order-last lg:order-first"
                      />
                    )}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">{area.title}</h2>
                      <p className="text-muted-foreground">{area.description}</p>
                      <p className="text-muted-foreground">Current projects include:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {area.projects.map((project, idx) => (
                          <li key={idx}>{project}</li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button variant="outline" onClick={() => scrollToSection("publications")}>
                          Related Publications
                        </Button>
                      </div>
                    </div>
                    {isEven && (
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Research Funding</h2>
              <div className="grid gap-4">
                {researchFunding.map((grant, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{grant.organization}</h3>
                        <p className="text-sm text-muted-foreground">{grant.period}</p>
                        <p className="text-muted-foreground">"{grant.title}"</p>
                        <p className="text-muted-foreground">
                          {grant.role}, {grant.amount}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Publications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive list of my peer-reviewed publications, conference papers, and book chapters.
                </p>
              </div>
            </div>
            <div className="py-8">
              <Tabs defaultValue="journal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="journal">Journal Articles</TabsTrigger>
                  <TabsTrigger value="conference">Conference Papers</TabsTrigger>
                  <TabsTrigger value="book">Book Chapters</TabsTrigger>
                </TabsList>
                <TabsContent value="journal" className="space-y-4">
                  <div className="grid gap-4">
                    {journalArticles.map((article) => (
                      <Card key={article.id} id={article.id}>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">{article.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {article.authors}. <em>{article.journal}</em>, {article.year}
                            </p>
                            <p className="text-muted-foreground">{article.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {article.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="pt-2 flex items-center gap-4">
                              <Link href={article.url || "#"} className="inline-flex items-center text-sm underline">
                                View publication
                              </Link>
                              {article.doi && (
                                <Link
                                  href={article.doi}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  <span>DOI</span>
                                </Link>
                              )}
                              {article.pdfUrl && (
                                <Link
                                  href={article.pdfUrl}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  download
                                >
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="conference" className="space-y-4">
                  <div className="grid gap-4">
                    {conferencePapers.map((paper) => (
                      <Card key={paper.id} id={paper.id}>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">{paper.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {paper.authors}. <em>{paper.conference}</em>, {paper.year}
                            </p>
                            <p className="text-muted-foreground">{paper.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {paper.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="pt-2 flex items-center gap-4">
                              <Link href={paper.url || "#"} className="inline-flex items-center text-sm underline">
                                View publication
                              </Link>
                              {paper.doi && (
                                <Link
                                  href={paper.doi}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  <span>DOI</span>
                                </Link>
                              )}
                              {paper.pdfUrl && (
                                <Link
                                  href={paper.pdfUrl}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  download
                                >
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="book" className="space-y-4">
                  <div className="grid gap-4">
                    {bookChapters.map((chapter) => (
                      <Card key={chapter.id} id={chapter.id}>
                        <CardContent className="p-6">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">{chapter.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {chapter.authors}. <em>In: {chapter.book}</em>, {chapter.publisher}, {chapter.year}
                            </p>
                            <p className="text-muted-foreground">{chapter.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {chapter.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="pt-2 flex items-center gap-4">
                              <Link href={chapter.url || "#"} className="inline-flex items-center text-sm underline">
                                View publication
                              </Link>
                              {chapter.doi && (
                                <Link
                                  href={chapter.doi}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  <span>DOI</span>
                                </Link>
                              )}
                              {chapter.pdfUrl && (
                                <Link
                                  href={chapter.pdfUrl}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  download
                                >
                                  <Download className="h-4 w-4" />
                                  <span>PDF</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="space-y-4 pt-8">
              <h2 className="text-2xl font-bold">Citation Metrics</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">{citationMetrics.publications}+</div>
                    <div className="text-sm text-muted-foreground text-center">Publications</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">{citationMetrics.citations}+</div>
                    <div className="text-sm text-muted-foreground text-center">Citations</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold">{citationMetrics.hIndex}</div>
                    <div className="text-sm text-muted-foreground text-center">h-index</div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center pt-4">
                <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">View Google Scholar Profile</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional experience in academia, research, and industry.
                </p>
              </div>
            </div>
            <div className="grid gap-8 py-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Academic Positions</h2>
                <div className="grid gap-6">
                  {academicPositions.map((position, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{position.title}</h3>
                            <p className="text-sm text-muted-foreground">{position.period}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">
                            {position.department}, {position.organization}
                          </p>
                          <p className="text-muted-foreground">{position.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {position.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Research Experience</h2>
                <div className="grid gap-6">
                  {researchExperience.map((position, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{position.title}</h3>
                            <p className="text-sm text-muted-foreground">{position.period}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">
                            {position.department}, {position.organization}
                          </p>
                          <p className="text-muted-foreground">{position.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {position.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Industry Experience</h2>
                <div className="grid gap-6">
                  {industryExperience.map((position, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{position.title}</h3>
                            <p className="text-sm text-muted-foreground">{position.period}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">{position.organization}</p>
                          <p className="text-muted-foreground">{position.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {position.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic background and qualifications.
                </p>
              </div>
            </div>
            <div className="grid gap-8 py-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Degrees</h2>
                <div className="grid gap-6">
                  {degrees.map((degree, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{degree.title}</h3>
                            <p className="text-sm text-muted-foreground">{degree.period}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">
                            {degree.department}, {degree.institution}
                          </p>
                          {degree.thesis && <p className="text-muted-foreground">Dissertation: "{degree.thesis}"</p>}
                          {degree.advisor && <p className="text-muted-foreground">Advisor: {degree.advisor}</p>}
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {degree.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Certifications & Additional Training</h2>
                <div className="grid gap-6">
                  {certifications.map((certification, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{certification.title}</h3>
                            <p className="text-sm text-muted-foreground">{certification.year}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">{certification.organization}</p>
                          <p className="text-muted-foreground">{certification.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Scholarships & Awards</h2>
                <div className="grid gap-6">
                  {awards.map((award, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold">{award.title}</h3>
                            <p className="text-sm text-muted-foreground">{award.year}</p>
                          </div>
                          <p className="text-muted-foreground font-medium">{award.organization}</p>
                          <p className="text-muted-foreground">{award.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with me for research collaborations, speaking engagements, or other inquiries.
                </p>
              </div>
            </div>
            <div className="grid gap-8 py-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">Feel free to reach out using any of the following methods:</p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 mt-1" />
                        <div className="space-y-1">
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 mt-1" />
                        <div className="space-y-1">
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
                          <p className="text-xs text-muted-foreground">Office hours: Monday-Friday, 9am-5pm EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 mt-1" />
                        <div className="space-y-1">
                          <h3 className="font-medium">Office</h3>
                          <p className="text-sm text-muted-foreground">
                            {personalInfo.officeAddress.department}
                            <br />
                            {personalInfo.officeAddress.university}
                            <br />
                            {personalInfo.officeAddress.street}
                            <br />
                            {personalInfo.officeAddress.city}, {personalInfo.officeAddress.zipCode}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Connect with me</h3>
                  <div className="flex gap-4">
                    {personalInfo.socialLinks.googleScholar && (
                      <Link
                        href={personalInfo.socialLinks.googleScholar}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Google Scholar
                      </Link>
                    )}
                    {personalInfo.socialLinks.linkedin && (
                      <Link
                        href={personalInfo.socialLinks.linkedin}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        LinkedIn
                      </Link>
                    )}
                    {personalInfo.socialLinks.twitter && (
                      <Link
                        href={personalInfo.socialLinks.twitter}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Twitter
                      </Link>
                    )}
                    {personalInfo.socialLinks.github && (
                      <Link
                        href={personalInfo.socialLinks.github}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}


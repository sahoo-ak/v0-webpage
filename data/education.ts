import type { Degree, Certification, Award } from "@/lib/types"

export const degrees: Degree[] = [
  {
    title: "PhD in Computational Biology",
    institution: "Research University",
    department: "Medical School",
    period: "2010 - 2014",
    thesis: "Computational Methods for Integrating Multi-omics Data in Cancer Research",
    advisor: "Prof. Jane Doe",
    achievements: [
      "Developed novel algorithms for integrating genomic, transcriptomic, and proteomic data",
      "Published 4 first-author papers in high-impact journals",
      'Received the university\'s "Outstanding Dissertation Award"',
      "Awarded a prestigious national graduate research fellowship",
    ],
  },
  {
    title: "MSc in Computer Science",
    institution: "Tech University",
    department: "Department of Computer Science",
    period: "2008 - 2010",
    thesis: "Machine Learning Approaches for Biomarker Discovery",
    advisor: "Prof. Robert Johnson",
    achievements: [
      "Specialized in machine learning and data mining",
      "Developed a novel feature selection algorithm for high-dimensional biological data",
      "Graduated with distinction (GPA: 3.95/4.0)",
    ],
  },
  {
    title: "BSc in Bioinformatics",
    institution: "University of Science",
    department: "Department of Biology",
    period: "2004 - 2008",
    thesis: "Computational Analysis of Gene Expression Data in Cancer",
    achievements: [
      "Double major in Biology and Computer Science",
      "Graduated summa cum laude (GPA: 3.92/4.0)",
      'Received the "Outstanding Undergraduate Research Award"',
      "Member of the university's honors program",
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: "Advanced Deep Learning for Genomics",
    organization: "AI Research Institute",
    year: "2019",
    description: "Intensive two-week workshop on applying deep learning techniques to genomic data analysis.",
  },
  {
    title: "Statistical Methods in Genomics",
    organization: "Summer Institute in Statistical Genetics",
    year: "2016",
    description: "Three-week intensive course on statistical methods for analyzing genomic data.",
  },
  {
    title: "Teaching in Higher Education Certificate",
    organization: "Center for Teaching Excellence, Research University",
    year: "2015",
    description: "Comprehensive program on effective teaching methods, course design, and assessment strategies.",
  },
]

export const awards: Award[] = [
  {
    title: "Early Career Research Award",
    organization: "Tech University",
    year: "2019",
    description: "Awarded for outstanding research contributions as an assistant professor.",
  },
  {
    title: "National Graduate Research Fellowship",
    organization: "National Science Foundation",
    year: "2010 - 2014",
    description: "Prestigious fellowship supporting outstanding graduate students in STEM fields.",
  },
  {
    title: "Outstanding Dissertation Award",
    organization: "Research University",
    year: "2014",
    description: "Awarded for exceptional doctoral research in computational biology.",
  },
]


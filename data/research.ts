import type { ResearchArea, ResearchFunding } from "@/lib/types"

export const researchAreas: ResearchArea[] = [
  {
    id: "genomic-data",
    title: "Genomic Data Analysis",
    description:
      "My work in genomic data analysis focuses on developing novel algorithms for processing and analyzing large-scale genomic datasets. This includes methods for variant calling, structural variant detection, and genome assembly.",
    projects: [
      "Development of a new algorithm for detecting complex structural variants in cancer genomes",
      "Methods for integrating multi-omics data to understand gene regulation",
      "Scalable approaches for analyzing population-scale genomic datasets",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "machine-learning",
    title: "Machine Learning in Healthcare",
    description:
      "I apply advanced machine learning techniques to predict disease outcomes and personalize treatment plans. This research aims to improve patient care by leveraging the power of AI and big data in healthcare.",
    projects: [
      "Predictive models for disease progression using electronic health records",
      "Deep learning approaches for medical image analysis",
      "Personalized medicine through patient stratification",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "bioinformatics",
    title: "Bioinformatics Tools",
    description:
      "I develop open-source software tools for the bioinformatics research community. These tools aim to make complex analyses more accessible and reproducible for researchers worldwide.",
    projects: [
      "GenomeTools: A comprehensive package for whole-genome analysis",
      "ML-Biomarker: A framework for identifying biomarkers using machine learning",
      "StructVar: A tool for detecting structural variants in long-read sequencing data",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const researchFunding: ResearchFunding[] = [
  {
    organization: "National Institutes of Health (NIH)",
    period: "2022-2025",
    title: "Integrative Analysis of Multi-omics Data for Precision Medicine",
    role: "Principal Investigator",
    amount: "$1.2M",
  },
  {
    organization: "National Science Foundation (NSF)",
    period: "2021-2024",
    title: "Scalable Algorithms for Population-Scale Genomic Analysis",
    role: "Co-Investigator",
    amount: "$850K",
  },
  {
    organization: "University Research Grant",
    period: "2020-2022",
    title: "Machine Learning Approaches for Biomarker Discovery",
    role: "Principal Investigator",
    amount: "$300K",
  },
]


import type { Publication, ConferencePaper, BookChapter, CitationMetrics } from "@/lib/types"

export const journalArticles: Publication[] = [
  {
    id: "paper1",
    title: "Novel Machine Learning Approaches for Genomic Data Integration",
    authors: "Smith J, Johnson A, Williams B",
    journal: "Nature Computational Biology",
    year: 2023,
    description:
      "This paper introduces a new framework for integrating multi-omics data using advanced deep learning techniques. We demonstrate the utility of our approach on three different cancer datasets and show improved prediction of patient outcomes.",
    tags: ["Genomics", "Machine Learning", "Cancer Research"],
    doi: "https://doi.org/10.1038/s41592-023-01234-x",
    pdfUrl: "/papers/smith_genomic_data_integration_2023.pdf",
  },
  {
    id: "paper2",
    title: "Predicting Drug Response Using Patient-Derived Genomic Signatures",
    authors: "Smith J, Davis C, Miller R",
    journal: "Journal of Personalized Medicine",
    year: 2022,
    description:
      "We developed a computational pipeline to predict patient-specific drug responses based on genomic biomarkers. Our method outperforms existing approaches on multiple independent validation datasets and has been implemented in a user-friendly software package.",
    tags: ["Precision Medicine", "Drug Response", "Biomarkers"],
    doi: "https://doi.org/10.3390/jpm12050789",
    pdfUrl: "/papers/smith_drug_response_2022.pdf",
  },
  {
    id: "paper3",
    title: "GenomeTools: An Open-Source Package for Large-Scale Genomic Analysis",
    authors: "Smith J, Brown T, Wilson E",
    journal: "Bioinformatics",
    year: 2021,
    description:
      "This paper presents a comprehensive software package for analyzing whole-genome sequencing data. GenomeTools includes modules for variant calling, structural variant detection, and functional annotation, with a focus on scalability and ease of use.",
    tags: ["Software", "Bioinformatics", "Open Source"],
    doi: "https://doi.org/10.1093/bioinformatics/btab123",
    pdfUrl: "/papers/smith_genometools_2021.pdf",
  },
  {
    id: "paper4",
    title: "Computational Methods for Single-Cell RNA Sequencing Analysis",
    authors: "Smith J, Anderson P, Lee K",
    journal: "Genome Biology",
    year: 2021,
    description:
      "We developed novel computational methods for analyzing single-cell RNA sequencing data, with a focus on cell type identification and trajectory inference. Our approach shows improved accuracy on benchmark datasets.",
    tags: ["Single-cell", "RNA-seq", "Algorithms"],
    doi: "https://doi.org/10.1186/s13059-021-02315-0",
    pdfUrl: "/papers/smith_singlecell_rna_2021.pdf",
  },
]

export const conferencePapers: ConferencePaper[] = [
  {
    id: "conf1",
    title: "Deep Learning for Protein Structure Prediction",
    authors: "Smith J, Zhang L",
    conference: "International Conference on Machine Learning (ICML)",
    year: 2022,
    description:
      "This paper presents a novel deep learning architecture for predicting protein structure from sequence data. Our method achieves state-of-the-art performance on the CASP14 benchmark.",
    tags: ["Deep Learning", "Protein Structure", "Bioinformatics"],
    doi: "https://doi.org/10.1109/icml.2022.986543",
    pdfUrl: "/papers/smith_protein_structure_2022.pdf",
  },
  {
    id: "conf2",
    title: "Scalable Methods for Population-Scale Genomic Analysis",
    authors: "Smith J, Johnson R",
    conference: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    year: 2021,
    description:
      "We developed scalable algorithms for analyzing population-scale genomic datasets. Our methods can process data from thousands of individuals in a fraction of the time required by existing approaches.",
    tags: ["Scalability", "Population Genomics", "Algorithms"],
    doi: "https://doi.org/10.1109/bibm.2021.9669749",
    pdfUrl: "/papers/smith_population_genomics_2021.pdf",
  },
]

export const bookChapters: BookChapter[] = [
  {
    id: "book1",
    title: "Machine Learning for Genomic Medicine",
    authors: "Smith J, Davis M",
    book: "Computational Methods in Precision Medicine",
    publisher: "Springer",
    year: 2022,
    description:
      "This book chapter provides an overview of machine learning approaches for genomic medicine, with a focus on clinical applications and future directions.",
    tags: ["Book Chapter", "Genomic Medicine", "Machine Learning"],
    doi: "https://doi.org/10.1007/978-3-030-58080-3_4",
    pdfUrl: "/papers/smith_ml_genomic_medicine_2022.pdf",
  },
]

export const citationMetrics: CitationMetrics = {
  publications: 25,
  citations: 1200,
  hIndex: 18,
}


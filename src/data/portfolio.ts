export interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  image: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Project One",
    category: "Product Strategy",
    description: "A short description of this case study goes here.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "2",
    title: "Project Two",
    category: "Design Ops",
    description: "A short description of this case study goes here.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
  },
  {
    id: "3",
    title: "Project Three",
    category: "Product Development",
    description: "A short description of this case study goes here.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "4",
    title: "Project Four",
    category: "Leadership Coaching",
    description: "A short description of this case study goes here.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
]
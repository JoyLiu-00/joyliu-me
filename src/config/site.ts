export const site = {
  name: "Joy (Yiran) Liu",
  domain: "joyliu.me",
  location: "New York City, NY",
  email: "joy@goearthon.ai",
  github: "https://github.com/JoyLiu-00",
  linkedin: "https://www.linkedin.com/in/yiranliu-joy/",
  profileImage: "/profile.jpg",
  headline: "AI Startup Voyager · Directionalist",
  subheadline:
    "Born in Sichuan. Leveled up in Vancouver. Currently building AI in New York. Forever curious about what's next — whether that's a new city, a wild idea, or a product people actually love.",
  showOpenToChat: true,
} as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I'm building", href: "#building" },
  { label: "Projects", href: "#projects" },
  { label: "Plog", href: "#plog" },
  { label: "Contact", href: "#contact" },
] as const

export const skills = [
  "TypeScript",
  "Python",
  "React",
  "Java",
  "C",
  "C++",
  "Machine Learning",
  "NLP",
] as const

export const background = [
  {
    label: "Undergraduate",
    title: "University of British Columbia",
    subtitle: "Computer Science",
    period: "2019 – 2023",
  },
  {
    label: "Graduate",
    title: "Columbia University",
    subtitle: "MS Operations Research",
    period: "2023 – 2024",
  },
  {
    label: "Currently",
    title: "Avoca",
    subtitle: "Product Engineer",
    period: "2025 – Present",
  },
  {
    label: "Location",
    title: "New York City, NY",
    subtitle: "United States",
    period: null,
  },
] as const

export const building = [
  {
    company: "Avoca",
    roles: [
      {
        title: "Software Engineer — Product",
        period: "Feb 2026 – Present",
        bullets: [
          "Led end-to-end CRM integration infrastructure powering Avoca's enterprise AI deployments",
          "Designed and shipped custom workflows for multi-channel AI agents across voice, calling, and messaging",
          "Built LLM-powered analytics to surface customer insights",
        ],
      },
      {
        title: "Forward Deployed Engineer",
        period: "Feb 2025 – Feb 2026",
        bullets: [
          "Drove $2M+ in contract value by closing 5+ enterprise deals end-to-end",
          "Shipped core platform features including outbound workflows, prompt orchestration, and LLM optimization",
          "Grew with the company from seed to Series B — 15 to 150+ people",
        ],
      },
    ],
  },
] as const

export const projects = [
  {
    name: "GoEarthon",
    url: "https://goearthon.ai",
    description:
      "AI-powered trip planning — personalized itineraries built with AI.",
    status: "Building now",
  },
] as const

export const interests = ["Snowboarding", "Cooking"] as const

export type PlogPost = {
  id: string
  date: string
  text: string
  image?: string
  images?: string[]
  video?: string
  likes?: number
}

export const plogPosts: PlogPost[] = [
  {
    id: "million-dinner",
    date: "Jun 25, 2026",
    text: "all bibbed up and ready for dinner. (the ball is not food, million.)",
    video: "/plog/IMG_1030.MOV",
    likes: 12,
  },
  {
    id: "million-camera",
    date: "Jun 25, 2026",
    text: "new camera's first model. he charged nothing.",
    images: ["/plog/DSCF0311.JPG", "/plog/IMG_8198.JPG"],
    likes: 15,
  },
]

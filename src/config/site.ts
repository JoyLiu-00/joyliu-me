export const site = {
  name: "Joy Liu",
  domain: "joyliu.me",
  location: "New York City, NY",
  email: "joy@goearthon.ai",
  github: "https://github.com/JoyLiu-00",
  linkedin: "https://www.linkedin.com/in/yiranliu-joy/",
  showOpenToOpportunities: true,
} as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const

export const skills = [
  "TypeScript",
  "Python",
  "React",
  "Java",
  "C",
  "C++",
  "AI Agents",
  "CRM Integration",
  "Enterprise Deployment",
] as const

export const experiences = [
  {
    title: "Software Engineer — Product",
    company: "Avoca",
    period: "Feb 2025 – Present",
    bullets: [
      "Product development and expanding into new verticals",
      "Building connections between Avoca's AI agent and new industries",
      "Joined pre-seed, now Series B (grew from 15 to 150+ people)",
    ],
  },
  {
    title: "Forward Deployed Engineer",
    company: "Avoca",
    period: "Aug 2023 – Feb 2025",
    bullets: [
      "Built AI agents, CRM integrations, and led enterprise deployments",
      "Closed $2M+ in deals by converting pilots to paid contracts",
      "Worked closely with enterprise customers end-to-end",
    ],
  },
] as const

export const projects = [
  {
    name: "GoEarthon",
    url: "https://goearthon.ai",
    description:
      "AI-powered trip planning — personalized itineraries built with AI",
  },
] as const

export const interests = ["Skiing", "Cooking"] as const

import chefLeoImage from "@/assets/images/chefleo.png";
import capstoneImage from "@/assets/images/capstonepro.png";
import sameerionImage from "@/assets/images/memoji-computer.png";
import type { StaticImageData } from "next/image";

export type ProjectApp = {
  name: string;
  badge: string;
  summary: string;
  detail: string;
  status: string;
  link?: string;
  image?: StaticImageData;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  timeline: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const heroContent = {
  greeting: "Hi, I'm",
  firstName: "Sameer",
  lastName: "Mohammad!",
  role: "Data and AI builder crafting immersive digital worlds.",
  tagline:
    "I turn data, machine learning, and thoughtful interfaces into experiences that feel both analytical and deeply human.",
  primaryCta: {
    label: "View Experience",
    target: "world-resume",
  },
  secondaryCta: {
    label: "Open Resume",
    href: "/resume",
  },
};

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Data Scientist",
    company: "Dexterous Solutions",
    timeline: "Current",
    bullets: [
      "Build data products and analytical workflows that turn messy operational inputs into usable decision support.",
      "Translate stakeholder questions into models, metrics, and reporting surfaces that stay readable under pressure.",
      "Work across experimentation, transformation logic, and delivery with an emphasis on production usefulness.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Kortex Studio",
    timeline: "Recent",
    bullets: [
      "Design AI-assisted features and prototypes with a bias toward clear interaction design and grounded user value.",
      "Bridge model behavior, prompt workflows, and product presentation so the output feels intentional rather than gimmicky.",
      "Ship fast iterations while keeping implementation quality and maintainability in view.",
    ],
  },
  {
    role: "Data Engineer / SQL Developer",
    company: "Previous roles",
    timeline: "Earlier",
    bullets: [
      "Built SQL-heavy reporting and transformation logic for structured business workflows.",
      "Worked on pipelines, schema logic, and the practical cleanup needed to make downstream analytics trustworthy.",
      "Developed a strong preference for clear systems, reliable data, and readable output over avoidable complexity.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    label: "Data",
    items: ["Snowflake", "PySpark", "Azure Data Factory", "Pipelines"],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Tools",
    items: ["Git", "AWS", "Jupyter", "GitHub"],
  },
];

export const projectApps: ProjectApp[] = [
  {
    name: "Football Analytics",
    badge: "Capstone",
    summary: "Real-world football data science and machine learning.",
    detail:
      "A Bradley University capstone focused on building a football analytics pipeline, engineering custom metrics, and uncovering patterns in team and player performance.",
    status: "Built",
    link: "https://msameer10.github.io/capstonepro/",
    image: capstoneImage,
  },
  {
    name: "Chef Leo",
    badge: "App",
    summary: "Ingredient-first recipe generation with AI.",
    detail:
      "A React project built from scratch to turn available ingredients into recipe ideas with Hugging Face integration and a streamlined cooking workflow.",
    status: "Built",
    link: "https://msameer10.github.io/chef-leo/",
    image: chefLeoImage,
  },
  {
    name: "Game Theory",
    badge: "Lens",
    summary: "Strategy, systems, and competitive thinking.",
    detail:
      "A portfolio lens for how I think about optimization, games, and layered decision-making across analytics, strategy titles, and machine learning systems.",
    status: "Ongoing",
  },
  {
    name: "MSFS Logger",
    badge: "Concept",
    summary: "Aviation-driven flight logging and analysis idea.",
    detail:
      "An aviation concept world centered on logging simulator flights, surfacing route patterns, and bringing flight data into a cleaner analytical cockpit.",
    status: "Concept",
  },
  {
    name: "Sameerion",
    badge: "Portfolio",
    summary: "This immersive portfolio experience.",
    detail:
      "A full-screen narrative portfolio that maps projects, curiosities, and craftsmanship into distinct worlds while preserving the work underneath.",
    status: "Live",
    image: sameerionImage,
  },
  {
    name: "Research",
    badge: "Archive",
    summary: "The reading, notes, and questions behind the work.",
    detail:
      "A living archive of topics that shape my work: AI, machine learning, history, aviation, and broader intellectual threads that feed future builds.",
    status: "Active",
  },
];

export const buildEntries = [
  {
    index: "01",
    title: "Map the problem before styling the answer.",
    text: "I prefer translating vague ideas into clean systems first, then giving them a visual language that feels intentional rather than ornamental.",
  },
  {
    index: "02",
    title: "Build for clarity, not spectacle.",
    text: "Whether I am handling data or UI, I optimize for flow, readability, and practical usefulness so the end result still performs under pressure.",
  },
  {
    index: "03",
    title: "Use AI as leverage, not a mask.",
    text: "I like shipping with modern tools, but the standard stays the same: truthful content, readable code, and interfaces that can survive maintenance.",
  },
];

export const contactLinks = {
  email: "mohammadsameer0409@gmail.com",
  linkedin: "https://www.linkedin.com/in/msameer10",
  github: "https://www.github.com/msameer10",
  x: "https://www.x.com/mo_sameer10",
  instagram: "https://www.instagram.com/msameer10",
};

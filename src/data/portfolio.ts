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
  bullets: string[];
  link?: string;
  image?: StaticImageData;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  timeline: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  timeline: string;
  location: string;
};

export const heroContent = {
  greeting: "Hi, I'm Sameer Mohammad.",
  role: "I build data systems and modern web applications.",
  tagline: "Focused on data engineering, analytics, and full stack development.",
  primaryCta: {
    label: "View Experience",
    target: "world-resume",
  },
  secondaryCta: {
    label: "View Resume",
    href: "/sameerResume.docx",
  },
};

export const aboutContent = {
  eyebrow: "About",
  title: "Data engineering, analytics, and product-focused development.",
  description:
    "I build data pipelines, APIs, and frontend systems that turn complex workflows into reliable products. My work spans SQL, Python, React, Next.js, Node.js, and cloud-ready application architecture. I focus on clean implementation, readable systems, and measurable business value.",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Full Stack Engineer",
    company: "Dexterous Solutions",
    location: "Remote",
    timeline: "June 2025 - Present",
    bullets: [
      "Built and maintained EMR platform modules using React, Next.js, Node.js, and NestJS, supporting end-to-end clinical workflows.",
      "Designed RESTful and GraphQL APIs for real-time patient data exchange; optimized SQL schemas for high-volume record management.",
      "Translated clinical requirements into scalable features, reducing manual data entry overhead across multiple provider workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Comprobase Inc.",
    location: "Remote",
    timeline: "June 2024 - May 2025",
    bullets: [
      "Developed CRM platform features including client pipelines, contact management, and sales dashboards using React, TypeScript, and Node.js.",
      "Built REST API endpoints with Express.js and integrated third-party email and notification services to extend platform functionality.",
      "Contributed to Agile sprints, code reviews, and architectural decisions across a fast-paced product team.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "NestJS"],
  },
  {
    label: "APIs & Databases",
    items: ["REST APIs", "GraphQL", "SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Linux"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: "Master of Science, Computer Science",
    school: "Bradley University",
    timeline: "2022 - 2024",
    location: "Peoria, IL, USA",
  },
  {
    degree: "Bachelors of Engineering",
    school: "Osmania University",
    timeline: "2018 - 2022",
    location: "Hyderabad, India",
  },
];

export const projectApps: ProjectApp[] = [
  {
    name: "Notz",
    badge: "Project",
    summary: "Note-taking app built with Next.js and Firebase.",
    detail:
      "Built a note-taking app with Next.js and Firebase featuring real-time Firestore storage, Google and email/password auth, and an interactive dashboard with color-coded notes and theme variations.",
    bullets: [
      "Built a Next.js and Firebase note-taking app with Firestore storage.",
      "Implemented Google and email/password authentication.",
      "Designed an interactive dashboard with color-coded notes and theme variations.",
    ],
    status: "Built",
    link: "https://notz.sameerion.com",
    image: sameerionImage,
  },
  {
    name: "Neocyclopedia",
    badge: "Project",
    summary: "Interactive history and reference site built for structured exploration.",
    detail:
      "Built an interactive history and reference site designed to present structured knowledge in a clear, research-friendly format.",
    bullets: [
      "Built a timeline-based knowledge site for presenting historical events in an organized and accessible format.",
      "Developed interactive tables, flags, and structured data views to improve browsing and comparison.",
      "Focused on clear categorization, scalable content structure, and a research-friendly reading experience.",
    ],
    status: "Live",
    link: "https://msameer10.github.io/neocyclopedia/",
  },
  {
    name: "Basair",
    badge: "Project",
    summary: "Knowledge platform built for structured reading and study.",
    detail:
      "Built a content-driven platform for structured reading, reference browsing, and long-form study across themed knowledge pages.",
    bullets: [
      "Built a content-driven web platform for organizing articles, references, and themed knowledge pages.",
      "Designed reusable layouts and templates to support consistent long-form reading and navigation.",
      "Focused on clean presentation, structured information flow, and an expanding multi-page content system.",
    ],
    status: "Live",
    link: "https://basair.sameerion.com",
  },
  {
    name: "Chef Leo",
    badge: "Project",
    summary: "Recipe app built with React and a Hugging Face model.",
    detail:
      "Built a recipe web app using React that takes user-provided ingredients and dynamically suggests recipes using a Hugging Face ML model. Focused on frontend development and UX, with planned backend integration via Node.js for data-driven recommendation features.",
    bullets: [
      "Built a React web app that suggests recipes from user-provided ingredients.",
      "Integrated a Hugging Face ML model for dynamic recommendation output.",
      "Focused on frontend UX with planned Node.js backend expansion.",
    ],
    status: "Built",
    link: "https://msameer10.github.io/chef-leo/",
    image: chefLeoImage,
  },
  {
    name: "Capstone Project",
    badge: "Capstone",
    summary: "Soccer analytics pipeline built with Python, SQL, and machine learning.",
    detail:
      "Built an end-to-end soccer analytics pipeline using Python and SQL to predict match outcomes and identify top performers. Processed unstructured data through cleaning, preprocessing, and feature engineering, then implemented a Random Forest model to generate and evaluate predictions.",
    bullets: [
      "Built a Python and SQL pipeline for match outcome prediction and player analysis.",
      "Processed unstructured data through cleaning, preprocessing, and feature engineering.",
      "Implemented a Random Forest model to evaluate prediction performance.",
    ],
    status: "Built",
    link: "https://msameer10.github.io/capstonepro/",
    image: capstoneImage,
  },
  {
    name: "Quaestus Intelligentiae",
    badge: "Project",
    summary: "Quiz platform built for interactive learning and testing knowledge.",
    detail:
      "Built a quiz platform designed for interactive learning, readable question flow, and repeat use across multiple categories.",
    bullets: [
      "Built a quiz-focused web experience designed to present questions, track responses, and support repeat use.",
      "Structured the interface to keep interactions simple, readable, and easy to navigate across categories.",
      "Focused on usability, clean UI flow, and building a flexible base for future quiz expansion.",
    ],
    status: "Live",
    link: "https://msameer10.github.io/qi/",
  },
];

export const buildEntries = [
  {
    index: "01",
    title: "Data pipelines",
    text: "Build reliable data flows, clear schemas, and analytics-ready outputs.",
  },
  {
    index: "02",
    title: "APIs and backend systems",
    text: "Design services that support product workflows, integrations, and scale.",
  },
  {
    index: "03",
    title: "Full stack delivery",
    text: "Ship frontend and backend features with clean structure and readable code.",
  },
];

export const contactLinks = {
  email: "mo.sameerion@gmail.com",
  linkedin: "https://www.linkedin.com/in/mosameer100/",
  github: "https://www.github.com/msameer10",
  portfolio: "https://sameerion.com",
  phone: "773-313-6757",
  location: "Peoria, IL, USA",
};

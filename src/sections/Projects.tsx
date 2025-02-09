import chefleo from "@/assets/images/chefleo.png";
import capstonepro from "@/assets/images/capstonepro.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";



const portfolioProjects = [
  {
    company: "ReactJS Project",
    year: "2024",
    title: "Chef Leo",
    results: [
      { title: "Developed from scratch to generate AI-powered recipes" },
      { title: "Integrated Hugging Face API for smart ingredient-based suggestions" },
      { title: "Designed for quick, user-friendly meal inspiration" },
    ],
    link: "https://msameer10.github.io/chef-leo/",
    image: chefleo,
  },
  {
    company: "Bradley University",
    year: "2023",
    title: "Data Science Capstone Project",
    results: [
      { title: "Built a data pipeline to analyze real-world football (soccer) data" },
      { title: "Engineered custom metrics for team and player performance evaluation" },
      { title: "Applied machine learning to uncover strategic gameplay patterns" },
    ],
    link: "https://msameer10.github.io/capstonepro/",
    image: capstonepro,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader opening="Real-world Results" title="Featured Projects" description="Dive into the projects that have shaped my journey as a developer, each demonstrating my dedication to continuous learning and innovation." />
      <div className="md:mt-20 flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="pb-0 px-8 pt-8 md:px-10 md:pt-12 lg:px-16 lg:pt-20 sticky"
          style={{
            top: `calc(64px + ${projectIndex * 40}px`,
          }}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-rose-600 to-purple-600 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 md:w-auto">
                    <span>View</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
};

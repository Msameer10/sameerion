import chefleo from "@/assets/images/chefleo.png";
import capstonepro from "@/assets/images/capstonepro.png";
import sameerionImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";

const portfolioProjects = [
  {
    company: "Capstone",
    year: "2024",
    title: "Football Analytics & ML",
    results: [
      { title: "Built a Python and SQL pipeline to analyze soccer data." },
      { title: "Engineered features from unstructured data for model-ready datasets." },
      { title: "Implemented a Random Forest model to evaluate match outcome predictions." },
    ],
    link: "https://msameer10.github.io/capstonepro/",
    image: capstonepro,
  },
  {
    company: "React Project",
    year: "2024",
    title: "Chef Leo Recipe Web App",
    results: [
      { title: "Built a React app for ingredient-based recipe suggestions." },
      { title: "Integrated a Hugging Face model for dynamic recommendation output." },
      { title: "Focused on clean UX with planned Node.js backend expansion." },
    ],
    link: "https://msameer10.github.io/chef-leo/",
    image: chefleo,
  },
  {
    company: "Next.js Project",
    year: "2024",
    title: "Notz Note-taking App",
    results: [
      { title: "Built a Next.js and Firebase note-taking application." },
      { title: "Implemented Firestore sync with Google and email authentication." },
      { title: "Designed a dashboard with color-coded notes and theme options." },
    ],
    link: "/sameerResume.docx",
    image: sameerionImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          opening="Projects"
          title="Selected work"
          description="Projects focused on data analytics, machine learning, and full stack application development."
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-16 lg:pt-20"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

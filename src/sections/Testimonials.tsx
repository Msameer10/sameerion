import { Card } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { Fragment } from "react";

const highlights = [
  {
    name: "Data Engineering",
    position: "Pipeline design and transformation",
    text: "Built data flows and schema-driven systems that support analytics and application workflows.",
  },
  {
    name: "Backend Development",
    position: "APIs and services",
    text: "Designed REST and GraphQL APIs with SQL-backed systems for real-time and operational use cases.",
  },
  {
    name: "Frontend Delivery",
    position: "React and Next.js applications",
    text: "Developed responsive interfaces that keep complex workflows readable and usable.",
  },
  {
    name: "Analytics",
    position: "Data modeling and reporting",
    text: "Applied SQL, Python, and machine learning techniques to extract signal from messy data.",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        <SectionHeader
          opening="Highlights"
          title="Core strengths"
          description="A concise view of the skills and delivery areas emphasized throughout the portfolio."
        />
        <div className="-my-4 mt-16 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24">
          <div className="animate-move-left flex flex-none gap-8 pr-8 [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {highlights.map((highlight) => (
                  <Card key={highlight.name} className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8">
                    <div>
                      <div className="font-semibold">{highlight.name}</div>
                      <div className="text-sm text-white/40">{highlight.position}</div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">{highlight.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

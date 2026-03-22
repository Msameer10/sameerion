import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Data Pipelines",
  "APIs",
  "Analytics",
  "Machine Learning",
  "Full Stack",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "TypeScript",
  "Docker",
  "PostgreSQL",
];

export const TapeSection = () => {
  return (
    <div>
      <div className="overflow-x-clip py-16 lg:py-24">
        <div className="-mx-1 rotate-3 bg-gradient-to-r from-purple-600 to-rose-600">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-move-right flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex items-center gap-4">
                      <span className="text-sm font-extrabold uppercase text-gray-900">{word}</span>
                      <StarIcon className="size-6 -rotate-12 text-gray-900" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

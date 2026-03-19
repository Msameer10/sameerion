import Link from "next/link";
import { contactLinks } from "@/data/portfolio";

const resumeHighlights = [
  "Portfolio focused on data transformation, machine learning, and immersive frontend presentation.",
  "Built project work spanning AI-assisted recipe generation and football analytics pipelines.",
  "Comfortable with Python, TypeScript, React, Next.js, SQL, and practical ML workflows.",
  "Interests extend into aviation, strategy systems, history, and Islamic scholarship.",
];

export default function ResumePage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,rgba(89,48,145,0.22),transparent_32%),#0a0a11] px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_90px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Resume View</p>
            <h1 className="mt-3 font-display text-5xl tracking-[-0.04em]">Sameer Mohammad</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/72">
              Data, machine learning, and interface-focused builder who likes turning technical systems into clear, grounded experiences.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="world-button world-button-secondary !h-11 !px-5 !text-sm">
              Back to Portfolio
            </Link>
            <a
              href={`mailto:${contactLinks.email}`}
              className="world-button world-button-primary !h-11 !px-5 !text-sm"
            >
              Email
            </a>
          </div>
        </div>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-sm uppercase tracking-[0.32em] text-white/58">Highlights</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/76">
              {resumeHighlights.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5">
              <h2 className="text-sm uppercase tracking-[0.32em] text-white/58">Links</h2>
              <div className="mt-4 space-y-3 text-sm text-white/78">
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
                  LinkedIn
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="block hover:text-white">
                  GitHub
                </a>
                <a href={contactLinks.x} target="_blank" rel="noreferrer" className="block hover:text-white">
                  X
                </a>
                <a href={`mailto:${contactLinks.email}`} className="block hover:text-white">
                  {contactLinks.email}
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5 text-sm leading-7 text-white/72">
              <h2 className="text-sm uppercase tracking-[0.32em] text-white/58">Note</h2>
              <p className="mt-4">
                This internal resume page is part of the portfolio rebuild so the site has a stable, working resume destination even without a committed PDF asset in the repository.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

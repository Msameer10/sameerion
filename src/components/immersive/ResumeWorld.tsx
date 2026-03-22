"use client";

import { motion } from "framer-motion";
import { buildEntries, contactLinks, educationEntries, experienceEntries, skillGroups } from "@/data/portfolio";
import { WorldSection } from "./WorldSection";

export function ResumeWorld() {
  return (
    <WorldSection
      id="world-resume"
      label="Experience"
      cursor="ring"
      className="bg-[#070a12]"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,110,187,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(116,70,170,0.18),transparent_24%),linear-gradient(180deg,#09101b_0%,#060911_100%)]">
          <div className="resume-gridlines" />
          <div className="resume-glow resume-glow-left" />
          <div className="resume-glow resume-glow-right" />
        </div>
      }
      foregroundClassName="items-start pt-24 md:pt-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="resume-block px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[#c6d0f3]/68">Professional Experience</p>
              <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.02] tracking-[-0.04em] text-white">
                Selected experience and work history.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Experience across full stack development, APIs, SQL-backed systems, and product delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/sameerResume.docx"
                target="_blank"
                rel="noreferrer"
                className="world-button world-button-primary !h-11 !px-5 !text-sm"
              >
                View Resume
              </a>
              <a href={`mailto:${contactLinks.email}`} className="world-button world-button-secondary !h-11 !px-5 !text-sm">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="resume-stack">
            <section className="resume-block">
              <div className="resume-block-head">
                <p className="resume-block-label">Experience</p>
                <span className="resume-block-rule" />
              </div>
              <div className="space-y-5">
                {experienceEntries.map((entry, index) => (
                  <motion.article
                    key={`${entry.role}-${entry.company}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="resume-role"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-display text-[2rem] tracking-[-0.03em] text-white">{entry.role}</h3>
                        <p className="text-sm uppercase tracking-[0.22em] text-white/58">
                          {entry.company} | {entry.location}
                        </p>
                      </div>
                      <span className="resume-timeline">{entry.timeline}</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-white/72">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="resume-bullet">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>

          <div className="resume-stack">
            <section className="resume-block">
              <div className="resume-block-head">
                <p className="resume-block-label">Skills</p>
                <span className="resume-block-rule" />
              </div>
              <div className="grid gap-4">
                {skillGroups.map((group) => (
                  <div key={group.label} className="resume-skill-group">
                    <h3 className="text-sm uppercase tracking-[0.24em] text-white/58">{group.label}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="resume-skill-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <div className="resume-block-head">
                <p className="resume-block-label">Education</p>
                <span className="resume-block-rule" />
              </div>
              <div className="space-y-4">
                {educationEntries.map((entry) => (
                  <article key={entry.degree} className="resume-role">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-display text-[1.55rem] tracking-[-0.03em] text-white">{entry.degree}</h3>
                        <p className="text-sm uppercase tracking-[0.22em] text-white/58">
                          {entry.school} | {entry.location}
                        </p>
                      </div>
                      <span className="resume-timeline">{entry.timeline}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <div className="resume-block-head">
                <p className="resume-block-label">Focus</p>
                <span className="resume-block-rule" />
              </div>
              <ol className="space-y-4">
                {buildEntries.map((entry) => (
                  <li key={entry.index} className="resume-principle">
                    <span className="resume-principle-index">{entry.index}</span>
                    <div>
                      <h3 className="font-display text-[1.5rem] tracking-[-0.03em] text-white">{entry.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/70">{entry.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </WorldSection>
  );
}



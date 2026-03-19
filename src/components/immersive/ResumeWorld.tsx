"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildEntries, contactLinks, experienceEntries, skillGroups } from "@/data/portfolio";
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
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <section className="resume-intro-panel">
          <p className="text-xs uppercase tracking-[0.38em] text-[#c6d0f3]/68">Resume / Experience</p>
          <h2 className="mt-4 font-display text-[clamp(2.9rem,6vw,5.2rem)] tracking-[-0.05em] text-white">
            Clear signal for the people hiring, partnering, and reviewing the work.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
            I work at the intersection of data, AI, and product-minded frontend systems. This section is the compressed version: where I&apos;ve worked, what I use, and how I like to build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resume" className="world-button world-button-primary">
              Open Resume Page
            </Link>
            <a href={`mailto:${contactLinks.email}`} className="world-button world-button-secondary">
              Contact Me
            </a>
          </div>
        </section>

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
                      <p className="text-sm uppercase tracking-[0.22em] text-white/58">{entry.company}</p>
                    </div>
                    <span className="resume-timeline">{entry.timeline}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-white/72">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="resume-bullet">{bullet}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="resume-block">
            <div className="resume-block-head">
              <p className="resume-block-label">Skills / Stack</p>
              <span className="resume-block-rule" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
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
              <p className="resume-block-label">Principles</p>
              <span className="resume-block-rule" />
            </div>
            <ol className="space-y-4">
              {buildEntries.map((entry) => (
                <li key={entry.index} className="resume-principle">
                  <span className="resume-principle-index">{entry.index}</span>
                  <div>
                    <h3 className="font-display text-[1.9rem] tracking-[-0.03em] text-white">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{entry.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </WorldSection>
  );
}

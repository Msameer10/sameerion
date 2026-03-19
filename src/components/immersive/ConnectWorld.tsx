"use client";

import { contactLinks } from "@/data/portfolio";
import { connectShootingStars, connectStars } from "@/lib/immersive";
import { WorldSection } from "./WorldSection";

export function ConnectWorld() {
  return (
    <WorldSection
      id="world-connect"
      label="Connect"
      cursor="stylus"
      className="bg-[#06040a]"
      background={
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_top,#1d1234_0%,#07050b_55%,#020204_100%)]">
          <div className="connect-blob connect-blob-lavender" />
          <div className="connect-blob connect-blob-violet" />
          <div className="connect-blob connect-blob-rose" />
          {connectStars.map((star, index) => (
            <span
              key={`${star.left}-${star.top}-${index}`}
              className="connect-star"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: `${Number.parseFloat(star.duration) + 4}s`,
              }}
            />
          ))}
          {connectShootingStars.map((star, index) => (
            <span
              key={index}
              className={`shooting-star shooting-star-${index + 1}`}
              style={{
                width: `${star.size}px`,
                animationDelay: `${index * 4.4}s`,
              }}
            />
          ))}
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.42em] text-white/58">Get In Touch</p>
        <h2 className="mt-4 font-display text-[clamp(3.7rem,8.5vw,7.5rem)] leading-[0.9] tracking-[-0.05em]">
          <span className="block text-[#b9a6f3]">Let&apos;s</span>
          <span className="block text-[#f5f0e6]">Talk.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg italic leading-8 text-[#f5ecff]/70">
          Whether it&apos;s a collaboration, an opportunity,<br className="hidden md:block" />
          or just a good conversation &mdash; I&apos;m around.
        </p>
        <a
          href={`mailto:${contactLinks.email}`}
          className="connect-mail-button"
          aria-label="Send an email to Sameer Mohammad"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="connect-mail-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7.5h16v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z" />
            <path d="m5 8 7 5 7-5" />
          </svg>
          <span>Send an Email</span>
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.24em] text-white/64">
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="connect-social-pill">
            LinkedIn
          </a>
          <a href={contactLinks.github} target="_blank" rel="noreferrer" className="connect-social-pill">
            GitHub
          </a>
        </div>
        <div className="connect-closing-wrap">
          <p className="connect-closing-line connect-closing-line-primary connect-closing-line-plain">
            From a cosmos of ideas to a quiet window in the rain.
          </p>
          <p className="connect-closing-line connect-closing-line-secondary">
            Sameerion - Built with determination, a pinch of procrastination, and some questionable life decisions.
          </p>
        </div>
      </div>
    </WorldSection>
  );
}

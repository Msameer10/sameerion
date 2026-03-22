"use client";

import { contactLinks } from "@/data/portfolio";
import { connectShootingStars, connectStars } from "@/lib/immersive";
import { WorldSection } from "./WorldSection";

export function ConnectWorld() {
  const currentYear = new Date().getFullYear();

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
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="w-full rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(145,86,255,0.95),rgba(205,83,171,0.94),rgba(238,55,88,0.94))] p-[1px] shadow-[0_26px_90px_rgba(0,0,0,0.32)]">
          <div className="rounded-[2.35rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-7 py-8 backdrop-blur md:px-10 md:py-10 lg:px-12 lg:py-11">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="max-w-2xl text-left">
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.3rem)] leading-[0.92] tracking-[-0.05em] text-[#130814]">
                  Let&apos;s Connect
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#221228]/82 md:text-base">
                  Open to opportunities, collaborations, and professional conversations.
                </p>
              </div>
              <a
                href={`mailto:${contactLinks.email}`}
                className="inline-flex h-14 items-center justify-center rounded-[1.15rem] bg-[#111321] px-7 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#171a2c] md:h-16 md:px-9"
                aria-label="Send an email to Sameer Mohammad"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="mt-40 w-full border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,1.35fr)_auto] md:items-start md:gap-8">
            <div className="text-left">
              <p className="max-w-xl text-sm leading-6 text-white/56">
                Sameerion - built with determination, a pinch of procrastination, and some questionable life decisions (and also maybe a bit of Googling)
              </p>
            </div>
            <div className="flex flex-col gap-4 text-left md:items-end md:text-right">
              <p className="text-sm text-white/60">&copy; Sameerion {currentYear}. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.18em] text-white/62 md:justify-end">
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="footer-social-link">
                  LinkedIn
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="footer-social-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorldSection>
  );
}

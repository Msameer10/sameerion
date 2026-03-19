"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { heroContent } from "@/data/portfolio";
import { originDecorativeStars, originParticles, originStars } from "@/lib/immersive";
import { WorldSection } from "./WorldSection";

type OriginWorldProps = {
  introDone: boolean;
  onEnterWork: () => void;
};

export function OriginWorld({ introDone, onEnterWork }: OriginWorldProps) {
  const orbitalDots = useMemo(
    () => [
      { size: 360, angle: 40, color: "rgba(211,141,252,0.95)", duration: "12s" },
      { size: 500, angle: 190, color: "rgba(243,110,143,0.85)", duration: "15s" },
      { size: 640, angle: 310, color: "rgba(149,224,173,0.85)", duration: "18s" },
      { size: 760, angle: 125, color: "rgba(255,220,170,0.78)", duration: "22s" },
    ],
    []
  );

  return (
    <WorldSection
      id="world-origin"
      label="Origin"
      cursor="ring"
      className="bg-[#070b14]"
      foregroundClassName="items-center"
      background={
        <div className="absolute inset-0">
          <div className="origin-space absolute inset-0" />
          <div className="origin-aurora origin-aurora-violet" />
          <div className="origin-aurora origin-aurora-rose" />
          <div className="origin-aurora origin-aurora-sage" />
          <div className="absolute inset-0">
            {originStars.map((star, index) => (
              <span
                key={`${star.left}-${star.top}-${index}`}
                className="origin-star"
                style={{
                  left: star.left,
                  top: star.top,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                  opacity: star.opacity,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {[360, 500, 640, 760].map((size) => (
              <div
                key={size}
                className="origin-ring"
                style={{ width: `${size}px`, height: `${size}px` }}
              />
            ))}
            {orbitalDots.map((dot, index) => (
              <div
                key={index}
                className="origin-orbit-dot"
                style={
                  {
                    "--orbit-size": `${dot.size}px`,
                    "--orbit-angle": `${dot.angle}deg`,
                    "--orbit-color": dot.color,
                    "--orbit-duration": dot.duration,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          {originDecorativeStars.map((star) => (
            <span
              key={`${star.left}-${star.top}`}
              className="origin-deco-star"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
          {originParticles.map((particle, index) => (
            <span
              key={`${particle.left}-${particle.top}-${index}`}
              className="origin-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: particle.delay,
                animationDuration: `${Number.parseFloat(particle.duration) + 4}s`,
              }}
            />
          ))}
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -28 }}
          animate={introDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="origin-greeting mb-5 text-base uppercase tracking-[0.34em] text-[#f0ecff]/88 md:text-lg"
        >
          {heroContent.greeting}
        </motion.p>
        <div className="flex flex-col items-center leading-[0.92]">
          <h1 className="font-display text-[clamp(4rem,13vw,9rem)] tracking-[-0.04em]">
            <span className="hero-gradient">{heroContent.firstName}</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 46 }}
            animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 46 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-display text-[clamp(3rem,10vw,7rem)] tracking-[-0.04em] text-white"
          >
            {heroContent.lastName}
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-5 max-w-2xl text-balance text-lg text-[#efe7d7]/88 md:text-2xl"
        >
          {heroContent.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-4 max-w-2xl text-balance text-sm leading-7 text-[#d3d9e7]/72 md:text-base"
        >
          {heroContent.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <button type="button" onClick={onEnterWork} className="world-button world-button-primary">
            {heroContent.primaryCta.label}
          </button>
          <Link href={heroContent.secondaryCta.href} className="world-button world-button-secondary">
            {heroContent.secondaryCta.label}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/55"
        >
          <span>Scroll</span>
          <span className="scroll-hint-line" />
        </motion.div>
      </div>
    </WorldSection>
  );
}

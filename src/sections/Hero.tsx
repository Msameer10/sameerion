"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip py-32 md:py-56 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />
        <HeroOrbit size={360} rotation={150} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-rose-500/30" />
        </HeroOrbit>
        <HeroOrbit size={370} rotation={-175} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-indigo-500/30" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={5} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-rose-600/40" />
        </HeroOrbit>
        <HeroOrbit size={400} rotation={-150} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-rose-500/50" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={120} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-rose-600" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={25} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-purple-600/50" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-rose-500/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-rose-500/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={175} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-purple-500/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-rose-500/40" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-rose-600/40" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={80} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-purple-600/80" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-rose-600" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-rose-500/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-rose-500/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-rose-500" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration="48s">
          <div className="size-3 rounded-full bg-rose-500/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-70} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-purple-600" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Sameer Mohammad avatar" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 font-serif text-3xl tracking-wide md:text-5xl">Hi, I&apos;m Sameer Mohammad.</h1>
          <p className="mt-4 text-white/70 md:text-lg">I build data systems and modern web applications.</p>
          <p className="mt-2 text-white/60 md:text-lg">Focused on data engineering, analytics, and full stack development.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="z-20 inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6"
          >
            <span className="font-semibold">View Projects</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="z-20 inline-flex h-12 items-center gap-2 rounded-xl border border-purple-700 bg-purple-600 px-6 text-gray-900"
          >
            <span className="font-semibold">Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

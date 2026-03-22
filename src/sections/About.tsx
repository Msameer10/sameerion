"use client";

import { Card } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import minecraftImage from "@/assets/images/minecraft.png";
import assassinscreedImage from "@/assets/images/assassinscreed.png";
import eldenringImage from "@/assets/images/eldenring.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GitIcon from "@/assets/icons/git.svg";
import PyIcon from "@/assets/icons/python.svg";
import SQLIcon from "@/assets/icons/sql.svg";
import NoSQLIcon from "@/assets/icons/nosql.svg";
import MLIcon from "@/assets/icons/machinelearning.svg";
import AIIcon from "@/assets/icons/artintelligence.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML", iconType: HTMLIcon },
  { title: "CSS", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Git", iconType: GitIcon },
  { title: "Python", iconType: PyIcon },
  { title: "SQL", iconType: SQLIcon },
  { title: "NoSQL", iconType: NoSQLIcon },
  { title: "Machine Learning", iconType: MLIcon },
  { title: "Artificial Intelligence", iconType: AIIcon },
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "Next.js", iconType: NextJSIcon },
];

const interests = [
  { title: "Data Pipelines", emoji: "Flow", left: "5%", top: "8%" },
  { title: "Analytics", emoji: "SQL", left: "48%", top: "8%" },
  { title: "APIs", emoji: "API", left: "10%", top: "35%" },
  { title: "Full Stack", emoji: "Web", left: "38%", top: "42%" },
  { title: "Machine Learning", emoji: "ML", left: "68%", top: "45%" },
  { title: "Cloud Systems", emoji: "Ops", left: "8%", top: "68%" },
  { title: "Problem Solving", emoji: "Build", left: "44%", top: "72%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          opening="About"
          title="Focused on reliable systems and clear product delivery"
          description="I build data pipelines, APIs, and modern web applications with an emphasis on clean architecture, analytics, and maintainable code."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <a href="/fav" target="_blank" rel="noreferrer">
                <CardHeader title="Interests" description="Strategy, systems, and interactive problem solving." />
                <div className="relative mx-auto mt-2 w-40 md:mt-0">
                  <Image src={eldenringImage} alt="Elden Ring logo" className="relative top-[-20px] right-[80px] w-full rotate-[-20deg] opacity-80 md:right-[70px]" />
                  <Image src={minecraftImage} alt="Minecraft block" className="absolute top-[-20px] left-[60px] w-full rotate-[10deg] md:left-[40px]" />
                  <Image src={assassinscreedImage} alt="Assassin's Creed logo" className="absolute right-5 top-[-15px] w-full rotate-[-15deg] md:right-5" />
                </div>
              </a>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="Core Stack" description="Technologies used across frontend, backend, and data workflows." />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]" className="mt-6" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="Focus Areas" description="Core themes across engineering, data, and delivery." className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {interests.map((interest) => (
                  <motion.div
                    key={interest.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-rose-600 px-6 py-1.5"
                    style={{
                      left: interest.left,
                      top: interest.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{interest.title}</span>
                    <span className="text-xs font-semibold uppercase text-gray-900/80">{interest.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:-outline-offset-2 after:rounded-full after:outline after:outline-2 after:outline-gray-950/30 after:content-['']">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-purple-600 to-rose-600 [animation-duration:2s]" />
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-600 to-rose-600" />
                <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

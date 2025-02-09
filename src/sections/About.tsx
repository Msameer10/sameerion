"use client";
import { Card } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import minecraftImage from '@/assets/images/minecraft.png';
import assassinscreedImage from '@/assets/images/assassinscreed.png'
import eldenringImage from '@/assets/images/eldenring.png'
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import GitIcon from '@/assets/icons/git.svg'
import PyIcon from '@/assets/icons/python.svg'
import SQLIcon from '@/assets/icons/sql.svg'
import NoSQLIcon from '@/assets/icons/nosql.svg'
import MLIcon from '@/assets/icons/machinelearning.svg'
import AIIcon from '@/assets/icons/artintelligence.svg'
import ExcelIcon from '@/assets/icons/excel.svg'
import PyScriptIcon from '@/assets/icons/pyScript.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'
import NextJSIcon from '@/assets/icons/nextjs.svg'
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CSSIcon,
  },
  {
    title: 'ReactJS',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Git',
    iconType: GitIcon,
  },
  {
    title: 'Python',
    iconType: PyIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'NoSQL',
    iconType: NoSQLIcon,
  },{
    title: 'Machine Learning',
    iconType: MLIcon,
  },
  {
    title: 'Artifical Intelligence',
    iconType: AIIcon,
  },
  {
    title: 'Excel',
    iconType: ExcelIcon,
  },
  {
    title: 'Jupyter',
    iconType: PyScriptIcon,
  },
  {
    title: 'PyCharm',
    iconType: PyScriptIcon,
  },
  {
    title: 'Deep Learning',
    iconType: AIIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypescriptIcon,
  },
  {
    title: 'NextJS',
    iconType: NextJSIcon,
  },
]

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Browsing',
    emoji: '📺',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Traveling',
    emoji: '🚗',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Painting',
    emoji: '🎨',
    left: '45%',
    top: '70%',
  },
  {
    title: 'Scripting',
    emoji: '🧑🏻‍💻',
    left: '60%',
    top: '30%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader opening="About Me" title="A Glimpse into my World" description="Learn more about who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <a href="https://msameer10.github.io/tashriiwaluhati/" target="_blank">
              <CardHeader title="Virtual Realms" description="Immersing in stories and challenges of games."/>
              <div className="w-40 mx-auto mt-2 md:mt-0 relative">
                <Image src={eldenringImage} alt="Elden Ring logo" className="relative top-[-20px] right-[60px] w-full opacity-80 transform rotate-[-20deg]" />
                <Image src={minecraftImage} alt="Minecraft block" className="absolute top-[-20px] left-[30px] w-full transform rotate-[10deg]" />
                <Image src={assassinscreedImage} alt="Assassin's Creed logo" className="absolute right-5 top-[-15px] w-full transform rotate-[-15deg]" />
              </div>
            </a>
          </Card>
          <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences."/>
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]" className="mt-6"/>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-purple-600 to-rose-600 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"> 
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-rose-600 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-rose-600 -z-10"></div>
              <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
  ;
};

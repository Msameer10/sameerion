'use client';

import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';


export const HeroSection = () => {
  return (
  <div className='py-32 md:py-56 lg:py-60 relative z-0 overflow-x-clip
  '>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit size={360} rotation={150} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-8 text-rose-500/30"/>
        </HeroOrbit>
        <HeroOrbit size={370} rotation={-175} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-indigo-500/30'></div>
        </HeroOrbit>
        <HeroOrbit size={380} rotation={5} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-rose-600/40'></div>
        </HeroOrbit>
        <HeroOrbit size={400} rotation={-150} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-8 text-rose-500/50"/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={120} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-rose-600"/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={25} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-8 text-purple-600/50"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-5 text-rose-500/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-rose-500/20'></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={175} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-purple-500/20'></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-10 text-rose-500/40"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-rose-600/40"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={80} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-purple-600/80"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-8 text-rose-600"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-rose-500/20'></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-14 text-rose-500/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-14 text-rose-500"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration='48s'>
          <div className='size-3 rounded-full bg-rose-500/20'></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-70} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-28 text-purple-600"/>
        </HeroOrbit>
      </div>
    <div className="container">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px]' alt="person peeking" />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-purple-600 size-2.5 rounded-full relative'>
            <div className='bg-purple-600 absolute inset-0 rounded-full animate-ping-large'></div>
          </div>
          <div className='text-sm font-medium'>Let&apos;s create something amazing!</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide'>Hi, I<span className='text-rose-600'>&apos;</span>m <span className='text-rose-600'>Sameer</span> Mohammad <span className='text-purple-600'>!</span></h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
        Tech enthusiast with a knack for data transformation and problem-solving through code. Passionate about Data, Machine Learning, and AI. When I&apos;m not immersed in code, I&apos;m lost in the worlds of history, aviation, and gaming.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className='inline-flex items-center gap-2 border border-white/20 px-6 h-12 rounded-xl z-20'>
          <span className='font-semibold'>Explore my Work</span>
          <ArrowDown className="size-4" />
        </button>
        <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className='inline-flex items-center gap-2 border border-purple-700 bg-purple-600 text-gray-900 h-12 px-6 rounded-xl z-20'>
          <span>🤝</span>
          <span className='font-semibold'>Let&apos;s Connect</span>
        </button>
      </div>
    </div>
  </div>)
};

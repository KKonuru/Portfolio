"use client";

import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import kau from '../public/kaust-pic.jpg';

export default function Home() {
  
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-mediumm md:text-6xl">Kausthubh Konuru</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Computer Science student at the University of Florida</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
             Hello! I am a junior at the University of Florida majoring in Computer Science with a minor in Statistics and Mathematics. I am passionate about data science, machine learning, artifiical intelligence, 
             and software development. Last summer I was a data science intern at Florida Blue. 
            </p>
          </div>
          <div className = "text-5xl flex justify-center gap-17 py-3 text-gray dark:text-white">
            <a href="https://www.linkedin.com/in/kausthubhk" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/KKonuru" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="ml-10"/>
            </a>


          </div>
          <div className="flex justify-center">
            <Image src={kau} width={500} height={500} className='rounded-full w-160 h-160 md:h-240 md:w-240'/>
          </div>
        </section>
      </main>
    </div>
  )
}

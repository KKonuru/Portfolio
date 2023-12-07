"use client";
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import kau from '../public/kaust-pic.jpg';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import mine from '../public/minesweeper.png';
import word from '../public/word-sim.png'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode?'dark':''}>
      <Head>
        <title>Kausthubh Konuru Portfolio</title>
        <meta name="description" content="Kausthubh Konuru Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Kausthubh Konuru</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/Kausthubh_Konuru_Resume.pdf" target="_blank">
                  Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-mediumm md:text-6xl">Kausthubh Konuru</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">CS@UF aspiring software engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Please give me internship.Please give me internship. Please give me internship. Please give me internship. Please give me internship.
              Please give me internship.
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
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginnining.
            </p>
          </div>
          <div className="lg:flex lg:justify-center lg:flex-wrap gap-10">
            <div className="basis-1/3 flex-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={web1} className="rounded-lag object-cover" width={'100%'} height={"100%"} layout="responsive"/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Stuff
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="basis-1/3 flex-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={web2} className="rounded-lag object-cover" width={'100%'} height={"100%"} layout="responsive"/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Stuff
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="basis-1/3 flex-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={word} className="rounded-lag object-cover" width={'100%'} height={"100%"} layout="responsive"/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Stuff
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="basis-1/3 flex-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src={mine} className="rounded-lag object-cover" width={'100%'} height={"100%"} layout="responsive"/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Stuff
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            
          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white">Presentations</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginnining.
            </p>
          </div>

          
        </section>
        
      </main>
    </div>
  )
}

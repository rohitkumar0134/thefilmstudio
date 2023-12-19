"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Ourclient from './components/Ourclient'
import { Experience } from './components/Experience'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // adjust the root margin as needed
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>

      <div className="relative  bg-cover h-screen min-h-144 bg-[url('https://i.ibb.co/Ct9FFvg/Untitled-design.png')] ">
        <div className="
relative  bg-left bg-cover  h-screen min-h-144 
bg-[url('https://i.imgur.com/QP0ElDy.png')] 
">


          <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
            <Navbar />
            <div className='flex items-center justify-center h-screen'>
              <h1 className='textdecorclass text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
                Welcome to The Film House
                <br />

              </h1>
            </div>
          </div>

        </div>


      </div>
      <div class="banner-angled-line"></div>
      <AnimatedComponent>
        <Service />
      </AnimatedComponent>
      <hr className="" />

      <AnimatedComponent>
        <Portfolio />
      </AnimatedComponent>

      <AnimatedComponent>
        <Experience />
      </AnimatedComponent>
      {/* <Experience /> */}
      {/* <TeamMemberCard/>
<FeaturesGrid/> */}

      <AnimatedComponent>
        <Ourclient />

      </AnimatedComponent>


      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
    



    </>
  )
}

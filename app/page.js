"use client"
import Image from 'next/image'
import Navbar from './components/common/Navbar1'
import Service from './components/Service'
import Footer from './components/Footer'
import Portfolio from './components/home/Portfolio'
import Ourclient from './components/home/Ourclient'
import { Experience } from './components/home/Experience'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Intro from './components/home/Intro'
import Aos from 'aos'
import Header from './components/common/Header'

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
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>

      <div className="relative  bg-cover h-screen min-h-144 bg-[url('https://i.ibb.co/Ct9FFvg/Untitled-design.png')] ">
        <div className="
relative  bg-left bg-cover  h-screen min-h-144 
bg-[url('https://i.imgur.com/QP0ElDy.png')] 
">


          <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
           
            <Header />
            <div className='flex items-center justify-center h-screen'>
              <h1 className='textdecorclass text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
                Welcome to The Film House
                <br />

              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Intro />
      </div>
      {/* <AnimatedComponent>
        <Service />
      </AnimatedComponent> */}


      <div
        data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"
      >
        <Portfolio />


      </div>

      <div
        data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"
      >
        <Experience />
      </div>
      {/* <Experience /> */}
      {/* <TeamMemberCard/>
<FeaturesGrid/> */}

      <div
        data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
      >
        <Ourclient />
      </div>


      <div
        data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out"
      >
        <Footer />
      </div>


      <FloatingWhatsApp
        phoneNumber="+918976487428"
        accountName="The Film House"
        allowEsc
        notification
        notificationSound
        avatar={"https://i.ibb.co/P5L7r9J/TFM-logo-White-potrait-3x.jpg"}
        chatMessage={"Welcome to The Film House,e bring your imagination to life, one frame at a time."}
      />


    </>
  )
}

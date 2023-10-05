"use client"

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Ourclient from '../components/Ourclient'
import { Experience } from '../components/Experience'

function page() {
  return (
    <>
      <div className="
relative  bg-center bg-cover  h-80 min-h-144 
bg-[url('https://i.imgur.com/B7TiuIX.png')] 
">


        <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Navbar />

        </div>

      </div>

      
      <div>
        <section class="bg-black dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-300 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white">We didnt reinvent the wheel</h2>
              <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
          </div>
        </section>
      </div>
      <Experience />
      <Ourclient />
      <Footer />
    </>
  )
}

export default page
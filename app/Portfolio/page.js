"use client"
import React from 'react'

import Navbar from '../components/common/Navbar'
import Footer from '../components/Footer'
import SimpleImageGallery from '../components/SimpleImageGallery'
import BeforeAfter from '../components/BeforeAfter'
import { ArrowForward } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

function Portfolio() {
  const router = useRouter()
  return (
    <>
      <div className="relative  bg-center bg-cover  h-80 min-h-144 bg-[url('https://i.imgur.com/B7TiuIX.png')] 
          ">
        <div
          className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Navbar />

        </div>


      </div>
      <div className='my-4'>
        <h2
          className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-800 dark:text-white md:text-4xl">
          Try Before After
        </h2>
        <div className="flex flex-wrap ">
          <div className="mx-auto w-full p-4 md:w-1/2 lg:w-1/3 rounded-md">
            <BeforeAfter
              before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
              after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}

            />
          </div>
          <div className="mx-auto w-full p-4 md:w-1/2 lg:w-1/3 rounded-md">
            <BeforeAfter
              before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
              after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}

            />
          </div>
          <div className="mx-auto w-full hidden md:block lg:block p-4 md:w-1/2 lg:w-1/3 rounded-md">
            <BeforeAfter
              before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
              after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}

            />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={() => router.push("/beforeAfter")}
            className="bg-gray-300 m-1 p-2 md:m-3 md:p-2 rounded-lg text-center text-sm md:text-lg">
            view more
            <ArrowForward />
          </button>
        </div>
        <hr className='bg-black my-3'/>
      </div>
      <div className='imagegallery mb-4'>

        <SimpleImageGallery />

      </div>
      <Footer />
    </>
  )
}

export default Portfolio
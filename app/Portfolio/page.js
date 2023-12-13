"use client"
import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SimpleImageGallery from '../components/SimpleImageGallery'
import BeforeAfter from '../components/BeforeAfter'
import { ArrowForward } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

function Portfolio() {
  const router=useRouter()
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
        <BeforeAfter />
        <BeforeAfter />
        <div className="flex justify-center mt-2">
          <button 
          onClick={()=>router.push("/beforeAfter")}
          className="bg-gray-300 m-1 p-2 md:m-3 md:p-2 rounded-lg text-center text-sm md:text-lg">
            view more
            <ArrowForward />
          </button>
        </div>
        <hr />
      </div>
      <div className='imagegallery mb-4'>

        <SimpleImageGallery />

      </div>
      <Footer />
    </>
  )
}

export default Portfolio
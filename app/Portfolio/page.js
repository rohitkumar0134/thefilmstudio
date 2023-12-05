"use client"
import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SimpleImageGallery from '../components/SimpleImageGallery'

function Portfolio() {
  return (
    <>
      <div className="relative  bg-center bg-cover  h-80 min-h-144 bg-[url('https://i.imgur.com/B7TiuIX.png')] 
          ">
        <div
          className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Navbar />

        </div>


      </div>
      <div className='imagegallery mb-4'>

        <SimpleImageGallery/>

      </div>
      <Footer />
    </>
  )
}

export default Portfolio
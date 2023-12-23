
"use client"
import React from 'react'

import Footer from '../components/Footer'
import SimpleImageGallery from '../components/portfolio/SimpleImageGallery'
import { useRouter } from 'next/navigation'
import Portfoliointro from '../components/portfolio/Portfoliointro'
import Getintouch from '../components/common/Getintouch'
import Header from '../components/common/Header'

function page() {
  const router = useRouter()
  return (
    <>
      <div className="
relative  bg-center bg-cover  h-80 min-h-144 
bg-[url('https://i.imgur.com/B7TiuIX.png')] 
">


        <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Header />

        </div>

      </div>
      <Portfoliointro />
      <div className='imagegallery mb-4'>

        <SimpleImageGallery />
      </div>
      <Getintouch showtouch={true} />
      <Footer />
    </>
  )
}

export default page
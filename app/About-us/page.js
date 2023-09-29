"use client"

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function page() {
  return (
    <>
  <div className="
relative  bg-center bg-cover  h-80 min-h-144 
bg-[url('https://i.imgur.com/B7TiuIX.png')] 
">
      
  
    <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
    <Navbar/>
    {/* <div className='flex items-center justify-center h-screen'>
    <h1 className='text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
    Book Music & Comedy Events
              <br />
              anywhere in New York
      </h1>
    </div> */}
    </div>
   
    </div>
    <div>page</div>
    <Footer/>
    </>
  )
}

export default page
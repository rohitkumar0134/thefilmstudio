"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import BeforeAfter from '../components/BeforeAfter'

function page() {
  return (
    <>
      <div className="relative  bg-center bg-cover  h-80 min-h-144 bg-[url('https://i.imgur.com/B7TiuIX.png')] 
          ">
        <div
          className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Navbar />
          <div className='flex items-center justify-center h-screen'>
              <h1 className='textdecorclass text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
                Before-After Gallery
                <br />

              </h1>
            </div>
        </div>
      </div>

      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>
      <BeforeAfter/>


    </>
  )
}

export default page
"use client"
import React from 'react'
import Navbar from '../components/common/Navbar1'
import BeforeAfter from '../components/common/BeforeAfter'
import Header from '../components/common/Header'

function page() {
  return (
    <>
      <div className="relative  bg-center bg-cover  h-80 min-h-144 bg-[url('https://i.imgur.com/B7TiuIX.png')] 
          ">
        <div
          className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
          <Header />
          <div className='flex items-center justify-center h-screen'>
            <h1 className='textdecorclass text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
              Before-After Gallery
              <br />

            </h1>
          </div>
        </div>
      </div>
      <div className='mt-4 grid md:grid-cols-2 gap-4 items-center'>
        <BeforeAfter
          before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
          after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}
        />
        <BeforeAfter
          before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
          after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}
        />

<BeforeAfter
          before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
          after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}
        />
      </div>


    </>
  )
}

export default page
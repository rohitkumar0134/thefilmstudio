"use client"
import React, { useEffect, useState } from 'react'


import BeforeAfter from '../components/common/BeforeAfter'
import Header from '../components/common/Header'
import axios from 'axios'

function page() {
  const [data,setData]=useState([])

  useEffect(()=>{
const fetchdata=async()=>{
  const {data}=await axios.get("/api/user/beforeAfter")
  console.log(data)
  setData(data.beforeAfter)
}
fetchdata()
  },[])

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
        {data?.map((img)=>(
          <BeforeAfter
          id={img._id}
          before={img.beforeImage}
          after={img.AfterImage}
        />

        ))}
        
      </div>


    </>
  )
}

export default page
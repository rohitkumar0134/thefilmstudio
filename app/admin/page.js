"use client"
import React, { useEffect } from 'react'
import CheckAuth from './components/common/CheckAuth'
import Navbar from './components/common/Navbar'
import Gallery from './components/gallery/Gallery'


function page() {
 

  return (
  <>
  <div className='bg-gray-300'>
  <Navbar/>
  <CheckAuth/>


<div className='mb-4'/>

  </div>

 
  </>
  )
}

export default page
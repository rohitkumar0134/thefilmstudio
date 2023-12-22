"use client"
import React, { useEffect } from 'react'
import CheckAuth from '../components/common/CheckAuth'
import Navbar from '../components/common/Navbar'
import Gallery from '../components/gallery/Gallery'


function page() {
 

  return (
  <>
    <div className='bg-gray-300 h-screen'>

  <Navbar/>
  <CheckAuth/>
<Gallery/>
</div>
<div className='mb-4'/>
 
  </>
  )
}

export default page
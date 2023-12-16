"use client"
import React, { useEffect } from 'react'
import CheckAuth from './components/CheckAuth'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'


function page() {
 

  return (
  <>
  <Navbar/>
  <CheckAuth/>
<Gallery/>

<div className='mb-4'/>
 
  </>
  )
}

export default page
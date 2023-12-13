"use client"
import React, { useEffect } from 'react'
import CheckAuth from './components/CheckAuth'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import AddUpdateImage from './components/AddUpdateImage'


function page() {
 

  return (
  <>
  <Navbar/>
  <CheckAuth/>
<Gallery/>
<AddUpdateImage/>
<div className='mb-4'/>
 
  </>
  )
}

export default page
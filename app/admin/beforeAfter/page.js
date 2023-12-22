"use client"
import React from 'react'
import Navbar from '../components/common/Navbar'
import CheckAuth from '../components/common/CheckAuth'
import "../admin.css"
import BeforeAfterpage from '../components/beforeAfter/BeforeAfterpage'


function page() {
  return (
    <>
    <div className='bg-gray-300 h-screen'>
    <Navbar/>
    <CheckAuth/>
    <BeforeAfterpage/>
    </div>
    
    </>
  )
}

export default page
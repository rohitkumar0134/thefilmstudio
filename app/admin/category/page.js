"use client"
import React from 'react'
import Navbar from '../components/common/Navbar'
import CheckAuth from '../components/common/CheckAuth'
import Category from '../components/category/Category'
import "../admin.css"


function page() {
  return (
    <>
    <div className='bg-gray-300 h-screen'>
    <Navbar/>
    <CheckAuth/>
    <Category/>
    </div>
    
    </>
  )
}

export default page
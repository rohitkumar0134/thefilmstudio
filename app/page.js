"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Ourclient from './components/Ourclient'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Experience } from './components/Experience'


export default function Home() {
  return (
<>

  <div className="
relative  bg-cover h-screen min-h-144
bg-[url('https://i.imgur.com/et973ll.jpg')] 
">
  <div className="
relative  bg-left bg-cover  h-screen min-h-144 
bg-[url('https://i.imgur.com/QP0ElDy.png')] 
">
      
  
    <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-gray-300'>
    <Navbar/>
    <div className='flex items-center justify-center h-screen'>
    <h1 className='text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-300 leading-snug -mt-24 sm:mt-0'>
    Welcome to The Film House
              <br />
             
      </h1>
    </div>
    </div>
   
    </div>
 
    </div>
  <div className=''>
  <Service/>
  <hr className=''/>
  </div>
  <div className=''>
  <Portfolio/>
  </div>
<Experience/>
<Ourclient/>


  <Footer/>



</>
  )
}

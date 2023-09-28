"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Service from './components/Service'

export default function Home() {
  return (
<>

  <div className="
relative  bg-left bg-cover h-screen min-h-144
bg-[url('https://i.imgur.com/et973ll.jpg')] 
">
  <div className="
relative  bg-left bg-cover h-screen min-h-144 
bg-[url('https://i.imgur.com/QP0ElDy.png')] 
">
      
  
    <div className='z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col text-white'>
    <Navbar/>
    <div className='flex items-center justify-center h-screen'>
    <h1 className='text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0'>
    Book Music & Comedy Events
              <br />
              anywhere in New York
      </h1>
    </div>
    </div>
   
    </div>
 
    </div>
  <div className=''>
  <Service/>
  </div>



</>
  )
}

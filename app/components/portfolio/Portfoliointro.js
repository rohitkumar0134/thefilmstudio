import React, { useEffect } from 'react'
import BeforeAfter from '../common/BeforeAfter'
import Aos from 'aos';

function Portfoliointro() {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
  <>
        <div 
          data-aos="fade-right"  data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"
        className='m-7 lg:m-2 lg:p-2 text-white'>
        <div class="grid lg:grid-cols-2 gap-2">
          <div className="mx-auto w-full px-4 rounded-md flex flex-col items-center">
            <BeforeAfter
              before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
              after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}
            />

            <p
              className="text-center text-gray-200 text-lg font-bold mt-2"
            >
              Slide to see before after
            </p>
          </div>
          <div className='grid grid-rows-3 grid-flow-col '>
            <div className='text-center text-xl  font-serif font-bold mt-5 lg:mt-10 '>
            MY SPECIAL TOUCH
            </div>
            <div className='text-center  -mt-5 md:mt-4 lg:mt-0'>
            Each photo I shoot will be edited individually. Yes, that takes a lot of time and effort, but luckily enough, it is a labour of love. It gives the photos that ‘wow effect’.
            </div>
            <div className='flex flex-col'>
              <button className='items-center mt-4 lg:mt-2 mx-auto button w-button border-2 border-white hover:line-through'>
                View More
              </button>
            </div>
          </div>
        </div>

      </div>
  
  </>
  )
}

export default Portfoliointro
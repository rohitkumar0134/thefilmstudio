import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaInstagram, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import Getintouch from '../common/Getintouch';

function Contact() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
         <Getintouch showtouch={false}/>
            <div
                data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"

                className=' items-center space-y-5 -mt-12 text-gray-200'>

                <div className='text-center'>
                    <h1 className='md:text-2xl lg:text-3xl  font-semibold mb-4 '>
                        Message me on Instagram
                    </h1>
                    <button
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/thefilmhouse_official/'
                        }}
                        className="bg-gray-100 text-pink-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button">

                        <FaInstagram
                            className=" h-10 w-10 inline-block "
                        />
                    </button>
                </div>
                <div className='text-center'>
                    <h1 className='md:text-2xl lg:text-3xl  font-semibold mb-4 '>
                        Subscribe at us
                    </h1>
                    <button
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/thefilmhouse_official/'
                        }}
                        className="bg-gray-100 text-red-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button">

                        <FaYoutube
                            className=" h-10 w-10 inline-block "
                        />
                    </button>
                </div>
                <div className='text-center'>
                    <h1 className='md:text-2xl lg:text-3xl  font-semibold mb-4 '>
                        Email me at
                    </h1>
                    <button
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/thefilmhouse_official/'
                        }}
                        className="bg-gray-100 text-blue-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button">

                        <FaMailBulk
                            className=" h-8 w-8 inline-block "
                        />
                    </button>
                </div >
                <div className='text-center'>
                    <h1 className='md:text-2xl lg:text-3xl  font-semibold mb-4 '>
                        Call us at
                    </h1>
                    <button
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/thefilmhouse_official/'
                        }}
                        className="bg-gray-100 text-green-600 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button">

                        <FaPhoneAlt
                            className=" h-8 w-8 inline-block "
                        />
                    </button>

                </div>

            </div>
        </>
    )
}

export default Contact
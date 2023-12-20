import React from 'react'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Footer() {
    return (
        <>
            
            <footer className="relative pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-gray-200">Lets keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-200">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                {/* <button 
                                className="bg-gray-100 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" 
                                type="button">
                                    <Twitter />
                                </button> */}
                                <button className="bg-gray-100 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                                    <Facebook />
                                </button>
                                <button 
                                onClick={() => {
                                    window.location.href = 'https://www.instagram.com/thefilmhouse_official/'
                                }}
                                className="bg-gray-100 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                
                                    <Instagram />                                    </button>
                                <button
                                    className="bg-gray-100 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() => {
                                        window.location.href = 'https://www.youtube.com/@TheFilmHouseOfficial'
                                    }}
                                >
                                    <YouTube />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                  
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-mb font-semibold mb-2 text-gray-200">Company</span>
                                    <ul className="list-unstyled">
                                       
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-gray-200"
                                                href="/termandcondition">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-gray-200"
                                                href="/About-us">
                                               About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-gray-200"
                                                href="/Contact-us">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1 text-gray-200">
                                Copyright © <span id="get-current-year text-gray-200">2023</span>
                                <a href="/" className="text-blueGray-500 hover:text-gray-800 text-gray-200" target="_blank" >TheFilmHouse </a>
                                <a href="mailto:rohit54pandit@gmail.com" className="text-blueGray-500 hover:text-blueGray-800 text-gray-200">-Rohitkumar</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
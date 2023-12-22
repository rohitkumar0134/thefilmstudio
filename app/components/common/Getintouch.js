import Aos from 'aos';
import React, { useEffect } from 'react'

function Getintouch({ showtouch }) {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div
                className="contact-section text-center py-16 overflow-hidden m-2"
            >
                <div className="container-wide w-container">
                    <h2
                        style={{ fontFamily: "Gotham,sans-serif" }}
                        className="contact-heading tracking-[.15em] mb-3 font-semibold text-3xl lg:text-5xl text-white uppercase mt-0 "
                        data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"

                    >
                        Ready to create together?
                    </h2>
                    <div
                        className="contact-text mb-8 text-base lg:text-xl text-center text-gray-400"
                        data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"

                    >
                        Get in touch, and one of our team members will be happy to assist you
                    </div>
                   {showtouch&& <div
                        data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500" data-aos-easing="ease-in-out"

                        className="button-wrap">
                        <a href="/contact-us" className="button w-button border-2 border-white">
                            get in touch
                        </a>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Getintouch
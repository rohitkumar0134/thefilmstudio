import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import axios from 'axios';

import { useInView } from 'react-intersection-observer';
import Aos from 'aos';



function Intro() {
    const [loading, setLoading] = useState(false)
    const [galleryData, setGalleryData] = useState(null);


    useEffect(() => {
        Aos.init();
      }, [])


    useEffect(() => {
        fetchGalleryData();
    }, []);

    const fetchGalleryData = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("/api/user/gallery");
            const res = await axios.get('/api/user/category')
            setGalleryData(data);
            console.log(data);
            setLoading(false)

        } catch (error) {
            console.error("Error fetching gallery data:", error);
        }
    };


    useEffect(() => {
        // Load GLightbox only on the client side
        if (typeof window !== 'undefined') {
            import('glightbox').then((GLightbox) => {
                const lightboxInstance = GLightbox.default({
                    selector: '.glightbox',
                });
            });
        }
    }, [galleryData]);
    return (
        <>
            <div className='pb-6 md:pb-8 mt-12 overflow-hidden'>
                <div className='md:mx-auto px-4 lg:max-w-[90rem] md:max-w-[48rem]'>
                    <div className="text-center relative">
                        <h2
                            style={{ fontFamily: "Gotham,sans-serif" }}
                            className="font-bold -z-1 text-white uppercase relative text-3xl md:text-5xl lg:text-[4.7rem] leading-none"
                        >Everybody has a story</h2>
                        <div
                            style={{ fontFamily: "Gotham,sans-serif" }}
                            className=" font-bold home-intro-heading-outline z-10 stroke-white text-fill-transparent text-white uppercase text-3xl md:text-5xl lg:text-[4.7rem] leading-none absolute left-0 right-0 top-0 bottom-auto">
                            Everybody has a story</div>
                    </div>
                    <div className='md:block lg:flex lg:items-stretch mx-2'>
                        <div className='lg:flex-none md:w-auto lg:w-1/2'>
                            <div className='lg:-mt-10 md:-mt-6 -mt-4 lg:-ml-6 md:mx-4'>

                            <div data-aos="fade-right"  data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" >

                                {galleryData && <Swiper
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    loop={true}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {galleryData?.map((data) => (
                                        <SwiperSlide>

                                            <a key={data.id} href={data.image ? data.image : "https://youtu.be/FtJRfsJgtYI?si=scSYUF6Y0_Zivaia"}
                                                className="glightbox "

                                            >
                                                <img
                                                    src={data.thumbnailimg}
                                                    alt={data.thumbnailimg}
                                                    className="w-full mb-1 cursor-pointer"

                                                    style={{
                                                        height: '40vw',
                                                        maxHeight: '15em',
                                                        maxWidth: '26em',
                                                        objectFit: 'cover',
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                            </a>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>}
                                </div>
                                <div 
                                data-aos="fade-left"  data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out"
                                 >
                                {galleryData && <Swiper
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    loop={true}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {galleryData?.slice()?.reverse()?.map((data) => (
                                        <SwiperSlide>

                                            <a key={data.id} href={data.image ? data.image : "https://youtu.be/FtJRfsJgtYI?si=scSYUF6Y0_Zivaia"}
                                                className="glightbox "

                                            >
                                                <img
                                                    src={data.thumbnailimg}
                                                    alt={data.thumbnailimg}
                                                    className="w-full  
              
                                        transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"

                                                    style={{
                                                        height: '40vw',
                                                        maxHeight: '15em',
                                                        maxWidth: '26em',
                                                        objectFit: 'cover',
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                            </a>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>}
                                </div>
                            </div>

                        </div>
                        <div className="home-intro-texts flex flex-col justify-between relative lg:pt-8 pt-10 text-center md:pl-32 md:pr-20">
                            <div className="home-intro-text-top">
                                <img
                                    src="https://assets-global.website-files.com/6329724b2767486ad124b49b/639555752721b31a1a726680_round-text.png"
                                    loading="lazy"
                                    data-w-id="b8b6ec2e-d963-e37e-a850-5bd0c9a2d1b9"
                                    alt=""
                                    className="home-intro-text-image 
                                hidden first-letter 
                                md:w-36 md:h-36 md:top-auto md:block md:ml-auto md:-bottom-5 md:left-auto md:-right-[10%] 
                                absolute 
                                lg:w-44 lg:h-44 lg:-bottom-1/3 lg:-left-[16%] lg:right-auto"

                                />
                                <p className="paragraph font-medium bg-stone-900">
                                    In the new climate of digital media, being unique and captivating is the only way to stand out.
                                    <br />
                                    <br />
                                    We believe that creative, robust content strategy executed by highly skilled and agile teams is
                                    the future of digital advertising. New Parallel is proud to represent the new generation of creatives
                                    that are proud to be a part of that; we are proud to tell <em>your</em> story.
                                </p>
                            </div>
                            <div className="home-intro-text-bottom">
                                <p className="home-cta_text ">Let us help you<br />Cut through the noise</p>
                                <div className="button-wrap hover:line-through">
                                    <a aria-label="Learn more about us" 
                                    href="/about" 
                                    className="button w-button border-2 border-white hover:line-through">
                                        {"  Learn More  "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
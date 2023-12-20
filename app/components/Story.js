import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function Story() {
  return (
    <>
                <div className='pb-6 md:pb-8 mt-12 overflow-hidden'>
            <div className='md:mx-auto px-4 lg:max-w-[90rem] md:max-w-[48rem]'>
                <div className="text-center relative">
                    <h2 
                    style={{fontFamily:"Gotham,sans-serif"}}
                    className="font-bold -z-1 text-white uppercase relative text-3xl md:text-5xl lg:text-[4.7rem] leading-none"
                    >Everybody has a story</h2>
                    <div 
                     style={{fontFamily:"Gotham,sans-serif"}}
                    className=" font-bold home-intro-heading-outline z-10 stroke-white text-fill-transparent text-white uppercase text-3xl md:text-5xl lg:text-[4.7rem] leading-none absolute left-0 right-0 top-0 bottom-auto">
                        Everybody has a story</div>
                </div>
                <div className='md:block lg:flex lg:items-stretch'>
                    <div className='lg:flex-none md:w-auto lg:w-1/2'>
                        <div className='lg:-mt-10 md:-mt-6 -mt-4 -mx-4 md:mx-4'>
                          

                            <Swiper
                                spaceBetween={10}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                modules={[Autoplay, Pagination, Navigation]}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img
                                    style={{
                                        height: '40vw',
                                        maxHeight: '15em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/6397cdec627c015f19374f5e_Choi%20x%20Parallel%20Reel%20Copy%2001.00_00_51_15.Still021-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/63951babd0d5d5e164f8a61b_TRU%20World%20FCP%20Export%20(Resolve).00_01_09_05.Still030-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/6397cdeb77ac910fb6bbdc63_Long%20Way%20Home%20(Divinci%20Export)%20(Resolve).00_00_26_18.Still003-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/64765fe70c45f11e022a4343_Selects.08_25_55_20.Still001-p-500.jpg'

                                    />
                                </SwiperSlide>
                            


                            </Swiper>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                modules={[Autoplay, Pagination, Navigation]}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '15em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/64765fe70c45f11e022a4343_Selects.08_25_55_20.Still001-p-500.jpg'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                    style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/6397cdec627c015f19374f5e_Choi%20x%20Parallel%20Reel%20Copy%2001.00_00_51_15.Still021-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/63951babd0d5d5e164f8a61b_TRU%20World%20FCP%20Export%20(Resolve).00_01_09_05.Still030-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/6397cdeb77ac910fb6bbdc63_Long%20Way%20Home%20(Divinci%20Export)%20(Resolve).00_00_26_18.Still003-p-500.webp'

                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                      style={{
                                        height: '40vw',
                                        maxHeight: '10em',
                                        maxWidth: '18em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                        src='https://assets-global.website-files.com/6329724b2767486ad124b49b/64765fe70c45f11e022a4343_Selects.08_25_55_20.Still001-p-500.jpg'

                                    />
                                </SwiperSlide>
                            


                            </Swiper>
                        </div>

                    </div>
                    <div className="home-intro-texts flex flex-col justify-between relative lg:pt-8 pt-10 text-center md:pl-32 md:pr-20">
                        <div className="home-intro-text-top">
                            <img
                                src="https://assets-global.website-files.com/6329724b2767486ad124b49b/639555752721b31a1a726680_round-text.png"
                                loading="lazy"
                                data-w-id="b8b6ec2e-d963-e37e-a850-5bd0c9a2d1b9"
                                alt=""
                                className="home-intro-text-image hidden first-lettermd:w-36 md:h-36 md:top-auto md:block md:ml-auto md:-bottom-5 md:left-auto md:-right-[10%] absolute lg:-bottom-1/3 lg:-left-[16%]"

                            />
                            <p className="paragraph font-medium">
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
                            <div className="button-wrap">
                                <a aria-label="Learn more about us" href="/about" className="button w-button border-2 border-white">
                                    Learn More
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

export default Story
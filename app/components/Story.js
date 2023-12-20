import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function Story() {
  return (
    <>
                <div className='home-intro'>
                <div className="home-intro-header">
                    <h2 className="home-intro-heading">Everybody has a story</h2>
                    <div className="home-intro-heading-outline">Everybody has a story</div>
                </div>
                <div className='home-intro-row'>
                    <div className='home-intro-media'>
                        <div className='slider-rows home-slider-rows'>
                          

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
                    <div className="home-intro-text">
                        <div className="home-intro-text-top">
                            <img
                                src="https://assets-global.website-files.com/6329724b2767486ad124b49b/639555752721b31a1a726680_round-text.png"
                                loading="lazy"
                                data-w-id="b8b6ec2e-d963-e37e-a850-5bd0c9a2d1b9"
                                alt=""
                                className="home-intro-text-image"

                            />
                            <p className="paragraph">
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
    </>
  )
}

export default Story
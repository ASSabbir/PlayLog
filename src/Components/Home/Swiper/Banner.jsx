import React from 'react';
// import b1 from '/b-1.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='h-[calc(100vh-64px)]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{'backgroundImage':'url("/b-1.jpg")','objectPosition': 'center','objectFit': 'cover'}}>
                    
                    <div className='  w-[60%] space-y-7 h-full px-[10vw] flex justify-center flex-col '>
                        <h1 className='text-4xl md:text-8xl font-title font-bold leading-none tracking-tighter'>A New Place <br/> For Professional <br/> Gamers</h1>
                        <h1>Unleash your inner hero in a game of survival and conquest. Master powerful abilities and fight your way through epic battles to claim victory.</h1>
                        <div className='space-y-3 md:space-y-0 md:space-x-3'>
                            <button className='border-2 border-primary px-5 py-3 w-40 hover:bg-primary duration-200'>Read More</button>
                            <button className='border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200'>Join Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{'backgroundImage':'url("/b2.jpg")','objectPosition': 'center','objectFit': 'cover'}}>
                    
                    <div className='  w-[60%] space-y-7 h-full px-[10vw] flex justify-center flex-col '>
                        <h1 className='text-4xl md:text-8xl font-title font-bold leading-none tracking-tighter'>A  Game-Changer <br/> for Pro <br/> Gamers  </h1>
                        <h1>Unleash your inner hero in a game of survival and conquest. Master powerful abilities and fight your way through epic battles to claim victory.</h1>
                        <div className='space-y-3 md:space-y-0 md:space-x-3'>
                            <button className='border-2 border-primary px-5 py-3 w-40 hover:bg-primary duration-200'>Read More</button>
                            <button className='border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200'>Join Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{'backgroundImage':'url("/b3.jpg")','objectPosition': 'center','objectFit': 'cover'}}>
                    
                    <div className='  w-[60%] space-y-7 h-full px-[10vw] flex justify-center flex-col '>
                        <h1 className='text-4xl md:text-8xl font-title font-bold leading-none tracking-tighter'>A  Game-Changer <br/> for Pro <br/> Gamers  </h1>
                        <h1>Unleash your inner hero in a game of survival and conquest. Master powerful abilities and fight your way through epic battles to claim victory.</h1>
                        <div className='space-y-3 md:space-y-0 md:space-x-3'>
                            <button className='border-2 border-primary px-5 py-3 w-40 hover:bg-primary duration-200'>Read More</button>
                            <button className='border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200'>Join Us</button>
                        </div>
                    </div>
                </SwiperSlide>
               

            </Swiper>
        </div>
    );
};

export default Banner;
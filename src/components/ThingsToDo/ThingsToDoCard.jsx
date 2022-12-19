import React from 'react'
// import '../ThingsToDo/ThingsSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

const ThingsToDoCard = ({ image, text1 }) => {
  return (
    <Swiper
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='relative items-center justify-center   cursor-pointer  '>
          <div className='max-w-[311px] max-h-[416px] '>
            <img className='h-full w-full object-cover' src={image} alt='' />
          </div>
          <div className='absolute flex flex-col items-center bottom-[27px] md:flex-row  px-[26px] '>
            <h2 className='text-[20px] leading-[24.8px] font-semibold text-[#fff]'>
              {text1}
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ThingsToDoCard

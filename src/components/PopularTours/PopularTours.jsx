import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import TourList from './TourList'
const PopularTours = () => {
  return (
    <div className='container mx-auto md:px-[150px] bg-[#fff] mb-[139px]'>
      <div className='flex justify-between'>
        <h1 className='text-[#252525] text-[40px] leading-[40px] font-normal font-body'>
          Popular Tours
        </h1>
        <div className='flex items-center pt-[10px] pb-[61px]'>
          <span className='mr-[15px] text-[#096F7C] hover:text-[#096F7C]/75 text-[16px] font-medium cursor-pointer'>
            VIEW ALL
          </span>
          <BsArrowRight className='text-[#096F7C] hover:text-[#096F7C]/75 w-[28px] h-[28px] cursor-pointer' />
        </div>
      </div>

      <TourList />
    </div>
  )
}

export default PopularTours

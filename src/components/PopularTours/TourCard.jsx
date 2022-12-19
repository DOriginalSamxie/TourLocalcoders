import React from 'react'
import ExtraInfo from '../../assets/tour/Extra info.svg'

const TourCard = ({ image, text1, text2 }) => {
  return (
    <div className='relative items-center justify-center overflow-hidden cursor-pointer'>
      <div className='max-h-[416px] max-w-full'>
        <img className='h-full w-full object-cover' src={image} alt='' />
      </div>
      <div className='absolute flex flex-col items-center bottom-[63px] md:flex-row gap-[51px] px-[26px] '>
        <h2 className='font-bodytext-[20px] leading-[24.8px] font-semibold text-[#fff] max-w-[182px]'>
          {text1}
        </h2>
        <span className='text-[14px] leading-[17px] font-normal text-[#fff] max-w-[94px]'>
          {text2}
        </span>

        <img className='absolute z-10 -bottom-10 ' src={ExtraInfo} alt='' />
      </div>
    </div>
  )
}

export default TourCard

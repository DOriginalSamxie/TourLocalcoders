import React from 'react'

const TourCard = ({ image, text1, text2 }) => {
  return (
    <div className='relative items-center justify-center overflow-hidden cursor-pointer'>
      <div className='max-h-[416px] max-w-[346px]'>
        <img className='h-full w-full object-cover' src={image} alt='' />
      </div>
      <div className='absolute flex flex-col items-center bottom-[63px] md:flex-row md:space-x-[91px] px-[26px] '>
        <h2 className='text-[20px]leading-[24.8px] font-semibold text-[#fff]'>
          {text1}
        </h2>
        <span className='text-[14px] leading-[17px] font-normal text-[#fff] max-w-[94px]'>
          {text2}
        </span>
      </div>
    </div>
  )
}

export default TourCard

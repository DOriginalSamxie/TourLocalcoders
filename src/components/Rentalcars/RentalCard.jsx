import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const RentalCard = ({ image, text1, paragraph }) => {
  return (
    <div className='relative max-w-[354px] h-[402px]  cursor-pointer px-8 md:px-0'>
      <img src={image} alt='' className='absolute z-10' />
      <div className='bg-gray-200 hover:bg-slate-200 absolute px-[35px]  mt-[77px]   items-center justify-center max-w-full '>
        <h1 className='font-body text-[21px] leading-[28px] text-[#5B6780] font-semibold pt-[82px]'>
          {text1}
        </h1>
        <p className='max-w-[262px] mt-[18px] font-normal text-[14px] leading-[20px] text-[#5B6780]'>
          {paragraph}
        </p>
        <div className='flex items-center py-[40px]'>
          <span className='mr-[15px] text-[#096F7C] hover:text-[#096F7C]/75 text-[16px] font-medium cursor-pointer'>
            VIEW ALL
          </span>
          <BsArrowRight className='text-[#096F7C] hover:text-[#096F7C]/75 w-[28px] h-[28px] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default RentalCard

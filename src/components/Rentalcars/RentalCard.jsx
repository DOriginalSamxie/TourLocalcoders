import React from 'react'

const RentalCard = ({ image, text1, paragraph }) => {
  return (
    <div className='relative w-[354px] h-[402px]  cursor-pointer'>
      <img src={image} alt='' className='absolute z-10' />
      <div className='bg-gray-200 absolute px-[35px] py-[82px] mt-[77px]   items-center justify-center max-w-[348px] '>
        <h1 className='font-body text-[21px] leading-[28px] text-[#5B6780] font-semibold '>
          {text1}
        </h1>
        <p className='max-w-[262px] mt-[18px] font-normal text-[14px] leading-[20px] text-[#5B6780]'>
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default RentalCard

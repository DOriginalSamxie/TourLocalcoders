import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const OurBlogCard = ({ image, text1, paragraph }) => {
  return (
    <div>
      <div>
        <img src={image} alt='' />
      </div>
      <div className='bg-[#F3F6FA] px-[33px] font-body cursor-pointer hover:bg-[#F3F6FA]/50'>
        <h1 className='pt-[31px] text-[#5B6780] leading-[28px] text-[21px]'>
          {text1}
        </h1>

        <p className='text-[12px] leading-[20px] pt-[18px] text-[#5B6780] max-w-[262px] font-normal '>
          {paragraph}
        </p>
        <div className='flex items-center pt-[40px] pb-[35px] '>
          <span className='mr-[15px] text-[#096F7C] hover:text-[#096F7C]/75 text-[16px] font-medium cursor-pointer'>
            READ MORE
          </span>
          <BsArrowRight className='text-[#096F7C] hover:text-[#096F7C]/75 w-[28px] h-[28px] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default OurBlogCard

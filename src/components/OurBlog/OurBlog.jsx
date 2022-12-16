import React from 'react'
import OurBlogList from './OurBlogList'
import { BsArrowRight } from 'react-icons/bs'

const OurBlog = () => {
  return (
    <div className=' container mx-auto '>
      <div className='md:px-[150px]'>
        <div className='border-t-[6px] w-[77px]  lg:mt-[140px] bg-gradient-to-l from-[#E1ECFF]/100 to-[#FFFFFF]/100'></div>
        <div className='flex justify-between items-center'>
          <h1 className='font-body font-semibold text-[45px] text-[#252525] mt-[38px] leading-[55px] mb-[61px]'>
            Our blog
          </h1>
          <div className='flex items-center '>
            <span className='mr-[15px] text-[#096F7C] text-[16px] hover:text-[#096F7C]/75 cursor-pointer font-medium'>
              VIEW ALL
            </span>
            <BsArrowRight className='text-[#096F7C] hover:text-[#096F7C]/75 w-[28px] h-[28px] cursor-pointer' />
          </div>
        </div>
        <OurBlogList />
      </div>
    </div>
  )
}

export default OurBlog

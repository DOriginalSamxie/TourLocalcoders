import React from 'react'

const OurBlog = () => {
  return (
    <div className=' container mx-auto '>
      <div className='md:px-[150px]'>
        <div className='border-t-[6px] w-[77px]  lg:mt-[140px] bg-gradient-to-l from-[#E1ECFF]/100 to-[#FFFFFF]/100'></div>
        <div className='flex justify-between'>
          <h1 className='font-body font-semibold text-[45px] text-[#252525] mt-[38px] leading-[55px] mb-[67px]'>
            Our blog
          </h1>
          <span className='mt-[50px] text-[18px] font-medium leading-[22px]'>
            VIEW ALL
          </span>
        </div>
      </div>
      <div className='md:px-[120px]'></div>
    </div>
  )
}

export default OurBlog

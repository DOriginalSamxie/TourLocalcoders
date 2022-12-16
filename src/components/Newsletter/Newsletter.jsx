import React from 'react'
import Newsimage from '../../assets/Newsletter/Newsletter.svg'

const Newsletter = () => {
  return (
    <div className='container mx-auto relative'>
      <div className='mt-[133px] '>
        <img src={Newsimage} alt='' />
      </div>
      <div className='absolute  flex flex-col items-center justify-center md:top-[227px] md:left-[550px]'>
        <h1 className='font-body text-[45px] leading-[55px] text-[#FFF] shadow-md font-normal'>
          join our newsletter
        </h1>
      </div>
      <div className='flex flex-col md:flex-row absolute md:top-[338px] md:left-[490px]'>
        <input
          className='bg-[#F9FBFF] border-[1px] border-[#E1E3E9] px-[48px] py-[10px] text-[#FFF] '
          type='text'
          placeholder='EMAIL ADDRESS'
        />
        <button className='bg-[#097C84] px-[47px] text-[15px] leading-[18px] text-[#FFF]'>
          SUBSCRIBE
        </button>
      </div>
    </div>
  )
}

export default Newsletter

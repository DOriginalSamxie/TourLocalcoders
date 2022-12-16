import React from 'react'

const ThingsToDoCard = ({ image, text1 }) => {
  return (
    <div className='relative items-center justify-center overflow-hidden  cursor-pointer  '>
      <div className=' '>
        <img className='h-full w-full object-cover' src={image} alt='' />
      </div>
      <div className='absolute flex flex-col items-center bottom-[63px] md:flex-row md:space-x-[91px] px-[26px] '>
        <h2 className='text-[20px]leading-[24.8px] font-semibold text-[#fff]'>
          {text1}
        </h2>
      </div>
    </div>
  )
}

export default ThingsToDoCard

import React from 'react'
import RentalList from './RentalList'

const ReantalCars = () => {
  return (
    <div className=' container mx-auto '>
      <div className='md:px-[150px]'>
        <div className='border-t-[6px] w-[77px]  lg:mt-[307px] bg-gradient-to-l from-[#E1ECFF]/100 to-[#FFFFFF]/100'></div>
        <h1 className='font-body font-semibold text-[45px] text-[#252525] mt-[38px] leading-[55px] mb-[67px]'>
          Rental Cars
        </h1>
      </div>
      <div className='md:px-[120px]'>
        <RentalList />
      </div>
    </div>
  )
}

export default ReantalCars

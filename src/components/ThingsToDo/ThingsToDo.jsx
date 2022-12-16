import React from 'react'
import ThingsToDoList from './ThingsToDoList'
import { BsArrowRight } from 'react-icons/bs'

const ThingsToDo = () => {
  return (
    <div className=' hidden md:block md:bg-gradient-to-b from-[#C6CEDD]/20 to-[#8F95A8]/20  md:max-h-[426px] '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between md:px-[150px] pt-[69px]'>
        <h1 className='font-body font-semibold text-[45px] text-[#252525] leading-[55px]'>
          Things to do
        </h1>
        <div className='flex items-center pt-[10px] pb-[61px]'>
          <span className='mr-[15px] text-[#096F7C] hover:text-[#096F7C]/75 text-[16px] font-medium cursor-pointer'>
            VIEW ALL
          </span>
          <BsArrowRight className='text-[#096F7C] hover:text-[#096F7C]/75 w-[28px] h-[28px] cursor-pointer' />
        </div>
      </div>
      <ThingsToDoList />
    </div>
  )
}

export default ThingsToDo

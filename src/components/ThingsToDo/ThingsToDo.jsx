import React from 'react'
import ThingsToDoList from './ThingsToDoList'

const ThingsToDo = () => {
  return (
    <div className=' hidden md:bg-gradient-to-b from-[#C6CEDD]/20 to-[#8F95A8]/20  md:max-h-[426px] '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between md:px-[150px] pt-[69px]'>
        <h1 className='font-body font-semibold text-[45px] text-[#252525] leading-[55px]'>
          Things to do
        </h1>
        <span className=''>View All</span>
      </div>
      <ThingsToDoList />
    </div>
  )
}

export default ThingsToDo

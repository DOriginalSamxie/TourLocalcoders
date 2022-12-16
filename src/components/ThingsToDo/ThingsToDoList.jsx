import React from 'react'
import { todo } from '../../data'
import ThingsToDoCard from './ThingsToDoCard'

const ThingsToDoList = () => {
  return (
    <div className=' container mx-auto grid lg:grid-cols-4 mt-[177px] gap-[31px] md:px-[150px]'>
      {todo.map((item, index) => {
        const { image, text1 } = item
        return <ThingsToDoCard key={index} text1={text1} image={image} />
      })}
    </div>
  )
}

export default ThingsToDoList

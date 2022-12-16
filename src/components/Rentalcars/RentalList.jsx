import React from 'react'
import { rental } from '../../data'
import RentalCard from './RentalCard'

const RentalList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-[67px] gap-[51px]'>
      {rental.map((item, index) => {
        const { image, text1, paragraph } = item
        return (
          <RentalCard
            key={index}
            text1={text1}
            image={image}
            paragraph={paragraph}
          />
        )
      })}
    </div>
  )
}

export default RentalList

import React from 'react'
import { tour } from '../../data'
import TourCard from './TourCard'
const TourList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[51px] '>
      {tour.map((item, index) => {
        const { image, text1, text2 } = item
        return (
          <TourCard key={index} text1={text1} image={image} text2={text2} />
        )
      })}
    </div>
  )
}

export default TourList

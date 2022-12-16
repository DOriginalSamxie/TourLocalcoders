import React from 'react'
import { blog } from '../../data'
import OurBlogCard from './OurBlogCard'

const OurBlogList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-[67px] gap-[51px]'>
      {blog.map((item, index) => {
        const { image, text1, paragraph } = item
        return (
          <OurBlogCard
            key={index}
            image={image}
            text1={text1}
            paragraph={paragraph}
          />
        )
      })}
    </div>
  )
}

export default OurBlogList

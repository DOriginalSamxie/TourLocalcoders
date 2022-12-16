import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Newsletter from '../../components/Newsletter/Newsletter'
import OurBlog from '../../components/OurBlog/OurBlog'
import PopularTours from '../../components/PopularTours/PopularTours'
import ReantalCars from '../../components/Rentalcars/ReantalCars'
import ThingsToDo from '../../components/ThingsToDo/ThingsToDo'

const HomePage = () => {
  return (
    <section className='bg-white'>
      <HeroSection />
      <PopularTours />
      <ThingsToDo />
      <ReantalCars />
      <OurBlog />
      <Newsletter />
    </section>
  )
}

export default HomePage

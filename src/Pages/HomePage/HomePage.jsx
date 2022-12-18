import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Newsletter from '../../components/Newsletter/Newsletter'
import OurBlog from '../../components/OurBlog/OurBlog'
import PopularTours from '../../components/PopularTours/PopularTours'
import ReantalCars from '../../components/Rentalcars/ReantalCars'
import ThingsToDo from '../../components/ThingsToDo/ThingsToDo'
import Header from '../../components/Header/Header'

const HomePage = () => {
  return (
    <section className='bg-white'>
      <Header />
      <HeroSection />
      <PopularTours />
      <ThingsToDo />
      <ReantalCars />
      <OurBlog />
      <Newsletter />
      <Footer />
    </section>
  )
}

export default HomePage

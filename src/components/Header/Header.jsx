import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import NavMobile from './NavMobile'
const Header = () => {
  const [bg, setBg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 140) {
        setBg(true)
      } else {
        setBg(false)
      }
    })
  })
  return (
    <header
      className={`${
        bg && 'bg-[#f3f6fa] shadow-md py-[16px]  '
      }p-8 lg:px-0 w-full fixed z-20 transition-all duration-300 top-0`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Nav />
        <NavMobile />
      </div>
    </header>
  )
}

export default Header

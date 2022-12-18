import React, { useState } from 'react'
import Menu from '../../assets/Header/Menu.svg'
import Search from '../../assets/Header/search.svg'
import User from '../../assets/Header/user.svg'
import { GrClose } from 'react-icons/gr'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='lg:hidden relative z-30 flex items-center gap-[174px] px-[21px] py-[16px]'>
      <div>
        <h1 className='font-body text-[#000] text-[15px] leading-[18px] font-medium'>
          Ice land
        </h1>
      </div>

      <div className='flex gap-[15px] justify-end'>
        <img src={User} alt='' />
        <img src={Search} alt='' />
        <button onClick={() => setIsOpen(true)}>
          <img src={Menu} alt='' />
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-[#F3F6FA] fixed top-0 w-full h-screen text-[#097882] transition-all flex fex-col justify-center items-center space-y-8 text-lg`}
      >
        <button
          onClick={() => {
            setIsOpen(false)
          }}
          className='absolute top-6 left-6'
        >
          <GrClose />
        </button>
        <li className=' cursor-pointer'>
          <a href='Book'>Book a trip</a>
        </li>
        <li className=' cursor-pointer'>
          <a href='car'>Rent a car</a>
        </li>
        <li className=' cursor-pointer'>
          <a href='vlog'>Visit our blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile

import React from 'react'
import Cart from '../../assets/Header/cart.svg'

const Nav = () => {
  return (
    <nav className='hidden lg:flex lg:flex-col'>
      <div className='flex items-center flex-end lg:pl-[1057px] py-[27px] cursor-pointer gap-[25px] font-body text-[11px] leading-[13px] text-[#535968]'>
        <select name='currency' id='currency-select'>
          <option value='Dollar'>USD</option>
          <option value='British Pound'>GBP</option>
          <option value='Japansese'>JPY</option>
          <option value='hamster'>Naira</option>
        </select>
        <select name='currency' id='currency-select'>
          <option value='Dollar'>ENGLISH</option>
          <option value='British Pound'>PORTUGESE</option>
          <option value='Japansese'>SPANISH</option>
          <option value='hamster'>Naira</option>
        </select>
        <div className='flex items-center gap-[8px]'>
          <span>CART</span>
          <img src={Cart} alt='' />
        </div>
      </div>
      <div className='font-body flex gap-[44px] text-[16px] text-[#535968] leading-[19px] font-normal lg:pl-[954px] cursor-pointer '>
        <span className='hover:text-[#097882]'>Book Your trip</span>
        <span className='hover:text-[#097882]'>Rent a car</span>
        <span className='hover:text-[#097882]'>Wifi rental</span>
      </div>
    </nav>
  )
}

export default Nav

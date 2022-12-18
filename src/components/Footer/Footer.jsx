import React from 'react'
import Facebook from '../../assets/SocialMedia/Facebook.svg'
import Instagram from '../../assets/SocialMedia/Instagram.svg'
import TripAdvisor from '../../assets/SocialMedia/Tripadvisor.svg'
import Youtube from '../../assets/SocialMedia/Youtube.svg'

const Footer = () => {
  return (
    <footer className=' container mx-auto bg-[#F0F4FA] max-w-full'>
      <div className='flex flex-col md:flex-row gap-[200px] pb-[115px]'>
        <div className='grid grid-cols-2 md:grid-cols-3  md:px-[150px] mt-[153px] gap-[10px] items-center justify-center'>
          <div className='font-body text-[#5B6780] space-y-[15px] '>
            <p>
              <a href='about-us'>About us</a>
            </p>
            <p>
              <a href='contact-us'>Contact us</a>
            </p>
            <p>
              <a href='info'>info@iniceland.is</a>
            </p>
          </div>
          <div className='font-body text-[#5B6780] space-y-[15px]'>
            <p>
              <a href='about-us'>Cancellation policy</a>
            </p>
            <p>
              <a href='contact-us'>Sustainability</a>
            </p>
            <p>
              <a href='info'>+354 440 4000</a>
            </p>
          </div>
          <div className='font-body text-[#5B6780] space-y-[15px]'>
            <p>
              <a href='about-us'>Terms and conditions</a>
            </p>
            <p>
              <a href='contact-us'>Privacy policy</a>
            </p>
            <p>
              <a href='info'>Kalkofnsvegur 2, 101 Reykjavík</a>
            </p>
          </div>
        </div>
        <div className='mt-[86px]'>
          <div className='pb-[28px]'>
            <select
              className='pl-[30px] pr-[165px] py-[20px] font-body text-[15px] leading-[18.38px] text-[#99a0ad] pb-[28px]'
              name='currency'
              id='currency-select'
            >
              <option value='Dollar'>ENGLISH</option>
              <option value='British Pound'>PORTUGESE</option>
              <option value='Japansese'>SPANISH</option>
              <option value='hamster'>Naira</option>
            </select>
          </div>
          <div className='pb-[49px]'>
            <select
              className='pl-[30px] pr-[215px] py-[20px] font-body text-[15px] leading-[18.38px] text-[#99a0ad]'
              name='currency'
              id='currency-select'
            >
              <option value='Dollar'>USD</option>
              <option value='British Pound'>JPY</option>
              <option value='Japansese'>GBP</option>
              <option value='hamster'>CNY</option>
            </select>
          </div>
          <div className='flex gap-[13px]'>
            <img src={TripAdvisor} alt='' />
            <img src={Youtube} alt='' />
            <img src={Instagram} alt='' />
            <img src={Facebook} alt='' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

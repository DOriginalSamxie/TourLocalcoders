import React from 'react'
import Facebook from '../../assets/SocialMedia/Facebook.svg'
import Instagram from '../../assets/SocialMedia/Instagram.svg'
import TripAdvisor from '../../assets/SocialMedia/Tripadvisor.svg'
import Youtube from '../../assets/SocialMedia/Youtube.svg'

const Footer = () => {
  return (
    <footer className=' container mx-auto bg-[#F0F4FA]'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='grid grid-cols-2 md:grid-cols-3 px-[20px] md:px-[150px] mt-[153px] gap-[25px] items-center justify-center'>
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
        <div className='mt-[259px]'>
          <div className='flex gap-3'>
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

import React from 'react'
import Hero from '../../assets/Hero/hero.png'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'
import './../../App.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const HeroSection = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='container mx-auto mt-[159px]  bg-gradient-to-b from-[#F3F6FA] to-[#fff]/100  '>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-[12px] overflow-hidden'>
        <div className='pb-[29px]  '>
          <h1 className='md:px-[95px] text-[40px] pb-[41px] leading-[49px] font-body font-medium text-[#252525]'>
            Your adventure <br />
            <span className='text-[#097882] font-bold'>in Iceland</span>
          </h1>
          <div>
            <ul className='flex items-center text-[12px] md:px-[95px] px-[10px]  '>
              <li
                className={`font-body px-[30px] md:px-[68px] py-[20px] bg-[#FFFFFF] text-[#A6A6A6] font-normal transition-all duration-[2000ms] ${
                  toggleState === 1 ? 'bg-[#097882] ' : 'tabs'
                }`}
                onClick={() => toggleTab(1)}
              >
                <button
                  className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(1)}
                >
                  TOURS
                </button>
              </li>
              <li
                className={`font-body  md:px-[60px]  bg-[#FFFFFF] text-[#A6A6A6] font-normal transition-all duration-[2000ms] ${
                  toggleState === 2 ? 'bg-[#097882]' : 'tabs'
                }`}
                onClick={() => toggleTab(2)}
              >
                <button
                  className={` px-[20px] py-[20px] ${
                    toggleState === 2 ? 'tabs active-tabs' : 'tabs'
                  }`}
                >
                  RENT
                </button>
              </li>
              <li
                className={`font-body px-[40px] md:px-[53px] py-[20px] bg-[#FFFFFF] text-[#A6A6A6] font-normal transition-all duration-[2000ms] ${
                  toggleState === 3 ? 'bg-[#097882]' : 'tabs'
                }`}
                onClick={() => toggleTab(3)}
              >
                <button
                  className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                  onClick={() => toggleTab(3)}
                >
                  WIFIRENTAL
                </button>
              </li>
            </ul>
          </div>
          <div className='bg-gradient-to-l from-[#085E71]/100 to-[#099292]/100 h-[475px] max-w-[725px]'>
            <div
              className={
                toggleState === 1 ? 'content  active-content' : 'content'
              }
            >
              <div className='md:px-[95px] px-0  '>
                <div className='bg-[#F9FBFF] md:w-[535px]   '>
                  <ul className='flex items-center md:gap-[400px] gap-[250px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      ARRIVAL
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container md:max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[380px]  gap-[230px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      DEPARTURE
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[370px]  gap-[220px]  '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      PASSENGERS
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[370px]  gap-[220px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      CATEGORIES
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                </div>
                <div className='md:px-[265px] px-0 py-[19px] bg-gradient-to-r from-[#FFAF65]/100 to-[#CC8129]/100 '>
                  <button className='flex items-center justify-center mx-auto text-[#fff]'>
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <div className='md:px-[95px] px-0'>
                <div className='bg-[#F9FBFF] md:w-[535px]'>
                  <ul className='flex items-center md:gap-[400px] gap-[250px]'>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      ARRIVAL
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[380px] gap-[230px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      DEPARTURE
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[400px] gap-[250px]  '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      PICK UP
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[385px] gap-[235px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      DROP OFF
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                </div>
                <div className='md:px-[265px] px-0  py-[19px] bg-gradient-to-r from-[#FFAF65]/100 to-[#CC8129]/100 '>
                  <button className='flex items-center justify-center  mx-auto text-[#fff]'>
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? 'content  active-content' : 'content'
              }
            >
              <div className='md:px-[95px] px-0'>
                <div className='bg-[#F9FBFF] md:w-[535px]'>
                  <ul className='flex items-center md:gap-[400px] gap-[250px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      ARRIVAL
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[380px] gap-[230px]  '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      DEPARTURE
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[375px] gap-[225px]  '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      PICKUP TIME
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                  <ul className='flex items-center md:gap-[350px] gap-[200px] '>
                    <li className='p-[19px] text-[#99A0AD] font-body leading-[14px] text-[13px] '>
                      DEPARTURE TIME
                    </li>
                    <MdOutlineKeyboardArrowDown className='w-[21px] h-[21px] ' />
                  </ul>
                  <div class='border-t-[1px]  border-[#E1E3E9] mx-auto  container max-w-[535px]'></div>
                </div>
                <div className='md:px-[265px] px-0 py-[19px] bg-gradient-to-r from-[#FFAF65]/100 to-[#CC8129]/100 '>
                  <button className='flex items-center justify-center mx-auto text-[#fff]'>
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img src={Hero} alt='' className='h-[561px]' />
          <div className='absolute top-[446px] left-[59px]'>
            <div>
              <h3 className='font-body text-[11px] leading-[13px] font-semibold text-[#fff]'>
                WE RECOMMEND
              </h3>
              <div className='flex items-center gap-[165px] mt-[12px]'>
                <h1 className='text-[30px] leading-[37px] font-body font-medium text-[#fff]'>
                  6 days winter circle
                </h1>
                <div className='flex items-center mt-[6px]'>
                  <span className='mr-[8px] text-[#fff] text-[11px] font-normal cursor-pointer leading-[14px] hover:text-[#096F7C]/75'>
                    VIEW ALL
                  </span>
                  <BsArrowRight className='text-[#fff] hover:text-[#096F7C]/75 w-[18px] h-[18px] cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

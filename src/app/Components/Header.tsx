 "use client"
import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className='w-[1920px] h-[44px] bg-shad'>
     <div className='w-[16px] h-[16px] top-[14px] left-[377px]'>
      <div className='w-[13.33px] h-[10.67px] top-[2.67px] left-[1.33px]  '>
       <BiEnvelope className='text-white ml-[400px] flex justify-center items-center pt-[10px] text-[30px]'/>
        <div className='w-[171px] h-[16px] top-[13px] left-[403px]'>
        <p className='text-para ml-[445px] mt-[-21px]'>mhhasanul@gmail.com</p>
        <div className='w-[16px] h-[16px] top-[14px] left-[622px] '>
        <BiPhoneCall className='text-white ml-[700px] mt-[-20px]' />
         <div className='w-[97px] h-[16px] top-[14px] left-[650px] '>
         <p className='text-white ml-[730px] mt-[-20px]'>(12345)67890</p>
           <div className='w-[54px] h-[16px] top-[14px] left-[1192px]'>
           <p className='text-white ml-[1300px] mt-[-20px]'>English</p>
           <div className='w-[16px] h-[16px] top-[13px] left-[1247px]'>
           <FaChevronDown className='text-white ml-[1355px] mt-[-20px]' />
           <div className='w-[34px] h-[16px] top-[14px] left-[1280px] '>
             <p className='ml-[1400px] mt-[-20px] text-white'>USD</p>
             <FaChevronDown className='text-white ml-[1437px] mt-[-20px]' />
              <div className='w-[43px] h-[16px] top-[14px] left-[1346px]'>
              <p className='ml-[1480px] text-white mt-[-21px]'>Login</p>
              <div className='w-[16px] h-[16px] top-[12px] left-[1389px]'>
              <LuUser className='text-white ml-[1522px] mt-[-20px]' />
              <div className='w-[58px] h-[16px] top-[14px] left-[1421px]'>
                <p className='text-white ml-[1560px] mt-[-20px]'>Wishlist</p>
                <FiHeart  className='text-white ml-[1620px] mt-[-20px] text-[18px]'/>
                <div className='w-[24px] h-[24px] top-[9px] left-[1524px]'>
                <PiShoppingCartSimpleBold  className='text-white ml-[1652px] mt-[-19px] text-[20px]'/>
                </div>

              </div>
              </div>
              

              </div>

           </div>



           </div>

           </div>

         </div>

        </div>



        </div>

      </div>



     </div>





    </div>
  )
}

export default Header

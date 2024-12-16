import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='w-[1920px] h-screen bg-white'>
       <div className='w-[1177px] h-[40px] top-[63px] left-[371px] bg-sec mt-[12px] mb-[12px] ml-[320px] mr-[320px]'>
       <div className='w-[98px] h-[34px] top-[3px] flex justify-center items-center' >
        <p className='text-[34px] font-medium flex pt-[-20px] pl-[50px] '>Hekto</p>
          <div className='w-[43px] h-[20px] top-[10px] left-[186px] gap-[30px]'>
          <ul className='flex justify-center items-center ml-[300px] gap-[30px]'>
             <li className='text-li'><Link href={"/"}>Home</Link></li>
             <div className='w-[12px] h-[12px] top-[14px] left-[231px]'>
             <FaChevronDown className='ml-[-25px] mt-[-2px] text-li'/>


             </div>
             <li><a href="/">Pages</a></li>
             <li><a href={"#Pro"}>Product</a></li>
             <li><a href={"/Blog"}>Blog</a></li>
             <li><a href={"/Shop"}>Shop</a></li>
             <li><a href={"/Contact"}>Contact</a></li>


          </ul>

         <div className='w-[317px] h-[40px] left-[860px] border-[2px] text-border ml-[761px] mt-[-31px]'>
          <div className='w-[51px] h-[40px] left-[1126px] bg-bg flex justify-center  rounded items-center ml-[280px]'>
            <div className='w-[20.01px] h-[20px] top-[1.98px] left-[1.98px] mt-[-48px]  ml-[-30px]  '>
            <IoSearch  className='text-[30px] mt-[18px] ml-[8px] '/>

            </div>



          </div>



         </div>



          </div>


       </div>


       </div>
    
    </div>
  )
}

export default Navbar

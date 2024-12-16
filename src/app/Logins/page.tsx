
import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function Home(){
  return (
    <div>
    <div  className='w-[1920px] h-[44px] bg-shad '>
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
   <Navbar />
   
   <div className='w-[1920px] h-[286px] top-[125px] bg-backs mt-[-560px] '>
   <div className='w-[202px] h-[62px] top-[223px] left-[371px] text-[36px] text-backss  ml-[220px] pt-[50px]'>
    <p className='w-[210px] font-semibold'>My Account</p>
     <div className='w-[43px] h-[19px] top-[266px] left-[275px] text-[16px]'>
    <p>Home </p>
    <div className='w-[43px] h-[19px] top-[266px] left-[275px] text-[16px] ml-[60px] mt-[-25px]'>
      <p>pages</p>
      <div className='w-[85px] h-[19px] top-[266px] left-[485px] text-[16px] text-bg ml-[60px] mt-[-22px]'>
        <p>My Account</p>
         <div className='w-[4px] h-[4px] top-[266px] left-[423px] text-[16px] bg-latest rounded-[40px] ml-[-70px] mt-[-12px]'>

         <div className='w-[4px] h-[4px] top-[266px] left-[423px] text-[16px] bg-bg rounded-[40px]  ml-[63px]'>



         </div>

         </div>



      </div>
    </div>


    </div>

   </div>

<div className='w-[544px] h-[474px] top-[531px] left-[688px] border-[1px] bg-white ml-[460px] mt-[300px] mb-[80px]'>
<div className='w-[433px] h-[374px] top-[581px] left-[744px] border-[1px] border-white ml-[55px] mt-[55px]'>
<div className='w-[88px] h-[32px] top-[581px] left-[917px] text-[32px] ml-[160px] font-semibold mt-[-10px]'>
  <p>Login</p>
<div className='w-[299px] h-[20px] top-[620px] left-[811px] '>
<p className='text-[17px] w-[320px] ml-[-90px] text-col'>Please login using account detail bellow.</p>
<div className='w-[432px] h-[52px] top-[677px] left-[745px] rounded-[2px] border-[1px] ml-[-160px] mt-[30px] '>
<div className='w-[98px] h-[19px] top-[692px] left-[754px] ml-[20px]  text-[18px] text-black'>
<input type="text" placeholder='Enter Address' className='w-[400px] h-[30px] mt-[10px] text-black' />

<div className='w-[432px] h-[52px] top-[677px] left-[745px] rounded-[2px] border-[1px] ml-[-20px] mt-[30px] '>
<div className='w-[98px] h-[19px] top-[692px] left-[754px] ml-[20px]  text-[17px]'>
<input type="text" placeholder='Password' className='w-[400px] h-[30px] mt-[10px] ' />
<div className='w-[170px] h-[20px] top-[817px] left-[744px] mt-[15px] '>
<p className='w-[200px] text-[16px] text-col'>Forgot your password?</p>
<div className='w-[432px] h-[47px] top-[860px] left-[744px] rounded-[3px] hover:bg-gray-400 bg-bg ml-[-20px] mt-[25px]'>
<div className='w-[51px] h-[32px] top-[873px] left-[935px] text-[17px]'>
  <p className='w-[80px] text-white ml-[190px] pt-[10px]'>Sign In</p>
  </div>
  </div>
<div className='w-[290px] h-[20px] top-[935px] left-[820px]'>
<p className='w-[300px] text-col pt-[20px] ml-[55px]'>Don’t have an Account?Create account</p>
<div className='w-[904px] h-[93px] top-[1114px] left-[508px] mt-[130px] ml-[-280px] border-latest '>
<Image src={"/Images/pic41.png"} width={904} height={93} alt='pics' />

<div className='w-[1920px] h-[532px] top-[7500px] left-[-1px] bg-bgs ml-[-400px] mt-[30px] '>
 <div className='w-[1920px] h-[479px]  '>
  <div className='w-[110px] h-[38px] top-[95px] left-[310px] text-[38px] ml-[200px] pt-[50px]'>
   <p>Hekto</p>
    <div className='w-[377px] h-[44px] top-[164px] left-[309px] rounded-[3px] opacity-[45%] bg-white mt-[20px]'>
      <p className='text-[15px] ml-[15px] pt-[12px] '>
        <input type="text" placeholder=' Enter Email Address' /> 
        
        
        
       </p>
    </div>
    <div className='w-[135px] h-[39px] top-[167px] left-[549px] rounded-[3px] bg-bg ml-[240px] mt-[-42px]'>
      <p className='text-[14px] ml-[40px] pt-[10px] text-white'>Sign Up</p>
      <p className='text-[15px]  ml-[-240px] mt-[120px]'>Contact Info</p>
      <p className='text-[15px]  ml-[-240px] mt-[30px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      <p className='w-[111px] h-[22px] top-[94px] left-[780px] text-[22px] text-black ml-[300px] mt-[-230px]'>Catagories</p>
       <div className='gap-[120px]'>
      <ul className='text-[15px] ml-[300px] mt-[20px] text-tex  '>
         <li className='w-[200px] pt-[20px]'>Laptops & Computers</li>
         <li className='w-[200px] pt-[20px]'>Cameras & Photography</li>
         <li className='w-[200px] pt-[20px]'>Smart Phones & Tablets</li>
         <li className='w-[200px] pt-[20px]'>Video Games & Consoles</li>
         <li className='w-[200px] pt-[20px]'>Waterproof Headphones</li>
         

      </ul>
      </div>
      <p className='w-[180px] h-[22px] top-[94px] left-[780px] text-[22px] text-black ml-[590px] mt-[-260px]'>Customer Care</p>
      <div className='gap-[120px] ml-[570px] pt-[-40px]'>
      <ul className='text-[15px] ml-[300px] mt-[20px] text-tex  '>
         <li className='w-[200px] pt-[20px]'>Blog</li>
         <li className='w-[200px] pt-[20px]'>Browse the Shop</li>
         <li className='w-[200px] pt-[20px]'>Category</li>
         <li className='w-[200px] pt-[20px]'>Visual Composer Elements</li>
         <li className='w-[200px] pt-[20px]'>WooCommerce Pages</li>
         

      </ul>
      </div>




      <p className='w-[180px] h-[22px] top-[94px] left-[780px] text-[22px] text-black ml-[870px] mt-[-260px]'>Pages</p>
      <div className='gap-[120px] ml-[290px] pt-[-38px]'>
      <ul className='text-[15px] ml-[300px] mt-[20px] text-tex  '>
         <li className='w-[200px] pt-[20px]'>My Account</li>
         <li className='w-[200px] pt-[20px]'>Discount</li>
         <li className='w-[200px] pt-[20px]'>Returns</li>
         <li className='w-[200px] pt-[20px]'>Orders History</li>
         <li className='w-[200px] pt-[20px]'>Order Tracking</li>
         

      </ul>
      </div>





<div className='w-[1920px] h-[53px] top-[479px] bg-bgs mt-[120px] ml-[-445px]'>
        <div className='w-[220px] h-[19px] top-[496px] left-[377px] text-[16px] ml-[350px] pt-[12px]'>
         <p className='w-[250px]'>©Webecy - All Rights Reserved</p>
         <div className='w-[80px] h-[19.42px] top-[496px] left-[1257px]'>
          <div className='w-[19.42px] h-[19.42px] top-[496px] left-[1257px] text-latest'>
          <FaFacebook  className='w-[2100px] text-[20px] mt-[-20px]'/>
          <AiFillInstagram  className='w-[2160px] text-[23px] mt-[-22px]'/>
          <AiFillTwitterCircle className='w-[2220px] text-[23px] mt-[-23px]'/>

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


import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Image from 'next/image';
import { BsVectorPen } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
const page = () => {
  return (
    <div>
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
              <p className='ml-[1480px] text-white mt-[-21px]'><Link href="/Logins">Login</Link></p>
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
    <p className='w-[210px] font-semibold'>Blog page</p>
     <div className='w-[43px] h-[19px] top-[266px] left-[275px] text-[16px]'>
    <p>Home </p>
    <div className='w-[43px] h-[19px] top-[266px] left-[275px] text-[16px] ml-[60px] mt-[-25px]'>
      <p>pages</p>
      <div className='w-[85px] h-[19px] top-[266px] left-[485px] text-[16px] text-bg ml-[60px] mt-[-22px]'>
        <p>My Account</p>
         <div className='w-[4px] h-[4px] top-[266px] left-[423px] text-[16px] bg-latest rounded-[40px] ml-[-70px] mt-[-12px]'>
</div>
</div>
</div>
</div>
</div>
</div>

<div className='w-[870px] h-[453px] top-[536px] left-[371px] radius-[6px] ml-[270px] mt-[80px]  '>
<Image  src={"/Images/pic51.jpeg"} width={870} height={453} alt='pics' />
<div className='w-[360px] h-[23px] top-[1016px] left-[371px] mt-[30px] '>
<BsVectorPen className='text-bg' />
<div className='w-[160px] h-[23px] left-[24px] rounded-[2px] bg-bgss ml-[25px]  '>
<div className='w-[74px] h-[14px] text-[14px] text-latest flex justify-center items-center ml-[40px] mt-[-20px]'>
<p className='pt-[7px]'>Surf Auxion</p>
</div>
<SlCalender className='text-orang ml-[200px] mt-[-10px]' />
<div className='w-[127px] h-[23px] left-[233px] '>
<div className='w-[81px] h-[17px] top-[2px] bg-bgsss text-[14px] ml-[255px] mt-[-14px]'>
<p className='flex justify-center items-center'>Aug 09 2020</p>
<div className='w-[852px] h-[143px] top-[1067px] '>
<div className='w-[729px] h-[35px] text-[30px] font-semibold text-latest ml-[-280px] mt-[20px] '>
<p>Mauris at orci non vulputate diam tincidunt nec.</p>
<p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<div className='w-[95px] h-[22px] top-[138px] text-[18px] mt-[20px] border-b-[4px]'>
<p>Read More </p>


</div>

</div>




</div>



</div>



</div>

</div>



</div>



</div>


<div className='w-[870px] h-[453px] top-[536px] left-[371px] radius-[6px] ml-[270px] mt-[420px]  '>
<Image  src={"/Images/pic52.jpeg"} width={870} height={453} alt='pics' />
<div className='w-[360px] h-[23px] top-[1016px] left-[371px] mt-[30px] '>
<BsVectorPen className='text-bg' />
<div className='w-[160px] h-[23px] left-[24px] rounded-[2px] bg-bgss ml-[25px]  '>
<div className='w-[74px] h-[14px] text-[14px] text-latest flex justify-center items-center ml-[40px] mt-[-20px]'>
<p className='pt-[7px]'>Surf Auxion</p>
</div>
<SlCalender className='text-orang ml-[200px] mt-[-10px]' />
<div className='w-[127px] h-[23px] left-[233px] '>
<div className='w-[81px] h-[17px] top-[2px] bg-bgsss text-[14px] ml-[255px] mt-[-14px]'>
<p className='flex justify-center items-center'>Aug 09 2020</p>
<div className='w-[852px] h-[143px] top-[1067px] '>
<div className='w-[729px] h-[35px] text-[30px] font-semibold text-latest ml-[-280px] mt-[20px] '>
<p>Mauris at orci non vulputate diam tincidunt nec.</p>
<p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<div className='w-[95px] h-[22px] top-[138px] text-[18px] mt-[20px] border-b-[4px]'>
<p>Read More </p>


</div>

</div>




</div>



</div>



</div>

</div>



</div>



</div>



<div className='w-[870px] h-[453px] top-[536px] left-[371px] radius-[6px] ml-[270px] mt-[420px]  '>
<Image  src={"/Images/pic53.jpeg"} width={870} height={453} alt='pics' />
<div className='w-[360px] h-[23px] top-[1016px] left-[371px] mt-[30px] '>
<BsVectorPen className='text-bg' />
<div className='w-[160px] h-[23px] left-[24px] rounded-[2px] bg-bgss ml-[25px]  '>
<div className='w-[74px] h-[14px] text-[14px] text-latest flex justify-center items-center ml-[40px] mt-[-20px]'>
<p className='pt-[7px]'>Surf Auxion</p>
</div>
<SlCalender className='text-orang ml-[200px] mt-[-10px]' />
<div className='w-[127px] h-[23px] left-[233px] '>
<div className='w-[81px] h-[17px] top-[2px] bg-bgsss text-[14px] ml-[255px] mt-[-14px]'>
<p className='flex justify-center items-center'>Aug 09 2020</p>
<div className='w-[852px] h-[143px] top-[1067px] '>
<div className='w-[729px] h-[35px] text-[30px] font-semibold text-latest ml-[-280px] mt-[20px] '>
<p>Mauris at orci non vulputate diam tincidunt nec.</p>
<p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<div className='w-[95px] h-[22px] top-[138px] text-[18px] mt-[20px] border-b-[4px]'>
<p>Read More </p>


</div>

</div>




</div>



</div>



</div>

</div>



</div>



</div>


<div className='w-[270px] h-[77px] top-[536px] border-[1px] ml-[1200px] mt-[-2200px]'>
<div className='w-[69px] h-[22px] top-[536px] left-[1299px] text-[22px] '>
<p>Search</p>
<div className='w-[270px] h-[40px] top-[573px] rounded-[2px] border-[1px] border-text  '>
<p className='text-texte'>Search For Posts</p>
<div className='w-[254px] h-[161px] top-[665px] '>
<div className='w-[110px] h-[22px] top-[665px] text-[22px] mt-[30px]  text-latest font-semibold '>
<p>Categories</p>
<div className='w-[122px] h-[30px] bg-bg pl-[20px] pt-[4px] mt-[10px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Hobbies (14)</p>

<div className='w-[122px] h-[30px] pl-[20px] pt-[4px] ml-[120px] mt-[-25px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Women (21)</p>

<div className='w-[122px] h-[30px] pl-[20px] pt-[4px] ml-[-170px] mt-[25px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Women (21)</p>

<div className='w-[122px] h-[30px] pl-[20px] pt-[4px] ml-[133px] mt-[-25px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Women (21)</p>

<div className='w-[122px] h-[30px] pl-[20px] pt-[4px] ml-[-172px] mt-[25px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Women (21)</p>

<div className='w-[122px] h-[30px] pl-[20px] pt-[4px] ml-[133px] mt-[-25px] '>
<div className='w-[80px] h-[14px] text-[14px]'>
<p>Women (21)</p>

<div className='w-[150px] h-[22px] top-[665px] text-[22px] mt-[30px] text-latest ml-[-150px] font-semibold '>
<p>Recent Post</p>

<div className='w-[250px] h-[270px] top-[922px] mt-[20px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[70px] h-[51px] '>
<Image src={"/Images/pic54.jpeg"} width={70} height={51} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-100px] '>
<p>It is a long established fact</p>
<p>Aug 09 2020</p>

<div className='w-[250px] h-[270px] top-[922px] mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[70px] h-[51px] '>
<Image src={"/Images/pic55.jpeg"} width={70} height={51} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-100px] '>
<p>It is a long established fact</p>
<p>Aug 09 2020</p>

<div className='w-[250px] h-[270px] top-[922px]   mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[70px] h-[51px] '>
<Image src={"/Images/pic56.jpeg"} width={70} height={51} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-90px] '>
<p>It is a long established fact</p>
<p>Aug 09 2020</p>


<div className='w-[250px] h-[270px] top-[922px]   mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[70px] h-[51px] '>
<Image src={"/Images/pic57.jpeg"} width={70} height={51} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-90px] '>
<p>It is a long established fact</p>
<p>Aug 09 2020</p>


<div className='w-[130px] h-[22px] top-[665px] text-[22px] mt-[60px] ml-[-100px]  text-latest font-semibold '>
<p>Sale Product</p>
</div>

<div className='w-[250px] h-[270px] top-[922px]   mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[80px] h-[60px] '>
<Image src={"/Images/pic58.jpeg"} width={80} height={57} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-50px] '>
<p>Elit ornare in enim mauris.</p>
<p>Aug 09 2020</p>


<div className='w-[250px] h-[270px] top-[922px]   mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[80px] h-[60px] '>
<Image src={"/Images/pic59.jpeg"} width={80} height={57} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[95px] mt-[-50px] '>
<p>Viverra pulvinar et enim.</p>
<p>Aug 09 2020</p>


<div className='w-[250px] h-[270px] top-[922px]   mt-[60px] ml-[-95px]'>
<div className='w-[250px] h-[51px]'>
<div className='w-[70px] h-[60px] '>
<Image src={"/Images/pic60.jpeg"} width={64} height={57} alt='pics' />
<div className='w-[190px] h-[32px] text-[15px] ml-[90px] mt-[-70px] '>
<p>Viverra pulvinar et enim.</p>
<p>Aug 09 2020</p>


<div className='w-[170px] h-[22px] top-[665px] text-[22px] mt-[60px] ml-[-100px]  text-latest font-semibold '>
<p>Offer product</p>
</div>

<div className='w-[126px] h-[126px] top-[1585px] mt-[20px] ml-[-100px] '>
<div className='w-[140px] h-[90px]'>
<Image src={"/Images/pic61.jpeg"} width={140} height={80} alt='pics' />
<div className='w-[94px] h-[37px]'>
<p className='w-[110px] h-[17px] text-[15px] font-semibold ml-[13px]'>Duis lectus est.</p>
<p className='w-[100px] h-[17px] text-[14px] ml-[13px]'>$12.00 - $15.00</p>



<div className='w-[126px] h-[126px] top-[1585px]  ml-[170px] mt-[-150px] '>
<div className='w-[200px] h-[200px]'>
<Image src={"/Images/pic62.jpeg"} width={300} height={400} alt='pics' />
<div className='w-[94px] h-[37px]'>
<p className='w-[110px] h-[17px] text-[15px] font-semibold ml-[30px]'>Duis lectus est.</p>
<p className='w-[100px] h-[17px] text-[14px] ml-[30px]'>$12.00 - $15.00</p>



<div className='w-[126px] h-[126px] top-[1585px] mt-[20px] ml-[-165px] '>
<div className='w-[140px] h-[90px]'>
<Image src={"/Images/pic63.jpeg"} width={140} height={80} alt='pics' />
<div className='w-[94px] h-[37px]'>
<p className='w-[110px] h-[17px] text-[15px] font-semibold ml-[13px]'>Duis lectus est.</p>
<p className='w-[100px] h-[17px] text-[14px] ml-[13px]'>$12.00 - $15.00</p>



<div className='w-[126px] h-[126px] top-[1585px] mt-[-140px] ml-[180px] '>
<div className='w-[140px] h-[90px]'>
<Image src={"/Images/pic64.jpeg"} width={140} height={80} alt='pics' />
<div className='w-[94px] h-[37px]'>
<p className='w-[110px] h-[17px] text-[15px] font-semibold ml-[13px]'>Duis lectus est.</p>
<p className='w-[100px] h-[17px] text-[14px] ml-[13px]'>$12.00 - $15.00</p>

</div>
</div>
</div>



<div className='w-[170px] h-[22px] top-[665px] text-[22px] mt-[60px] ml-[30px]  text-latest font-semibold '>
<p className='text-[22px]'>Follow</p>
</div>


<div className='w-[126px] h-[41px] mt-[10px] '>
<div className='w-[103px] h-[25px] '>
<div className='w-[25px] h-[25px] rounded-full bg-latest'>
<FaFacebook className='text-white w-[25px] h-[25px] '/>
<div className='w-[25px] h-[25px] rounded-full bg-latest ml-[40px] mt-[-23px]'>
<FaInstagramSquare  className='text-white w-[25px] h-[25px] ' />
<div className='w-[25px] h-[25px] rounded-full bg-latest ml-[40px] mt-[-23px]'>
<CiTwitter className='text-white w-[25px] h-[25px]  ' />

<div className='w-[170px] h-[22px] top-[665px] text-[22px] mt-[60px] ml-[-40px]  text-latest font-semibold '>
<p className='text-[22px]'>Tags</p>
</div>


<div className='w-[56px] h-[26px] text-[16px] border-b-[2px] mt-[30px] ml-[-40px]'>
<p>General</p>

<div className='w-[56px] h-[26px] text-[16px] border-b-[2px] mt-[30px]  '>
<p>Bibsaas</p>


<div className='w-[56px] h-[26px] text-[16px] border-b-[2px] mt-[-78px] ml-[90px] text-bg  '>
<p>Atsanil</p>


<div className='w-[56px] h-[26px] text-[16px] border-b-[2px] text-latest mt-[-25px] ml-[90px]  '>
<p>Insas.</p>

<div className='w-[56px] h-[26px] text-[16px] text-latest border-b-[2px] mt-[30px] ml-[-100px]  '>
<p>Nulla.</p>

<div className='w-[904px] h-[93px] top-[1114px] left-[508px] mt-[630px] ml-[-1100px] border-latest '>
<Image src={"/Images/pic41.png"} width={904} height={93} alt='pics' />
</div>

<div className='w-[1920px] h-[532px] top-[7500px] left-[-1px] bg-bgs ml-[-1330px] mt-[140px] '>
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

export default page

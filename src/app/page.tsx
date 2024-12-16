 "use client"
 import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Promotion from "@/app/Components/Promotion";
import LatestProducts from './Components/LatestProducts';

import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Promotion />
        <LatestProducts />
        
    </div>
  )
}

export default page


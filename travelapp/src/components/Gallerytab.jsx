import React from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

import Badrinath from '../assets/Badrinath.jpg'
import Kedarnath from '../assets/Kedarnath.jpg'
import GuptaKashi from '../assets/GuptaKashi.jpg'
import GuptaKashiTemple from '../assets/GuptaKashiTemple.jpg'
import Tungnath from '../assets/Tungnath.jpeg'
import firstimage from '../assets/firstimage.jpg'
import COVER_IMAGE from '../assets/COVER_IMAGE.jpg'

const Gallerytab = () => {

  
const scrollLeft = () => {
  document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
  document.getElementById("content").scrollLeft += 400;
}

  return (

    <div className=" min-h-fit pb-10 relative ">
      <button class="btn font-[Righteous]"><span>GALLERY</span></button>
      <div className="py-5 md:py-0"></div>
      
      <div id="content" className=" min-h-fit flex flex-col md:flex-row items-center justify-start overflow-y-scroll scroll-smooth scrollbar-hide no-scrollbar h-[490px] md:h-[300px] lg:h-[300px] ">

          <img className='w-[350px] h-[250px] object-cover p-1.5 rounded-3xl hover:scale-105 duration-500' src={firstimage}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={COVER_IMAGE}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={Kedarnath}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={Badrinath}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={Tungnath}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={GuptaKashi}/>
          <img className='w-[350px] h-[250px] object-cover  p-1.5 rounded-3xl hover:scale-105 duration-500' src={GuptaKashiTemple}/>

      </div>

      <div className="bg-gray-600 rounded-3xl h-[48px] hidden md:block pb-4  items-center top-[-44%] ">

        <div onClick={scrollLeft} className=" text-white absolute left-4 text-2xl rounded-full p-2 bg-black/60 cursor-pointer hover:scale-105 duration-500">
          <BsChevronCompactLeft size={30}/>
        </div>

        <div onClick={scrollRight} className="text-white text-2xl rounded-full p-2 absolute right-4 bg-black/60 cursor-pointer hover:scale-105 duration-500">
          <BsChevronCompactRight size={30}/>
        </div>

      </div>

    </div>
  )
}

export default Gallerytab
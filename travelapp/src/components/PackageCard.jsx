import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Badrinath from '../assets/Badrinath.jpg'
import Kedarnath from '../assets/Kedarnath.jpg'
import GuptaKashi from '../assets/GuptaKashi.jpg'
import GuptaKashiTemple from '../assets/GuptaKashiTemple.jpg'
import Tungnath from '../assets/Tungnath.jpeg'
import firstimage from '../assets/firstimage.jpg'
import COVER_IMAGE from '../assets/COVER_IMAGE.jpg'
import BookBtn from './BookBtn'


import {GoLocation} from 'react-icons/go'

const PackageCard = () => {

  
  return (
    <div class="flex min-h-fit items-center justify-center pb-10 px-4">
      <div class="py-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">

        

        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>



        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        

        <div className='group h-[200px] w-[350px] md:h-72 md:w-72 lg:h-96 lg:w-96 [perspective:1000px]  '>
          <div className='hover:scale-x-150  relative h-full w-full rounded-2xl shadow-xl transition-all duration-700 bg-black/80 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
            <div className='absolute inset-0 '>
              <img src={Kedarnath} className='h-full w-full rounded-2xl object-cover shadow-xl shadow-black/40'/>
              <div className='text-white absolute bottom-3 flex  pl-20 md:pl-10 lg:pl-24 justify-center '>
                <GoLocation size={20} className='mt-1 mx-1'/>
                <div>
                  <h4 className='font-normal font-[Righteous]  '>Kedarnath 4D/3N</h4>
                  <Link to="/Package1" className='text-sm md:hidden lg:hidden'>Click to know more</Link>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <div className='flex min-h-max flex-col md:gap-1 lg:gap-6  justify-center items-center pt-2 '>
                <p className='font-bold text-base md:text-lg text-blue-400'>Kedarnath Package 4D/3N</p>
                <p className='font-bold text-base md:text-lg'>via</p>
                <p className='font-bold text-base md:text-lg'>Guptakashi Badrinath Rudraprayag </p>
                <p className='font-bold text-base md:text-lg text-red-500'> Rs. 19999</p>
                <Link to="/Package1">
                <BookBtn/>
                </Link>
              </div>
            </div>
          </div>
        </div>

        

        

  </div>
  
</div>
  )
}

export default PackageCard
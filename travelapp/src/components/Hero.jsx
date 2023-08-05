import React, { useState } from 'react'
import Badrinath from '../assets/Badrinath.jpg'
import Kedarnath from '../assets/Kedarnath.jpg'
import GuptaKashi from '../assets/GuptaKashi.jpg'
import GuptaKashiTemple from '../assets/GuptaKashiTemple.jpg'
import Tungnath from '../assets/Tungnath.jpeg'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import firstimage from '../assets/firstimage.jpg'
import {RxDotFilled} from 'react-icons/rx'
import BookBtn from './BookBtn'

const Hero = () => {

  const [ind,setInd] = useState(0)
  const prevSlide = () =>{
    const isFirstSlide = ind === 0;
    const newInd = isFirstSlide? slides.length-1 : ind-1;
    setInd(newInd);
  };

  const nextSlide = () =>{
    const isLastSlide = ind === slides.length-1;
    const newInd = isLastSlide? 0 : ind+1;
    setInd(newInd);
  };

  const goToSlide = (slideIndex) => setInd(slideIndex);


  const slides = [firstimage,Kedarnath,Badrinath,GuptaKashi,GuptaKashiTemple,Tungnath];

  return (
    <div className='bg-slate-50 rounded-2xl w-full h-[600px]  pt-24 pb-24 px-4 relative group '>
       
      <div  style={{backgroundImage: `url(${slides[ind]})`} } 
      className='h-[450px] rounded-2xl bg-center bg-cover  '>
        <div className='text-center font-[Righteous] absolute  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' >
        <h2 >Take new EXPERIENCES </h2>
        <BookBtn/>
        </div>
      </div>
      <div className='hidden group-hover:block text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 cursor-pointer'>
        <BsChevronCompactLeft className='transition duration-300 ease-in-out hover:scale-125' onClick={prevSlide} size={40}/>
      </div>

      <div className='hidden group-hover:block text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/60 cursor-pointer'>
        <BsChevronCompactRight className='transition duration-300 ease-in-out hover:scale-125' onClick={nextSlide} size={40}/>
      </div>
      
      <div className='flex top-4 justify-center py-2.5 '>
        {slides.map((slides,slideIndex)=>(
          <div  key ={slideIndex} onClick={()=>goToSlide(slideIndex)} 
          className=' text-2xl cursor-pointer transition duration-300 ease-in-out hover:scale-150'>
            <RxDotFilled/>
          </div>
        ))}
      </div>
    
    </div>
    

  )
}

export default Hero
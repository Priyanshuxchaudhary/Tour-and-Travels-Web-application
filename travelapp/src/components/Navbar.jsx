import React, {useState, useEffect} from 'react'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {

    
    const[nav,setNav] = useState(false);
    const[logo,setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    <div className='fixed flex w-full  justify-between items-center h-20 px-4  z-10 text-white bg-zinc-800/90'>
        <div>
            <h1 onClick= {handleNav} className={logo ? 'text-slate-300 font-[Righteous] ' : 'block font-[Righteous]' }>Company</h1>
        </div>

        <ul className='cursor-pointer  hidden md:flex'>
            <li className='hover:text-amber-800 hover:scale-110 duration-500'>
                <Link  to="/">Home</Link>
            </li>
            <li className='hover:text-amber-800 hover:scale-110 duration-500'>
            Packages</li>
            <li className='hover:text-amber-800 hover:scale-110 duration-500'>Gallery</li>
            <li className='hover:text-amber-800 hover:scale-110 duration-500'>About</li>
        </ul>

        <div className='hidden md:flex  '>
            <Link to="/Login" href="#_" class="my-2 py-2 text-l font-bold text-center text-white transition-colors duration-300 bg-black rounded-full hover:bg-green-900 ease px-5 md:w-auto">
            LOG IN
         </Link>
         
        <Link to="/Register" className="my-2 py-2 text-l text-center font-bold text-white transition-colors duration-300 bg-black rounded-full hover:bg-blue-800 ease px-5 md:w-auto">
        REGISTER
         </Link>

         </div>

        <div onClick={handleNav} className='  hover:scale-125 duration-500 md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black cursor-pointer' size={20}/> : <TbGridDots className='cursor-pointer'/>}
        </div>

        <div onClick={handleNav} className={ nav ? ' absolute  text-black left-0 top-0 w-full bg-gray-100': 'absolute left-[-150%]' }>
            <ul className=' flex flex-col transition-transform duration-500 items-center'>
                <h1 className='px-4 py-6'>Company</h1>
                <li className=' border-b-2 border-slate-300 cursor-pointer'><Link to="/">Home</Link></li>
                <li className=' border-b-2 border-slate-300 cursor-pointer'>Packages</li>
                <li className=' border-b-2 border-slate-300 cursor-pointer'>Gallery</li>
                <li className=' border-b-2 border-slate-300 cursor-pointer'>About </li>
                <li className=''>
                    <Link to="/Login" class="cursor-pointer w-full my-2 py-2 text-l font-bold text-center text-white transition-colors duration-300 bg-black rounded-full hover:bg-green-900 ease px-5 md:w-auto">LOGIN
                    </Link>
                </li>
                <li className=''>
                <Link to="/Register"  class=" cursor-pointer my-2 py-2 text-l text-center font-bold text-white transition-colors duration-300 bg-black rounded-full hover:bg-blue-800 ease px-5 md:w-auto">
                    REGISTER
                     </Link>
                </li>
                <div className='flex justify-between py-7  '>
                    <BsFacebook className='icon mx-12'/>
                    <BsInstagram className='icon mx-12'/>
                    <BsYoutube className='icon mx-12'/>
                </div>
            </ul>
        </div>
        
    </div>
    
  )
}

export default Navbar
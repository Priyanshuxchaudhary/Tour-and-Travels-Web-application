import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    function refreshPage() {
        window.location.reload(false);
    }
  return (
    <div className='w-full bg-black py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className=' text-white sm:flex text-center justify-between items-center'>
          <h1>COMPANY.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4 px-4'>
            <FaFacebook className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className=' cursor-pointer lg:flex text-white'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='cursor-pointer text-right text-white lg:flex'>
            <li onClick={refreshPage}>Home</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='flex mt-8 flex-row justify-between'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className='pl-32'>
        <ul className='flex gap-8 items-center justify-around'>
          <li>
            <a href="#about-us" className='hover:text-lg transition duration-300'>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className='hover:text-lg transition duration-300'>
              Services
            </a>
          </li>
          <li>
            <a href="#use-cases" className='hover:text-lg transition duration-300'>
              Use Cases
            </a>
          </li>
          <li>
            <a href="#pricing" className='hover:text-lg transition duration-300'>
              Pricing
            </a>
          </li>
          <li>
            <a href="#help" className='hover:text-lg transition duration-300'>
              Help
            </a>
          </li>
          <li className='border-2 rounded-md border-solid border-black px-3 py-2'>
            <a href="#quote-request" className='hover:text-lg transition duration-300'>
              Request a Quote
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

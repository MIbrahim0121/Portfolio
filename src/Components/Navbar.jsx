import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div className='navbar ' >
    <div className='flex items-center md:justify-evenly md:gap-40 justify-between ' >
        <span className='block md:hidden' ><RxHamburgerMenu />
        </span>
      <span className='cursor-pointer font-bold text-2xl Name underline md:underline '> IBRAHIM</span>
      <ul className='ul-nav items-center justify-center list-none gap-9 hidden md:flex  '>
        <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full' >Home</li>
        <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full' >AboutMe</li>
        <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full' >Services</li>
        <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full' >Potfolio</li>
        <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full' >Contact</li>
        

      </ul>
      <button className='connect rounded-4xl cursor-pointer pr-3  ' >ConnectWithMe</button>
    </div>
    </div>
  )
}

export default Navbar

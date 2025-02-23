import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div id='nav' className='navbar !pl-3 !pr-4'>
      <div className='flex items-center md:justify-evenly md:gap-40 justify-between'>
        <span className='cursor-pointer font-bold text-2xl Name underline md:underline'>IBRAHIM</span>
        <span className='inline md:hidden text-3xl' onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </span>
        <ul className='ul-nav items-center justify-center list-none gap-9 hidden md:flex'>
          <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
            <AnchorLink href='#home'>Home</AnchorLink>
          </li>
          <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
            <AnchorLink offset={30} href='#about'>AboutMe</AnchorLink>
          </li>
          <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
            <AnchorLink offset={10} href='#services'>Services</AnchorLink>
          </li>
          <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
            <AnchorLink offset={50} href='#work'>Latest</AnchorLink>
          </li>
          <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
            <AnchorLink offset={10} href='#contact'>Contact</AnchorLink>
          </li>
        </ul>
        <button className='connect rounded-4xl cursor-pointer pr-3 hidden md:block'>
          <AnchorLink offset={10} href='#contact'>ConnectWithMe</AnchorLink>
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className='fixed inset-0 bg-black/80 bg-opacity-75 z-50 flex justify-end'>
          <div className='w-64 bg-gray-900 h-full p-4'>
            <div className='flex justify-end !pt-7 relative  '>
              <AiOutlineClose className='text-3xl cursor-pointer  left-4 absolute ' onClick={toggleSidebar} />
            </div>
            <ul className='ul-nav items-center justify-center list-none gap-9 flex flex-col !mt-10'>
              <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
                <AnchorLink href='#home' onClick={toggleSidebar}>Home</AnchorLink>
              </li>
              <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
                <AnchorLink offset={30} href='#about' onClick={toggleSidebar}>AboutMe</AnchorLink>
              </li>
              <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
                <AnchorLink offset={10} href='#services' onClick={toggleSidebar}>Services</AnchorLink>
              </li>
              <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
                <AnchorLink offset={50} href='#work' onClick={toggleSidebar}>Latest</AnchorLink>
              </li>
              <li className='cursor-pointer relative text-xl font-semibold after:block after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full'>
                <AnchorLink offset={10} href='#contact' onClick={toggleSidebar}>Contact</AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
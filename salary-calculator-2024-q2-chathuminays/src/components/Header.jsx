import React from 'react';
import { FaRegBell } from "react-icons/fa";
import profile from '../assets/profile.svg';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { useSidebar } from '../context/SidebarContext';

const Header = () => {

  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
        <div className='h-20 flex items-center justify-between xl:ml-56 2xl:ml-64 px-5'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 lg:hidden'>
                    <IoIosMenu className='w-6 h-6' onClick={toggleSidebar} />
                </div>
                <h4 className='font-semibold text-xl'>Dashboard</h4>
            </div>
            <div className='flex items-center gap-8'>
                <FaRegBell />
                <div className='flex items-center gap-2'>
                    <img src={profile} alt="" />
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;
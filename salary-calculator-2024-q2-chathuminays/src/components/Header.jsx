import React from 'react';
import { FaRegBell } from "react-icons/fa";
import profile from '../assets/profile.svg';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const Header = ({ isOpen, toggleSidebar }) => {
  return (
    <>
        <div className='h-20 flex items-center justify-between lg:ml-64 lg:px-5'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 lg:hidden'>
                    {isOpen ? (
                    <IoIosClose size={24} onClick={toggleSidebar} />
                    ) : (
                    <IoIosMenu size={24} onClick={toggleSidebar} />
                    )}
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
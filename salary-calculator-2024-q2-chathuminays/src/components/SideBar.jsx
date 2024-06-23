import React from 'react';
import dashbord from '../assets/icon.svg';
import { useSidebar } from '../context/SidebarContext';
import { IoIosClose } from "react-icons/io";

const SideBar = () => {

  const { isOpen, toggleSidebar } = useSidebar();

  const handleClose = () => {
    toggleSidebar();
  };

  return (
    <>
        <div className={`xs:w-64 md:w-64 xl:w-56 2xl:w-64 z-30 bg-purple fixed h-full xs:mt-0 lg:mt-0 transition-transform duration-300 ${isOpen ? 'transform-none' : '-translate-x-full'} lg:translate-x-0`}>
            <div className={`w-12 h-12 rounded-tr-xl rounded-br-xl bg-purple absolute top-4 -right-12 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
              <IoIosClose className='w-8 h-8 text-white cursor-pointer' onClick={handleClose}/>
            </div>
            
            <div className='h-20 bg-purple_light flex items-center justify-center'>
                <h3 className='text-white font-semibold xs:text-xl lg:text-2xl'>Acmy Solutions</h3>
            </div>
            <div className='flex items-center xs:w-60 xl:w-52 2xl:w-60 h-10 py-3 px-3 mx-auto mt-10 gap-5 bg-purple_light rounded-full'>
                <img src={dashbord} alt="" />
                <p className='text-white'>Dashborad</p>
            </div>

        </div>
    </>
  )
}

export default SideBar;
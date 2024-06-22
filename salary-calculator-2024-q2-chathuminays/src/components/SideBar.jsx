import React from 'react';
import dashbord from '../assets/icon.svg';

const SideBar = ({ isOpen }) => {
  return (
    <>
        <div className={`w-64 bg-purple fixed h-full xs:mt-20 lg:mt-0 transition-transform duration-300 ${isOpen ? 'transform-none' : '-translate-x-full'} lg:translate-x-0`}>
            <div className='h-20 bg-purple_light flex items-center justify-center'>
                <h3 className='text-white font-semibold text-2xl'>Acmy Solutions</h3>
            </div>
            <div className='flex items-center w-60 h-10 py-3 px-3 mx-auto mt-10 gap-5 bg-purple_light rounded-full'>
                <img src={dashbord} alt="" />
                <p className='text-white'>Dashborad</p>
            </div>

        </div>
    </>
  )
}

export default SideBar;
import React from 'react';

const ContentBox = ({ title, children }) => {
  return (
    <>
        <div className='bg-white border border-stroke rounded-md w-full h-auto'>
            <div className='h-12 w-full border-b border-stroke flex items-center pl-3'>
                <p className='font-semi-bold text-lg'>{title}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    </>
  )
}

export default ContentBox;
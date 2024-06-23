import React from 'react';

const ActivityItem = ({img, text, date}) => {

  return (

    <>
        <div className='flex items-start justify-start md:gap-3 py-3 border-b border-stroke'>
            <img src={img} alt="" />
            <div className='ml-3'>
              <p className='text-base'>{text}</p>
              <p className='text-sm text-text_grey'>{date}</p>
            </div>
        </div>
    </>

  )

}

export default ActivityItem;
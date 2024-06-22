import React from 'react';
import in_progress from '../assets/in-progress.svg';

const InProgressTodo = ({ todo, priority, createdBy, date }) => {

 let priorityClass = '';

 switch (priority) {
     case 'HIGH':
         priorityClass = 'bg-bg_red text-text_red';
         break;
     case 'MEDIUM':
         priorityClass = 'bg-bg_yellow text-text_yellow';
         break;
     case 'LOW':
         priorityClass = 'bg-bg_blue text-text_blue';
         break;
  }

  return (
    <>
        <div className='min-h-12 bg-white border-b border-stroke px-3 py-2 flex items-center md:text-sm xl:text-xs 2xl:text-sm'>
            <img src={in_progress} alt="" className='w-4 md:mr-10 xl:mr-5 2xl:mr-10'/>
            <p className='md:w-80 xl:w-48 2xl:w-80 xl:mr-3 md:mr-8 2xl:mr-8'>{todo} <br />
            <a href="" className='text-xs text-text_pink font-medium'>
                Mark as done
            </a>
            </p>
            <p className='md:w-32 md:mr-5 xl:w-20 xl:mr-3 2xl:w-32 2xl:mr-5'>{createdBy}</p>
            <p className={`md:w-16 md:mr-8 xl:w-14 xl:mr-2 2xl:w-16 2xl:mr-8 text-center ${priorityClass} md:py-2 xl:py-1 2xl:py-2 xl:text-[10px] md:text-xs 2xl:text-xs rounded-full`}>{priority}</p>
            <p className='text-text_grey'>{date}</p>
        </div>
        
    </>
  )
}

export default InProgressTodo;
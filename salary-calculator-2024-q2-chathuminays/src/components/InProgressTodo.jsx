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
        <div className='min-h-12 bg-white border-b border-stroke px-3 py-2 md:flex items-center gap-5 md:text-sm xl:text-xs 2xl:text-sm'>
            <div className='flex items center justify-between gap-10 w-[350px]'>
                <img src={in_progress} alt="" className='w-4'/>
                <div>
                    <p className=''>{todo}</p>
                    <button className='text-xs text-text_pink font-medium'>
                        Mark as done
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-start w-32 translate-x-5'>
                <p>{createdBy}</p>
            </div>
            <div className='flex items center justify-between w-40 gap-2'>
                <p className={`w-20 text-center ${priorityClass} md:py-2 xl:py-1 2xl:py-2 flex items-center justify-center xl:text-[10px] md:text-xs 2xl:text-xs rounded-full`}>{priority}</p>
                <p className='text-text_grey pt-1'>{date}</p>
            </div>
        </div>
    </>
  )
}

export default InProgressTodo;
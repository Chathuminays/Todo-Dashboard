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
        <div className='min-h-12 bg-white border-b border-stroke px-3 py-2 flex items-center text-sm'>
            <img src={in_progress} alt="" className='w-4 mr-10'/>
            <p className='w-80 mr-8'>{todo} <br />
            <a href="" className='text-xs text-text_pink font-medium'>
                Mark as done
            </a>
            </p>
            <p className='w-32 mr-5'>{createdBy}</p>
            <p className={`w-16 mr-8 text-center ${priorityClass} py-2 text-xs rounded-full`}>{priority}</p>
            <p className='text-text_grey'>{date}</p>
        </div>
        
    </>
  )
}

export default InProgressTodo;
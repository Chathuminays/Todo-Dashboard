import React from 'react';
import completed from '../assets/completed.svg';

const CompleteTodo = ({ todo, priority, createdBy, date }) => {

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
            <img src={completed} alt="" className='w-4 mr-10'/>
            <p className='w-80 mr-8'>{todo}</p>
            <p className='w-32 mr-5'>{createdBy}</p>
            <p className={`w-16 mr-8 text-center ${priorityClass} px-2 py-2 text-xs rounded-full`}>{priority}</p>
            <p className='text-text_grey'>{date}</p>
        </div>
    </>
  )
}

export default CompleteTodo;
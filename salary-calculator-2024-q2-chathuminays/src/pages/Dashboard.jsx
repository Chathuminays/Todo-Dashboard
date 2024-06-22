import React, { useEffect, useState } from 'react';
import design from '../assets/design.svg';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import ContentBox from '../components/ContentBox';
import CompleteTodo from '../components/CompleteTodo';
import InProgressTodo from '../components/InProgressTodo';

const Dashboard = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching the to-do list:', error);
      }
    };

    fetchTodos();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <>
        <div className='bg-background lg:ml-64 h-full px-5 py-5'>
            <div className='bg-white border border-stroke px-3 py-3 relative'>
                <h3 className='font-semibold text-xl'>Welcome back, John Doe</h3>
                <p className='text-text_grey text-sm'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
                <a href="" className='text-text_pink underline text-sm'>Look here for more information</a>
                <img src={design} alt="" className='absolute top-0 bottom-0 right-20 w-24 h-24 object-fit'/>
                <IoMdClose className='absolute top-3 right-3 text-text_gray'/>
            </div>

            <div className='grid grid-cols-5'>

                <div className='xs:col-span-5 lg:col-span-3 py-5 lg:pr-3'>
                    <ContentBox title="Tasks">
                        <div className='h-12 bg-bg_grey border-b border-stroke flex items-center px-3 text-xs font-medium'>
                            <p className='w-5 mr-10'>Status</p>
                            <p className='w-80 mr-8'>Task Name</p>
                            <p className='w-32 mr-5'>Created by</p>
                            <p className='w-14 mr-8'>Priority</p>
                            <p>Date</p>
                        </div>
                        <div>
                            {todos.map(todo => (
                            todo.completed ? (
                                <CompleteTodo
                                key={todo.id}
                                priority={todo.priority}
                                todo={todo.todo}
                                createdBy={todo.createdBy}
                                date={formatDate(todo.createdAt)}
                                />
                            ) : (
                                <InProgressTodo
                                key={todo.id}
                                priority={todo.priority}
                                todo={todo.todo}
                                createdBy={todo.createdBy}
                                date={formatDate(todo.createdAt)}
                                />
                            )
                            ))}
                        </div>
                    </ContentBox>
                </div>

            </div>
        </div>
    </>
  )
}

export default Dashboard;
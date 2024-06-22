import React, { useEffect, useState } from 'react';
import design from '../assets/design.svg';
import { IoMdClose, IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import axios from 'axios';
import ContentBox from '../components/ContentBox';
import CompleteTodo from '../components/CompleteTodo';
import InProgressTodo from '../components/InProgressTodo';
import BarChart from '../components/BarChart';

const Dashboard = () => {

  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 8;

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

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const getPageNumbers = () => {
    const maxPageNumbersToShow = 3;
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = startPage + maxPageNumbersToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const calculatePriorityCounts = () => {
    let lowCount = 0;
    let mediumCount = 0;
    let highCount = 0;

    todos.forEach(todo => {
      switch (todo.priority) {
        case 'LOW':
          lowCount++;
          break;
        case 'MEDIUM':
          mediumCount++;
          break;
        case 'HIGH':
          highCount++;
          break;
        default:
          break;
      }
    });

    return { lowCount, mediumCount, highCount };
  };

  const { lowCount, mediumCount, highCount } = calculatePriorityCounts();

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
                        <div className='h-[590px] overflow-y-auto'>
                            {currentTodos.map(todo => (
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
                        <div className='flex justify-center mt-2 pb-2'>
                            <button
                            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                            className={`bg-white border border-[#EFEFEF] rounded-md px-2 py-1 mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentPage === 1}
                            >
                            <IoIosArrowBack />
                            </button>
                            {getPageNumbers().map(pageNumber => (
                                <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                className={`bg-white border border-[#EFEFEF] rounded-md px-3 py-1 mx-1 ${currentPage === pageNumber ? 'bg-white text-text_pink border-text_pink' : ''}`}
                                >
                                {pageNumber}
                                </button>
                            ))}
                            <button
                                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : currentPage)}
                                className={`bg-white border border-[#EFEFEF] rounded-md px-2 py-1 ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={currentPage === totalPages}
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </ContentBox>
                </div>

                <div className='xs:col-span-5 lg:col-span-2 py-5 lg:pl-2'>
                    <ContentBox title="Tasks Priorities">
                        <BarChart lowCount={lowCount} mediumCount={mediumCount} highCount={highCount}/>
                    </ContentBox>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard;
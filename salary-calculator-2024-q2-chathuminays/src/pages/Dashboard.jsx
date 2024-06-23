import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import design from '../assets/design.svg';
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import { IoMdClose, IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import axios from 'axios';
import ContentBox from '../components/ContentBox';
import CompleteTodo from '../components/CompleteTodo';
import InProgressTodo from '../components/InProgressTodo';
import BarChart from '../components/BarChart';
import ActivityItem from '../components/ActivityItem';

const Dashboard = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 8;

  const handleClose = () => {
    setIsVisible(false);
  };

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
        <SideBar />

        <Header />

        <div className='bg-background lg:ml-64 xl:ml-56 2xl:ml-64 h-full xs:px-5 xl:px-2 2xl:px-5 py-5'>
          {isVisible && (
              <div className='bg-white border border-stroke px-5 py-4 relative rounded-lg mb-5'>
                  <h3 className='font-semibold xs:text-2xl xl:text-xl 2xl:text-2xl mb-1'>Welcome back, John Doe</h3>
                  <p className='text-text_grey xl:text-sm 2xl:text-base mb-1'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
                  <a href="" className='text-text_pink underline xl:text-sm'>Look here for more information</a>
                  <img src={design} alt="" className='absolute top-0 bottom-0 xs:right-8 md:right-20 object-cover'/>
                  <IoMdClose className='absolute top-4 right-5 text-text_gray hover:cursor-pointer' onClick={handleClose}/>
              </div>
            )}

            <div className='grid grid-cols-5'>

                <div className='xs:col-span-5 xl:col-span-3 pb-2 xl:pr-0 2xl:pr-3'>
                    <ContentBox title="Tasks">
                        <div className='h-12 bg-bg_grey border-b border-stroke xs:hidden md:grid grid-cols-9 items-center px-3 text-xs font-medium'>
                            <div className='col-span-1'>
                              <p>Status</p>
                            </div>
                            <div className='col-span-4'>
                              <p>Task Name</p>
                            </div>
                            <div className='col-span-2'>
                              <p className='ml-3'>Created by</p>
                            </div>
                            <div className='col-span-1 ml-2'>
                              <p>Priority</p>
                            </div>
                            <div className='col-span-1 ml-5'>
                              <p>Date</p>
                            </div>
                        </div>
                        <div className='h-[450px] overflow-y-auto'>
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

                <div className='xs:col-span-5 xl:col-span-2 pb-2 xl:pl-2 xs:mt-5 xl:mt-0'>

                    <ContentBox title="Tasks Priorities">
                        <BarChart lowCount={lowCount} mediumCount={mediumCount} highCount={highCount}/>
                    </ContentBox>

                    <div className='xs:my-5 xl:my-3 2xl:my-2'></div>

                    <ContentBox title="Activity Feed">
                      <div className='xs:h-[300px] xl:h-[280px] 2xl:h-[245px] px-3 overflow-y-auto'>
                      <div className='flex items-start justify-start md:gap-3 py-3 border-b border-stroke'>
                        <img src={pro1} alt="" />
                        <div className='ml-3'>
                          <p className='text-base'><span className='font-semibold'>Kushantha Charuka</span> created <span className='text-text_pink'>Contract #00124 need John Beige’s signature</span></p>
                          <p className='text-sm text-text_grey'>Sep 16, 2022 at 11:30 AM</p>
                        </div>
                      </div>
                      <ActivityItem
                        img={pro2} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'}
                        date={'Sep 16, 2022 at 11:45 AM'}
                      />
                      <ActivityItem
                        img={pro2} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'}
                        date={'Sep 16, 2022 at 11:45 AM'}
                      />
                      <ActivityItem
                        img={pro2} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'}
                        date={'Sep 16, 2022 at 11:45 AM'}
                      />
                      <ActivityItem
                      img={pro2} 
                      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'}
                      date={'Sep 16, 2022 at 11:45 AM'}
                      />
                      </div>  
                    </ContentBox>
                </div>

            </div>
        </div>
    </>
  )
}

export default Dashboard;
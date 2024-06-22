import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen}/>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Dashboard/>
    </>
  )
}

export default App;

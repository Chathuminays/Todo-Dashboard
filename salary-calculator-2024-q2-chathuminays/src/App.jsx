import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { SidebarProvider } from './context/SidebarContext';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <SidebarProvider>
        <Dashboard />
      </SidebarProvider>
    </>
  )
}

export default App;

import React from 'react';
import './App.css';
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
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Playbar from './components/Playbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 ml-64 mt-16"> 
          <Dashboard />
        </main>
        <Playbar />
      </div>
    </div>
  );
};

export default App;

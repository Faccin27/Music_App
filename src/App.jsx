import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
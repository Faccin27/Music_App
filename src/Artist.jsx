import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Artist from './components/Artist';


const App = () => {
  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <div className="flex flex-col flex-1" >
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-black bg-opacity-60 p-4 ml-20 mt-16 "> 
          <Artist />
        </main>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import PlaylistPage from './components/PlaylistPage';
import Playbar from './components/Playbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-black bg-opacity-60 p-4 ml-64 mt-16"> 
          <PlaylistPage />
        </main>
        <Playbar />
      </div>
    </div>
  );
};

export default App;
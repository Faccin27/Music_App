import React, { useState } from 'react';
import { Search } from 'lucide-react'; 
import profilepic from '../assets/images/profile.png';

const UsuarioLogado = [
  { id: 1, name: 'Faccin', email: 'faccin@example.com', avatar: profilepic }
]

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsDropdownHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isDropdownHovered) {
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownHovered(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownHovered(false);
    if (!isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-10 flex justify-between items-center p-4 h-16">
      <div className="text-xl font-bold">Music App</div>
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Busque por músicas, playlists, artistas e mais." 
          className="bg-black bg-opacity-60 backdrop-blur-md shadow-lg rounded-full p-2 pl-10 pr-4 outline-none w-96" // Aumenta a largura e adiciona padding para o ícone
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" /> {/* Ícone da lupa */}
      </div>
      <div 
        className="relative flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={UsuarioLogado[0].avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={handleDropdownClick}
        />
        {isDropdownOpen && (
          <div 
            className="absolute right-12 top-full mt-2 bg-black bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg min-w-max"
            onClick={handleDropdownClick}
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={() => setIsDropdownHovered(false)}
          >
            <div className="flex items-center p-4 border-b border-gray-700">
              <img
                src={UsuarioLogado[0].avatar}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <div className="text-white font-bold">{UsuarioLogado[0].name}</div>
                <div className="text-gray-300 text-sm">{UsuarioLogado[0].email}</div>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="p-3 hover:bg-gray-700 text-left text-white border-b border-gray-700">Profile</button>
              <button className="p-3 hover:bg-gray-700 text-left text-white ">Settings</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

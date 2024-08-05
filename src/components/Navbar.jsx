import React, { useState } from 'react';
import { Search, Home, Compass, Library, ChevronDown } from 'lucide-react';
import profileImage from '../assets/images/default.png';
import funkImage from '../assets/images/funk.jpg';
import eletronicaImage from '../assets/images/eletronica.png';
import sertanejoImage from '../assets/images/sertanejo.jpg';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const playlists = [
    { name: 'Funk', image: funkImage },
    { name: 'Sertanejo', image: sertanejoImage },
    { name: 'Eletronica', image: eletronicaImage },
  ];

  return (
    <nav className="w-64 bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">Future Rythm</h1>
      <ul className="space-y-6">
        <li className="flex items-center text-xl"><Home className="mr-3" /> Início</li>
        <li className="flex items-center text-xl"><Compass className="mr-3" /> Navegar</li>
        <li className="flex items-center text-xl"><Library className="mr-3" /> Biblioteca</li>
      </ul>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Playlists</h2>
        <ul className="space-y-4">
          {playlists.map((playlist, index) => (
            <li key={index} className="flex items-center text-lg">
              <img src={playlist.image} alt={playlist.name} className="w-12 h-12 mr-4 rounded" />
              {playlist.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center space-x-2 bg-gray-800 rounded-full p-1 w-full"
        >
          <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="flex-1 text-left">Cleber</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        {isProfileOpen && (
          <div className="mt-2 bg-gray-800 rounded-md shadow-lg py-1">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Perfil</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Configurações</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Sair</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
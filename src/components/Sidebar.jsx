import React from 'react';
import { Home, Music, MapPin } from 'lucide-react'; 
import funkImage from '../assets/images/funk.jpg'; 
import trapImage from '../assets/images/default.png';
import sertanejoImage from '../assets/images/sertanejo.jpg'; 
import eletronicaImage from '../assets/images/eletronica.png'; 

const Sidebar = () => {
  return (
    <div className="glassmorphism  backdrop-blur-md shadow-lg w-64 p-4 fixed h-full mt-16"> 
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <Home className="text-white mr-2" /> 
          Navegar
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <Music className="text-white mr-2" />
          Biblioteca
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <MapPin className="text-white mr-2" /> 
          Por perto
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 mt-8">Playlists</h2>
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <img src={funkImage} alt="Funk" className="w-10 h-10 rounded-md mr-2" />
          Funk
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <img src={trapImage} alt="Trap" className="w-10 h-10 rounded-md mr-2" />
          Trap
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <img src={sertanejoImage} alt="Sertanejo" className="w-10 h-10 rounded-md mr-2" />
          Sertanejo
        </li>
        <li className="flex items-center p-2 rounded-md hover:bg-white hover:bg-opacity-50">
          <img src={eletronicaImage} alt="Eletrônica" className="w-10 h-10 rounded-md mr-2" />
          Eletrônica
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

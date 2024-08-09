import React, { useState } from 'react';
import { Home, Music, MapPin, ListMusic } from 'lucide-react'; 
import funkImage from '../assets/images/funk.jpg'; 
import trapImage from '../assets/images/default.png';
import sertanejoImage from '../assets/images/sertanejo.jpg'; 
import eletronicaImage from '../assets/images/eletronica.png'; 

const SidebarItem = ({ icon: Icon, label, imageSrc, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="relative flex flex-col items-center h-16">
      <div 
        className={`p-2 rounded-md hover:bg-white hover:bg-opacity-50 w-full flex justify-center transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Centra a imagem
      >
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={label} 
            className="rounded-lg object-cover" 
            style={{ width: '100%', height: '100%', maxWidth: '3rem', maxHeight: '3rem' }} // Ajuste de tamanho
          />
        ) : (
          <Icon className="text-white w-8 h-8" />
        )}
      </div>
      {isHovered && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs animate-fade-in">
          {label}
        </span>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const togglePlaylists = () => {
    setShowPlaylists(!showPlaylists);
  };

  const playlistImages = [funkImage, trapImage, sertanejoImage, eletronicaImage];

  return (
    <div className="glassmorphism backdrop-blur-md shadow-lg w-20 p-4 fixed h-full mt-16"> 
      <ul className="space-y-4">
        <SidebarItem icon={Home} label="Home" />
        <SidebarItem icon={Music} label="Music" />
        <SidebarItem icon={MapPin} label="Map" />
        <SidebarItem icon={ListMusic} label="Playlists" onClick={togglePlaylists} />
      </ul>
      {showPlaylists && (
        <ul className="space-y-4 mt-4 animate-fade-in">
          {playlistImages.map((image, index) => (
            <SidebarItem key={index} imageSrc={image} label={`Playlist ${index + 1}`} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

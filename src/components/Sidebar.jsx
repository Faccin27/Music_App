import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ListMusic, MapPin, Music } from 'lucide-react'
import trapImage from '../assets/images/default.png'
import eletronicaImage from '../assets/images/eletronica.png'
import funkImage from '../assets/images/funk.jpg'
import sertanejoImage from '../assets/images/sertanejo.jpg'

const NavbarItem = ({ icon: Icon, label, to, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li className="relative flex items-center h-16">
      <Link
        to={to}
        onClick={onClick}
        className={`p-2 hover:bg-gray-500 hover:bg-opacity-50 w-full flex justify-center transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '0.375rem',
          backgroundColor: isHovered ? 'rgba(107, 114, 128, 01)' : 'transparent',
        }}
      >
        <Icon className="text-white w-8 h-8" />
      </Link>

      {isHovered && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs animate-fade-in"> 
          {label}
        </span>
      )}
    </li>
  )
}

const PlaylistItem = ({ imageSrc, label, to }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li className="relative flex items-center justify-center h-16 w-16 mt-1 ">
      <Link
        to={to}
        className={`p-2 hover:bg-gray-500 hover:bg-opacity-50 w-full h-full flex items-center justify-center rounded-lg transition-transform duration-300  ${
          isHovered ? 'scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? 'rgba(107, 114, 128, 0.1)' : 'transparent',
          borderRadius: 8
        }}
      >
        <img
          src={imageSrc}
          alt={label}
          className="w-10 h-10 object-cover "
          style={{borderRadius: 8}}
        />
      </Link>

      {isHovered && (
        <div
          className="absolute left-full ml-2 px-3 py-1 bg-gray-700 text-white text-xs rounded-md whitespace-nowrap z-10"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {label}
        </div>
      )}
    </li>
  )
}

export default function Component() {
  const [showPlaylists, setShowPlaylists] = useState(false)

  const togglePlaylists = () => {
    setShowPlaylists(!showPlaylists)
  }

  const playlists = [
    { name: "Funk Hits", image: funkImage },
    { name: "Trap Nation", image: trapImage },
    { name: "Sertanejo Top", image: sertanejoImage },
    { name: "Eletrônica Mix", image: eletronicaImage },
    { name: "Rock Classics", image: trapImage },
    { name: "Pop Vibes", image: funkImage },
    { name: "Chill Out", image: sertanejoImage },
    { name: "Workout Motivation", image: eletronicaImage },
    
  ]

  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg w-20 fixed h-full mt-16 mb-24 flex flex-col">
      <nav className="p-2">
        <ul className="space-y-4">
          <NavbarItem icon={Home} label="Home" to="/" />
          <NavbarItem icon={Music} label="Music" to="/playlist" />
          <NavbarItem icon={MapPin} label="Map" to="/artist" />
          <NavbarItem
            icon={ListMusic}
            label="Playlists"
            onClick={togglePlaylists}
          />
        </ul>
      </nav>
      {showPlaylists && (
        <div className="flex-grow overflow-y-auto mt-4 pb-24 scrollbar-hide">
          <ul className="space-y-4 px-2">
            {playlists.map((playlist, index) => (
              <PlaylistItem
                key={index}
                imageSrc={playlist.image}
                label={playlist.name}
                to={`/playlist/${index + 1}`}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
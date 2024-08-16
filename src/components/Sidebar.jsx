import { Home, ListMusic, MapPin, Music } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import trapImage from '../assets/images/default.png'
import eletronicaImage from '../assets/images/eletronica.png'
import funkImage from '../assets/images/funk.jpg'
import sertanejoImage from '../assets/images/sertanejo.jpg'

const SidebarItem = ({ icon: Icon, label, imageSrc, to, onClick }) => {
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
          backgroundColor: isHovered ? 'rgba(107, 114, 128, 0.5)' : 'transparent',
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className="rounded-lg object-cover"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '3rem',
              maxHeight: '3rem',
              borderRadius: 6,
            }}
          />
        ) : (
          <Icon className="text-white w-8 h-8" />
        )}
      </Link>

      {isHovered &&
        (imageSrc ? (
          <span
            className="absolute left-full ml-2 px-2 py-1 bg-gray-700 text-white text-xs animate-fade-in-up"
            style={{ borderRadius: 12 }}
          >
            {label}
          </span>
        ) : (
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs animate-fade-in">
            {label}
          </span>
        ))}
    </li>
  )
}

const Sidebar = () => {
  const [showPlaylists, setShowPlaylists] = useState(false)

  const togglePlaylists = () => {
    setShowPlaylists(!showPlaylists)
  }

  const playlistImages = [funkImage, trapImage, sertanejoImage, eletronicaImage]

  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg w-20 p-4 fixed h-full mt-16 mb-24">
      <ul className="space-y-4">
        <SidebarItem icon={Home} label="Home" to="/" />
        <SidebarItem icon={Music} label="Music" to="/artist" />
        <SidebarItem icon={MapPin} label="Map" to="/playlist" />
        <SidebarItem
          icon={ListMusic}
          label="Playlists"
          onClick={togglePlaylists}
        />
      </ul>
      {showPlaylists && (
        <ul className="space-y-4 mt-4 animate-fade-in">
          {playlistImages.map((image, index) => (
            <SidebarItem
              key={index}
              imageSrc={image}
              label={`Playlist ${index + 1}`}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Sidebar

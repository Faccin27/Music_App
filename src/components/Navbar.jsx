import { useState, useCallback, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import avatar from '../assets/images/profile.png'

const UsuarioLogado = [
  { id: 1, name: 'Faccin', email: 'faccin@example.com', avatar: avatar },
]

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef()

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    /* Barra vertical */
    <nav className="bg-black/80 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-10 flex justify-between items-center p-4 h-16">
      <div className="flex items-center justify-between w-full">

        {/* Titulo */}
        <h2 className="text-xl font-bold text-white">Music App</h2>
    
      <div className="flex gap-4">
        
        {/* Botão para abrir a barra de pesquisa */}
        <button
          onClick={toggleSearch}
          className="md:hidden mr-2 text-white"
          aria-label="Toggle search"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Barra de pesquisa */}
        {isSearchVisible && (
          <div className="absolute top-16 left-20 right-10  p-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por músicas, playlists, artistas e muito mais."
                className="w-full bg-black/60 text-white p-2 pr-10 rounded"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
            </div>
          </div>
        )}

        {/* Botão para abrir o menu do usuário */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center"
            aria-label="User menu"
          >
            <img
              src={UsuarioLogado[0].avatar}
              alt={UsuarioLogado[0].name}
              className="w-11 h-11 rounded-full"
            />
          </button>

          
          {/* Menu do usuário */}
          {isDropdownOpen && (
            <div className="fixed right-0 mt-2 w-48 bg-black/80 shadow-lg py-1"
              style={{ borderRadius: 8 }}
            >
              <div className="px-4 py-2 text-sm text-white">
                <div>{UsuarioLogado[0].name}</div>
                <div className="text-gray-400">{UsuarioLogado[0].email}</div>
              </div>
              <hr className="border-gray-600" />
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Settings</a>
              <hr className="border-gray-600" />
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Log out</a>
            </div>
          )}

          </div>
        </div>
      </div>
    </nav>
  )
}
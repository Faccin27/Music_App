import { useState } from 'react'
import NowPlaying from './NowPlaying'
import { PlayCircle, MoreHorizontal } from 'lucide-react'
import { Play, Heart } from '@phosphor-icons/react'
import wiu from '../assets/images/default.png'
import { Button } from './ui/button'

export default function ArtistPage() {
  const [hoveredSong, setHoveredSong] = useState(null)

  const artist = {
    name: 'Veigh',
    image: wiu,
    followers: 1000000,
    albums: [
      { id: 1, title: 'Dos Prédios', year: 2023, image: wiu },
      { id: 2, title: 'Dos Prédios Deluxe', year: 2023, image: wiu },
    ],
  }

  const songs = [
    {
      id: 1,
      name: 'Envolver',
      artist: 'Anitta',
      album: 'Versions of Me',
      duration: '3:14',
      image: wiu,
    },
    {
      id: 2,
      name: 'Amarelo, Azul e Branco',
      artist: 'Anavitória',
      album: 'O Tempo é Agora',
      duration: '3:40',
      image: wiu,
    },
    {
      id: 3,
      name: 'Evidências',
      artist: 'Chitãozinho & Xororó',
      album: 'Evidências',
      duration: '4:39',
      image: wiu,
    },
    {
      id: 4,
      name: 'Hear Me Now',
      artist: 'Alok, Bruno Martini, Zeeba',
      album: 'Hear Me Now',
      duration: '3:12',
      image: wiu,
    },
    {
      id: 5,
      name: 'Vai Malandra',
      artist: 'Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins',
      album: 'Vai Malandra',
      duration: '3:01',
      image: wiu,
    },
    {
      id: 6,
      name: 'Batom de Cereja',
      artist: 'Israel & Rodolffo',
      album: 'Batom de Cereja',
      duration: '2:47',
      image: wiu,
    },
    {
      id: 7,
      name: 'Girl From Rio',
      artist: 'Anitta',
      album: 'Girl From Rio',
      duration: '3:26',
      image: wiu,
    },
    {
      id: 8,
      name: 'Amor de Que',
      artist: 'Pabllo Vittar',
      album: '111',
      duration: '2:52',
      image: wiu,
    },
  ]

  return (
    <div className="text-white min-h-screen p-8 flex justify-center items-start">
      {/* NowPlaying na esquerda */}
      <div className="w-1/2 flex items-center justify-center">
        <NowPlaying />
      </div>

      {/* Artist page na direita */}
      <div className="w-1/2 p-8 overflow-y-auto max-h-screen scrollbar-hide">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-64 h-64 rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
            <p className="text-gray-400">
              {artist.followers.toLocaleString()} followers
            </p>
          </div>

          <div className="flex space-x-4 justify-center mb-8">
            <Button className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
              <Play className="mr-2 h-5 w-5" weight="fill" /> Play
            </Button>
            <Button className="flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">
              <Heart className="mr-2 h-5 w-5" weight="fill" /> Like
            </Button>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Top Songs</h2>
          <div className="space-y-2">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className={`flex items-center justify-between p-2 rounded-lg ${index % 2 === 0 ? 'bg-transparent' : 'bg-gray-800 bg-opacity-30'}`}
                onMouseEnter={() => setHoveredSong(song.id)}
                onMouseLeave={() => setHoveredSong(null)}
              >
                <div className="flex items-center space-x-3 flex-grow">
                  <div className="relative">
                    <img
                      src={song.image}
                      alt={song.name}
                      className="w-10 h-10 rounded"
                    />
                    {hoveredSong === song.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <PlayCircle className="text-white" size={24} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{song.name}</p>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out">
                  <span
                    className={`text-sm text-gray-400 transition-all duration-300 ease-in-out ${hoveredSong === song.id ? 'mr-8' : 'mr-0'}`}
                  >
                    {song.duration}
                  </span>
                  {hoveredSong === song.id && (
                    <MoreHorizontal
                      className="text-gray-400 cursor-pointer transition-opacity duration-300 ease-in-out opacity-100"
                      size={20}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Albums</h2>
          <div className="grid grid-cols-2 gap-4">
            {artist.albums.map((album) => (
              <div
                key={album.id}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-24 h-24 rounded mb-2 mx-auto"
                />
                <h3 className="font-semibold">{album.title}</h3>
                <p className="text-gray-400">{album.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

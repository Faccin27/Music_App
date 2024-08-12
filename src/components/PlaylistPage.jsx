import React, { useState } from 'react';
import { Play, Heart, Download, PlayCircle, MoreHorizontal } from 'lucide-react';
import NowPlaying from './NowPlaying';
import wiu from '../assets/images/eletronica.png';
import SongImage from '../assets/images/funk.jpg';

const songs = [
  { id: 1, name: 'Envolver', artist: 'Anitta', album: 'Versions of Me', duration: '3:14', image: SongImage },
  { id: 2, name: 'Amarelo, Azul e Branco', artist: 'Anavitória', album: 'O Tempo é Agora', duration: '3:40', image: SongImage },
  { id: 3, name: 'Evidências', artist: 'Chitãozinho & Xororó', album: 'Evidências', duration: '4:39', image: SongImage },
  { id: 4, name: 'Hear Me Now', artist: 'Alok, Bruno Martini, Zeeba', album: 'Hear Me Now', duration: '3:12', image: SongImage },
  { id: 5, name: 'Vai Malandra', artist: 'Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins', album: 'Vai Malandra', duration: '3:01', image: SongImage },
  { id: 6, name: 'Batom de Cereja', artist: 'Israel & Rodolffo', album: 'Batom de Cereja', duration: '2:47', image: SongImage },
  { id: 7, name: 'Girl From Rio', artist: 'Anitta', album: 'Girl From Rio', duration: '3:26', image: SongImage },
  { id: 8, name: 'Amor de Que', artist: 'Pabllo Vittar', album: '111', duration: '2:52', image: SongImage },
  { id: 9, name: 'Todo Dia', artist: 'MC Livinho', album: 'Dance', duration: '3:25', image: SongImage },
  { id: 10, name: 'Te Pego de Jeito', artist: 'Sorriso Maroto', album: 'Sorriso 20 Anos', duration: '3:50', image: SongImage },
  { id: 11, name: 'Coração de Aço', artist: 'Thiaguinho', album: 'Desenho de Deus', duration: '4:05', image: SongImage },
  { id: 12, name: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', album: 'Vida', duration: '3:48', image: SongImage },
  { id: 13, name: 'Apenas Mais Uma de Amor', artist: 'Luan Santana', album: 'Luan Santana – Ao Vivo', duration: '3:34', image: SongImage },
  { id: 14, name: 'Não Perco Meu Tempo', artist: 'Giulia Be', album: 'Ai, Ai, Ai', duration: '3:09', image: SongImage },
  { id: 15, name: 'Se Agora É Pra Morrer', artist: 'Jorge & Mateus', album: 'Terra Sem CEP', duration: '3:22', image: SongImage },
  { id: 16, name: 'Medo Bobo', artist: 'Maiara & Maraísa', album: 'Maiara & Maraísa', duration: '3:18', image: SongImage },
];

const scrollbarHiddenStyle = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

export default function Component() {
  const [hoveredSong, setHoveredSong] = useState(null);

  return (
    <div className="text-white min-h-screen p-8 flex justify-center items-start">
      {/* LEFT SIDE TOCANDO AGORA */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
        <NowPlaying />
      </div>

      {/* Right side - Playlist */}
      <div className="w-1/2">
        <div className="mx-auto">
          <img
            src={wiu}
            alt="Top Brasil Playlist"
            className="w-56 h-56 object-cover mx-auto mb-4"
            style={{
              borderRadius: '0.375rem',
              marginBottom: '7dvh'
            }}
          />
          <h1 className="text-3xl font-bold text-center mb-4">Top Brasil</h1>

          <div className="flex justify-center space-x-3 mb-4">
            <button className="bg-blue-500 text-black font-semibold py-2 px-6 rounded-full flex items-center">
              <Play className="mr-2" size={18} />
              Play
            </button>
            <button className="text-white p-2" style={{ fontWeight: 'bold' }}>
              <Heart size={24} />
            </button>

            <button className="text-white p-2" style={{ fontWeight: 'bold' }}>
              <Download size={24} />
            </button>
          </div>

          <p className="text-zinc-400 text-center mb-6 text-sm">
            Anitta, Anavitória e os maiores hits do país. O que tá bombando tá aqui.
          </p>

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
                    <img src={song.image} alt={song.name} className="w-10 h-10 rounded" />
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
                  <span className={`text-sm text-gray-400 transition-all duration-300 ease-in-out ${hoveredSong === song.id ? 'mr-8' : 'mr-0'}`}>
                    {song.duration}
                  </span>
                  {hoveredSong === song.id && (
                    <MoreHorizontal className="text-gray-400 cursor-pointer transition-opacity duration-300 ease-in-out opacity-100" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

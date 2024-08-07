import React from 'react';
import { Play, Clock, Heart } from 'lucide-react';
import playlistImage from '../assets/images/eletronica.png';
import SongImage from '../assets/images/funk.jpg'
// Dummy data for the playlist
const playlist = {
  id: 1,
  name: 'Top Hits 2024',
  image: playlistImage,
  creator: 'Future Rhythm',
  totalSongs: 50,
  totalDuration: '2h 45min',
  description: 'Os maiores hits do momento em uma só playlist!',
};

const songs = [
  { id: 1, name: 'Envolver', artist: 'Anitta', album: 'Versions of Me', duration: '3:14', image: SongImage },
  { id: 2, name: 'Amarelo, Azul e Branco', artist: 'Anavitória', album: 'O Tempo é Agora', duration: '3:40', image: SongImage },
  { id: 3, name: 'Evidências', artist: 'Chitãozinho & Xororó', album: 'Evidências', duration: '4:39', image: SongImage },
  { id: 4, name: 'Hear Me Now', artist: 'Alok, Bruno Martini, Zeeba', album: 'Hear Me Now', duration: '3:12', image: SongImage },
  { id: 5, name: 'Vai Malandra', artist: 'Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins', album: 'Vai Malandra', duration: '3:01', image: SongImage },
  { id: 6, name: 'Batom de Cereja', artist: 'Israel & Rodolffo', album: 'Batom de Cereja', duration: '2:47', image: SongImage },
  { id: 7, name: 'Girl From Rio', artist: 'Anitta', album: 'Girl From Rio', duration: '3:26', image: SongImage },
  { id: 8, name: 'Amor de Que', artist: 'Pabllo Vittar', album: '111', duration: '2:52', image: SongImage },
];

const PlaylistPage = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <div className="flex items-center mb-8">
        <img src={playlist.image} alt={playlist.name} className="w-64 h-64 object-cover rounded-lg shadow-lg mr-8" />
        <div>
          <h1 className="text-4xl font-bold mb-2">{playlist.name}</h1>
          <p className="text-gray-400 mb-2">Criado por {playlist.creator}</p>
          <p className="text-gray-400 mb-4">{playlist.totalSongs} músicas • {playlist.totalDuration}</p>
          <p className="text-sm mb-4">{playlist.description}</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-4">
            Reproduzir
          </button>
          <button className="border border-white hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
            Seguir
          </button>
        </div>
      </div>

      <section>
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Título</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Álbum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {songs.map((song, index) => (
                <tr key={song.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src={song.image} alt={song.name} className="w-10 h-10 object-cover rounded-sm mr-4" />
                      <Play className="w-4 h-4 mr-2 cursor-pointer text-green-500" />
                      <div>
                        <div className="font-medium">{song.name}</div>
                        <div className="text-sm text-gray-400">{song.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{song.album}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-between">
                      <Heart className="w-4 h-4 mr-2 cursor-pointer text-gray-400 hover:text-red-500" />
                      <span>{song.duration}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PlaylistPage;
import React from 'react';
import { Play, Clock } from 'lucide-react';
import profileImage from '../assets/images/default.png';
import funkImage from '../assets/images/funk.jpg';
import eletronicaImage from '../assets/images/eletronica.png';
import sertanejoImage from '../assets/images/sertanejo.jpg';
import profilepic from '../assets/images/profile.png'

const UsuarioLogado = [
  { id: 1, name: 'Faccin', email: 'faccin@example.com', avatar: profilepic }
]

const playlists = [
  { id: 1, name: 'Top Hits 2024', image: sertanejoImage, songs: 50, creator: 'Future Rhythm' },
  { id: 2, name: 'Chill Vibes', image: eletronicaImage, songs: 30, creator: 'Future Rhythm' },
  { id: 3, name: 'Workout Mix', image: funkImage, songs: 25, creator: 'Future Rhythm' },
  { id: 4, name: 'Road Trip Jams', image: profileImage, songs: 40, creator: 'Future Rhythm' },
];

const artists = [
  { id: 1, name: 'Adriana Calcanhoto', image: profileImage, genre: 'MPB' },
  { id: 2, name: 'Anitta', image: sertanejoImage, genre: 'Pop' },
  { id: 3, name: 'Marília Mendonça', image: funkImage, genre: 'Sertanejo' },
  { id: 4, name: 'Alok', image: eletronicaImage, genre: 'Eletrônica' },
];

const recentlyPlayed = [
  { id: 1, name: 'Envolver', artist: 'Anitta', album: 'Versions of Me', duration: '3:14' },
  { id: 2, name: 'Amarelo, Azul e Branco', artist: 'Anavitória', album: 'O Tempo é Agora', duration: '3:40' },
  { id: 3, name: 'Evidências', artist: 'Chitãozinho & Xororó', album: 'Evidências', duration: '4:39' },
  { id: 4, name: 'Hear Me Now', artist: 'Alok, Bruno Martini, Zeeba', album: 'Hear Me Now', duration: '3:12' },
];

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo de volta {UsuarioLogado[0].name}!</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Suas Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={playlist.image} alt={playlist.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{playlist.name}</h3>
                <p className="text-sm text-gray-400">{playlist.songs} músicas • {playlist.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Artistas em Destaque</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="text-center">
              <img src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full mx-auto mb-2" />
              <h3 className="font-semibold">{artist.name}</h3>
              <p className="text-sm text-gray-400">{artist.genre}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Reproduzidas Recentemente</h2>
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Música</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Artista</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Álbum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentlyPlayed.map((track) => (
                <tr key={track.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-2 cursor-pointer text-green-500" />
                      <span>{track.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{track.artist}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{track.album}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
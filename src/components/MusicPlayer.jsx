import React, { useState } from 'react';
import NowPlaying from './NowPlaying';
import { Button } from '@/components/ui/button';
import { PlayCircle, MoreHorizontal } from 'lucide-react';
import wiu from '../assets/images/default.png';
import sertanejoImage from '../assets/images/sertanejo.jpg';
import eletronicaImage from '../assets/images/eletronica.png';
import funkImage from '../assets/images/funk.jpg';
import profileImage from '../assets/images/profile.png';

const playlists = [
    { id: 1, name: 'Top Hits 2024', image: sertanejoImage, songs: 50, creator: 'Future Rhythm' },
    { id: 2, name: 'Chill Vibes', image: eletronicaImage, songs: 30, creator: 'Future Rhythm' },
    { id: 3, name: 'Workout Mix', image: funkImage, songs: 25, creator: 'Future Rhythm' },
    { id: 4, name: 'Road Trip Jams', image: profileImage, songs: 40, creator: 'Future Rhythm' },
    { id: 5, name: 'Dance Party', image: eletronicaImage, songs: 45, creator: 'Future Rhythm' },
    { id: 6, name: 'Relaxing Beats', image: sertanejoImage, songs: 35, creator: 'Future Rhythm' },
    { id: 7, name: 'Summer Vibes', image: funkImage, songs: 20, creator: 'Future Rhythm' },
    { id: 8, name: 'Evening Chill', image: profileImage, songs: 28, creator: 'Future Rhythm' },
    { id: 9, name: 'Morning Boost', image: sertanejoImage, songs: 32, creator: 'Future Rhythm' },
    { id: 10, name: 'Indie Favorites', image: eletronicaImage, songs: 29, creator: 'Future Rhythm' },
    { id: 11, name: 'Feel-Good Tunes', image: funkImage, songs: 38, creator: 'Future Rhythm' },
    { id: 12, name: 'Epic Journeys', image: profileImage, songs: 42, creator: 'Future Rhythm' },
];

const songs = [
    { id: 1, name: 'Envolver', artist: 'Anitta', album: 'Versions of Me', duration: '3:14', image: wiu },
    { id: 2, name: 'Amarelo, Azul e Branco', artist: 'Anavitória', album: 'O Tempo é Agora', duration: '3:40', image: wiu },
    { id: 3, name: 'Evidências', artist: 'Chitãozinho & Xororó', album: 'Evidências', duration: '4:39', image: wiu },
    { id: 4, name: 'Hear Me Now', artist: 'Alok, Bruno Martini, Zeeba', album: 'Hear Me Now', duration: '3:12', image: wiu },
    { id: 5, name: 'Vai Malandra', artist: 'Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins', album: 'Vai Malandra', duration: '3:01', image: wiu },
    { id: 6, name: 'Batom de Cereja', artist: 'Israel & Rodolffo', album: 'Batom de Cereja', duration: '2:47', image: wiu },
    { id: 7, name: 'Girl From Rio', artist: 'Anitta', album: 'Girl From Rio', duration: '3:26', image: wiu },
    { id: 8, name: 'Amor de Que', artist: 'Pabllo Vittar', album: '111', duration: '2:52', image: wiu },
    { id: 9, name: 'Todo Dia', artist: 'MC Livinho', album: 'Dance', duration: '3:25', image: wiu },
    { id: 10, name: 'Te Pego de Jeito', artist: 'Sorriso Maroto', album: 'Sorriso 20 Anos', duration: '3:50', image: wiu },
    { id: 11, name: 'Coração de Aço', artist: 'Thiaguinho', album: 'Desenho de Deus', duration: '4:05', image: wiu },
    { id: 12, name: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', album: 'Vida', duration: '3:48', image: wiu },
    { id: 13, name: 'Apenas Mais Uma de Amor', artist: 'Luan Santana', album: 'Luan Santana – Ao Vivo', duration: '3:34', image: wiu },
    { id: 14, name: 'Não Perco Meu Tempo', artist: 'Giulia Be', album: 'Ai, Ai, Ai', duration: '3:09', image: wiu },
    { id: 15, name: 'Se Agora É Pra Morrer', artist: 'Jorge & Mateus', album: 'Terra Sem CEP', duration: '3:22', image: wiu },
    { id: 16, name: 'Medo Bobo', artist: 'Maiara & Maraísa', album: 'Maiara & Maraísa', duration: '3:18', image: wiu },
];

const artists = [...new Set(songs.flatMap(song => song.artist.split(', ')))].map(artist => ({
    name: artist,
    image: wiu
}));

export default function MusicPlayer() {
    const [showPlaylists, setShowPlaylists] = useState(true);
    const [showTracks, setShowTracks] = useState(false);
    const [showArtists, setShowArtists] = useState(false);
    const [hoveredSong, setHoveredSong] = useState(null);

    const handlePlaylistsClick = () => {
        setShowPlaylists(true);
        setShowTracks(false);
        setShowArtists(false);
    };

    const handleTracksClick = () => {
        setShowTracks(true);
        setShowPlaylists(false);
        setShowArtists(false);
    };

    const handleArtistsClick = () => {
        setShowArtists(true);
        setShowPlaylists(false);
        setShowTracks(false);
    };

    return (
        <div className="flex flex-col h-screen text-foreground">
            <main className="flex-1 flex flex-col md:flex-row items-start justify-center p-4 md:p-8">
                <NowPlaying />

                <div className="w-full md:w-1/2 mt-40 md:mt-0">
                    <div className="flex justify-center mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-md w-full">
                            <div
                                className={`flex items-center justify-center p-2 hover:bg-gray-700 transition duration-300 cursor-pointer ${showTracks ? 'bg-gray-500' : 'bg-transparent'}`}
                                style={{ borderRadius: '8px' }}
                                onClick={handleTracksClick}
                            >
                                <span className="font-medium">Tracks</span>
                            </div>
                            <div
                                className={`flex items-center justify-center p-2 hover:bg-gray-700 transition duration-300 cursor-pointer ${showArtists ? 'bg-gray-500' : 'bg-transparent'}`}
                                style={{ borderRadius: '8px' }}
                                onClick={handleArtistsClick}
                            >
                                <span className="font-medium">Artists</span>
                            </div>
                            <div
                                className={`flex items-center justify-center p-2 hover:bg-gray-700 transition duration-300 cursor-pointer ${showPlaylists ? 'bg-gray-500' : 'bg-transparent'}`}
                                style={{ borderRadius: '8px' }}
                                onClick={handlePlaylistsClick}
                            >
                                <span className="font-medium">Playlists</span>
                            </div>

                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[calc(100vh-10rem)]">
                        {showPlaylists && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                                {playlists.map((playlist) => (
                                    <div key={playlist.id} className="flex flex-col items-center">
                                        <div className="w-full max-w-[200px] h-[200px] relative">
                                            <img
                                                src={playlist.image}
                                                alt={playlist.name}
                                                className="w-full h-full object-cover"
                                                style={{ borderRadius: '8px' }}
                                            />
                                        </div>
                                        <p className="mt-2 text-center text-sm font-medium">{playlist.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {showTracks && (
                            <div className="space-y-1">
                                {songs.map((song, index) => (
                                    <div
                                        key={song.id}
                                        className={`flex items-center justify-between p-2 rounded-lg ${index % 2 === 0 ? 'bg-transparent' : 'bg-gray-800 bg-opacity-30'}`}
                                        onMouseEnter={() => setHoveredSong(song.id)}
                                        onMouseLeave={() => setHoveredSong(null)}
                                        style={{borderRadius: 8}}
                                    >
                                        <div className="flex items-center space-x-3 flex-grow">
                                            <div className="relative">
                                                <img src={song.image} alt={song.name} className="w-10 h-10 rounded" />
                                                {hoveredSong === song.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg" style={{borderRadius: 12}}>
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
                        )}

                        {showArtists && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {artists.map((artist, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <img
                                            src={artist.image}
                                            alt={artist.name}
                                            className="w-48 h- object-cover rounded-full"
                                        />
                                        <p className="mt-2 text-center text-sm font-medium">{artist.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

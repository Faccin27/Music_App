import React, { useState } from 'react';
import { Button } from './ui/button';
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

export default function MusicPlayer() {
    const [showPlaylists, setShowPlaylists] = useState(false);

    const handlePlaylistsClick = () => {
        setShowPlaylists(!showPlaylists);
    };

    return (
        <div className="flex flex-col h-screen text-foreground">
            <main className="flex-1 flex flex-col md:flex-row items-start justify-center p-4 md:p-8">
                <div className="flex flex-col items-center justify-start gap-2 w-full md:w-1/2">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                        <img
                            src={wiu}
                            alt="Album Cover"
                            className="object-cover w-full h-full"
                            style={{ borderRadius: '8px' }}
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Starlight</h2>
                        <p className="text-muted-foreground">Muse</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 w-full max-w-md">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">0:45</span>
                            <span className="text-sm text-muted-foreground">4:23</span>
                        </div>
                        <div className="relative h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-primary w-[45%] rounded-full" />
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <Button variant="ghost" size="icon">
                                <SkipForwardIcon className="w-6 h-6" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <PlayIcon className="w-6 h-6" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <FastForwardIcon className="w-6 h-6" />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Button variant="ghost" size="icon">
                                <HeartIcon className="w-6 h-6" />
                            </Button>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Volume2Icon className="w-6 h-6" />
                                </Button>
                                <div className="relative h-2 bg-muted-foreground/20 rounded-full w-24">
                                    <div className="absolute inset-y-0 left-0 bg-primary w-[60%] rounded-full" />
                                </div>
                                <button className="p-2 rounded-md hover:bg-gray-200">
                                    <span className="block w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto my-1"></span>
                                    <span className="block w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto my-1"></span>
                                    <span className="block w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto my-1"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <div className="flex justify-center mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-md w-full">
                            <div
                                className="flex items-center justify-center p-2 hover:bg-gray-200 hover:bg-opacity-20 transition duration-300"
                                style={{ borderRadius: '8px' }}
                            >
                                <span className="font-medium">Tracks</span>
                            </div>
                            <div
                                className="flex items-center justify-center p-2 hover:bg-gray-200 hover:bg-opacity-20 transition duration-300"
                                style={{ borderRadius: '8px' }}
                            >
                                <span className="font-medium">Albums</span>
                            </div>
                            <div
                                className="flex items-center justify-center p-2 hover:bg-gray-200 hover:bg-opacity-20 transition duration-300"
                                style={{ borderRadius: '8px' }}
                                onClick={handlePlaylistsClick}
                            >
                                <span className="font-medium">Playlists</span>
                            </div>
                        </div>
                    </div>

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
                </div>
            </main>
        </div>
    );
}

function FastForwardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="13 19 22 12 13 5 13 19" />
            <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
    );
}

function HeartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 1 8.5c0 2.29 1.51 4.04 3 5.5L12 21l7-7z" />
        </svg>
    );
}

function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    );
}

function SkipForwardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" x2="19" y1="5" y2="19" />
        </svg>
    );
}

function Volume2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    );
}

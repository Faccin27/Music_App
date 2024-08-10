import React, { useState } from 'react';
import { Button } from './ui/button';
import wiu from '../assets/images/futil.png';

export default function NowPlaying() {
    const [isPlaying, setIsPlaying] = useState(false); // Adiciona estado para controle de reprodução
    const [isShuffling, setIsShuffling] = useState(false); // Adiciona estado para controle de reprodução aleatória

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying); // Alterna o estado de reprodução
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling); // Alterna o estado de shuffle
    };

    return (
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
                <h2 className="text-2xl font-bold">Ela é futil</h2>
                <p className="text-muted-foreground">Cjota, Mc Daniel, Veigh</p>
            </div>
            <div className="bg-muted rounded-lg p-4 w-full max-w-md">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">0:45</span>
                    <span className="text-sm text-muted-foreground">4:23</span>
                </div>
                <div className="relative h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-primary w-[45%] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-8 mt-4">
                    <Button variant="ghost" size="icon" onClick={toggleShuffle}>
                        <ShuffleIcon className={`w-6 h-6 ${isShuffling ? 'text-primary' : 'text-muted-foreground'}`} />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <SkipBackwardIcon className="w-6 h-6" />
                    </Button>
                    <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300 opacity-50 absolute"></div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative z-10"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? <PlayIcon className="w-10 h-10" />  : <PauseIcon className="w-10 h-10" />}
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon">
                        <SkipForwardIcon className="w-6 h-6" />
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
    );
}

function ShuffleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 230.055 230.055"
            fill="white"
        >
            <path d="M199.419,124.497c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636h-8.406
                c-8.177,0-16.151-2.871-22.453-8.083l-32.346-26.751l32.345-26.751c6.303-5.212,14.277-8.083,22.454-8.083h8.406L186.69,92.83
                c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28
                c3.515-3.515,3.515-9.213,0-12.728l-28-28c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636
                h-8.406c-12.354,0-24.403,4.337-33.926,12.211L122,103.348L82.564,70.733c-6.658-5.507-15.084-8.54-23.724-8.54H9
                c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c4.462,0,8.813,1.566,12.252,4.411l36.786,30.423L71.094,145.45
                c-3.439,2.844-7.791,4.411-12.253,4.411H9c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c8.64,0,17.065-3.033,23.725-8.54L122,126.707
                l34.996,28.943c9.521,7.875,21.57,12.211,33.925,12.211h8.406l-12.637,12.636c-3.515,3.515-3.515,9.213,0,12.728
                c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28c3.515-3.515,3.515-9.213,0-12.728L199.419,124.497z"/>
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

function SkipBackwardIcon(props) {
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
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1="5" x2="5" y1="5" y2="19" />
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

function PauseIcon(props) {
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
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
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
            <path d="M21 4.29a6.43 6.43 0 0 0-9 0L12 5.29l-0.71-0.71a6.43 6.43 0 0 0-9 9l9 9 9-9a6.43 6.43 0 0 0 0-9z" />
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





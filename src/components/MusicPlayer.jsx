import React from 'react';
import { Button } from './ui/button';
import wiu from '../assets/images/default.png'

export default function MusicPlayer() {
    return (
        <div className="flex flex-col h-screen bg-background text-foreground">
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-8 p-4 md:p-8">
                <div className="flex flex-col items-center justify-start gap-4">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                        <img
                            src={wiu}
                            alt="Album Cover"
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                            style={{ aspectRatio: "400/400", objectFit: "cover" }}
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
                <div className="flex flex-col gap-6 items-start">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="flex items-start justify-start">
                            <span className="font-medium">Tracks</span>
                        </div>
                        <div className="flex items-start justify-start">
                            <span className="font-medium">Albums</span>
                        </div>
                        <div className="flex items-start justify-start">
                            <span className="font-medium">Playlists</span>
                        </div>
                    </div>


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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}

function MoveHorizontalIcon(props) {
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
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
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
            <polygon points="6 3 20 12 6 21 6 3" />
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

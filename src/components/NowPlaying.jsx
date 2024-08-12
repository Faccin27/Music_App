import React, { useState } from 'react';
import { Button } from './ui/button';
import wiu from '../assets/images/futil.png';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Heart, SpeakerHigh } from "@phosphor-icons/react";

export default function NowPlaying() {
    const [isPlaying, setIsPlaying] = useState(false); 
    const [isShuffling, setIsShuffling] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling); 
    };

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating);
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
                        <Shuffle className={`w-6 h-6 ${isShuffling ? 'text-primary' : 'text-muted-foreground'}`} />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <SkipBack className="w-6 h-6" />
                    </Button>
                    <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300 opacity-50 absolute"></div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative z-10"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? <Pause size={32} className="w-10 h-10 flex justify-center items-center self-center" /> : <Play size={32} color="#c32c2c" weight="fill" />}
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon">
                        <SkipForward className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={toggleRepeat}>
                        <Repeat className={`w-6 h-6 ${isRepeating ? 'text-primary' : 'text-muted-foreground'}`} />
                    </Button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" size="icon">
                        <Heart className="w-6 h-6" />
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <SpeakerHigh className="w-6 h-6" />
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

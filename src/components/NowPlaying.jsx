import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import wiu from '../assets/images/futil.png';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Heart, SpeakerHigh, List } from "@phosphor-icons/react";
import updateBackground from './ui/UpdateBackgroud';

export default function NowPlaying() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);

    useEffect(() => {
        updateBackground(wiu);
    }, [wiu]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
    };

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating);
    };

    const currentTime = 45;
    const totalTime = 263;

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-between gap-2 w-full md:w-1/2 min-h-full">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <img
                        src={wiu}
                        alt="Album Cover"
                        className="object-cover w-full h-full"
                        style={{ borderRadius: '8px' }}
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold">Ela é futil</h2>
                    <p className="text-muted-foreground">Cjota, Mc Daniel, Veigh</p>
                </div>
                <div className="bg-muted rounded-lg p-4 w-full max-w-md mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{formatTime(currentTime)}</span>
                        <div className="relative flex-1 mx-4 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gray-400" style={{ width: '100%' }} />
                            <div className="bg-primary bg-white absolute inset-y-0 left-0" style={{ width: '45%' }} />
                        </div>
                        <span className="text-sm text-muted-foreground">{formatTime(totalTime)}</span>
                    </div>

                    <div className="flex items-center justify-center gap-8 mt-8">
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
                                {isPlaying ? <Pause size={32} weight="fill" /> : <Play size={32} weight="fill" />}
                            </Button>
                        </div>
                        <Button variant="ghost" size="icon">
                            <SkipForward className="w-6 h-6" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={toggleRepeat}>
                            <Repeat className={`w-6 h-6 ${isRepeating ? 'text-primary' : 'text-muted-foreground'}`} />
                        </Button>
                    </div>
                </div>


                <div className="flex items-center justify-center w-full mt-[17dvh] mb-4">
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="icon">
                            <Heart className="w-6 h-6" />
                        </Button>
                        <div className='flex items-center gap-2'>
                            <Button variant="ghost" size="icon">
                                <SpeakerHigh className="w-6 h-6" />
                            </Button>
                            <div className="relative h-2 bg-muted-foreground/20 rounded-full w-24">
                                <div className="absolute inset-y-0 left-0 bg-gray-400" style={{ width: '100%', borderRadius: 50 }} />
                                <div className="bg-primary bg-white absolute inset-y-0 left-0" style={{ width: '45%', borderRadius: 50 }} />
                            </div>
                        </div>
                        <Button variant="ghost" size="icon">
                            <List className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

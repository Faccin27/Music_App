import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ChevronUp, Plus } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Playbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 w-1/4">
          <img src="/api/placeholder/60/60" alt="Album cover" className="w-14 h-14 rounded-md" />
          <div>
            <h3 className="font-semibold text-sm">Nome da Música</h3>
            <p className="text-xs text-gray-400">Artista</p>
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="flex items-center justify-center space-x-6 mb-2">
            <button className="focus:outline-none text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="focus:outline-none bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200" onClick={togglePlay}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="focus:outline-none text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs">{formatTime(progress)}</span>
            <Slider
              value={[progress]}
              max={210}
              step={1}
              className="flex-1"
              onValueChange={(value) => setProgress(value[0])}
            />
            <span className="text-xs">3:30</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <div className="flex items-center space-x-2">
            <Volume2 size={18} className="text-gray-400" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-sm text-gray-400 hover:text-white flex items-center">
                <Plus size={16} className="mr-1" /> Adicionar à
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 bg-gray-800 border-gray-700">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Playlist 1</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Playlist 2</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Nova Playlist</button>
              </div>
            </PopoverContent>
          </Popover>
          <button className="text-gray-400 hover:text-white">
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default Playbar;
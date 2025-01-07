import React, { useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

const AudioPlayer = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    formatTime,
    togglePlay,
    seekTo,
    setVolumeLevel
  } = useAudioPlayer();

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !duration) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    seekTo(newTime);
  };

  if (!currentTrack) {
    return (
      <div className="glass-card p-6 rounded-xl text-center">
        <p className="text-blue-200">Select a track to play</p>
      </div>
    );
  }

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={currentTrack.coverUrl} 
          alt={currentTrack.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-white font-medium">{currentTrack.title}</h3>
          <p className="text-sm text-blue-200">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div 
          ref={progressRef}
          className="relative h-1 bg-white/20 rounded-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute h-full bg-purple-400 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between text-sm text-blue-200">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-between">
          <button className="text-blue-200 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
          <button className="text-blue-200 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-blue-200" />
            <div 
              className="w-24 h-1 bg-white/20 rounded-full cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const newVolume = x / rect.width;
                setVolumeLevel(newVolume);
              }}
            >
              <div 
                className="h-full bg-purple-400 rounded-full"
                style={{ width: `${volume * 100}%` }}
              />
            </div>
          </div>
          <button
            className={`transition-colors ${
              currentTrack.liked ? 'text-pink-500' : 'text-blue-200 hover:text-pink-500'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
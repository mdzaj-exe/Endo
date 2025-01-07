import React from 'react';
import { Play, Heart, Share2, MoreHorizontal } from 'lucide-react';
import { Track } from '../../types/music';
import { mockTracks } from '../../data/mockData';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

interface TrackListProps {
  isLibrary?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({ isLibrary }) => {
  const { playTrack, currentTrack, isPlaying } = useAudioPlayer();
  
  // In a real app, this would filter based on the user's library
  const tracks = isLibrary 
    ? mockTracks.filter(track => track.liked)
    : mockTracks;

  const formatPlays = (plays: number) => {
    if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)}k`;
    }
    return plays.toString();
  };

  return (
    <div className="space-y-4">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="glass-card p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 group"
        >
          <div className="flex items-center space-x-4">
            <div 
              className="relative w-12 h-12 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => playTrack(track)}
            >
              <img 
                src={track.coverUrl} 
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {currentTrack?.id === track.id && isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">{track.title}</h3>
              <p className="text-sm text-blue-200">{track.artist}</p>
            </div>
            <div className="text-sm text-blue-200">{track.genre}</div>
            <div className="text-sm text-blue-200">{formatPlays(track.plays)} plays</div>
            <div className="text-sm text-blue-200">
              {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
            </div>
            <div className="flex items-center space-x-3">
              <button 
                className={`transition-colors ${
                  track.liked ? 'text-pink-500' : 'text-blue-200 hover:text-pink-500'
                }`}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-blue-200 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-blue-200 hover:text-white transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
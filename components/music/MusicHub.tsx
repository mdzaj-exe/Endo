import React, { useState } from 'react';
import { Music, Radio, Mic, Users } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import TrackList from './TrackList';
import CollaborationFeed from './CollaborationFeed';

const MusicHub = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const tabs = [
    { id: 'discover', label: 'Discover', icon: <Radio /> },
    { id: 'library', label: 'Library', icon: <Music /> },
    { id: 'upload', label: 'Upload', icon: <Mic /> },
    { id: 'collaborate', label: 'Collaborate', icon: <Users /> }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Music Hub
        </h1>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'glass text-purple-400'
                  : 'text-blue-200 hover:text-white glass-hover'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          {activeTab === 'discover' && <TrackList />}
          {activeTab === 'library' && <TrackList isLibrary />}
          {activeTab === 'upload' && <UploadSection />}
          {activeTab === 'collaborate' && <CollaborationFeed />}
        </div>

        <div className="col-span-4 space-y-6">
          <AudioPlayer />
          <TrendingArtists />
        </div>
      </div>
    </div>
  );
};

const UploadSection = () => (
  <div className="glass-card p-8 rounded-xl text-center">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
        <Mic className="w-8 h-8 text-purple-400" />
      </div>
      <h2 className="text-2xl font-semibold text-white mb-4">Upload Your Music</h2>
      <p className="text-blue-200 mb-8">Share your creations with the community</p>
      <label className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block">
        Choose Files
        <input type="file" className="hidden" accept="audio/*" multiple />
      </label>
    </div>
  </div>
);

const TrendingArtists = () => (
  <div className="glass-card p-6 rounded-xl">
    <h3 className="text-xl font-semibold text-white mb-4">Trending Artists</h3>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
          <div>
            <p className="text-white font-medium">Artist Name {i}</p>
            <p className="text-sm text-blue-200">1.2k followers</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MusicHub;
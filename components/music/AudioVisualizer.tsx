import React from 'react';
import { Activity } from 'lucide-react';

const AudioVisualizer = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white mb-8">Audio Visualizer</h1>
      
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
        <div className="flex items-center justify-center h-64">
          <Activity className="w-16 h-16 text-purple-400" />
          <p className="text-white ml-4">Visualizer coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default AudioVisualizer;
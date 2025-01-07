import React from 'react';
import { Users, Star, Clock } from 'lucide-react';

const SessionHub = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Session Hub</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Clock className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Upcoming Sessions</h2>
          <p className="text-gray-300">View your scheduled practice sessions</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Find Musicians</h2>
          <p className="text-gray-300">Connect with verified musicians for collaboration</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Star className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Session Ratings</h2>
          <p className="text-gray-300">Rate and review your practice sessions</p>
        </div>
      </div>
    </div>
  );
};

export default SessionHub;
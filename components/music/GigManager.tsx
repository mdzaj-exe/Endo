import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const GigManager = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Gig Manager</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Calendar className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Upcoming Gigs</h2>
          <p className="text-gray-300">View and manage your scheduled performances</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <MapPin className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Venues</h2>
          <p className="text-gray-300">Connect with local venues and organizers</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Band Sessions</h2>
          <p className="text-gray-300">Organize practice sessions with band members</p>
        </div>
      </div>
    </div>
  );
};

export default GigManager;
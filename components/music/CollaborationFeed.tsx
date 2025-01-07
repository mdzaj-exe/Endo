import React from 'react';
import { Users, MessageCircle, Share2 } from 'lucide-react';
import { mockCollaborations } from '../../data/mockData';

const CollaborationFeed = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Collaboration Opportunities</h2>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
          Post New
        </button>
      </div>

      <div className="space-y-4">
        {mockCollaborations.map((collab) => (
          <div
            key={collab.id}
            className="glass-card p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">{collab.title}</h3>
                <p className="text-sm text-purple-400 mb-2">{collab.genre}</p>
                <p className="text-blue-200">{collab.description}</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-200">
                <Users className="w-4 h-4" />
                <span>{collab.responses} responses</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={collab.author.avatarUrl} 
                  alt={collab.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <span className="text-sm text-white">{collab.author.name}</span>
                  <p className="text-xs text-blue-200">{formatDate(collab.createdAt)}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="text-blue-200 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="text-blue-200 hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationFeed;
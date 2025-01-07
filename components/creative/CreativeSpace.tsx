import React from 'react';
import { Palette, Image, Film, Music, Pen } from 'lucide-react';

const CreativeSpace = () => {
  const categories = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "Visual Arts",
      description: "Share and discover paintings, illustrations, and photography"
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Video & Animation",
      description: "Explore motion graphics, short films, and animations"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Audio Projects",
      description: "Listen to original compositions and sound design"
    },
    {
      icon: <Pen className="w-6 h-6" />,
      title: "Written Works",
      description: "Read poetry, stories, and creative writing"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Creative Space
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          A platform for artists to share their work, collaborate with others, and discover inspiring creations across all mediums.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-400/10 to-pink-500/10 text-purple-400 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <p className="text-blue-200">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreativeSpace;
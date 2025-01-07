import React from 'react';
import { Blocks, Shield, Coins, Share2 } from 'lucide-react';

const EndoBlockchain = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Rights Management",
      description: "Protect your creative works with blockchain-verified ownership"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Token Economy",
      description: "Earn ENDO tokens through creative contributions and collaborations"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Smart Collaborations",
      description: "Automated revenue sharing and collaboration agreements"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Endo Blockchain
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          A decentralized ecosystem that empowers creators with transparent rights management and fair compensation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-400/10 to-pink-500/10 text-purple-400 mr-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-blue-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EndoBlockchain;
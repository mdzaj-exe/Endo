import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Palette, Bot, Blocks, Radio, Info } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Endo
            </span>
          </Link>

          <div className="flex space-x-8">
            <NavLink to="/music" icon={<Radio />} text="Music Hub" isActive={isActive('/music')} />
            <NavLink to="/creative" icon={<Palette />} text="Creative Space" isActive={isActive('/creative')} />
            <NavLink to="/blockchain" icon={<Blocks />} text="Blockchain" isActive={isActive('/blockchain')} />
            <NavLink to="/ai" icon={<Bot />} text="EndoAI" isActive={isActive('/ai')} />
            <NavLink to="/about" icon={<Info />} text="About Us" isActive={isActive('/about')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-purple-400'
        : 'text-blue-200 hover:text-white'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Music,
  Palette,
  Bot,
  Blocks,
  Users,
  Sparkles,
  Globe,
  Shield,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicHub from "./components/music/MusicHub";
import CreativeSpace from "./components/creative/CreativeSpace";
import EndoBlockchain from "./components/blockchain/EndoBlockchain";
import EndoAI from "./components/ai/EndoAI";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] flex flex-col">
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop')] opacity-30 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
        <Navbar />
        <main className="container mx-auto px-4 py-8 relative flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<MusicHub />} />
            <Route path="/creative" element={<CreativeSpace />} />
            <Route path="/blockchain" element={<EndoBlockchain />} />
            <Route path="/ai" element={<EndoAI />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Hub",
      description:
        "Connect, collaborate, and create music with fellow artists. Share your work and discover new talent!",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Space",
      description:
        "A platform for visual artists, writers, and creators to showcase their work and find collaborators.",
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Endo Blockchain",
      description:
        "Secure your creative rights and earn from your work with our decentralized ecosystem.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "EndoAI",
      description:
        "Enhance your creative process with AI-powered tools designed for artists.",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ownership & Rights",
      description:
        "Maintain full control of your creative works with blockchain-verified ownership",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      description:
        "Join a supportive network of creators who help each other grow",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with creators and opportunities worldwide",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Access cutting-edge tools and technology to enhance your creative process",
    },
  ];

  return (
    <div className="text-white space-y-16">
      <section className="relative h-[90vh] mb-16 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVoZmIxZTBwc2F1ZTd4Y2hzcDFjdWZqbm1udDVhd29xZHVhMDk3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KMGq4B8xKr5Qz28CU6/giphy.gif)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-12 rounded-xl max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold text-blue-400 mb-6 animate-pulse [text-shadow:_0_0_30px_rgb(96_165_250_/_50%)]">
              ENDO
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              By Creators, For Creators
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto mb-10">
              Join the next generation of creative collaboration. Endo is your
              all-in-one platform to create, collaborate, and thrive in the
              digital age.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/creative"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Start Creating
              </Link>
              <Link
                to="/about"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-card p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="mb-4 text-purple-400">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-blue-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <section className="glass-card p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Why Choose Endo?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-blue-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

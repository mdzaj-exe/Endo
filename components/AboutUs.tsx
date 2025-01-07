import React from 'react';
import { Users, Target, Heart, Globe, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const AboutUs = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We believe in the power of creative communities and foster an environment where artists support each other."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of technology to provide creators with cutting-edge tools and opportunities."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Built by creators, for creators. We're passionate about empowering artistic expression."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Creating a worldwide ecosystem where creativity knows no borders."
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          About Endo
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          We're building the future of creative collaboration, where artists can freely express, 
          connect, and thrive in a decentralized ecosystem.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="glass-card p-8 rounded-xl text-center">
            <div className="inline-block p-4 rounded-lg bg-gradient-to-br from-purple-400/10 to-pink-500/10 text-purple-400 mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
            <p className="text-blue-200">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="glass-card p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
        <p className="text-blue-200 leading-relaxed mb-6">
          Founded in 2024, Endo emerged from a simple yet powerful idea: to create a space where artists 
          could truly own their creative journey. We recognized the challenges creators face in the digital age - 
          from protecting their work to finding meaningful collaborations.
        </p>
        <p className="text-blue-200 leading-relaxed">
          Today, we're proud to be building a platform that combines blockchain technology, AI capabilities, 
          and community-driven features to empower creators worldwide. Our mission is to democratize creative 
          expression and ensure artists can thrive in the digital economy.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <ContactForm />
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
          <div className="space-y-4">
            <a 
              href="mailto:endocollective.exe@gmail.com" 
              className="flex items-center gap-3 text-blue-200 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>endocollective.exe@gmail.com</span>
            </a>
            <a 
              href="tel:2028567680" 
              className="flex items-center gap-3 text-blue-200 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(202) 856-7680</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
import React from 'react';
import { Youtube, MessageSquare, Video, Share2, Twitter, Send, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      href: "https://www.youtube.com/@EndoCollective"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Discord",
      href: "https://discord.com/invite/vtWKAy4NxM"
    },
    {
      icon: <Video className="w-5 h-5" />,
      label: "TikTok",
      href: "https://www.tiktok.com/@endo.collective"
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      label: "Bluesky",
      href: "https://bsky.app/profile/endocollective.bsky.social"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "X",
      href: "https://x.com/collective_endo"
    },
    {
      icon: <Send className="w-5 h-5" />,
      label: "Telegram",
      href: "https://t.me/+8-8GR6fipaZiNmZh"
    }
  ];

  return (
    <footer className="glass mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-purple-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <a href="mailto:endocollective.exe@gmail.com" className="flex items-center gap-2 hover:text-purple-400">
              <Mail className="w-4 h-4" />
              endocollective.exe@gmail.com
            </a>
            <a href="tel:2028567680" className="flex items-center gap-2 hover:text-purple-400">
              <Phone className="w-4 h-4" />
              (202) 856-7680
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
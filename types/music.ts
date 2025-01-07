// Define types for the music-related data structures
export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  plays: number;
  genre: string;
  coverUrl: string;
  audioUrl: string; // In a real app, this would be a valid audio URL
  liked: boolean;
}

export interface Artist {
  id: string;
  name: string;
  followers: number;
  avatarUrl: string;
  genres: string[];
}

export interface Collaboration {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  genre: string;
  description: string;
  responses: number;
  createdAt: string;
}
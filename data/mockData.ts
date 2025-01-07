import { Track, Artist, Collaboration } from '../types/music';

// Mock data for development and testing
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Neon Dreams',
    artist: 'Cosmic Drift',
    duration: 225, // 3:45
    plays: 1200,
    genre: 'Electronic',
    coverUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
    audioUrl: 'https://example.com/audio/1.mp3', // Placeholder URL
    liked: false
  },
  {
    id: '2',
    title: 'Midnight Jazz',
    artist: 'Blue Note',
    duration: 260, // 4:20
    plays: 856,
    genre: 'Jazz',
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c',
    audioUrl: 'https://example.com/audio/2.mp3',
    liked: true
  },
  {
    id: '3',
    title: 'Urban Pulse',
    artist: 'City Beats',
    duration: 175, // 2:55
    plays: 2100,
    genre: 'Hip Hop',
    coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89',
    audioUrl: 'https://example.com/audio/3.mp3',
    liked: false
  }
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Cosmic Drift',
    followers: 1200,
    avatarUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    genres: ['Electronic', 'Ambient']
  },
  {
    id: '2',
    name: 'Blue Note',
    followers: 856,
    avatarUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    genres: ['Jazz', 'Blues']
  },
  {
    id: '3',
    name: 'City Beats',
    followers: 2100,
    avatarUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    genres: ['Hip Hop', 'Electronic']
  }
];

export const mockCollaborations: Collaboration[] = [
  {
    id: '1',
    title: 'Looking for vocalist',
    author: {
      id: '1',
      name: 'Producer X',
      avatarUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'
    },
    genre: 'Pop/Electronic',
    description: 'Need a vocalist for an upbeat electronic track. Demo available.',
    responses: 5,
    createdAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Guitarist needed for rock project',
    author: {
      id: '2',
      name: 'Band Y',
      avatarUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
    },
    genre: 'Rock',
    description: 'Seeking lead guitarist for upcoming album. Professional experience preferred.',
    responses: 3,
    createdAt: '2024-03-14T15:30:00Z'
  }
];
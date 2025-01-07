import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

// These would come from environment variables
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/callback`;

export const authorizeSpotify = () => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'streaming',
    'user-read-playback-state'
  ];

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join('%20')}&response_type=token`;
  
  window.location.href = authUrl;
};

export const setSpotifyToken = (token: string) => {
  spotifyApi.setAccessToken(token);
};

export const getSpotifyTracks = async () => {
  try {
    const response = await spotifyApi.getMyTopTracks();
    return response.items;
  } catch (error) {
    console.error('Error fetching Spotify tracks:', error);
    return [];
  }
};
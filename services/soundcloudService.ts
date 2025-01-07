import SoundCloudAudio from 'soundcloud-audio';

const CLIENT_ID = import.meta.env.VITE_SOUNDCLOUD_CLIENT_ID;
const soundcloudClient = new SoundCloudAudio(CLIENT_ID);

export const searchSoundCloudTracks = async (query: string) => {
  try {
    const tracks = await soundcloudClient.resolve(`https://api.soundcloud.com/tracks?q=${query}`);
    return tracks;
  } catch (error) {
    console.error('Error searching SoundCloud tracks:', error);
    return [];
  }
};

export const playSoundCloudTrack = (trackUrl: string) => {
  soundcloudClient.resolve(trackUrl, (track: any) => {
    soundcloudClient.play();
  });
};

export const pauseSoundCloudTrack = () => {
  soundcloudClient.pause();
};
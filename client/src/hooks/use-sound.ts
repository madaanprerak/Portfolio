import { useState, useEffect, useCallback } from 'react';

export function useSound(url: string, options?: { volume?: number; loop?: boolean; }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const audioElement = new Audio(url);
    audioElement.volume = options?.volume || 0.1;
    audioElement.loop = options?.loop || false;
    
    setAudio(audioElement);
    
    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, [url, options?.volume, options?.loop]);
  
  const play = useCallback(() => {
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  }, [audio]);
  
  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [audio]);
  
  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);
  
  return {
    play,
    pause,
    toggle,
    isPlaying
  };
}

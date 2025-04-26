import { useState, useCallback } from 'react';
import { journeyData } from '@/lib/journeyData';

export function useJourneyNavigation() {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  
  const nextCheckpoint = useCallback(() => {
    if (currentCheckpoint < journeyData.length - 1) {
      setCurrentCheckpoint(currentCheckpoint + 1);
    }
  }, [currentCheckpoint]);
  
  const prevCheckpoint = useCallback(() => {
    if (currentCheckpoint > 0) {
      setCurrentCheckpoint(currentCheckpoint - 1);
    }
  }, [currentCheckpoint]);
  
  return {
    currentCheckpoint,
    setCurrentCheckpoint,
    nextCheckpoint,
    prevCheckpoint,
    totalCheckpoints: journeyData.length
  };
}

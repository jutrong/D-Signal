import { useEffect } from 'react';
import { usePositionStore } from '@_store/currentPosition';

export const useCurrentPosition = () => {
  const setCurrentPosition = usePositionStore(
    (state) => state.setCurrentPosition,
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCurrentPosition({
          center: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
          address: '',
        });
      });
    }
  }, [setCurrentPosition]);
};

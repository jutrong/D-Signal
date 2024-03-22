import { useEffect } from 'react';
import { useMarkerStore } from '@_store/markers';
import { Toilet } from '@_types/toilet';
import { TMarker } from '@_types/marker';

/**
 * @description 화장실 데이터를 바탕으로 마커 상태를 설정하는 커스텀 훅
 * @param toiletData
 */
export const useMarkers = (toiletData: Toilet[]) => {
  const setMarkers = useMarkerStore((state) => state.setMarkers);

  useEffect(() => {
    if (toiletData) {
      const markers: TMarker[] = toiletData.map((data) => ({
        content: data.화장실명,
        position: {
          lat: data.WGS84위도,
          lng: data.WGS84경도,
        },
      }));
      setMarkers(markers);
    }
  }, [toiletData, setMarkers]);
};

import { usePositionStore } from '@_store/currentPosition';
import { useEffect } from 'react';

/**
 * @description 좌표를 주소로 변환하는 커스텀 훅
 * @param lat
 * @param lng
 */

export const useAddress = (lat: number, lng: number) => {
  const { setCurrentPosition } = usePositionStore();

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(lat, lng);

    const callback = (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const addressFullName = `${result[0].address.region_1depth_name} ${result[0].address.region_2depth_name} ${result[0].address.region_3depth_name}`;
        setCurrentPosition({
          center: { lat: lat, lng: lng },
          address: addressFullName,
        });
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [lat, lng, setCurrentPosition]);
};

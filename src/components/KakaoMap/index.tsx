import { useEffect } from 'react';
import axios from 'axios';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';
import { currentPositionState } from '@_recoil/atom/currentPosition';
import { useQuery } from '@tanstack/react-query';


declare global {
  interface Window {
    kakao: any;
  }
}



const KakaoMap = () => {
  // 현재 위치의 좌표값을 저장할 상태
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPositionState);

  const getToiletData = async () => {
    const { data } = await axios.get('/data/toilet.json');

    return data.toiletData.slice(0, 100);;
  }
  const { data: toiletData } = useQuery({
    queryKey: ['toiletData'],
    queryFn: getToiletData,
  });

  // 좌표 -> 주소 변환
  const getAddress = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(currentPosition.center.lat, currentPosition.center.lng);
    const callback = function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const addressFullName =
          result[0].address.region_1depth_name +
          ' ' +
          result[0].address.region_2depth_name +
          ' ' +
          result[0].address.region_3depth_name;
        setCurrentPosition((prevData) => ({ ...prevData, address: addressFullName }));
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };


  // GeoLocation을 이용해서 접속 위치를 얻어옴
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }));
      });
    }
    getAddress(currentPosition.center.lat, currentPosition.center.lng);
  }, []);

  return (
    <Map
      center={currentPosition.center}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapTypeControl position={'TOPRIGHT'} />
      <ZoomControl position={'RIGHT'} />
      <MapMarker
        position={currentPosition?.center}
      >
      </MapMarker>
    </Map>
  )
}

export default KakaoMap;
import { useEffect } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import EventMarkerContainer from './EventMarkerContainer';
import currentLocation from "@_assets/images/locaiton.webp"
import { Toilet } from '@_types/toilet';
import { TMarker } from '@_types/marker';
import { usePositionStore } from '@_store/currentPosition';
import { useMarkerStore } from '@_store/markers';

declare global {
  interface Window {
    kakao: any;
  }
}
type KakaoMapProps = {
  toiletData: Toilet[] | undefined;
}

const KakaoMap = ({ toiletData }: KakaoMapProps) => {
  // 현재 위치의 좌표값을 저장할 상태
  const { currentPosition, setCurrentPosition } = usePositionStore()
  const { markers, setMarkers } = useMarkerStore()

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
        setCurrentPosition({ center: { lat: lat, lng: lng }, address: addressFullName })
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };


  // GeoLocation을 이용해서 접속 위치를 얻어옴
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          address: currentPosition.address,
        });
      });
    }
  }, [currentPosition.address, setCurrentPosition]);

  // 현재 위치 좌표값 상태저장
  useEffect(() => {
    getAddress(currentPosition.center.lat, currentPosition.center.lng);
  }, [currentPosition.center.lat, currentPosition.center.lng])

  useEffect(() => {
    if (toiletData) {
      const markers = toiletData.map((data): TMarker => ({
        content: data.화장실명,
        position: {
          lat: data.WGS84위도,
          lng: data.WGS84경도,
        },
      }));
      setMarkers(markers);
    }
  }, [toiletData]);

  return (
    <Map
      center={currentPosition.center}
      style={{
        width: "70%",
        height: "100vh",
      }}
      level={3}
    >
      <MapTypeControl position={'TOPRIGHT'} />
      <ZoomControl position={'RIGHT'} />
      {currentPosition.isLoading ? (<>...Loding</>) :
        <MapMarker position={currentPosition.center}
          image={{
            src: currentLocation,
            size: {
              width: 30,
              height: 30,
            },

          }}
        >
        </MapMarker>
      }
      {
        markers?.map((marker: any, index: number) => (
          <EventMarkerContainer
            key={index}
            position={marker.position}
            content={marker.content}
          />
        ))
      }
    </Map >
  )
}

export default KakaoMap;
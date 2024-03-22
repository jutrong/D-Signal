import { useEffect } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import EventMarkerContainer from './EventMarkerContainer';
import currentLocation from "@_assets/images/locaiton.webp"
import { Toilet } from '@_types/toilet';
import { TMarker } from '@_types/marker';
import { usePositionStore } from '@_store/currentPosition';
import { useMarkerStore } from '@_store/markers';
import { useCurrentPosition } from '@_hooks/Map/useCurrentPosition';
import { useAddress } from '@_hooks/Map/useAddress';
import { useMarkers } from '@_hooks/Map/useMarkers';

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
  const { currentPosition } = usePositionStore();
  const { markers } = useMarkerStore();

  // 현재 위치를 가져오고 주소로 변환
  useCurrentPosition();
  useAddress(currentPosition.center.lat, currentPosition.center.lng);
  // 화장실 데이터를 바탕으로 마커 상태를 설정
  useMarkers(toiletData ?? []);

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
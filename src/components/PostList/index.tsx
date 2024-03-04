import Post from "@_components/Post";
import { Toilet } from "@_types/toilet";
import * as S from './PostList.styles'
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { markersState } from "@_recoil/atom/markers";
import { currentPositionState } from "@_recoil/atom/currentPosition";
import { TMarker } from "@_types/marker";
import { FixedSizeList as List } from 'react-window';

type KakaoMapProps = {
  toiletData: Toilet[] | undefined;
}
export type SortMarker = {
  id?: string;
  content: string;
  position: {
    lat: number;
    lng: number;
  };
  divisiton: string;
  toiletName: string;
  openTime: string;
  distance: number;

}

const Row = ({ index, style, data }: { index: number, style: React.CSSProperties, data: SortMarker[] }) => (
  <div style={style}>
    <Post data={data[index]} />
  </div>
);

const ListComponent = ({ toiletData }: KakaoMapProps) => {

  const currentPosition = useRecoilValue(currentPositionState);
  const [sortMarker, setSortMarker] = useState<SortMarker[]>()



  useEffect(() => {
    if (window.kakao && window.kakao.maps && currentPosition && toiletData) {
      const kakao = window.kakao;

      // 현재 위치와 화장실 위치를 나타내는 두 개의 LatLng 객체 생성 및 거리 계산
      const markersWithDistance = toiletData.map(data => {
        const currentLatLng = new kakao.maps.LatLng(currentPosition.center.lat, currentPosition.center.lng);
        const toiletLatLng = new kakao.maps.LatLng(data.WGS84위도, data.WGS84경도);
        // 두 지점을 연결하는 가상의 폴리라인 객체 생성
        const polyline = new kakao.maps.Polyline({
          path: [currentLatLng, toiletLatLng]
        });

        // 폴리라인 길이(거리) 계산
        const distance = polyline.getLength();

        return {
          id: data.id,
          content: data.화장실명,
          position: {
            lat: data.WGS84위도,
            lng: data.WGS84경도,
          },
          divisiton: data.구분,
          toiletName: data.화장실명,
          openTime: data.개방시간,
          distance: distance
        };
      });

      // 거리에 따라 정렬
      markersWithDistance.sort((a, b) => a.distance - b.distance);

      // Recoil 상태 업데이트
      setSortMarker(markersWithDistance);
    }
  }, [currentPosition, toiletData]);

  return (
    <List
      height={820}
      width={500}
      itemSize={120}
      itemCount={sortMarker?.length || 0}
      itemData={sortMarker}
    >
      {Row}
    </List >
  )
}


const PostList = ({ toiletData }: KakaoMapProps) => {
  return (
    <S.Wrap >
      <ListComponent toiletData={toiletData} />
      {/* {sortMarker?.map((data: SortMarker) => {
        return <Post data={data} />
      })} */}
    </S.Wrap>
  )
}

export default PostList;
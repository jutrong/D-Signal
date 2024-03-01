import { StaticMap } from 'react-kakao-maps-sdk'

type KakaoStaticMapProps = {
  lat: number;
  lng: number;
  toiletName?: string;
}

const KakaoStaticMap = ({ lat, lng, toiletName }: KakaoStaticMapProps) => {
  return (
    <StaticMap
      center={{
        lat: lat,
        lng: lng
      }}
      style={{
        width: "100%",
        height: "450px",
      }}
      marker={[
        {
          position: {
            lat: lat,
            lng: lng
          },
          text: toiletName
        }
      ]}
      level={3}
    />

  )
}

export default KakaoStaticMap;
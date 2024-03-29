import { useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';


const EventMarkerContainer = ({ position, content }: any) => {
  const map = useMap()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <MapMarker
      position={position}
      // @ts-ignore
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && <div>
        {content}</div>}
    </MapMarker>
  )
}

export default EventMarkerContainer;
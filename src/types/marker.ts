export type TMarker = {
  content: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type TMarkers = {
  markers: TMarker[];
};

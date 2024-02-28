import { TMarkers } from '@_types/marker';
import { Markers } from '@_types/toilet';
import { atom } from 'recoil';

export const markersState = atom<TMarkers>({
  key: 'markersState',
  default: {
    markers: [],
  },
});

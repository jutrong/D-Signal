import { TMarker } from '@_types/marker';
import { create } from 'zustand';

interface IMarkerStore {
  markers: TMarker[];
  setMarkers: (markers: TMarker[]) => void;
}

export const useMarkerStore = create<IMarkerStore>()((set) => ({
  markers: [],
  setMarkers: (markers: TMarker[]) => set(() => ({ markers })),
}));

import { create } from 'zustand';

interface ICurrentPositionStore {
  currentPosition: {
    center: { lat: number; lng: number };
    address: string;
    isLoading: boolean;
  };
  setCurrentPosition: ({
    center,
    address,
  }: {
    center: { lat: number; lng: number };
    address: string;
  }) => void;
}

export const usePositionStore = create<ICurrentPositionStore>()((set) => ({
  currentPosition: {
    center: { lat: 0, lng: 0 },
    address: '서울특별시 금천구',
    isLoading: true,
  },
  setCurrentPosition: ({
    center,
    address,
  }: {
    center: { lat: number; lng: number };
    address: string;
  }) =>
    set((state) => ({
      currentPosition: {
        ...state.currentPosition,
        center,
        address,
      },
    })),
}));

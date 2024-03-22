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
    isLoading,
  }: {
    center: { lat: number; lng: number };
    address: string;
    isLoading: boolean;
  }) => void;
}

export const usePositionStore = create<ICurrentPositionStore>()((set) => ({
  currentPosition: {
    center: { lat: 0, lng: 0 },
    address: '',
    isLoading: true,
  },
  setCurrentPosition: ({
    center,
    address,
    isLoading,
  }: {
    center: { lat: number; lng: number };
    address: string;
    isLoading: boolean;
  }) =>
    set((state) => ({
      currentPosition: {
        ...state.currentPosition,
        center,
        address,
        isLoading,
      },
    })),
}));

import { TCurrentPosition } from '@_types/currentPosition';
import { atom } from 'recoil';

export const currentPositionState = atom<TCurrentPosition>({
  key: 'currentPositionState',
  default: {
    center: { lat: 0, lng: 0 },
    address: '서울특별시 금천구',
    isLoading: true,
  },
});

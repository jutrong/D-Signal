import { atom, useSetRecoilState } from 'recoil';

export enum ModalName {
  signin,
}

type TModalState = {
  name: ModalName | null;
  isActive: boolean;
};

export const modalState = atom<TModalState>({
  key: 'modalState',
  default: {
    name: null,
    isActive: false,
  },
});

export const useCloseModal = () => {
  const setModal = useSetRecoilState(modalState);
  const closeModal = () => {
    setModal({ name: null, isActive: false });
  };

  return closeModal;
};

import { modalState } from '@_recoil/atom/modal';
import { useSetRecoilState } from 'recoil';

export const useCloseModal = () => {
  const setModal = useSetRecoilState(modalState);
  const closeModal = () => {
    setModal({ name: null, isActive: false });
  };

  return closeModal;
};

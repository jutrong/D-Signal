import { create } from 'zustand';

export enum ModalName {
  signin,
}

interface IModalState {
  name: ModalName | null;
  isActive: boolean;
}

interface IModalStore {
  modal: IModalState;
  setModal: (modal: IModalState) => void;
  closeModal: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  modal: {
    name: null,
    isActive: false,
  },
  setModal: (modal) =>
    set(() => ({
      modal,
    })),
  closeModal: () => set(() => ({ modal: { name: null, isActive: false } })),
}));

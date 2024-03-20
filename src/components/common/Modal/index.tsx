import { ReactNode } from "react";
import * as S from "./Modal.styles";
import Portal from "./Portal";
import { ModalName, useModalStore } from "@_store/modal";

type ModalProps = {
  children: ReactNode;
  name: ModalName;
}

/**
 * @param name 모달 이름
 */

const Modal = ({ children, name }: ModalProps) => {
  const { modal, closeModal } = useModalStore()
  // const { name: currentModalName, isActive } = useRecoilValue(modalState)

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget.firstChild) {
      closeModal();
    }
  };

  if (!modal.isActive || modal.name !== name) return null;

  return (
    <Portal>
      <S.Backdrop onClick={handleOuterClick}>
        <S.Container>
          <S.Content >
            {children}
          </S.Content>
        </S.Container>
      </S.Backdrop>
    </Portal>
  )
}
export default Modal;
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './Header.styles';
import { currentPositionState } from '@_recoil/atom/currentPosition';
import useUser from '@_hooks/auth/useUser';
import { ModalName, modalState } from '@_recoil/atom/modal';
import Modal from '../Modal';
import Signin from '@_components/Signin';

const Header = () => {
  const setModal = useSetRecoilState(modalState);
  const currentPosition = useRecoilValue(currentPositionState);
  const user = useUser()

  const onClickSignIn = () => {
    setModal({ name: ModalName.signin, isActive: true });
  }
  console.log(user, 'user')
  return (
    <>
      <Modal name={ModalName.signin} >
        <Signin />
      </Modal>
      <S.Wrap>
        <S.CurrentPositionWrap>
          <S.Where>현재 위치 : </S.Where>
          <S.Position>{currentPosition.address}</S.Position>
        </S.CurrentPositionWrap>
        {user ?
          <S.UserImg src={user?.photoURL} alt="유저 이미지" />
          :
          <S.Signin onClick={onClickSignIn}>Login</S.Signin>
        }

      </S.Wrap>
    </>
  )
}

export default Header;
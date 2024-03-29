import * as S from './Header.styles';
import Modal from '../Modal';
import Signin from '@_components/Signin';
import { usePositionStore } from '@_store/currentPosition';
import { useUserStore } from '@_store/user';
import { ModalName, useModalStore } from '@_store/modal';
import { useNavigate } from 'react-router-dom';

import Logo from '@_assets/images/logo.png'

const Header = () => {
  const navigate = useNavigate()
  const { setModal } = useModalStore()
  const { currentPosition } = usePositionStore()
  const { user } = useUserStore()

  const onClickSignIn = () => {
    setModal({ name: ModalName.signin, isActive: true });
  }
  const onClickUserImg = () => {
    navigate('/mypage')
  }
  const onClickLogo = () => {
    navigate('/')
  }
  return (
    <div style={{ position: 'relative' }}>
      <Modal name={ModalName.signin} >
        <Signin />
      </Modal>
      <S.Wrap>
        <S.LogoWrap onClick={onClickLogo} >
          <S.Logo src={Logo} alt="로고" />
        </S.LogoWrap>
        <S.CurrentPositionWrap>
          <S.Where>현재 위치 : </S.Where>
          <S.Position>{currentPosition.address}</S.Position>
        </S.CurrentPositionWrap>
        {user ?
          <S.UserImg src={user?.photoURL} alt="유저 이미지" onClick={onClickUserImg} />
          :
          <S.Signin onClick={onClickSignIn}>로그인</S.Signin>
        }

      </S.Wrap>
    </div>
  )
}

export default Header;
import { useRecoilValue } from 'recoil';
import * as S from './Header.styles';
import { currentPositionState } from '@_recoil/atom/currentPosition';

const Header = () => {
  const currentPosition = useRecoilValue(currentPositionState);
  return (
    <S.Wrap>
      <S.CurrentPositionWrap>
        <S.Where>현재 위치 : </S.Where>
        <S.Position>{currentPosition.address}</S.Position>
      </S.CurrentPositionWrap>
      <S.Login>Login</S.Login>
    </S.Wrap>)
}

export default Header;
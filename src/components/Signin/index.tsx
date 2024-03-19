import useGoogleSignin from '@_hooks/auth/useGoogleSignin';
import * as S from './Signin.styles'
import { useCloseModal } from '@_hooks/useCloseModal';

const Signin = () => {
  const { signin } = useGoogleSignin()
  const closeModal = useCloseModal();

  return (
    <>
      <S.HeaderWrap>
        <S.CloseBtn
          src="https://cdn1.iconfinder.com/data/icons/freeline/32/close_delete_remove_icon-1024.png"
          alt="취소버튼"
          onClick={closeModal} />
      </S.HeaderWrap>
      <S.Wrap>
        <S.WelcomeWrap>
          <S.WelcomeText>D-SIGNAL에 오신 것을 환영합니다.</S.WelcomeText>
        </S.WelcomeWrap>
        <S.ContentWrap onClick={signin}>
          <S.GoogleButton src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/google_search_new_logo-512.png" alt="구글로그인" />
          <S.GoogleText>구글 로그인</S.GoogleText>
        </S.ContentWrap>
      </S.Wrap>
    </>
  );
}

export default Signin;
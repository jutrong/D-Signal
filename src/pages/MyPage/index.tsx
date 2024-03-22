import useGoogleSignin from "@_hooks/Auth/useGoogleSignin";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const { signout } = useGoogleSignin();

  const onClickSignOut = () => {
    signout()
    navigate('/')
  }
  return (
    <>
      <button onClick={onClickSignOut}>로그아웃</button>
    </>
  )
}

export default MyPage;
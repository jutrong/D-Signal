import { Route, Routes } from 'react-router-dom';
import Home from '@_pages/Home';
import Login from '@_pages/Login';
import AuthGuard from '@_components/common/Auth/AuthGuard';
import PostDetail from '@_pages/PostDetail';
import MyPage from '@_pages/MyPage';


const Router = () => {
  return (
    <AuthGuard>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
      </Routes>
    </AuthGuard>

  )
}

export default Router;
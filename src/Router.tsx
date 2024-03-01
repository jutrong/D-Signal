import { Route, Routes } from 'react-router-dom';
import Home from '@_pages/Home';
import Login from '@_pages/Login';
import PostDetail from '@_pages/PostDetail';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/postdetail/:id" element={<PostDetail />} />
    </Routes>
  )
}

export default Router;
import { Route, Routes } from 'react-router-dom';
import Home from '@_pages/Home';
import Login from '@_pages/Login';


const Router = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}

export default Router;
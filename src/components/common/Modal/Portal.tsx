import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  // document.body = 모달이 마운트 될 엘리먼트. 루트 엘리먼트와 다른 곳이다.
  return ReactDOM.createPortal(children, document.body);
};

export default Portal;

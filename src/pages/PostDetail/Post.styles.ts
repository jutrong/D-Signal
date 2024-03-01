import styled from 'styled-components';
import { GrLinkPrevious } from 'react-icons/gr';

export const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid lightgray;
  padding: 120px 260px;
  display: flex;
  flex-direction: column;
`;
export const PrevBtnWrap = styled.div`
  display: flex;
`;
export const DataType = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: white;
  span {
    background-color: black;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12px;
  }
`;
export const PrevBtn = styled(GrLinkPrevious)`
  cursor: pointer;
`;
export const ToiletName = styled.div`
  font-size: 24px;
  margin: 0 auto;
`;
export const PostContentWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;
export const Right = styled.div`
  > div {
    display: flex;
    gap: 24px;
    > p:first-child {
      min-width: 120px;
    }
  }
  p {
    font-size: 18px;
    margin: 16px 0;
  }
`;
export const Left = styled.div`
  > div {
    display: flex;
    gap: 24px;
    > p:first-child {
      min-width: 120px;
    }
  }
  p {
    font-size: 18px;
    margin: 16px 0;
  }
`;
export const Line = styled.div`
  margin: 60px 0;
  width: 100%;
  height: 2px;
  background-color: lightgray;
`;

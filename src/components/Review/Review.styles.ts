import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 40px 100px;
  padding-top: 20px;
`;
export const ContentWrap = styled.div`
  border: 1px solid blue;
  padding: 0 50px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 20px 30px;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
export const Header = styled.div`
  font-size: 14px;
`;
export const CloseBtn = styled.img`
  width: 18px;
  height: 18px;
  margin: 10px;
  border-radius: 10%;
  cursor: pointer;
`;
export const InputWrap = styled.div`
  min-width: 320px;
`;
export const ReviewInput = styled.textarea`
  height: 100px;
`;
export const StarRatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
  font-size: 20px;
`;
export const ToiletPaperWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  font-size: 20px;
  div {
    display: flex;
  }
`;
export const BtnWrap = styled.button`
  width: 100%;
  margin-top: 16px;
`;

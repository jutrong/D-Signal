import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 30px 30px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  z-index: 100;
  background-color: white;
  width: 60%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const LogoWrap = styled.div`
  flex: 1;
  font-weight: 900;
  cursor: pointer;
  min-width: 80px;
  margin-left: 10px;
`;
export const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
export const CurrentPositionWrap = styled.div`
  flex: 15;
  font-size: 14px;
  font-weight: bold;
`;
export const Where = styled.span``;
export const Position = styled.span``;
export const Signin = styled.div`
  cursor: pointer;
  margin-right: 14px;
  font-weight: 900;
`;
export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const LogoWrap = styled.div`
  flex: 1;
  font-weight: 900;
  cursor: pointer;
  min-width: 100px;
`;
export const Logo = styled.p``;
export const CurrentPositionWrap = styled.div`
  flex: 8;
`;
export const Where = styled.span``;
export const Position = styled.span``;
export const Signin = styled.div`
  cursor: pointer;
`;
export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

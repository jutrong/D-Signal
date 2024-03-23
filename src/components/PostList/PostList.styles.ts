import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  z-index: 99;
  max-width: 300px;
  height: 70%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 50px 0 0 0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;
export const NoDataWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: crimson;
  font-size: 20px;
  font-weight: bold;
`;

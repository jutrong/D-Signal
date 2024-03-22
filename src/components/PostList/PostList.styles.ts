import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  z-index: 99;
  transform: translateY(-50%);
  max-width: 300px;
  height: 70%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 50px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;
export const NoDataWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: crimson;
  font-size: 24px;
  font-weight: bold;
`;

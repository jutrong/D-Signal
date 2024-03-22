import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    p {
      font-size: 12px;
      padding: 5px 0;
    }
  }
`;

export const Tag = styled.p`
  font-size: 10px;
  margin: 0 auto;
  padding: 4px 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const ContentWrap = styled.div``;
export const DivisionWrap = styled.div``;
export const Division = styled.p``;
export const DivisionText = styled.p``;

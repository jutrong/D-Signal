import styled from 'styled-components';

export const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 20px 10px;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }
  p {
    font-size: 12px;
    padding: 4px 0;
  }
`;

export const DivisionWrap = styled.div``;
export const Division = styled.p``;
export const DivisionText = styled.p``;

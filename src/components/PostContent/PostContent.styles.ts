import styled from 'styled-components';

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

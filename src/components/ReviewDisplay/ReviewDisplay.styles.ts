import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  min-width: 440px;
  padding-left: 20px;
  margin-top: 80px;
`;
export const ReviewWrap = styled.div`
  flex: 1;
  padding: 20px;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const Profile = styled.img`
  border-radius: 50%;
  width: 30px;
`;
export const UserName = styled.p`
  font-weight: 800;
`;
export const ReviewContent = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  height: 100px;
  overflow-y: scroll;
`;
